/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Temporarily ignore build errors
  },
  eslint: {
    dirs: ['app', 'components', 'lib'],
    ignoreDuringBuilds: true, // Temporarily ignore eslint during builds
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config, { isServer }) => {
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
};

export default nextConfig;