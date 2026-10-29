import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    // Worker threads avoid child-process pipe restrictions in this environment.
    workerThreads: true,
    useTypeScriptCli: false,
    cpus: 2,
  },
};

export default nextConfig;
