// next.config.js
const withPWA = require('@ducanh2912/next-pwa').default

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,

  experimental: {
    esmExternals: false,
    serverComponentsExternalPackages: ['antlr4ts', 'three'],
  },

  env: {
    NEXT_PUBLIC_QUANTUM_BACKEND: process.env.QUANTUM_BACKEND,
    NEXT_PUBLIC_HYBRID_NETWORK: process.env.HYBRID_NETWORK,
    NEXT_PUBLIC_PWA_ENABLED: process.env.PWA_ENABLED,
  },

  typescript: {
    tsconfigPath: './tsconfig.json',
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

  images: {
    domains: ['localhost', 'spiralscript.io', 'quantum-assets.com'],
    formats: ['image/webp', 'image/avif'],
  },

  webpack(config, { isServer, webpack }) {
    config.module.rules.push({
      test: /\.g4$/,
      use: 'raw-loader',
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm/controls/OrbitControls': 'three/examples/jsm/controls/OrbitControls.js',
      'three/examples/jsm/loaders/GLTFLoader': 'three/examples/jsm/loaders/GLTFLoader.js',
    }

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

    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      })
    )

    return config
  },
}

// ✅ Apply PWA plugin AFTER base config is complete
module.exports = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  workboxOptions: {
    disableDevLogs: true,
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'spiral-cache',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 1000,
            maxAgeSeconds: 60 * 60 * 24,
          },
        },
      },
    ],
  },
})(baseConfig)
