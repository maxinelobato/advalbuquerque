/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

{
  images: {
    formats: ['image/svg', 'image/webp', 'image/png'];
  }
}

module.exports = nextConfig;
