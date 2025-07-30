
'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'

// Dynamic imports to prevent SSR issues
const MonacoEditor = dynamic(() => import('@/components/dynamic').then(mod => ({ default: mod.MonacoEditor })), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-900 rounded animate-pulse flex items-center justify-center text-green-400">Loading Editor...</div>
})

const QuantumVisualizer = dynamic(() => import('@/components/dynamic').then(mod => ({ default: mod.QuantumVisualizer })), {
  ssr: false,
  loading: () => <div className="h-96 bg-gradient-to-br from-purple-900 to-blue-900 rounded animate-pulse flex items-center justify-center text-cyan-400">Loading Quantum Tools...</div>
})

const BlockchainVisualizer = dynamic(() => import('@/components/dynamic').then(mod => ({ default: mod.BlockchainVisualizer })), {
  ssr: false,
  loading: () => <div className="h-72 bg-gradient-to-tr from-indigo-900 to-purple-900 rounded animate-pulse flex items-center justify-center text-violet-400">Loading Hybrid Blockchain...</div>
})

const AIDashboard = dynamic(() => import('@/components/dynamic').then(mod => ({ default: mod.AIDashboard })), {
  ssr: false,
  loading: () => <div className="h-56 bg-gradient-to-bl from-orange-900 to-red-900 rounded animate-pulse flex items-center justify-center text-amber-400">Loading AI Orchestrator...</div>
})

const TrustUnitGenerator = dynamic(() => import('@/components/dynamic').then(mod => ({ default: mod.TrustUnitGenerator })), {
  ssr: false,
  loading: () => <div className="h-64 bg-gradient-to-tl from-yellow-900 to-orange-900 rounded animate-pulse flex items-center justify-center text-yellow-400">Loading Trust Units...</div>
})

const MolecularAssembly = dynamic(() => import('@/components/dynamic').then(mod => ({ default: mod.MolecularAssembly })), {
  ssr: false,
  loading: () => <div className="h-80 bg-gradient-to-r from-green-900 to-teal-900 rounded animate-pulse flex items-center justify-center text-emerald-400">Loading Molecular Assembly...</div>
})

export default function SpiralIDEPage() {
  const [activeTab, setActiveTab] = useState('ide')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-blue-950">
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            SpiralScript Ecosystem IDE
          </h1>
          <p className="text-gray-300 text-lg">
            Advanced consciousness-aware development environment with quantum-enhanced blockchain integration
          </p>
        </div>

        {/* Main Interface */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-gray-800/50 border border-purple-500/20">
            <TabsTrigger value="ide" className="data-[state=active]:bg-purple-600">IDE</TabsTrigger>
            <TabsTrigger value="quantum" className="data-[state=active]:bg-blue-600">Quantum</TabsTrigger>
            <TabsTrigger value="blockchain" className="data-[state=active]:bg-indigo-600">Blockchain</TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-orange-600">AI</TabsTrigger>
            <TabsTrigger value="trust" className="data-[state=active]:bg-yellow-600">Trust</TabsTrigger>
            <TabsTrigger value="molecular" className="data-[state=active]:bg-green-600">Molecular</TabsTrigger>
          </TabsList>

          <TabsContent value="ide" className="mt-6">
            <Card className="bg-gray-900/50 border-purple-500/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-purple-400 mb-4">SpiralScript IDE</h2>
                <MonacoEditor />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quantum" className="mt-6">
            <Card className="bg-gray-900/50 border-blue-500/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Quantum Computing Tools</h2>
                <QuantumVisualizer />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blockchain" className="mt-6">
            <Card className="bg-gray-900/50 border-indigo-500/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-indigo-400 mb-4">Hybrid Blockchain Network</h2>
                <BlockchainVisualizer />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai" className="mt-6">
            <Card className="bg-gray-900/50 border-orange-500/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-orange-400 mb-4">AI Orchestrator</h2>
                <AIDashboard />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trust" className="mt-6">
            <Card className="bg-gray-900/50 border-yellow-500/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Trust Unit Generator</h2>
                <TrustUnitGenerator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="molecular" className="mt-6">
            <Card className="bg-gray-900/50 border-green-500/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Molecular Assembly</h2>
                <MolecularAssembly />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
