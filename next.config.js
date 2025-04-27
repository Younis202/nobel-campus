/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Setting unoptimized to true to be compatible with export mode
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // تمكين تحسين الخطوط
  optimizeFonts: true,
  experimental: {
    // Simplified experimental features for better stability
    esmExternals: "loose",
    // Removed potentially unstable features
  },
  // Simplified webpack configuration for better performance
  webpack: (config, { dev, isServer }) => {
    // Optimize parallelism
    config.parallelism = 4;

    // Optimize watch options
    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 500,
    };

    // Enable filesystem cache for better performance
    config.cache = {
      type: "filesystem",
      buildDependencies: {
        config: [__filename],
      },
    };

    return config;
  },
  output: "export", // Re-enabled to generate static export files in the out directory
};

module.exports = nextConfig;
