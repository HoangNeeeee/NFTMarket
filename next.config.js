/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.imgflip.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn.animaapp.com'
        },
        {
          protocol: 'http',
          hostname: 'i.imgflip.com',
        }
      ] ,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  }