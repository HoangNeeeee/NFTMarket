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
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }