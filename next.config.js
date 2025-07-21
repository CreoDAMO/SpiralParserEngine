/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  typescript: {
    // Re-enable strict mode for better type safety
    ignoreBuildErrors: false, // Remove temporary ignore
  },
  eslint: {
    dirs: ['app', 'components', 'lib'],
    ignoreDuringBuilds: false, // Remove temporary ignore
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config, { isServer, dev }) => {
    // Handle ANTLR4 and other dependencies
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    // Handle .g4 grammar files
    config.module.rules.push({
      test: /\.g4$/,
      use: 'raw-loader',
    });

    // Optimize three.js
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        three: 'three/build/three.module.js',
      };
    }

    // Production optimizations
    if (!dev) {
      // Enable tree shaking
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
      };

      // Optimize chunks
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        chunks: 'all',
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          ui: {
            test: /[\\/]components[\\/]ui[\\/]/,
            name: 'ui-components',
            priority: 20,
            reuseExistingChunk: true,
          },
          spiral: {
            test: /[\\/]components[\\/]spiral[\\/]/,
            name: 'spiral-components',
            priority: 30,
            reuseExistingChunk: true,
          },
        },
      };
    }

    return config;
  },
  transpilePackages: ['three', 'antlr4'],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
};

export default nextConfig;