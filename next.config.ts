import type { NextConfig } from "next";

// Use /portfolio prefix only when building for GitHub Pages (set by GitHub Actions)
const isProd = process.env.GITHUB_ACTIONS === "true";
const basePath = isProd ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // assetPrefix must match basePath so _next/static/ chunks resolve correctly on GitHub Pages.
  assetPrefix: basePath,
  // Expose basePath to client components so image srcs can be prefixed explicitly.
  // next/image with unoptimized:true in static export does NOT auto-prepend basePath.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
