import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['dd.dexscreener.com', 'cdn.dexscreener.com'],
},
};

export default nextConfig;
