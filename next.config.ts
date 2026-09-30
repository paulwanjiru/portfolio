import type { NextConfig } from "next";
basePath: "/portfolio"

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
