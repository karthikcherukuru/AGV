// Supported Next.js programmatic startup avoids the CLI's extra process fork.
// This serves the same App Router application and includes hot reloading.
import { createServer } from "node:http";
import next from "next";

const hostname = "127.0.0.1";
let port = 3000;
let handle;
let markReady;
const ready = new Promise(resolve => { markReady = resolve; });
const server = createServer((request, response) => {
  ready.then(() => handle(request, response)).catch(error => {
    console.error(error);
    if (!response.headersSent) response.writeHead(500);
    response.end("Unable to render this page.");
  });
});
await new Promise((resolve, reject) => {
  function onError(error) {
    if (port === 3000 && ["EACCES", "EADDRINUSE"].includes(error.code)) {
      console.log(`Port 3000 unavailable (${error.code}); selecting a free local port.`);
      port = 0;
      server.listen(0, hostname);
    } else reject(error);
  }
  server.on("error", onError);
  server.once("listening", () => { server.removeListener("error", onError); resolve(); });
  server.listen(port, hostname);
});
port = server.address().port;
const app = next({ dev: true, hostname, port, httpServer: server, turbopack: true });
handle = app.getRequestHandler();
await app.prepare();
server.on("upgrade", app.getUpgradeHandler());
server.on("error", error => { console.error(error); process.exitCode = 1; });
markReady();
console.log(`AGV development preview: http://${hostname}:${port}`);

async function shutdown() {
  server.close();
  await app.close();
  process.exit(0);
}
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
