
// components/dynamic/index.ts
import dynamic from 'next/dynamic'

// Monaco Editor - SSR disabled
export const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-gray-900 rounded-lg">
      <div className="text-green-400 text-lg animate-pulse">
        Loading SpiralScript Editor...
      </div>
    </div>
  ),
})

// Quantum Circuit Visualizer - SSR disabled  
export const QuantumVisualizer = dynamic(() => import('../spiral/quantum-tools'), {
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
export const MolecularAssembly = dynamic(() => import('../spiral/enhanced-molecular-assembly'), {
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
export const BlockchainVisualizer = dynamic(() => import('../spiral/hybrid-blockchain-viewer'), {
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
export const AIDashboard = dynamic(() => import('../spiral/comprehensive-ai-orchestrator'), {
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
export const TrustUnitGenerator = dynamic(() => import('../spiral/trust-wallet'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-gradient-to-tl from-yellow-900 to-orange-900 rounded-lg">
      <div className="text-yellow-400 text-lg animate-pulse">
        Calibrating φ-Harmonic Resonance...
      </div>
    </div>
  ),
})
