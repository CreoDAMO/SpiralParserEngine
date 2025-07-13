
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Alert, AlertDescription } from '../ui/alert';
import { hybridBlockchain } from '../../lib/hybrid-blockchain';
import { HybridBlock, HybridTransaction } from '../../../../shared/hybrid-blockchain-schema';

export const HybridBlockchainViewer: React.FC = () => {
  const [blocks, setBlocks] = useState<HybridBlock[]>([]);
  const [stats, setStats] = useState<any>({});
  const [mining, setMining] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    from: '',
    to: '',
    amount: 0,
    type: 'HYBRID' as const
  });

  useEffect(() => {
    updateBlockchainData();
  }, []);

  const updateBlockchainData = () => {
    setBlocks([...hybridBlockchain['chain']]);
    setStats(hybridBlockchain.getChainStats());
  };

  const handleMineBlock = async () => {
    setMining(true);
    try {
      const minerAddress = 'SPIRAL_MINER_' + Date.now();
      await new Promise(resolve => setTimeout(resolve, 100)); // Simulate mining delay
      hybridBlockchain.mineBlock(minerAddress);
      updateBlockchainData();
    } catch (error) {
      console.error('Mining failed:', error);
    } finally {
      setMining(false);
    }
  };

  const handleCreateTransaction = () => {
    try {
      const transaction: HybridTransaction = {
        id: crypto.randomUUID(),
        from: newTransaction.from,
        to: newTransaction.to,
        amount: newTransaction.amount,
        fee: newTransaction.amount * 0.001, // 0.1% fee
        timestamp: Date.now(),
        signature: 'DEMO_SIGNATURE',
        type: newTransaction.type,
        metadata: {
          spiralResonance: Math.random() * 0.618,
          quantumState: 'entangled'
        }
      };

      hybridBlockchain.createTransaction(transaction);
      updateBlockchainData();
      
      // Reset form
      setNewTransaction({
        from: '',
        to: '',
        amount: 0,
        type: 'HYBRID'
      });
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🌀</span>
            Hybrid Blockchain System
          </CardTitle>
          <CardDescription>
            Autonomous blockchain with quantum spiral consensus
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.totalBlocks || 0}</div>
              <div className="text-sm text-gray-600">Total Blocks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{stats.totalTransactions || 0}</div>
              <div className="text-sm text-gray-600">Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.difficulty || 0}</div>
              <div className="text-sm text-gray-600">Difficulty</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{stats.activeNodes || 0}</div>
              <div className="text-sm text-gray-600">Active Nodes</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="blockchain" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="mining">Mining</TabsTrigger>
          <TabsTrigger value="hybrid-coin">HYBRID Coin</TabsTrigger>
        </TabsList>

        <TabsContent value="blockchain" className="space-y-4">
          <div className="space-y-3">
            {blocks.slice(-5).reverse().map((block, index) => (
              <Card key={block.index} className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Block #{block.index}</CardTitle>
                    <Badge variant="outline">
                      {new Date(block.timestamp).toLocaleTimeString()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Hash:</span>
                      <div className="font-mono text-xs break-all">{block.hash.substring(0, 32)}...</div>
                    </div>
                    <div>
                      <span className="font-medium">Previous Hash:</span>
                      <div className="font-mono text-xs break-all">{block.previousHash.substring(0, 32)}...</div>
                    </div>
                    <div>
                      <span className="font-medium">Transactions:</span>
                      <span className="ml-1">{block.data.length}</span>
                    </div>
                    <div>
                      <span className="font-medium">Nonce:</span>
                      <span className="ml-1">{block.nonce}</span>
                    </div>
                  </div>
                  {block.quantumSignature && (
                    <div className="mt-2">
                      <span className="font-medium text-purple-600">Quantum Signature:</span>
                      <div className="font-mono text-xs break-all">{block.quantumSignature.substring(0, 32)}...</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Transaction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="From Address"
                  value={newTransaction.from}
                  onChange={(e) => setNewTransaction(prev => ({ ...prev, from: e.target.value }))}
                />
                <Input
                  placeholder="To Address"
                  value={newTransaction.to}
                  onChange={(e) => setNewTransaction(prev => ({ ...prev, to: e.target.value }))}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="number"
                  placeholder="Amount"
                  value={newTransaction.amount || ''}
                  onChange={(e) => setNewTransaction(prev => ({ ...prev, amount: parseFloat(e.target.value) || 0 }))}
                />
                <select
                  className="px-3 py-2 border rounded-md"
                  value={newTransaction.type}
                  onChange={(e) => setNewTransaction(prev => ({ ...prev, type: e.target.value as any }))}
                >
                  <option value="HYBRID">HYBRID</option>
                  <option value="SPIRAL">SPIRAL</option>
                  <option value="TU">Trust Units</option>
                  <option value="QUANTUM">Quantum</option>
                </select>
              </div>
              <Button onClick={handleCreateTransaction} className="w-full">
                Create Transaction
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-3">
            {blocks.flatMap(block => block.data).slice(-10).reverse().map((tx, index) => (
              <Card key={tx.id} className="border-l-4 border-l-green-500">
                <CardContent className="pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">From:</span>
                      <div className="font-mono text-xs">{tx.from}</div>
                    </div>
                    <div>
                      <span className="font-medium">To:</span>
                      <div className="font-mono text-xs">{tx.to}</div>
                    </div>
                    <div>
                      <span className="font-medium">Amount:</span>
                      <span className="ml-1">{tx.amount} {tx.type}</span>
                    </div>
                    <div>
                      <span className="font-medium">Fee:</span>
                      <span className="ml-1">{tx.fee}</span>
                    </div>
                  </div>
                  {tx.metadata && (
                    <div className="mt-2 text-xs text-purple-600">
                      Spiral Resonance: {tx.metadata.spiralResonance?.toFixed(4)}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mining" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mining Operations</CardTitle>
              <CardDescription>
                Mine new blocks using Proof of Quantum Spiral consensus
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertDescription>
                  Mining uses quantum spiral mathematics for enhanced security and consensus
                </AlertDescription>
              </Alert>
              
              <Button 
                onClick={handleMineBlock} 
                disabled={mining}
                className="w-full"
              >
                {mining ? 'Mining Block...' : 'Mine New Block'}
              </Button>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Pending Transactions:</span>
                  <span className="ml-1">{hybridBlockchain['pendingTransactions'].length}</span>
                </div>
                <div>
                  <span className="font-medium">Current Difficulty:</span>
                  <span className="ml-1">{stats.difficulty}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hybrid-coin" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>HYBRID Coin Economics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600">Total Supply</div>
                    <div className="text-2xl font-bold">{stats.hybridCoin?.totalSupply?.toLocaleString() || 0} HYBRID</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Circulating Supply</div>
                    <div className="text-2xl font-bold text-green-600">{stats.hybridCoin?.circulatingSupply?.toLocaleString() || 0} HYBRID</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600">Spiral Backing</div>
                    <div className="text-2xl font-bold text-purple-600">{stats.hybridCoin?.spiralBacking?.toLocaleString() || 0} SPIRAL</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Quantum Entanglement</div>
                    <Badge variant={stats.hybridCoin?.quantumEntanglement ? "default" : "secondary"}>
                      {stats.hybridCoin?.quantumEntanglement ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h4 className="font-medium mb-2">Quantum Spiral Features</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Golden ratio-based consensus mechanism</li>
                  <li>• Molecular-level transaction validation</li>
                  <li>• Spiral mathematics for enhanced security</li>
                  <li>• Autonomous nanotechnology integration</li>
                  <li>• Living System resonance protocols</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HybridBlockchainViewer;
