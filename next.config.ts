import type { NextConfig } from "next";

// Use /portfolio prefix only when building for GitHub Pages (set by GitHub Actions)
const isProd = process.env.GITHUB_ACTIONS === "true";
const basePath = isProd ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // assetPrefix must match basePath so _next/static/ chunks and images
  // resolve to the correct sub-path on GitHub Pages.
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
