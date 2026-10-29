// Copies only the required cached npm packages into this writable project.
// Does not access the network or change the original cache.
const path = require('node:path');
const fs = require('node:fs/promises');
const { pipeline } = require('node:stream/promises');
const npmModules = path.join(process.env.ProgramFiles, 'nodejs/node_modules/npm/node_modules');
const cacache = require(path.join(npmModules, 'cacache'));
const semver = require(path.join(npmModules, 'semver'));
const source = path.join(process.env.LOCALAPPDATA, 'npm-cache/_cacache');
const target = path.resolve('.npm-cache/_cacache');
const seen = new Set();
const metadataSeen = new Map();
const prefix = 'make-fetch-happen:request-cache:';
let entries;

async function copyEntry(key, entry) {
  if (await cacache.get.info(target, key)) return;
  await pipeline(cacache.get.stream(source, key), cacache.put.stream(target, key, { metadata: entry.metadata, integrity: entry.integrity }));
}

async function prepare(name, range) {
  const identity = `${name}@${range}`;
  if (seen.has(identity)) return;
  seen.add(identity);
  const url = `https://registry.npmjs.org/${name.replace('/', '%2f')}`;
  const key = prefix + url;
  let manifest = metadataSeen.get(name);
  if (!manifest) {
    const entry = await cacache.get.info(source, key);
    if (!entry) throw new Error(`Uncached package metadata: ${name}`);
    const data = await cacache.get(source, key);
    const original = JSON.parse(data.data);
    const versions = Object.fromEntries(Object.entries(original.versions).filter(([, value]) => {
      if (!entries[prefix + value.dist?.tarball]) return false;
      return Object.entries(value.dependencies ?? {}).every(([dependency, dependencyRange]) => {
        if (!semver.valid(dependencyRange)) return true;
        const leaf = dependency.split('/').pop();
        return Boolean(entries[`${prefix}https://registry.npmjs.org/${dependency}/-/${leaf}-${dependencyRange}.tgz`]);
      });
    }));
    if (!Object.keys(versions).length) throw new Error(`No cached tarballs for ${name}`);
    manifest = { ...original, versions };
    const newest = semver.rsort(Object.keys(versions))[0];
    manifest['dist-tags'] = { latest: newest };
    metadataSeen.set(name, manifest);
    // Both npm JSON representations contain the same cached versions.
    const buffer = Buffer.from(JSON.stringify(manifest));
    await cacache.put(target, key, buffer, { metadata: entry.metadata });
    await cacache.put(target, key, buffer, {
      metadata: { ...entry.metadata, reqHeaders: { ...entry.metadata.reqHeaders, accept: 'application/vnd.npm.install-v1+json' } },
    });
  }
  const version = semver.maxSatisfying(Object.keys(manifest.versions), range);
  if (!version) throw new Error(`No cached metadata version for ${identity}`);
  const pkg = manifest.versions[version];
  if (pkg.os && !pkg.os.includes(process.platform) && !pkg.os.includes(`!${process.platform}`)) return;
  if (pkg.cpu && !pkg.cpu.includes(process.arch)) return;
  const tarKey = prefix + pkg.dist.tarball;
  const tarEntry = await cacache.get.info(source, tarKey);
  if (!tarEntry) throw new Error(`Uncached tarball: ${name}@${version}`);
  await copyEntry(tarKey, tarEntry);
  for (const [dependency, dependencyRange] of Object.entries({ ...pkg.dependencies, ...pkg.optionalDependencies, ...pkg.peerDependencies })) {
    if (pkg.peerDependenciesMeta?.[dependency]?.optional) continue;
    try { await prepare(dependency, dependencyRange); }
    catch (error) {
      if (pkg.optionalDependencies?.[dependency]) continue;
      throw error;
    }
  }
}

(async () => {
  const pkg = JSON.parse(await fs.readFile('package.json', 'utf8'));
  entries = await cacache.ls(source);
  for (const [name, range] of Object.entries({ ...pkg.dependencies, ...pkg.devDependencies })) await prepare(name, range);
  console.log(`Prepared ${metadataSeen.size} package records in the project-local offline cache.`);
})().catch(error => { console.error(error.message); process.exitCode = 1; });
