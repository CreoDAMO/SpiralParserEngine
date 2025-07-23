const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    disableDevLogs: true,
    maximumFileSizeToCacheInBytes: 5000000,
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'spiral-cache',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 1000,
            maxAgeSeconds: 86400,
          },
        },
      },
    ],
  },
})

// ✅ GitHub Pages detection
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: 'export',
  basePath: isGithubPages ? '/SpiralParserEngine' : '',
  assetPrefix: isGithubPages ? '/SpiralParserEngine/' : '',

  experimental: {
    esmExternals: false,
    serverComponentsExternalPackages: ['antlr4ts', 'three'],
  },

  images: {
    domains: ['localhost', 'spiralscript.io', 'quantum-assets.com'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true, // Required for export
  },

  compress: true,
  poweredByHeader: false,

  env: {
    NEXT_PUBLIC_QUANTUM_BACKEND: process.env.QUANTUM_BACKEND,
    NEXT_PUBLIC_HYBRID_NETWORK: process.env.HYBRID_NETWORK,
    NEXT_PUBLIC_PWA_ENABLED: process.env.PWA_ENABLED,
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/SpiralParserEngine' : '',
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Service-Worker-Allowed', value: '/' },
        ],
      },
    ]
  },

  async rewrites() {
    return [
      { source: '/api/quantum/:path*', destination: '/api/quantum/:path*' },
      { source: '/api/ai/:path*', destination: '/api/ai/:path*' },
      { source: '/api/blockchain/:path*', destination: '/api/blockchain/:path*' },
    ]
  },

  webpack(config, { isServer, webpack }) {
    config.module.rules.push({
      test: /\.g4$/,
      use: 'raw-loader',
    })

    config.module.rules.push({
      test: /\.worker\.js$/,
      use: { loader: 'worker-loader' },
    })

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

    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm/controls/OrbitControls': 'three/examples/jsm/controls/OrbitControls.js',
      'three/examples/jsm/loaders/GLTFLoader': 'three/examples/jsm/loaders/GLTFLoader.js',
      'three/examples/jsm/postprocessing/EffectComposer': 'three/examples/jsm/postprocessing/EffectComposer.js',
    }

    if (!isServer) {
      config.externals = config.externals || []
      config.externals.push({
        'qiskit': 'qiskit',
        'quantum-circuit': 'quantum-circuit',
      })
    }

    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      })
    )

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
}

module.exports = withPWA(nextConfig)
