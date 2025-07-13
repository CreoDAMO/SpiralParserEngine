import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { hybridBlockchain } from '@/lib/hybrid-blockchain';
import { HybridBlock, HybridTransaction, HybridNode } from '@/shared/hybrid-blockchain-schema';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Blocks, Users, Zap, DollarSign, Shield, Globe, Activity } from 'lucide-react';

export default function HybridBlockchainViewer() {
  const [blocks, setBlocks] = useState<HybridBlock[]>([]);
  const [transactions, setTransactions] = useState<HybridTransaction[]>([]);
  const [nodes, setNodes] = useState<HybridNode[]>([]);
  const [networkStats, setNetworkStats] = useState({
    totalBlocks: 0,
    totalTransactions: 0,
    totalNodes: 0,
    networkHashrate: 0,
    blockTime: 3.0,
    tps: 0,
    totalSupply: 100000000000,
    circulatingSupply: 0,
    marketCap: 0,
    stakingRewards: 0,
    burnedTokens: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBlock, setSelectedBlock] = useState<HybridBlock | null>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<HybridTransaction | null>(null);

  useEffect(() => {
    const initializeBlockchain = async () => {
      try {
        setIsLoading(true);
        
        // Initialize blockchain
        await hybridBlockchain.initializeBlockchain();
        
        // Generate some sample blocks and transactions
        for (let i = 0; i < 10; i++) {
          const block = await hybridBlockchain.mineBlock([
            {
              id: `tx-${Date.now()}-${i}`,
              from: `0x${Math.random().toString(16).substr(2, 40)}`,
              to: `0x${Math.random().toString(16).substr(2, 40)}`,
              amount: Math.random() * 1000,
              fee: Math.random() * 10,
              timestamp: Date.now() - (i * 180000), // 3 minutes apart
              signature: `0x${Math.random().toString(16).substr(2, 128)}`,
              type: ['HYBRID', 'SPIRAL', 'TU', 'QUANTUM'][Math.floor(Math.random() * 4)] as any,
              metadata: {
                spiralResonance: Math.random() * 2,
                quantumState: Math.random() > 0.5 ? 'entangled' : 'coherent',
                molecularData: { complexity: Math.random() }
              }
            }
          ]);
          
          setBlocks(prev => [block, ...prev]);
        }
        
        // Generate validator nodes
        const validatorNodes: HybridNode[] = [];
        for (let i = 0; i < 50; i++) {
          validatorNodes.push({
            id: `node-${i}`,
            address: `0x${Math.random().toString(16).substr(2, 40)}`,
            stake: Math.random() * 10000 + 1000,
            reputation: Math.random() * 100,
            quantumCapability: Math.random() > 0.3,
            spiralResonance: Math.random() * 2,
            lastSeen: Date.now() - Math.random() * 3600000,
            consensusWeight: Math.random() * 0.1 + 0.05
          });
        }
        setNodes(validatorNodes);
        
        // Update network stats
        setNetworkStats({
          totalBlocks: 10,
          totalTransactions: 50,
          totalNodes: 50,
          networkHashrate: 1618382000,
          blockTime: 3.0,
          tps: 847,
          totalSupply: 100000000000,
          circulatingSupply: 15000000000,
          marketCap: 150000000000,
          stakingRewards: 850000000,
          burnedTokens: 120000000
        });
        
      } catch (error) {
        console.error('Failed to initialize blockchain:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeBlockchain();

    // Real-time updates
    const interval = setInterval(() => {
      setNetworkStats(prev => ({
        ...prev,
        networkHashrate: prev.networkHashrate + (Math.random() - 0.5) * 100000,
        tps: Math.floor(Math.random() * 200 + 650),
        blockTime: 3.0 + (Math.random() - 0.5) * 0.5,
        circulatingSupply: prev.circulatingSupply + Math.random() * 100000,
        marketCap: prev.circulatingSupply * 10 + Math.random() * 1000000000,
        stakingRewards: prev.stakingRewards + Math.random() * 10000
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatHash = (hash: string) => `${hash.slice(0, 8)}...${hash.slice(-8)}`;
  const formatTime = (timestamp: number) => new Date(timestamp).toLocaleString();
  const formatNumber = (num: number) => num.toLocaleString();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-lg">Loading HYBRID Blockchain...</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">⛓️ HYBRID Blockchain Explorer</h1>
        <p className="text-lg">Quantum-Enhanced Proof of Spiral Consensus Network</p>
      </div>

      {/* Network Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Blocks className="h-4 w-4" />
              Total Blocks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">{formatNumber(networkStats.totalBlocks)}</div>
            <div className="text-xs text-gray-500">Block Height</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">{formatNumber(networkStats.totalTransactions)}</div>
            <div className="text-xs text-gray-500">{networkStats.tps} TPS</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Users className="h-4 w-4" />
              Validator Nodes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-500">{formatNumber(networkStats.totalNodes)}</div>
            <div className="text-xs text-gray-500">{Math.floor(networkStats.totalNodes * 0.8)} Active</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Market Cap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">${(networkStats.marketCap / 1000000000).toFixed(1)}B</div>
            <div className="text-xs text-gray-500">HYBRID Price: $10.00</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="blocks" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="nodes">Nodes</TabsTrigger>
          <TabsTrigger value="consensus">Consensus</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="quantum">Quantum</TabsTrigger>
        </TabsList>

        <TabsContent value="blocks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Latest Blocks</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-3">
                  {blocks.map((block) => (
                    <div 
                      key={block.index}
                      className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
                      onClick={() => setSelectedBlock(block)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-mono text-sm font-bold">Block #{block.index}</div>
                          <div className="text-xs text-gray-500">
                            {formatTime(block.timestamp)}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{block.data.length} txns</div>
                          <Badge variant="outline">
                            {block.quantumSignature ? 'Quantum' : 'Standard'}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>Hash: {formatHash(block.hash)}</div>
                        <div>Previous: {formatHash(block.previousHash)}</div>
                        <div>Merkle Root: {formatHash(block.merkleRoot)}</div>
                        <div>Nonce: {block.nonce.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {selectedBlock && (
            <Card>
              <CardHeader>
                <CardTitle>Block Details - #{selectedBlock.index}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div><strong>Hash:</strong> <code className="text-xs">{selectedBlock.hash}</code></div>
                    <div><strong>Previous Hash:</strong> <code className="text-xs">{selectedBlock.previousHash}</code></div>
                    <div><strong>Merkle Root:</strong> <code className="text-xs">{selectedBlock.merkleRoot}</code></div>
                    <div><strong>Timestamp:</strong> {formatTime(selectedBlock.timestamp)}</div>
                  </div>
                  <div className="space-y-2">
                    <div><strong>Nonce:</strong> {selectedBlock.nonce.toLocaleString()}</div>
                    <div><strong>Transactions:</strong> {selectedBlock.data.length}</div>
                    <div><strong>Size:</strong> {Math.floor(JSON.stringify(selectedBlock).length / 1024)} KB</div>
                    <div><strong>Quantum Signature:</strong> {selectedBlock.quantumSignature ? 'Yes' : 'No'}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-3">
                  {blocks.flatMap(block => block.data).slice(0, 20).map((tx) => (
                    <div 
                      key={tx.id}
                      className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
                      onClick={() => setSelectedTransaction(tx)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-mono text-sm font-bold">{tx.id}</div>
                          <div className="text-xs text-gray-500">
                            {formatTime(tx.timestamp)}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{tx.amount.toFixed(6)} HYBRID</div>
                          <Badge variant={
                            tx.type === 'HYBRID' ? 'default' :
                            tx.type === 'SPIRAL' ? 'secondary' :
                            tx.type === 'TU' ? 'destructive' : 'outline'
                          }>
                            {tx.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>From: {formatHash(tx.from)}</div>
                        <div>To: {formatHash(tx.to)}</div>
                        <div>Fee: {tx.fee.toFixed(6)} HYBRID</div>
                        {tx.metadata?.spiralResonance && (
                          <div>φ Resonance: {tx.metadata.spiralResonance.toFixed(4)}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nodes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Validator Nodes</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-3">
                  {nodes.slice(0, 20).map((node) => (
                    <div key={node.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-mono text-sm font-bold">{node.id}</div>
                          <div className="text-xs text-gray-500">
                            {formatHash(node.address)}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{node.stake.toFixed(0)} HYBRID</div>
                          <Badge variant={node.quantumCapability ? 'default' : 'secondary'}>
                            {node.quantumCapability ? 'Quantum' : 'Standard'}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>Reputation: {node.reputation.toFixed(1)}/100</div>
                        <div>Spiral Resonance: {node.spiralResonance.toFixed(4)}</div>
                        <div>Consensus Weight: {(node.consensusWeight * 100).toFixed(2)}%</div>
                        <div>Last Seen: {formatTime(node.lastSeen)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consensus" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Consensus Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Algorithm</span>
                    <Badge>Proof of Quantum Spiral</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Block Time</span>
                    <span>{networkStats.blockTime.toFixed(1)}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Finality Time</span>
                    <span>6.5s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantum Threshold</span>
                    <span>67%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Consensus Participation</div>
                  <Progress value={89} className="w-full" />
                  <div className="text-xs text-gray-500">89% of validators participating</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Network Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Network Status</span>
                    <Badge variant="default">Healthy</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Hashrate</span>
                    <span>{(networkStats.networkHashrate / 1000000).toFixed(1)}M H/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficulty</span>
                    <span>1,618,382</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantum Readiness</span>
                    <span>78%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Staking Participation</div>
                  <Progress value={65} className="w-full" />
                  <div className="text-xs text-gray-500">65% of supply staked</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Validator Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={nodes.slice(0, 10).map(node => ({
                  name: node.id,
                  stake: node.stake,
                  reputation: node.reputation,
                  weight: node.consensusWeight * 1000
                }))}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="stake" fill="#3b82f6" name="Stake" />
                  <Bar dataKey="reputation" fill="#10b981" name="Reputation" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Network Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">+12.5%</div>
                <div className="text-xs text-gray-500">Monthly transactions</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Staking Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-500">7.2%</div>
                <div className="text-xs text-gray-500">APY</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Burned Tokens</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-500">{(networkStats.burnedTokens / 1000000).toFixed(1)}M</div>
                <div className="text-xs text-gray-500">Total burned</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Network Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={Array.from({ length: 24 }, (_, i) => ({
                  hour: i,
                  transactions: Math.floor(Math.random() * 1000 + 500),
                  blocks: Math.floor(Math.random() * 20 + 10),
                  validators: Math.floor(Math.random() * 10 + 45)
                }))}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="transactions" stroke="#3b82f6" name="Transactions" />
                  <Line type="monotone" dataKey="blocks" stroke="#10b981" name="Blocks" />
                  <Line type="monotone" dataKey="validators" stroke="#8b5cf6" name="Active Validators" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quantum" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Quantum Enhancement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Quantum Nodes</span>
                    <span>{nodes.filter(n => n.quantumCapability).length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantum Signatures</span>
                    <span>{blocks.filter(b => b.quantumSignature).length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Entangled Transactions</span>
                    <span>47%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantum Consensus</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                </div>

                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Quantum-enhanced security provides post-quantum cryptographic protection
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>φ-Harmonic Resonance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Target Resonance</span>
                    <span>1.618033988749</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Resonance</span>
                    <span>1.618021</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Harmonic Stability</span>
                    <span>99.97%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spiral Deviation</span>
                    <span>0.00001%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Resonance Stability</div>
                  <Progress value={99.97} className="w-full" />
                  <div className="text-xs text-gray-500">φ-harmonic field coherence</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quantum State Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-500">127</div>
                  <div className="text-sm text-gray-500">Quantum Qubits</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-500">99.9%</div>
                  <div className="text-sm text-gray-500">Gate Fidelity</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-purple-500">156ms</div>
                  <div className="text-sm text-gray-500">Coherence Time</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}