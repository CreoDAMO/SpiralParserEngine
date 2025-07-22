// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages configuration
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },

  // Configure base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/SpiralParserEngine' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/SpiralParserEngine/' : '',

  reactStrictMode: true,
  serverExternalPackages: ['antlr4ts', 'three'],
  
  // TypeScript configuration
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  
  // Compression and optimization
  compress: true,
  poweredByHeader: false,
}

export default nextConfig

