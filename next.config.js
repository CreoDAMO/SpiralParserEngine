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
experimental: {
esmExternals: false,
serverComponentsExternalPackages: ['antlr4ts', 'three'],
},

// PWA and mobile optimization
async headers() {
return [
{
source: '/(.*)',
headers: [
{
key: 'X-Content-Type-Options',
value: 'nosniff',
},
{
key: 'X-Frame-Options',
value: 'DENY',
},
{
key: 'X-XSS-Protection',
value: '1; mode=block',
},
// Service Worker headers for quantum sync
{
key: 'Service-Worker-Allowed',
value: '/',
},
],
},
]
},

// Webpack configuration for SpiralScript IDE
webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
// ANTLR4 Grammar files (.g4) support
config.module.rules.push({
test: /.g4$/,
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

// Image optimization for quantum visualizations
images: {
domains: ['localhost', 'spiralscript.io', 'quantum-assets.com'],
formats: ['image/webp', 'image/avif'],
},

// Environment variables for multi-AI integration
env: {
NEXT_PUBLIC_QUANTUM_BACKEND: process.env.QUANTUM_BACKEND,
NEXT_PUBLIC_HYBRID_NETWORK: process.env.HYBRID_NETWORK,
NEXT_PUBLIC_PWA_ENABLED: process.env.PWA_ENABLED,
},

// API routes configuration
async rewrites() {
return [
{
source: '/api/quantum/:path*',
destination: '/api/quantum/:path*',
},
{
source: '/api/ai/:path*',
destination: '/api/ai/:path*',
},
{
source: '/api/blockchain/:path*',
destination: '/api/blockchain/:path*',
},
]
},

// TypeScript configuration
typescript: {
tsconfigPath: './tsconfig.json',
},

// Output configuration for deployment
output: 'standalone',
trailingSlash: false,

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

// ==========================================
// Dynamic Component Imports Configuration
// ==========================================

// components/dynamic/index.ts
import dynamic from 'next/dynamic'

// Monaco Editor - SSR disabled
export const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
ssr: false,
loading: () => (
// Fixed Next.js configuration
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
};
<div className="text-green-400 text-lg animate-pulse">
Loading SpiralScript Editor...
</div>
</div>
),
})

// Quantum Circuit Visualizer - SSR disabled
export const QuantumVisualizer = dynamic(() => import('../quantum/QuantumVisualizer'), {
ssr: false,
loading: () => (
<div className="flex items-center justify-center h-96 bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg">
<div className="text-cyan-400 text-lg animate-pulse">
Initializing Quantum Circuits...
</div>
</div>
),
})

// Three.js Molecular Assembly - SSR disabled
export const MolecularAssembly = dynamic(() => import('../molecular/MolecularAssembly'), {
ssr: false,
loading: () => (
<div className="flex items-center justify-center h-80 bg-gradient-to-r from-green-900 to-teal-900 rounded-lg">
<div className="text-emerald-400 text-lg animate-pulse">
Assembling Molecular Structures...
</div>
</div>
),
})

// HYBRID Blockchain Visualizer - SSR disabled
export const BlockchainVisualizer = dynamic(() => import('../blockchain/BlockchainVisualizer'), {
ssr: false,
loading: () => (
<div className="flex items-center justify-center h-72 bg-gradient-to-tr from-indigo-900 to-purple-900 rounded-lg">
<div className="text-violet-400 text-lg animate-pulse">
Connecting to HYBRID Network...
</div>
</div>
),
})

// AI Multi-Model Dashboard - SSR disabled
export const AIDashboard = dynamic(() => import('../ai/AIDashboard'), {
ssr: false,
loading: () => (
<div className="flex items-center justify-center h-56 bg-gradient-to-bl from-orange-900 to-red-900 rounded-lg">
<div className="text-amber-400 text-lg animate-pulse">
Orchestrating AI Models...
</div>
</div>
),
})

// Trust Unit Generator - SSR disabled
export const TrustUnitGenerator = dynamic(() => import('../trust/TrustUnitGenerator'), {
ssr: false,
loading: () => (
<div className="flex items-center justify-center h-64 bg-gradient-to-tl from-yellow-900 to-orange-900 rounded-lg">
<div className="text-yellow-400 text-lg animate-pulse">
Calibrating φ-Harmonic Resonance...
</div>
</div>
),
})

// API routes are handled in the app/ directory structure

// TypeScript Configuration Updates
// ==========================================

// tsconfig.json additions
{
"compilerOptions": {
"target": "es2022",
"lib": ["dom", "dom.iterable", "es6", "es2022", "webworker"],
"allowJs": true,
"skipLibCheck": true,
"strict": true,
"forceConsistentCasingInFileNames": true,
"noEmit": true,
"esModuleInterop": true,
"module": "esnext",
"moduleResolution": "node",
"resolveJsonModule": true,
"isolatedModules": true,
"jsx": "preserve",
"incremental": true,
"plugins": [
{
"name": "next"
}
],
"baseUrl": ".",
"paths": {
"@/": ["./src/"],
"@/components/": ["./src/components/"],
"@/lib/": ["./src/lib/"],
"@/types/": ["./src/types/"],
"@/quantum/": ["./src/quantum/"],
"@/ai/": ["./src/ai/"],
"@/blockchain/": ["./src/blockchain/"]
},
"types": ["node", "webworker"]
},
"include": [
"next-env.d.ts",
"/*.ts",
"/.tsx",
"**/.g4",
".next/types/**/*.ts"
],
"exclude": ["node_modules"]
}

// ==========================================
// Service Worker Configuration
// ==========================================

// public/sw.js (Custom Service Worker for quantum sync)
const CACHE_NAME = 'spiral-ide-v1'
const urlsToCache = [
'/',
'/static/js/bundle.js',
'/static/css/main.css',
'/quantum-assets/',
'/ai-models/',
]

self.addEventListener('install', (event) => {
event.waitUntil(
caches.open(CACHE_NAME)
.then((cache) => cache.addAll(urlsToCache))
)
})

self.addEventListener('fetch', (event) => {
// Handle quantum operations with background sync
if (event.request.url.includes('/api/quantum/')) {
event.respondWith(
fetch(event.request).catch(() => {
// Queue for background sync when offline
return caches.match('/offline-quantum.html')
})
)
}

// Handle AI requests with caching
if (event.request.url.includes('/api/ai/')) {
event.respondWith(
caches.match(event.request).then((response) => {
return response || fetch(event.request)
})
)
}
})

// Background sync for quantum operations
self.addEventListener('sync', (event) => {
if (event.tag === 'quantum-sync') {
event.waitUntil(syncQuantumOperations())
}
})

async function syncQuantumOperations() {
// Process queued quantum operations when online
const queuedOps = await getQueuedQuantumOperations()
for (const op of queuedOps) {
await processQuantumOperation(op)
}
}

// ==========================================
// Package.json Scripts Update
// ==========================================

// Add these scripts to your package.json
/*
{
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint",
"type-check": "tsc --noEmit",
"build:pwa": "next build && next export",
"analyze": "ANALYZE=true next build",
"test:quantum": "jest --testPathPattern=quantum",
"test:ai": "jest --testPathPattern=ai",
"generate:languages": "node scripts/generate-languages.js",
"compile:grammar": "antlr4ts -visitor -listener grammar/SpiralScript.g4",
"postbuild": "next-sitemap"
}
}
*/

// Helper functions for quantum operations
async function processQuantumCircuit(config) {
// Implement quantum circuit processing with φ-harmonic calculations
const fidelity = calculateQuantumFidelity(config)
const coherence_time = calculateCoherenceTime(config)

return {
fidelity,
coherence_time,
result: await executeQuantumGates(config),
}
}

function routeToOptimalModel(task, preference) {
// AI model routing logic
const models = ['grok-3', 'claude-sonnet-4', 'deepseek-r3', 'gpt-4']
return selectOptimalModel(task, models, preference)
}

async function getHybridNetworkStatus() {
// HYBRID blockchain status
return {
transactions_per_second: 847,
uptime_percentage: 99.99,
active_validators: 127,
consensus_status: 'ACTIVE',
}
}