// next.config.pages.mjs - GitHub Pages specific configuration
import withPWA from '@ducanh2912/next-pwa';

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  // Static export for GitHub Pages
  output: 'export',
  basePath: isGitHubPages ? '/SpiralParserEngine' : '',
  assetPrefix: isGitHubPages ? '/SpiralParserEngine/' : '',

  // Modern Next.js external packages configuration
  serverExternalPackages: ['antlr4ts', 'antlr4', 'three'],

  // Image optimization disabled for static export
  images: {
    unoptimized: true,
  },

  // TypeScript and ESLint configuration for GitHub Pages
  typescript: {
    ignoreBuildErrors: true, // Allow build even with type errors
  },

  eslint: {
    ignoreDuringBuilds: true, // Allow build even with lint errors
  },

  // Webpack configuration optimized for static export
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

    // Enhanced fallbacks for static export
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
      path: 'path-browserify',
      os: false,
      child_process: false,
    };

    // Browser-only externals for static export
    if (!isServer) {  
      config.externals = config.externals || [];
      config.externals.push({  
        'qiskit': 'qiskit',  
        'quantum-circuit': 'quantum-circuit',
        'antlr4': 'antlr4'
      });
    }  

    // Global variables for browser compatibility  
    config.plugins.push(  
      new webpack.ProvidePlugin({  
        Buffer: ['buffer', 'Buffer'],  
        process: 'process/browser',
      })  
    );

    // Optimized code splitting for static export
    config.optimization = {  
      ...config.optimization,  
      splitChunks: {  
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {  
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
          quantum: {  
            name: 'quantum',  
            test: /[\\/]node_modules[\\/](three|@monaco-editor|antlr4ts|antlr4)/,  
            priority: 20,
            chunks: 'all',
          },  
          ai: {  
            name: 'ai-models',  
            test: /[\\/]node_modules[\\/](openai|@anthropic|groq)/,  
            priority: 15,
            chunks: 'all',
          },  
          spiral: {
            name: 'spiral-core',
            test: /[\\/](components|lib|src)[\\/]/,
            priority: 30,
            chunks: 'all',
          }
        },  
      },  
    };

    return config;
  },

  // Environment variables for GitHub Pages
  env: {
    NEXT_PUBLIC_QUANTUM_BACKEND: process.env.QUANTUM_BACKEND || 'browser',
    NEXT_PUBLIC_HYBRID_NETWORK: process.env.HYBRID_NETWORK || 'static',
    NEXT_PUBLIC_PWA_ENABLED: 'false', // Disable PWA for GitHub Pages
    NEXT_PUBLIC_GITHUB_PAGES: 'true',
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? '/SpiralParserEngine' : '',
  },

  // Disable compression for static export
  compress: false,
  poweredByHeader: false,

  // Disable server-side features for static export
  generateBuildId: () => 'spiral-build-' + Date.now(),
};

// Disable PWA for GitHub Pages static export
export default isProd && isGitHubPages ? nextConfig : withPWA({
  dest: 'public',
  disable: true, // Always disabled for GitHub Pages
  register: false,
  skipWaiting: false,
})(nextConfig);