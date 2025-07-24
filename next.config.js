// next.config.js
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    disableDevLogs: true,
    maximumFileSizeToCacheInBytes: 5000000, // 5MB for quantum assets
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'spiral-cache',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 1000,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          },
        },
      },
    ],
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/SpiralParserEngine' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/SpiralParserEngine/' : '',

  experimental: {
    esmExternals: false,
    serverComponentsExternalPackages: ['antlr4ts', 'three'],
  },

  // Image optimization for static export
  images: {
    unoptimized: true,
    domains: ['localhost', 'spiralscript.io', 'quantum-assets.com'],
    formats: ['image/webp', 'image/avif'],
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
      crypto: require.resolve('crypto-browserify'),  
      stream: require.resolve('stream-browserify'),  
      util: require.resolve('util'),  
      buffer: require.resolve('buffer'),  
      process: require.resolve('process/browser'),  
    }  

    // Monaco Editor webpack configuration  
    config.module.rules.push({  
      test: /\.worker\.js$/,  
      use: { loader: 'worker-loader' },  
    })  

    // Quantum computing libraries support  
    config.externals = config.externals || []  
    if (!isServer) {  
      config.externals.push({  
        'qiskit': 'qiskit',  
        'quantum-circuit': 'quantum-circuit',  
      })  
    }  

    // Define global variables for browser compatibility  
    config.plugins.push(  
      new webpack.ProvidePlugin({  
        Buffer: ['buffer', 'Buffer'],  
        process: 'process/browser',  
      })  
    )  

    // Optimize for quantum operations  
    config.optimization = {  
      ...config.optimization,  
      splitChunks: {  
        chunks: 'all',  
        cacheGroups: {  
          quantum: {  
            name: 'quantum',  
            test: /[\\/]node_modules[\\/](three|@monaco-editor|antlr4ts)/,  
            priority: 20,  
          },  
          ai: {  
            name: 'ai-models',  
            test: /[\\/]node_modules[\\/](openai|@anthropic|groq)/,  
            priority: 15,  
          },  
          blockchain: {  
            name: 'blockchain',  
            test: /[\\/]node_modules[\\/](web3|ethers|@solana)/,  
            priority: 10,  
          },  
        },  
      },  
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

module.exports = withPWA(nextConfig)