
'use client'

import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const SpiralOneDashboard = dynamic(() => import('../../client/src/components/SpiralOneDashboard'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-900 rounded animate-pulse flex items-center justify-center text-purple-400">Loading SpiralOne Dashboard...</div>
})

const SpiralGenesisDashboard = dynamic(() => import('../../client/src/components/spiral/spiral-genesis-dashboard'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-900 rounded animate-pulse flex items-center justify-center text-blue-400">Loading Genesis NFT Dashboard...</div>
})

const SpiralFlowDashboard = dynamic(() => import('../../client/src/components/spiral/spiral-flow-dashboard'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-900 rounded animate-pulse flex items-center justify-center text-green-400">Loading SpiralFlow Dashboard...</div>
})

export default function SpiralOnePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-blue-950">
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            SpiralOne Ecosystem
          </h1>
          <p className="text-gray-300 text-lg">
            Unified dashboard for SpiralGenesis NFTs, SpiralFlow fintech, and ecosystem management
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 border border-purple-500/20">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-purple-600">Dashboard</TabsTrigger>
            <TabsTrigger value="genesis" className="data-[state=active]:bg-blue-600">SpiralGenesis</TabsTrigger>
            <TabsTrigger value="flow" className="data-[state=active]:bg-green-600">SpiralFlow</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            <Card className="bg-gray-900/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400">SpiralOne Core Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <SpiralOneDashboard />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="genesis" className="mt-6">
            <Card className="bg-gray-900/50 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-400">SpiralGenesis145 NFT Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <SpiralGenesisDashboard />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="flow" className="mt-6">
            <Card className="bg-gray-900/50 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400">SpiralFlow Fintech Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <SpiralFlowDashboard />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
