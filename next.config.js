// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages static export configuration
  output: 'export',
  basePath: '/SpiralParserEngine',
  assetPrefix: '/SpiralParserEngine/',
  trailingSlash: true,
  
  // Basic Next.js configuration
  reactStrictMode: true,
  
  // External packages for server components
  serverExternalPackages: ['antlr4ts', 'three'],

  // Webpack configuration for SpiralScript IDE
  webpack: (config, { webpack }) => {
    // ANTLR4 Grammar files (.g4) support
    config.module.rules.push({
      test: /\.g4$/,
      use: 'raw-loader',
    })

    // Handle Node.js modules in browser environment
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    }

    // Monaco Editor webpack configuration
    config.module.rules.push({
      test: /\.worker\.js$/,
      use: { loader: 'worker-loader' },
    })

    return config
  },

  // Image optimization (unoptimized for static export)
  images: {
    unoptimized: true,
  },

  // TypeScript configuration
  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  // Compression and optimization
  compress: true,
  poweredByHeader: false,
}

export default nextConfig
