/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      domains: ["data:image"],
   },
};

module.exports = nextConfig;
