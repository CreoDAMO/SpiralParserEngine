import withPWA from '@ducanh2912/next-pwa';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  serverExternalPackages: ['antlr4ts', 'three'],
  images: {
    unoptimized: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // ANTLR4 Grammar files (.g4) support
    config.module.rules.push({
      test: /\.g4$/,
      use: 'raw-loader',
    });

    // Three.js optimization
    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm/controls/OrbitControls': 'three/examples/jsm/controls/OrbitControls.js',
      'three/examples/jsm/loaders/GLTFLoader': 'three/examples/jsm/loaders/GLTFLoader.js',
      'three/examples/jsm/postprocessing/EffectComposer': 'three/examples/jsm/postprocessing/EffectComposer.js',
    };

    // Handle Node.js modules
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
    };

    // Quantum computing support
    config.externals = config.externals || [];
    if (!isServer) {  
      config.externals.push({  
        'qiskit': 'qiskit',  
        'quantum-circuit': 'quantum-circuit',  
      })  
    }  

    // Define global variables
    config.plugins.push(  
      new webpack.ProvidePlugin({  
        Buffer: ['buffer', 'Buffer'],  
        process: 'process/browser',  
      })  
    )  

    // Optimization
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

    return config;
  },
  env: {
    NEXT_PUBLIC_QUANTUM_BACKEND: process.env.QUANTUM_BACKEND,
    NEXT_PUBLIC_HYBRID_NETWORK: process.env.HYBRID_NETWORK,
    NEXT_PUBLIC_PWA_ENABLED: process.env.PWA_ENABLED,
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  compress: true,
  poweredByHeader: false,
};

// Conditional development config
if (process.env.NODE_ENV === 'development') {
  nextConfig.devIndicators = {
    position: 'bottom-right',
  };
}

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})(nextConfig);
