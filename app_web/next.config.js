/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  assetPrefix: '', // Use relative paths for assets to support both www and non-www
};

module.exports = nextConfig; 
