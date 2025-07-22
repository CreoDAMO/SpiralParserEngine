// next.config.js
// Temporarily disable PWA for static export
// import withPWA from 'next-pwa'

// const pwa = withPWA({
//   dest: 'public',
//   disable: process.env.NODE_ENV === 'development',
//   buildExcludes: [/middleware-manifest\.json$/],
//   maximumFileSizeToCacheInBytes: 5000000, // 5MB for quantum assets
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // GitHub Pages configuration
  output: 'export',
  trailingSlash: true,
  basePath: '/SpiralParserEngine',
  assetPrefix: '/SpiralParserEngine/',
  
  // Disable features not compatible with static export
  images: {
    unoptimized: true,
  },

  // Webpack configuration for SpiralScript IDE
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // ANTLR4 Grammar files (.g4) support
    config.module.rules.push({
      test: /\.g4$/,
      use: 'raw-loader',
    })

    // Three.js optimization for quantum visualizations
    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm/controls/OrbitControls': 'three/examples/jsm/controls/OrbitControls.js',
      'three/examples/jsm/loaders/GLTFLoader': 'three/examples/jsm/loaders/GLTFLoader.js',
      'three/examples/jsm/postprocessing/EffectComposer': 'three/examples/jsm/postprocessing/EffectComposer.js',
    }

    // Handle Node.js modules in browser environment
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      process: 'process/browser',
    }

    // Define global variables for browser compatibility
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      })
    )

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
  
  // Development configuration
  ...(process.env.NODE_ENV === 'development' && {
    devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-right',
    },
  }),
}

export default nextConfig
