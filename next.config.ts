import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sourcekart-cdn.binaryjash.workers.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
