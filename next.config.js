// next.config.js - Fixed for GitHub Pages deployment
const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages configuration
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  
  // GitHub Pages asset prefix
  assetPrefix: isGitHubPages ? '/SpiralParserEngine/' : '',
  basePath: isGitHubPages ? '/SpiralParserEngine' : '',
  
  // Webpack configuration for quantum computing and ANTLR4
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Handle .g4 grammar files
    config.module.rules.push({
      test: /\.g4$/,
      use: 'raw-loader',
    });
    
    // Three.js optimization for quantum visualizations
    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm/controls/OrbitControls': 'three/examples/jsm/controls/OrbitControls.js',
      'three/examples/jsm/loaders/GLTFLoader': 'three/examples/jsm/loaders/GLTFLoader.js',
    };
    
    // Handle consciousness-aware modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    };
    
    // ANTLR4 TypeScript generation support
    config.module.rules.push({
      test: /\.ts$/,
      include: /generated/,
      use: 'ts-loader',
    });
    
    return config;
  },
  
  // Environment variables for quantum and AI integration
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
    QUANTUM_BACKEND: process.env.QUANTUM_BACKEND || 'simulator',
    AI_ORCHESTRATION: process.env.AI_ORCHESTRATION || 'enabled',
  },
  
  // PWA configuration
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: !isProd,
  },
  
  // Experimental features for consciousness-aware computing
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['antlr4ts'],
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig;
