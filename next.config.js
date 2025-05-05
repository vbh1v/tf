/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.imgur.com']
  },
  output: "standalone",
  distDir: ".next",
  typescript: {
    ignoreBuildErrors: true
  }
};
module.exports = nextConfig;

//distDir: process.env.NODE_ENV === "production" ? ".next-prod" : ".next",