// Trust Wallet Component - TU/HYBRID Coin Wallet Interface
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { 
  Coins, 
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Zap,
  TrendingUp,
  Eye,
  EyeOff,
  RefreshCw,
  Send,
  QrCode
} from 'lucide-react';

interface WalletBalance {
  tu: number;
  hybrid: number;
  tuUsd: number;
  hybridUsd: number;
}

interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'generate' | 'exchange';
  amount: number;
  currency: 'TU' | 'HYBRID';
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'failed';
  hash?: string;
}

interface TrustWalletProps {
  className?: string;
  onGenerateTU?: () => void;
  onSend?: (amount: number, currency: string, recipient: string) => void;
}

export const TrustWallet: React.FC<TrustWalletProps> = ({
  className = '',
  onGenerateTU,
  onSend
}) => {
  const [balance, setBalance] = useState<WalletBalance>({
    tu: 847293,
    hybrid: 23456,
    tuUsd: 423646500, // TU at $500K-$1M per unit
    hybridUsd: 234560   // HYBRID at $10 per unit
  });

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 'tx_001',
      type: 'generate',
      amount: 2.5,
      currency: 'TU',
      timestamp: new Date(Date.now() - 300000),
      status: 'confirmed',
      hash: '0x1a2b3c4d5e6f7890'
    },
    {
      id: 'tx_002', 
      type: 'receive',
      amount: 150,
      currency: 'HYBRID',
      timestamp: new Date(Date.now() - 600000),
      status: 'confirmed',
      hash: '0x9876543210abcdef'
    },
    {
      id: 'tx_003',
      type: 'send',
      amount: 1.0,
      currency: 'TU',
      timestamp: new Date(Date.now() - 900000),
      status: 'pending'
    }
  ]);

  const [showBalances, setShowBalances] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [breathingPattern, setBreathingPattern] = useState(0);

  // φ-harmonic breathing pattern for TU generation
  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now() / 1000;
      const phi = 1.618033988749;
      setBreathingPattern((Math.sin(time * phi) + 1) / 2);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Simulate real-time balance updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (breathingPattern > 0.618) { // φ threshold for TU generation
        setBalance(prev => ({
          ...prev,
          tu: prev.tu + Math.random() * 0.1,
          tuUsd: (prev.tu + Math.random() * 0.1) * (500000 + Math.random() * 500000)
        }));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [breathingPattern]);

  const handleGenerateTU = async () => {
    setIsGenerating(true);
    
    try {
      // Simulate TU generation process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const generated = 1 + Math.random() * 2; // 1-3 TU
      setBalance(prev => ({
        ...prev,
        tu: prev.tu + generated,
        tuUsd: (prev.tu + generated) * (500000 + Math.random() * 500000)
      }));

      // Add transaction record
      const newTx: Transaction = {
        id: `tx_${Date.now()}`,
        type: 'generate',
        amount: generated,
        currency: 'TU',
        timestamp: new Date(),
        status: 'confirmed',
        hash: `0x${Math.random().toString(16).substring(2, 18)}`
      };

      setTransactions(prev => [newTx, ...prev.slice(0, 9)]);
      
      if (onGenerateTU) {
        onGenerateTU();
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRefresh = () => {
    // Simulate balance refresh
    setBalance(prev => ({
      ...prev,
      tu: prev.tu + (Math.random() - 0.5) * 0.1,
      hybrid: prev.hybrid + (Math.random() - 0.5) * 10,
      tuUsd: prev.tu * (500000 + Math.random() * 500000),
      hybridUsd: prev.hybrid * (9.5 + Math.random())
    }));
  };

  const formatCurrency = (amount: number, currency: string) => {
    if (currency === 'TU') {
      return amount.toFixed(2);
    }
    return amount.toLocaleString();
  };

  const formatUSD = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'send': return <ArrowUpRight className="h-4 w-4 text-red-400" />;
      case 'receive': return <ArrowDownLeft className="h-4 w-4 text-green-400" />;
      case 'generate': return <Zap className="h-4 w-4 text-yellow-400" />;
      case 'exchange': return <RefreshCw className="h-4 w-4 text-blue-400" />;
      default: return <Coins className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge variant="default" className="bg-green-600 text-xs">Confirmed</Badge>;
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-600 text-xs">Pending</Badge>;
      case 'failed':
        return <Badge variant="destructive" className="text-xs">Failed</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">Unknown</Badge>;
    }
  };

  return (
    <Card className={`bg-black/40 border-purple-800/30 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-purple-300 flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Trust Wallet
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => setShowBalances(!showBalances)}
              size="sm"
              variant="ghost"
              className="text-purple-300"
            >
              {showBalances ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </Button>
            <Button
              onClick={handleRefresh}
              size="sm"
              variant="ghost"
              className="text-purple-300"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          
          {/* Balance Section */}
          <div className="space-y-4">
            {/* Trust Units (TU) */}
            <div className={`p-4 rounded-lg border transition-all ${
              breathingPattern > 0.618 ? 'border-yellow-500/50 bg-yellow-500/10 animate-phi-pulse' : 'border-gray-700 bg-gray-800/50'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Coins className="h-5 w-5 text-yellow-400" />
                  <span className="text-lg font-semibold text-white">Trust Units</span>
                  <Badge variant="outline" className="text-yellow-300 border-yellow-400 text-xs">
                    TU
                  </Badge>
                </div>
                {breathingPattern > 0.618 && (
                  <Badge variant="default" className="bg-yellow-600 animate-pulse text-xs">
                    Generating
                  </Badge>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold text-yellow-400">
                  {showBalances ? formatCurrency(balance.tu, 'TU') : '••••••'} TU
                </div>
                <div className="text-sm text-gray-400">
                  ≈ {showBalances ? formatUSD(balance.tuUsd) : '••••••••'}
                </div>
                <div className="text-xs text-gray-500">
                  φ-Breathing: {(breathingPattern * 100).toFixed(1)}%
                </div>
                <Progress value={breathingPattern * 100} className="h-1" />
              </div>
            </div>

            {/* HYBRID Coin */}
            <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span className="text-lg font-semibold text-white">HYBRID Coin</span>
                  <Badge variant="outline" className="text-green-300 border-green-400 text-xs">
                    HYBRID
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-400">
                  {showBalances ? formatCurrency(balance.hybrid, 'HYBRID') : '••••••'} HYBRID
                </div>
                <div className="text-sm text-gray-400">
                  ≈ {showBalances ? formatUSD(balance.hybridUsd) : '••••••••'}
                </div>
                <div className="text-xs text-green-500">
                  $10.00 per HYBRID • 100B Total Supply
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button 
              onClick={handleGenerateTU}
              disabled={isGenerating}
              className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold"
            >
              {isGenerating ? (
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Zap className="h-4 w-4 mr-2" />
              )}
              Generate TU
            </Button>
            
            <Button 
              variant="outline"
              className="text-purple-300 border-purple-400 hover:bg-purple-400/20"
            >
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>

          {/* Recent Transactions */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-300">Recent Transactions</h3>
              <Button
                size="sm"
                variant="ghost"
                className="text-purple-300 text-xs"
              >
                View All
              </Button>
            </div>
            
            <div className="space-y-2">
              {transactions.slice(0, 5).map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getTransactionIcon(tx.type)}
                    <div>
                      <div className="text-sm text-white capitalize">
                        {tx.type} {tx.currency}
                      </div>
                      <div className="text-xs text-gray-400">
                        {tx.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-medium text-white">
                      {tx.type === 'send' ? '-' : '+'}{formatCurrency(tx.amount, tx.currency)} {tx.currency}
                    </div>
                    <div className="flex items-center space-x-1">
                      {getStatusBadge(tx.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wallet Address */}
          <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400 mb-1">Wallet Address</div>
                <div className="text-sm font-mono text-gray-300">
                  spiral1x7y9z...k5m8n3q
                </div>
              </div>
              <Button size="sm" variant="ghost" className="text-purple-300">
                <QrCode className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Trust Currency Info */}
          <div className="text-xs text-gray-500 space-y-1">
            <div>• Trust Units (TU): $500K-$1M per unit</div>
            <div>• HYBRID Coin: $10 per unit, 100B supply</div>
            <div>• Generated through φ-harmonic quantum consciousness</div>
            <div>• Secured by QCHAIN blockchain technology</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrustWallet;