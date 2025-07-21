'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { Blocks, Zap, Clock, Hash, TrendingUp, DollarSign, Users, Activity } from 'lucide-react'

interface Block {
  id: string
  height: number
  hash: string
  timestamp: Date
  transactions: number
  truUnits: number
  phiRatio: number
  miner: string
  size: number
}

interface Transaction {
  id: string
  from: string
  to: string
  amount: number
  truUnits: number
  timestamp: Date
  blockHeight: number
  status: 'confirmed' | 'pending' | 'failed'
}

interface BlockchainStats {
  totalBlocks: number
  totalTransactions: number
  hashRate: string
  difficulty: number
  blockTime: number
  networkNodes: number
  truCirculation: number
  phiOptimization: number
}

export function BlockchainVisualization() {
  const [blocks, setBlocks] = useState<Block[]>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [stats, setStats] = useState<BlockchainStats>({
    totalBlocks: 1618034,
    totalTransactions: 8429512,
    hashRate: '1.2 TH/s',
    difficulty: 42.618,
    blockTime: 8.5,
    networkNodes: 127,
    truCirculation: 750000,
    phiOptimization: 99.7
  })
  const [selectedBlock, setSelectedBlock] = useState<Block | null>(null)

  // Generate initial blocks
  useEffect(() => {
    const initialBlocks: Block[] = []
    for (let i = 0; i < 10; i++) {
      initialBlocks.push({
        id: `block_${1618034 - i}`,
        height: 1618034 - i,
        hash: generateHash(),
        timestamp: new Date(Date.now() - i * 8500),
        transactions: Math.floor(Math.random() * 50) + 10,
        truUnits: Math.floor(Math.random() * 1000) + 100,
        phiRatio: 1.618 + (Math.random() - 0.5) * 0.001,
        miner: `Miner_${Math.floor(Math.random() * 100)}`,
        size: Math.floor(Math.random() * 500) + 250
      })
    }
    setBlocks(initialBlocks)

    // Generate initial transactions
    const initialTransactions: Transaction[] = []
    for (let i = 0; i < 20; i++) {
      initialTransactions.push({
        id: `tx_${generateHash().slice(0, 8)}`,
        from: generateAddress(),
        to: generateAddress(),
        amount: Math.random() * 100,
        truUnits: Math.random() * 50,
        timestamp: new Date(Date.now() - i * 2000),
        blockHeight: 1618034 - Math.floor(i / 3),
        status: Math.random() > 0.1 ? 'confirmed' : 'pending'
      })
    }
    setTransactions(initialTransactions)
  }, [])

  // Simulate real-time blockchain activity
  useEffect(() => {
    const interval = setInterval(() => {
      // Add new block occasionally
      if (Math.random() > 0.85) {
        const newBlock: Block = {
          id: `block_${stats.totalBlocks + 1}`,
          height: stats.totalBlocks + 1,
          hash: generateHash(),
          timestamp: new Date(),
          transactions: Math.floor(Math.random() * 50) + 10,
          truUnits: Math.floor(Math.random() * 1000) + 100,
          phiRatio: 1.618 + (Math.random() - 0.5) * 0.001,
          miner: `Miner_${Math.floor(Math.random() * 100)}`,
          size: Math.floor(Math.random() * 500) + 250
        }

        setBlocks(prev => [newBlock, ...prev.slice(0, 9)])
        setStats(prev => ({
          ...prev,
          totalBlocks: prev.totalBlocks + 1,
          totalTransactions: prev.totalTransactions + newBlock.transactions
        }))
      }

      // Add new transaction
      if (Math.random() > 0.3) {
        const newTransaction: Transaction = {
          id: `tx_${generateHash().slice(0, 8)}`,
          from: generateAddress(),
          to: generateAddress(),
          amount: Math.random() * 100,
          truUnits: Math.random() * 50,
          timestamp: new Date(),
          blockHeight: stats.totalBlocks,
          status: 'pending'
        }

        setTransactions(prev => [newTransaction, ...prev.slice(0, 19)])
      }

      // Update stats
      setStats(prev => ({
        ...prev,
        hashRate: `${(1.2 + (Math.random() - 0.5) * 0.2).toFixed(1)} TH/s`,
        difficulty: Math.max(40, Math.min(45, prev.difficulty + (Math.random() - 0.5) * 0.1)),
        blockTime: Math.max(7, Math.min(10, prev.blockTime + (Math.random() - 0.5) * 0.2)),
        networkNodes: prev.networkNodes + (Math.random() > 0.8 ? (Math.random() > 0.5 ? 1 : -1) : 0),
        phiOptimization: Math.max(99, Math.min(100, prev.phiOptimization + (Math.random() - 0.5) * 0.1))
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [stats.totalBlocks])

  function generateHash(): string {
    return Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('')
  }

  function generateAddress(): string {
    return `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`
  }

  function formatTimeAgo(date: Date): string {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
    if (seconds < 60) return `${seconds}s ago`
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    return `${hours}h ago`
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-300 flex items-center gap-2">
              <Blocks className="h-4 w-4" />
              Total Blocks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.totalBlocks.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Height: {stats.totalBlocks}</div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-300 flex items-center gap-2">
              <Hash className="h-4 w-4" />
              Hash Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">{stats.hashRate}</div>
            <div className="text-xs text-gray-400">Network Power</div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-300 flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              TRU Circulation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">{stats.truCirculation.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Trust Units</div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-300 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              φ-Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">{stats.phiOptimization.toFixed(1)}%</div>
            <Progress value={stats.phiOptimization} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Blocks */}
        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Blocks className="h-5 w-5" />
              Recent Blocks
            </CardTitle>
            <CardDescription>
              Latest blocks on the QCHAIN hybrid blockchain
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <div className="space-y-3">
                {blocks.map((block) => (
                  <div
                    key={block.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedBlock?.id === block.id
                        ? 'bg-purple-900/30 border-purple-500'
                        : 'bg-gray-900/50 border-gray-700 hover:bg-gray-800/50'
                    }`}
                    onClick={() => setSelectedBlock(block)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-green-300 border-green-400">
                          #{block.height}
                        </Badge>
                        <span className="text-sm text-gray-300">{formatTimeAgo(block.timestamp)}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {block.transactions} txns
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="text-xs text-gray-500 break-all">
                        {block.hash.slice(0, 32)}...
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-yellow-400">
                          {block.truUnits} TRU
                        </span>
                        <span className="text-xs text-purple-400">
                          φ: {block.phiRatio.toFixed(6)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Transactions
            </CardTitle>
            <CardDescription>
              Live transaction stream on QCHAIN
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <div className="space-y-3">
                {transactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="p-3 rounded-lg bg-gray-900/50 border border-gray-700"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={tx.status === 'confirmed' ? 'default' : 'secondary'}
                          className={
                            tx.status === 'confirmed' 
                              ? 'bg-green-600 text-white'
                              : tx.status === 'pending'
                              ? 'bg-yellow-600 text-white'
                              : 'bg-red-600 text-white'
                          }
                        >
                          {tx.status}
                        </Badge>
                        <span className="text-sm text-gray-300">{formatTimeAgo(tx.timestamp)}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Block #{tx.blockHeight}
                      </div>
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="text-xs text-gray-500">
                        From: {tx.from.slice(0, 10)}...{tx.from.slice(-8)}
                      </div>
                      <div className="text-xs text-gray-500">
                        To: {tx.to.slice(0, 10)}...{tx.to.slice(-8)}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white">
                          {tx.amount.toFixed(4)} ETH
                        </span>
                        <span className="text-sm text-yellow-400">
                          {tx.truUnits.toFixed(2)} TRU
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Block Details */}
      {selectedBlock && (
        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Blocks className="h-5 w-5" />
              Block Details - #{selectedBlock.height}
            </CardTitle>
            <CardDescription>
              Detailed information for selected block
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-400">Block Hash</div>
                <div className="text-sm text-white font-mono break-all">{selectedBlock.hash}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Timestamp</div>
                <div className="text-sm text-white">{selectedBlock.timestamp.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Transactions</div>
                <div className="text-sm text-white">{selectedBlock.transactions}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Trust Units</div>
                <div className="text-sm text-yellow-400">{selectedBlock.truUnits} TRU</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">φ-Ratio</div>
                <div className="text-sm text-purple-400">{selectedBlock.phiRatio.toFixed(6)}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Miner</div>
                <div className="text-sm text-white">{selectedBlock.miner}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Block Size</div>
                <div className="text-sm text-white">{selectedBlock.size} KB</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Network Nodes</div>
                <div className="text-sm text-green-400">{stats.networkNodes}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Block Time</div>
                <div className="text-sm text-blue-400">{stats.blockTime.toFixed(1)}s</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}