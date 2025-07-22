// next.config.js
// Simplified config for stable build

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Output configuration for deployment
  output: 'export',
  trailingSlash: false,
  
  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  
  // Image optimization for static export
  images: {
    unoptimized: true,
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
