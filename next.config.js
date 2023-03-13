/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = {
  compress: false,
  images: {
    formats: ['image/svg', 'image/webp', 'image/png'],
  },
};

module.exports = nextConfig;
