/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages deployment configuration
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/SpiralParserEngine' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/SpiralParserEngine/' : '',
  
  // Basic Next.js configuration
  reactStrictMode: true,
  
  // Disable server-side features for static export
  images: {
    unoptimized: true,
  },
  
  // Webpack configuration for grammar files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.g4$/,
      use: 'raw-loader',
    });

    return config;
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/SpiralParserEngine' : '',
  },
};

export default nextConfig;
