import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: false,
    domains: ["porettocristian.it", "www.porettocristian.it"],
  },
};

export default nextConfig;
