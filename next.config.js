/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  optimizeFonts: false,
  experimental: {
    webpackBuildWorker: false
  }
};

module.exports = nextConfig;