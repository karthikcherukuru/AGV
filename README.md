# AGV Phase 01

Unofficial AGV portfolio wireframe, implemented from `AGV_SELF_CONTAINED_WIREFRAME_CODEX.md`. The older master prompt remains preserved and is superseded.

## Local preview

From PowerShell in this directory:

```powershell
npm run dev
```

Open the URL printed by the launcher in Chrome. It prefers **http://127.0.0.1:3000** and selects a free local port if Windows denies or occupies that port. This session is serving at **http://127.0.0.1:12379**. The application uses Next.js App Router, TypeScript, React, Tailwind CSS v4, and Lucide React. It has no external font, image, backend or environment-variable dependency.

`npm run dev` uses Next.js's supported programmatic startup because the standard development CLI's process fork is blocked in this Windows environment. `npm run dev:standard` retains the standard CLI for other environments. If npm's shell wrapper is restricted, run `node scripts/dev-server.mjs` directly from PowerShell.

## Checks

```powershell
npm run typecheck
npm run lint
npm run build
npm run test:browser
```

The browser check uses the installed Chrome through Playwright. Start the local server first. If the port differs from 3000, set `$env:AGV_BASE_URL = 'http://127.0.0.1:12379'` to the printed URL before the browser command. The script is configured to test 360, 375, 390, 430, 768, 1024, 1440, and 1920px widths, save full-page screenshots, and verify navigation, keyboard focus, scroll lock, gallery, FAQ, CTA anchors and reduced motion. Results live in `screenshots/phase-01/verification-results.json`.

In the current restricted agent environment, Chrome automation is blocked by `browserType.launch: spawn EPERM`; a native Chrome launch also failed with Windows IPC `Access is denied. (0x5)`. No screenshots or browser viewport/interaction checks have been completed. The implementation, TypeScript, ESLint, production build and local HTTP/assets checks are available for review. Open the preview manually in Chrome; use DevTools device mode for the listed widths.

## Page structure

- Header and hero: separate oversized wordmark, top-right notch, bottom-left inset.
- About: title, shallow media, paragraph and joined CTA.
- Gallery: four horizontal mobile thumbnails; vertical desktop rail.
- Features: mobile rider then compact banner; desktop product left and rider right.
- Spotlight: near-black cover, inset media and lower-right CTA.
- FAQ: /03 selected initially; separate answer area and five compact rows.
- Footer: oversized wordmark, Explore/Follow links and back to top.

Copy and gallery/FAQ data are in `src/data/siteContent.ts`. Geometry, colors, typography, and responsive tokens are in `src/app/globals.css`. Only navigation, gallery and FAQ require client components. Media placeholders intentionally remain static grayscale frames.

## Installation in this environment

The environment enforces offline npm use. Required cached packages were copied to a project-local writable cache without changing the original cache or sandbox settings. The recovery helper is Windows-specific:

```powershell
node scripts/prepare-offline-cache.cjs
npm install --offline --ignore-scripts --no-audit --no-fund --update-notifier=false --cache .npm-cache --logs-dir .npm-cache/_logs
```

On a normal connected machine, use `npm ci` with the committed lockfile instead. `.npm-cache`, `node_modules`, and `.next` are generated and ignored.

## References

- Layout source: `AGV_SELF_CONTAINED_WIREFRAME_CODEX.md` (all design decisions).
- [Next.js manual setup](https://nextjs.org/docs/app/getting-started/installation).
- [Next.js programmatic server startup](https://nextjs.org/docs/app/guides/custom-server).
- [Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs).
- [Playwright browser channels](https://playwright.dev/docs/browsers).
- Social destinations verified in the [official AGV footer](https://www.agv.com/us/en/); no product claims or imagery were sourced.

This is a structural concept, not an official AGV site. The final Neo-Racing art direction is reserved for a later phase.
