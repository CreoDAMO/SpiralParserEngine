// next.config.mjs
import withPWA from '@ducanh2912/next-pwa';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  // Modern Next.js external packages configuration
  serverExternalPackages: ['antlr4ts', 'antlr4', 'three'],

  // Image optimization
  images: {
    unoptimized: true,
  },

  // Static export configuration for GitHub Pages
  output: process.env.GITHUB_PAGES ? 'export' : undefined,
  basePath: process.env.GITHUB_PAGES ? '/SpiralParserEngine' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/SpiralParserEngine/' : '',

  // Webpack configuration for SpiralScript IDE
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // ANTLR4 Grammar files (.g4) support
    config.module.rules.push({
      test: /\.g4$/,
      use: 'raw-loader',
    });

    // Three.js optimization for quantum visualizations
    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm/controls/OrbitControls': 'three/examples/jsm/controls/OrbitControls.js',
      'three/examples/jsm/loaders/GLTFLoader': 'three/examples/jsm/loaders/GLTFLoader.js',
      'three/examples/jsm/postprocessing/EffectComposer': 'three/examples/jsm/postprocessing/EffectComposer.js',
    };

    // Handle Node.js modules in browser environment
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      util: 'util',
      buffer: 'buffer',
      process: 'process/browser',
    };

    // Quantum computing libraries support
    config.externals = config.externals || [];
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

    // Optimize for quantum operations with modern code splitting
    config.optimization = {  
      ...config.optimization,  
      splitChunks: {  
        chunks: 'all',  
        cacheGroups: {  
          quantum: {  
            name: 'quantum',  
            test: /[\\/]node_modules[\\/](three|@monaco-editor|antlr4ts|antlr4)/,  
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
    NEXT_PUBLIC_GITHUB_PAGES: process.env.GITHUB_PAGES,
  },

  // TypeScript configuration
  typescript: {
    tsconfigPath: './tsconfig.json',
    ignoreBuildErrors: process.env.GITHUB_PAGES === 'true', // Allow build on GitHub Pages even with type errors
  },

  // Modern ESLint configuration
  eslint: {
    ignoreDuringBuilds: process.env.GITHUB_PAGES === 'true', // Allow build on GitHub Pages even with lint errors
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
};

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})(nextConfig);