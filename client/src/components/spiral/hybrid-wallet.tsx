// HYBRID Wallet Component - Integrated with Trust Wallet
// Manages HYBRID COIN, node licenses, cross-chain assets, and staking

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { hybridBlockchain, HybridWalletState, HybridNodeLicense, CrossChainAsset } from '@/lib/hybrid-blockchain';
import { hybridCoin, HybridCoinTransaction, StakingPosition } from '@/lib/hybrid-coin';
import { User } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

interface HybridWalletProps {
  user: User | undefined;
  className?: string;
}

export default function HybridWallet({ user, className }: HybridWalletProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [walletState, setWalletState] = useState<HybridWalletState>({
    address: 'hybrid1user1example1address12345',
    hybridBalance: 1618.382,
    tuBalance: user?.tuBalance || 1618.382,
    sriScore: user?.sriScore || 0.618,
    phiResonance: user?.phiResonance || 1.618,
    nodeLicenses: [],
    stakingRewards: 88.23,
    governanceVotingPower: 1618,
    crossChainAssets: [
      { chainId: 'ethereum-1', symbol: 'ETH', balance: 2.5, bridgeStatus: 'available' },
      { chainId: 'cosmos-hub-4', symbol: 'ATOM', balance: 150, bridgeStatus: 'available' },
      { chainId: 'osmosis-1', symbol: 'OSMO', balance: 500, bridgeStatus: 'available' }
    ]
  });

  const [activeTab, setActiveTab] = useState('overview');
  const [stakingPositions, setStakingPositions] = useState<StakingPosition[]>([]);
  const [recentTransactions, setRecentTransactions] = useState<HybridCoinTransaction[]>([]);

  useEffect(() => {
    // Initialize wallet data
    const initializeWallet = async () => {
      try {
        const blockchainInfo = hybridBlockchain.getBlockchainInfo();
        const coinMetrics = hybridCoin.getMetrics();
        const userStaking = hybridCoin.getStakingPositions(walletState.address);
        const userTxs = hybridCoin.getTransactionHistory(walletState.address, 10);
        
        setStakingPositions(userStaking);
        setRecentTransactions(userTxs);
        
        // Update wallet state with real data
        setWalletState(prev => ({
          ...prev,
          nodeLicenses: hybridBlockchain.getNodeLicenses()
            .filter(license => license.owner === prev.address)
        }));
      } catch (error) {
        console.error('Failed to initialize wallet:', error);
      }
    };

    initializeWallet();
  }, [walletState.address]);

  // Bridge operations
  const bridgeToChainMutation = useMutation({
    mutationFn: async (params: { targetChain: string; amount: number; asset: string }) => {
      const bridgeTx = hybridCoin.bridgeToChain(
        walletState.address,
        params.amount,
        params.targetChain,
        walletState.address
      );
      return bridgeTx;
    },
    onSuccess: (transaction) => {
      toast({
        title: "Bridge Transfer Initiated",
        description: `Bridging ${transaction.amount} HYBRID to ${transaction.metadata?.bridgeChain}`,
      });
      // Update wallet state
      setWalletState(prev => ({
        ...prev,
        hybridBalance: prev.hybridBalance - transaction.amount - transaction.fee
      }));
    },
    onError: (error) => {
      toast({
        title: "Bridge Transfer Failed",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  // Staking operations
  const stakeMutation = useMutation({
    mutationFn: async (params: { amount: number; nodeId: string; period: number }) => {
      return hybridCoin.stake(walletState.address, params.amount, params.nodeId, params.period);
    },
    onSuccess: (position) => {
      toast({
        title: "Staking Successful",
        description: `Staked ${position.amount} HYBRID with ${position.apy}% APY`,
      });
      setStakingPositions(prev => [...prev, position]);
      setWalletState(prev => ({
        ...prev,
        hybridBalance: prev.hybridBalance - position.amount
      }));
    }
  });

  // Node license purchase
  const purchaseNodeLicenseMutation = useMutation({
    mutationFn: async (params: { licenseType: 'HNL-VAL' | 'HNL-STR' }) => {
      const stakeAmount = params.licenseType === 'HNL-VAL' ? 1000 : 250;
      return hybridBlockchain.stakeHybridCoin(walletState.address, stakeAmount, params.licenseType);
    },
    onSuccess: (result, variables) => {
      const cost = variables.licenseType === 'HNL-VAL' ? 1000 : 250;
      toast({
        title: "Node License Purchased",
        description: `${variables.licenseType} license acquired for ${cost} HYBRID`,
      });
      setWalletState(prev => ({
        ...prev,
        hybridBalance: prev.hybridBalance - cost,
        nodeLicenses: [...prev.nodeLicenses, ...hybridBlockchain.getNodeLicenses()
          .filter(license => license.owner === prev.address)]
      }));
    }
  });

  // Convert TU to HYBRID
  const convertTUMutation = useMutation({
    mutationFn: async (tuAmount: number) => {
      const hybridAmount = hybridBlockchain.convertTUToHybrid(tuAmount, walletState.sriScore);
      return { tuAmount, hybridAmount };
    },
    onSuccess: (result) => {
      toast({
        title: "TU Conversion Successful",
        description: `Converted ${result.tuAmount} TU to ${result.hybridAmount.toFixed(3)} HYBRID`,
      });
      setWalletState(prev => ({
        ...prev,
        tuBalance: prev.tuBalance - result.tuAmount,
        hybridBalance: prev.hybridBalance + result.hybridAmount
      }));
    }
  });

  const formatCurrency = (amount: number, currency: string) => {
    return `${amount.toLocaleString()} ${currency}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'available': return 'bg-blue-500';
      case 'bridging': return 'bg-yellow-500';
      case 'locked': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (!user) return null;

  return (
    <div className={`space-y-4 ${className}`}>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-spiral-400 flex items-center space-x-2">
            <span>💰</span>
            <span>HYBRID Wallet</span>
            <Badge variant="outline" className="ml-auto">
              {hybridBlockchain.getBlockchainInfo().networkType}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="staking">Staking</TabsTrigger>
              <TabsTrigger value="nodes">Node Licenses</TabsTrigger>
              <TabsTrigger value="bridge">Cross-Chain</TabsTrigger>
              <TabsTrigger value="transactions">History</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gray-900 border-gray-600">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">HYBRID Balance</p>
                        <p className="text-2xl font-bold text-white">
                          {formatCurrency(walletState.hybridBalance, 'HYBRID')}
                        </p>
                        <p className="text-sm text-gray-500">
                          ≈ ${(walletState.hybridBalance * 10).toLocaleString()} USD
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">TU Balance</p>
                        <p className="text-lg font-semibold text-spiral-400">
                          {formatCurrency(walletState.tuBalance, 'TU')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-600">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">SRI Score</span>
                        <span className="text-sm font-mono text-green-400">
                          {walletState.sriScore.toFixed(3)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">φ-Resonance</span>
                        <span className="text-sm font-mono text-quantum-400">
                          {walletState.phiResonance.toFixed(3)} Hz
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">Voting Power</span>
                        <span className="text-sm font-mono text-purple-400">
                          {walletState.governanceVotingPower.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-300">Quick Actions</h4>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => convertTUMutation.mutate(100)}
                    disabled={convertTUMutation.isPending || walletState.tuBalance < 100}
                    className="bg-spiral-600 hover:bg-spiral-700"
                  >
                    Convert 100 TU → HYBRID
                  </Button>
                  <Button
                    onClick={() => stakeMutation.mutate({ amount: 1000, nodeId: 'genesis-validator-1', period: 30 })}
                    disabled={stakeMutation.isPending || walletState.hybridBalance < 1000}
                    variant="outline"
                  >
                    Stake 1000 HYBRID
                  </Button>
                </div>
              </div>

              <Card className="bg-gray-900 border-gray-600">
                <CardContent className="p-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Staking Rewards</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Available Rewards</span>
                    <span className="text-lg font-semibold text-green-400">
                      {formatCurrency(walletState.stakingRewards, 'HYBRID')}
                    </span>
                  </div>
                  <Button className="w-full mt-3" size="sm" variant="outline">
                    Claim Rewards
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="staking" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Staking Positions</h3>
                <Button
                  onClick={() => stakeMutation.mutate({ amount: 1000, nodeId: 'genesis-validator-1', period: 30 })}
                  disabled={stakeMutation.isPending}
                  className="bg-spiral-600 hover:bg-spiral-700"
                >
                  New Stake
                </Button>
              </div>

              {stakingPositions.length === 0 ? (
                <Card className="bg-gray-900 border-gray-600">
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-400">No active staking positions</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Start staking HYBRID to earn rewards
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-3">
                  {stakingPositions.map((position) => (
                    <Card key={position.id} className="bg-gray-900 border-gray-600">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-white">
                              {formatCurrency(position.amount, 'HYBRID')}
                            </p>
                            <p className="text-sm text-gray-400">
                              Delegated to {position.delegatedNode}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-green-400">
                              {position.apy.toFixed(2)}% APY
                            </p>
                            <Badge className={getStatusColor(position.status)}>
                              {position.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Period</span>
                            <span className="text-white">{position.stakingPeriod} days</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Rewards</span>
                            <span className="text-green-400">
                              {formatCurrency(position.rewards, 'HYBRID')}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="nodes" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Node Licenses</h3>
                <div className="space-x-2">
                  <Button
                    onClick={() => purchaseNodeLicenseMutation.mutate({ licenseType: 'HNL-STR' })}
                    disabled={purchaseNodeLicenseMutation.isPending || walletState.hybridBalance < 250}
                    size="sm"
                    variant="outline"
                  >
                    Buy Storage License (250 HYBRID)
                  </Button>
                  <Button
                    onClick={() => purchaseNodeLicenseMutation.mutate({ licenseType: 'HNL-VAL' })}
                    disabled={purchaseNodeLicenseMutation.isPending || walletState.hybridBalance < 1000}
                    size="sm"
                    className="bg-spiral-600 hover:bg-spiral-700"
                  >
                    Buy Validator License (1000 HYBRID)
                  </Button>
                </div>
              </div>

              {walletState.nodeLicenses.length === 0 ? (
                <Alert>
                  <AlertDescription>
                    No node licenses owned. Purchase NFT licenses to run validator or storage nodes.
                  </AlertDescription>
                </Alert>
              ) : (
                <div className="space-y-3">
                  {walletState.nodeLicenses.map((license) => (
                    <Card key={license.id} className="bg-gray-900 border-gray-600">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-white">{license.type}</p>
                            <p className="text-sm text-gray-400">
                              Stake: {formatCurrency(license.stakeRequired, 'HYBRID')}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge className={license.isActive ? 'bg-green-500' : 'bg-red-500'}>
                              {license.isActive ? 'Active' : 'Inactive'}
                            </Badge>
                            <p className="text-sm text-gray-400 mt-1">
                              {license.revenueShare * 100}% revenue share
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Valid Until</span>
                            <span className="text-white">
                              {license.validUntil.toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Chain</span>
                            <span className="text-white">{license.chainId}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="bridge" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Cross-Chain Assets</h3>
                <Button size="sm" variant="outline">
                  Add Chain
                </Button>
              </div>

              <div className="space-y-3">
                {walletState.crossChainAssets.map((asset) => (
                  <Card key={asset.chainId} className="bg-gray-900 border-gray-600">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-white">{asset.symbol}</p>
                          <p className="text-sm text-gray-400">{asset.chainId}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white">{formatCurrency(asset.balance, asset.symbol)}</p>
                          <Badge className={getStatusColor(asset.bridgeStatus)}>
                            {asset.bridgeStatus}
                          </Badge>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Button
                          onClick={() => bridgeToChainMutation.mutate({
                            targetChain: asset.chainId,
                            amount: Math.min(asset.balance, 100),
                            asset: asset.symbol
                          })}
                          disabled={bridgeToChainMutation.isPending || asset.bridgeStatus !== 'available'}
                          size="sm"
                          className="w-full"
                          variant="outline"
                        >
                          Bridge to HYBRID
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="transactions" className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Transaction History</h3>
              
              {recentTransactions.length === 0 ? (
                <Card className="bg-gray-900 border-gray-600">
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-400">No recent transactions</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-2">
                  {recentTransactions.map((tx) => (
                    <Card key={tx.id} className="bg-gray-900 border-gray-600">
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {tx.type.toUpperCase()}
                            </p>
                            <p className="text-xs text-gray-400">
                              {new Date(tx.timestamp).toLocaleString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-white">
                              {formatCurrency(tx.amount, 'HYBRID')}
                            </p>
                            <p className="text-xs text-gray-400">
                              Fee: {formatCurrency(tx.fee, 'HYBRID')}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs text-gray-500">
                            {tx.from} → {tx.to}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}