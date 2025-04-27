import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['dd.dexscreener.com', 'cdn.dexscreener.com'],
  },
};


const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
