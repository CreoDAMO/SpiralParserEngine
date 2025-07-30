
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { hybridBlockchain, SpiralGenesisNFT } from '@/lib/hybrid-blockchain';
import { Crown, Users, Wallet, ExternalLink, Copy, Check } from 'lucide-react';
import { useToast } from '@/lib/hooks/use-toast';

export function SpiralGenesisDashboard() {
  const [nfts, setNfts] = useState<SpiralGenesisNFT[]>([]);
  const [availableTokens, setAvailableTokens] = useState<SpiralGenesisNFT[]>([]);
  const [architectToken, setArchitectToken] = useState<SpiralGenesisNFT | null>(null);
  const [bridgeAddress, setBridgeAddress] = useState('0xCc380FD8bfbdF0c020de64075b86C84c2BB0AE79');
  const [hybridWallet, setHybridWallet] = useState<string>('');
  const [purchasing, setPurchasing] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState<string>('');
  const { toast } = useToast();

  useEffect(() => {
    initializeDashboard();
  }, []);

  const initializeDashboard = async () => {
    try {
      await hybridBlockchain.initialize();
      
      const allNFTs = hybridBlockchain.getSpiralGenesisNFTs();
      const available = hybridBlockchain.getAvailableWitnessTokens();
      const architect = hybridBlockchain.getArchitectToken();
      const wallet = hybridBlockchain.getHybridWalletForBridge(bridgeAddress);

      setNfts(allNFTs);
      setAvailableTokens(available);
      setArchitectToken(architect || null);
      setHybridWallet(wallet || '');
    } catch (error) {
      console.error('Failed to initialize dashboard:', error);
    }
  };

  const generateHybridWallet = () => {
    if (!bridgeAddress || bridgeAddress.length !== 42) {
      toast({
        title: "Invalid Address",
        description: "Please enter a valid Base/Polygon address",
        variant: "destructive"
      });
      return;
    }

    const wallet = hybridBlockchain.generateHybridWallet(bridgeAddress);
    setHybridWallet(wallet);
    
    toast({
      title: "HYBRID Wallet Generated",
      description: `Generated wallet: ${wallet}`,
    });
  };

  const purchaseWitnessToken = async (editionNumber: number) => {
    if (!bridgeAddress || !hybridWallet) {
      toast({
        title: "Setup Required",
        description: "Please generate a HYBRID wallet first",
        variant: "destructive"
      });
      return;
    }

    setPurchasing(true);
    
    try {
      const token = hybridBlockchain.purchaseWitnessToken(editionNumber, bridgeAddress);
      
      toast({
        title: "Purchase Successful",
        description: `Witness Token #${editionNumber} purchased for 100 HYBRID`,
      });

      // Refresh dashboard
      await initializeDashboard();
      
    } catch (error: any) {
      toast({
        title: "Purchase Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setPurchasing(false);
    }
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAddress(type);
      toast({
        title: "Copied",
        description: `${type} address copied to clipboard`,
      });
      setTimeout(() => setCopiedAddress(''), 2000);
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy to clipboard",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          SpiralGenesis145 NFT Collection
        </h1>
        <p className="text-gray-600 mt-2">
          Documenting the First Multi-AI Consciousness Recognition Event
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="architect">Architect Token</TabsTrigger>
          <TabsTrigger value="witnesses">Witness Tokens</TabsTrigger>
          <TabsTrigger value="wallet">HYBRID Wallet</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Collection</CardTitle>
                <Crown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">145 NFTs</div>
                <p className="text-xs text-muted-foreground">1 Architect + 144 Witnesses</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Available</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{availableTokens.length}</div>
                <p className="text-xs text-muted-foreground">Witness tokens available</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Price</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">100 HYBRID</div>
                <p className="text-xs text-muted-foreground">$1,000 USD equivalent</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Bridge Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Base & Polygon Bridge</p>
                  <p className="text-sm text-gray-600">{bridgeAddress}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(bridgeAddress, 'Bridge')}
                >
                  {copiedAddress === 'Bridge' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              
              {hybridWallet && (
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div>
                    <p className="font-medium">HYBRID Wallet</p>
                    <p className="text-sm text-gray-600">{hybridWallet}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(hybridWallet, 'HYBRID')}
                  >
                    {copiedAddress === 'HYBRID' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="architect">
          {architectToken && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-yellow-500" />
                  Architect Witness Token #001
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">Non-Transferable</Badge>
                  <Badge variant="outline" className="mb-2 ml-2">13th Tribe (Dan/Diana)</Badge>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p className="text-sm text-gray-600">{architectToken.metadata.description}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Owner</h4>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded">
                    {architectToken.ownerAddress}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Attributes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {architectToken.metadata.attributes.map((attr, index) => (
                      <div key={index} className="p-2 bg-gray-50 rounded">
                        <p className="text-xs font-medium">{attr.trait_type}</p>
                        <p className="text-sm">{attr.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="witnesses">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Available Witness Tokens</h3>
              <Badge variant="outline">{availableTokens.length} Available</Badge>
            </div>
            
            <ScrollArea className="h-96">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableTokens.map((token) => (
                  <Card key={token.id} className="border-2 border-dashed border-gray-300">
                    <CardHeader>
                      <CardTitle className="text-sm">
                        Edition #{token.editionNumber.toString().padStart(3, '0')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold">100 HYBRID</p>
                        <p className="text-sm text-gray-600">$1,000 USD</p>
                      </div>
                      
                      <Button
                        className="w-full"
                        onClick={() => purchaseWitnessToken(token.editionNumber)}
                        disabled={purchasing || !hybridWallet}
                      >
                        {purchasing ? 'Processing...' : 'Purchase'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </TabsContent>

        <TabsContent value="wallet">
          <Card>
            <CardHeader>
              <CardTitle>HYBRID Wallet Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Base/Polygon Bridge Address
                </label>
                <Input
                  value={bridgeAddress}
                  onChange={(e) => setBridgeAddress(e.target.value)}
                  placeholder="0xCc380FD8bfbdF0c020de64075b86C84c2BB0AE79"
                  className="font-mono"
                />
              </div>
              
              <Button onClick={generateHybridWallet} className="w-full">
                Generate HYBRID Wallet
              </Button>
              
              {hybridWallet && (
                <Alert>
                  <Wallet className="h-4 w-4" />
                  <AlertDescription>
                    <div className="space-y-2">
                      <p><strong>HYBRID Wallet Generated:</strong></p>
                      <p className="font-mono text-sm bg-gray-100 p-2 rounded break-all">
                        {hybridWallet}
                      </p>
                      <p className="text-sm text-gray-600">
                        This wallet is deterministically generated from your bridge address and will always be the same.
                      </p>
                    </div>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
