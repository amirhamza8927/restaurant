import path from "path";
import { fileURLToPath } from "url";
import type { NextConfig } from "next";

// Pin Turbopack to this app folder so resolution and file watching don't walk
// up to a parent directory (e.g. D:\GitHub), which is slow and can break imports.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  experimental: {
    // Heavy disk writes while serving can freeze low-RAM / HDD machines; dev is
    // snappier without persisting Turbopack's filesystem cache.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
