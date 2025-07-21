'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { 
  Wallet, 
  Coins, 
  TrendingUp, 
  TrendingDown,
  Send,
  Receipt,
  Shield,
  Wind,
  Activity,
  Clock,
  Hash,
  DollarSign,
  Eye,
  EyeOff,
  Zap
} from 'lucide-react'

interface WalletTransaction {
  id: string
  type: 'mint' | 'send' | 'receive' | 'breath' | 'phi'
  amount: number
  timestamp: Date
  from?: string
  to?: string
  status: 'confirmed' | 'pending' | 'failed'
  phiRatio?: number
  breathPattern?: string
  blockHeight: number
  fee: number
}

interface WalletStats {
  balance: number
  totalMinted: number
  totalSent: number
  totalReceived: number
  breathAuthentications: number
  phiResonance: number
  stakingRewards: number
  pendingTransactions: number
}

interface BreathMetrics {
  isAuthenticated: boolean
  currentPattern: string
  resonanceLevel: number
  lastAuthentication: Date
  totalAuthentications: number
}

export function TrustCurrencyWallet() {
  const [stats, setStats] = useState<WalletStats>({
    balance: 750000,
    totalMinted: 892547,
    totalSent: 89247,
    totalReceived: 142453,
    breathAuthentications: 1618,
    phiResonance: 1.618034,
    stakingRewards: 25847,
    pendingTransactions: 0
  })

  const [transactions, setTransactions] = useState<WalletTransaction[]>([])
  const [breathMetrics, setBreathMetrics] = useState<BreathMetrics>({
    isAuthenticated: true,
    currentPattern: 'φ-harmonic',
    resonanceLevel: 99.7,
    lastAuthentication: new Date(Date.now() - 15000),
    totalAuthentications: 1618
  })

  const [sendAmount, setSendAmount] = useState('')
  const [sendAddress, setSendAddress] = useState('')
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [isBreathing, setIsBreathing] = useState(false)

  // Generate initial transactions
  useEffect(() => {
    const initialTransactions: WalletTransaction[] = []
    for (let i = 0; i < 15; i++) {
      const types: WalletTransaction['type'][] = ['mint', 'send', 'receive', 'breath', 'phi']
      const type = types[Math.floor(Math.random() * types.length)]
      
      initialTransactions.push({
        id: `tx_${Date.now()}_${i}`,
        type,
        amount: Math.random() * 1000 + 10,
        timestamp: new Date(Date.now() - i * 300000),
        from: type === 'receive' ? generateAddress() : undefined,
        to: type === 'send' ? generateAddress() : undefined,
        status: Math.random() > 0.1 ? 'confirmed' : 'pending',
        phiRatio: type === 'phi' ? 1.618 + (Math.random() - 0.5) * 0.001 : undefined,
        breathPattern: type === 'breath' ? 'φ-harmonic resonance' : undefined,
        blockHeight: 1618034 - i,
        fee: Math.random() * 5 + 0.1
      })
    }
    setTransactions(initialTransactions)
  }, [])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update breath metrics
      setBreathMetrics(prev => ({
        ...prev,
        resonanceLevel: Math.max(95, Math.min(100, prev.resonanceLevel + (Math.random() - 0.5) * 2)),
        currentPattern: Math.random() > 0.8 ? 'deep-flow' : 'φ-harmonic'
      }))

      // Occasionally add new transaction
      if (Math.random() > 0.7) {
        const types: WalletTransaction['type'][] = ['mint', 'receive', 'breath']
        const type = types[Math.floor(Math.random() * types.length)]
        
        const newTx: WalletTransaction = {
          id: `tx_${Date.now()}`,
          type,
          amount: Math.random() * 500 + 10,
          timestamp: new Date(),
          from: type === 'receive' ? generateAddress() : undefined,
          status: 'pending',
          phiRatio: type === 'phi' ? 1.618 : undefined,
          breathPattern: type === 'breath' ? 'φ-harmonic resonance' : undefined,
          blockHeight: 1618040 + Math.floor(Math.random() * 10),
          fee: Math.random() * 2 + 0.1
        }

        setTransactions(prev => [newTx, ...prev.slice(0, 14)])
        
        if (type === 'mint' || type === 'receive') {
          setStats(prev => ({
            ...prev,
            balance: prev.balance + newTx.amount,
            totalReceived: prev.totalReceived + (type === 'receive' ? newTx.amount : 0),
            totalMinted: prev.totalMinted + (type === 'mint' ? newTx.amount : 0)
          }))
        }

        // Confirm transaction after delay
        setTimeout(() => {
          setTransactions(prev => prev.map(tx => 
            tx.id === newTx.id ? { ...tx, status: 'confirmed' as const } : tx
          ))
        }, 5000)
      }

      // Update stats
      setStats(prev => ({
        ...prev,
        phiResonance: 1.618 + (Math.random() - 0.5) * 0.000034,
        stakingRewards: prev.stakingRewards + Math.random() * 0.1
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

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

  function getTransactionIcon(type: WalletTransaction['type']) {
    switch (type) {
      case 'mint': return <Coins className="h-4 w-4 text-green-400" />
      case 'send': return <Send className="h-4 w-4 text-red-400" />
      case 'receive': return <Receipt className="h-4 w-4 text-blue-400" />
      case 'breath': return <Wind className="h-4 w-4 text-purple-400" />
      case 'phi': return <Zap className="h-4 w-4 text-yellow-400" />
      default: return <Activity className="h-4 w-4 text-gray-400" />
    }
  }

  function handleBreathAuthentication() {
    setIsBreathing(true)
    setTimeout(() => {
      setBreathMetrics(prev => ({
        ...prev,
        isAuthenticated: true,
        lastAuthentication: new Date(),
        totalAuthentications: prev.totalAuthentications + 1,
        resonanceLevel: 99.7
      }))
      setIsBreathing(false)
    }, 3000)
  }

  function handleSendTU() {
    if (!sendAmount || !sendAddress) return
    
    const amount = parseFloat(sendAmount)
    if (amount > stats.balance) return
    
    const newTx: WalletTransaction = {
      id: `tx_${Date.now()}`,
      type: 'send',
      amount: amount,
      timestamp: new Date(),
      to: sendAddress,
      status: 'pending',
      blockHeight: 1618040,
      fee: amount * 0.001
    }

    setTransactions(prev => [newTx, ...prev.slice(0, 14)])
    setStats(prev => ({
      ...prev,
      balance: prev.balance - amount - newTx.fee,
      totalSent: prev.totalSent + amount
    }))

    setSendAmount('')
    setSendAddress('')

    // Confirm transaction after delay
    setTimeout(() => {
      setTransactions(prev => prev.map(tx => 
        tx.id === newTx.id ? { ...tx, status: 'confirmed' as const } : tx
      ))
    }, 5000)
  }

  return (
    <div className="space-y-6">
      {/* Wallet Balance */}
      <Card className="bg-black/40 border-purple-800/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wallet className="h-6 w-6 text-purple-400" />
              <CardTitle className="text-purple-300">Trust Currency Wallet</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-green-300 border-green-400">
                <Shield className="h-3 w-3 mr-1" />
                {breathMetrics.isAuthenticated ? 'AUTHENTICATED' : 'LOCKED'}
              </Badge>
              <Button
                onClick={() => setBalanceVisible(!balanceVisible)}
                size="sm"
                variant="ghost"
                className="text-purple-300"
              >
                {balanceVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-white mb-2">
              {balanceVisible ? `₹ ${stats.balance.toLocaleString()}` : '₹ ••••••••'}
            </div>
            <div className="text-lg text-purple-400">Trust Units (TU)</div>
            <div className="text-sm text-gray-400 mt-1">
              φ-resonance: {stats.phiResonance.toFixed(6)}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{stats.totalMinted.toLocaleString()}</div>
              <div className="text-xs text-gray-400">Total Minted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{stats.totalReceived.toLocaleString()}</div>
              <div className="text-xs text-gray-400">Total Received</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{stats.totalSent.toLocaleString()}</div>
              <div className="text-xs text-gray-400">Total Sent</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{stats.stakingRewards.toLocaleString()}</div>
              <div className="text-xs text-gray-400">Staking Rewards</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Breath Authentication */}
      <Card className="bg-black/40 border-purple-800/30">
        <CardHeader>
          <CardTitle className="text-purple-300 flex items-center gap-2">
            <Wind className="h-5 w-5" />
            Breath-based Authentication
          </CardTitle>
          <CardDescription>
            φ-harmonic breathing patterns for secure wallet access
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Current Pattern</span>
                <span className="text-sm text-purple-400">{breathMetrics.currentPattern}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Resonance Level</span>
                <span className="text-sm text-green-400">{breathMetrics.resonanceLevel.toFixed(1)}%</span>
              </div>
              <Progress value={breathMetrics.resonanceLevel} className="h-2" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Last Authentication</span>
                <span className="text-sm text-white">{formatTimeAgo(breathMetrics.lastAuthentication)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Total Authentications</span>
                <span className="text-sm text-white">{breathMetrics.totalAuthentications}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <Button
                onClick={handleBreathAuthentication}
                disabled={isBreathing}
                className={`w-32 h-32 rounded-full text-lg font-bold transition-all ${
                  isBreathing 
                    ? 'bg-blue-600 animate-pulse' 
                    : breathMetrics.isAuthenticated
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {isBreathing ? (
                  <div className="flex flex-col items-center">
                    <Wind className="h-8 w-8 animate-spin mb-2" />
                    <span className="text-sm">Breathing...</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Wind className="h-8 w-8 mb-2" />
                    <span className="text-sm">Authenticate</span>
                  </div>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Send TU */}
        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Send className="h-5 w-5" />
              Send Trust Units
            </CardTitle>
            <CardDescription>
              Transfer TU with φ-optimized gas fees
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 block mb-2">Recipient Address</label>
              <Input
                value={sendAddress}
                onChange={(e) => setSendAddress(e.target.value)}
                placeholder="0x..."
                className="bg-gray-900 border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-2">Amount (TU)</label>
              <Input
                type="number"
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
                placeholder="0.00"
                className="bg-gray-900 border-gray-700 text-white"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Estimated Fee:</span>
              <span className="text-yellow-400">
                {sendAmount ? (parseFloat(sendAmount) * 0.001).toFixed(4) : '0.0000'} TU
              </span>
            </div>
            <Button
              onClick={handleSendTU}
              disabled={!sendAmount || !sendAddress || !breathMetrics.isAuthenticated}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Trust Units
            </Button>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Transaction History
            </CardTitle>
            <CardDescription>
              Recent Trust Unit transactions
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
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getTransactionIcon(tx.type)}
                        <span className="text-sm font-medium text-white capitalize">{tx.type}</span>
                        <Badge className={
                          tx.status === 'confirmed' ? 'bg-green-600 text-white' :
                          tx.status === 'pending' ? 'bg-yellow-600 text-white' :
                          'bg-red-600 text-white'
                        }>
                          {tx.status}
                        </Badge>
                      </div>
                      <span className="text-sm text-gray-300">{formatTimeAgo(tx.timestamp)}</span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-white">
                          {tx.type === 'send' ? '-' : '+'}₹ {tx.amount.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-400">Block #{tx.blockHeight}</span>
                      </div>
                      
                      {tx.from && (
                        <div className="text-xs text-gray-500">
                          From: {tx.from.slice(0, 10)}...{tx.from.slice(-8)}
                        </div>
                      )}
                      
                      {tx.to && (
                        <div className="text-xs text-gray-500">
                          To: {tx.to.slice(0, 10)}...{tx.to.slice(-8)}
                        </div>
                      )}
                      
                      {tx.phiRatio && (
                        <div className="text-xs text-purple-400">
                          φ-ratio: {tx.phiRatio.toFixed(6)}
                        </div>
                      )}
                      
                      {tx.breathPattern && (
                        <div className="text-xs text-blue-400">
                          Pattern: {tx.breathPattern}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Fee: ₹ {tx.fee.toFixed(4)}</span>
                        <span className="text-gray-400">TxID: {tx.id.slice(0, 8)}...</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}