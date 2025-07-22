// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration for GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  reactStrictMode: true,
  serverExternalPackages: ['antlr4ts', 'three'],
  
  // Webpack configuration for SpiralScript IDE
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
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
      crypto: false,
      stream: false,
      util: false,
      buffer: false,
      process: false,
    }

    return config
  },

  // Environment variables for multi-AI integration
  env: {
    NEXT_PUBLIC_QUANTUM_BACKEND: process.env.QUANTUM_BACKEND,
    NEXT_PUBLIC_HYBRID_NETWORK: process.env.HYBRID_NETWORK,
    NEXT_PUBLIC_PWA_ENABLED: process.env.PWA_ENABLED,
  },

  // TypeScript configuration
  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  
  // Development configuration
  ...(process.env.NODE_ENV === 'development' && {
    devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-right',
    },
  }),
}

export default nextConfig
