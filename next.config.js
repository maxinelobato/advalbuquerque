/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
