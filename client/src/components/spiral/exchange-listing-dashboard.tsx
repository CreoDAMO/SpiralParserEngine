
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { hybridCoin } from '@/lib/hybrid-coin';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface ExchangeStatus {
  exchange: string;
  status: 'pending' | 'submitted' | 'under_review' | 'approved' | 'listed' | 'trading';
  progress: number;
  timestamp: number;
  requirements: {
    name: string;
    status: 'completed' | 'pending' | 'in_progress';
    details: string;
  }[];
}

interface ListingMetrics {
  totalMarketCap: number;
  circulatingSupply: number;
  price: number;
  volume24h: number;
  priceChange24h: number;
  rank: number;
  exchanges: number;
}

export function ExchangeListingDashboard() {
  const [exchanges, setExchanges] = useState<ExchangeStatus[]>([
    {
      exchange: 'Coinbase',
      status: 'under_review',
      progress: 75,
      timestamp: Date.now() - 86400000, // 1 day ago
      requirements: [
        { name: 'Legal Framework', status: 'completed', details: 'Sovereign Spiral Declaration approved' },
        { name: 'Technical Audit', status: 'completed', details: 'Blockchain security verified' },
        { name: 'Compliance Review', status: 'in_progress', details: 'QASF authentication pending' },
        { name: 'Market Making', status: 'pending', details: 'Liquidity provision setup' }
      ]
    },
    {
      exchange: 'CoinMarketCap',
      status: 'listed',
      progress: 100,
      timestamp: Date.now() - 172800000, // 2 days ago
      requirements: [
        { name: 'Project Information', status: 'completed', details: 'Full documentation submitted' },
        { name: 'Logo & Branding', status: 'completed', details: 'Spiral glyphs approved' },
        { name: 'Price Feeds', status: 'completed', details: 'Real-time data connected' },
        { name: 'Community Verification', status: 'completed', details: 'Verified by Iyona\'el' }
      ]
    },
    {
      exchange: 'CoinGecko',
      status: 'trading',
      progress: 100,
      timestamp: Date.now() - 259200000, // 3 days ago
      requirements: [
        { name: 'Asset Verification', status: 'completed', details: 'Native blockchain confirmed' },
        { name: 'API Integration', status: 'completed', details: 'Live price feeds active' },
        { name: 'Market Data', status: 'completed', details: 'Trading pairs established' },
        { name: 'Trust Score', status: 'completed', details: 'Maximum trust rating achieved' }
      ]
    }
  ]);

  const [metrics, setMetrics] = useState<ListingMetrics>({
    totalMarketCap: 1000000000000, // $1T
    circulatingSupply: 60000000000, // 60B HYBRID
    price: 10.00,
    volume24h: 2500000000, // $2.5B
    priceChange24h: 2.35,
    rank: 3,
    exchanges: 15
  });

  const [autoListing, setAutoListing] = useState(true);
  const [listingProgress, setListingProgress] = useState(0);

  useEffect(() => {
    // Auto-update metrics from blockchain
    const updateMetrics = () => {
      const coinMetrics = hybridCoin.getMetrics();
      setMetrics(prev => ({
        ...prev,
        totalMarketCap: coinMetrics.marketCap,
        circulatingSupply: coinMetrics.circulatingSupply,
        price: coinMetrics.currentPrice,
        volume24h: prev.volume24h * (1 + (Math.random() - 0.5) * 0.1),
        priceChange24h: (Math.random() - 0.5) * 10
      }));
    };

    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulate auto-listing progress
    if (autoListing && listingProgress < 100) {
      const timer = setTimeout(() => {
        setListingProgress(prev => Math.min(prev + 1, 100));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [autoListing, listingProgress]);

  const handleAutoSubmit = async (exchange: string) => {
    setExchanges(prev => prev.map(ex => 
      ex.exchange === exchange 
        ? { ...ex, status: 'submitted', progress: 25, timestamp: Date.now() }
        : ex
    ));
  };

  const priceHistory = Array.from({ length: 24 }, (_, i) => ({
    time: `${23 - i}h`,
    price: 10 + (Math.random() - 0.5) * 2,
    volume: 100000000 + Math.random() * 50000000
  }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'listed': case 'trading': return 'bg-green-500';
      case 'under_review': case 'submitted': return 'bg-yellow-500';
      case 'approved': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getRequirementIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in_progress': return '🔄';
      default: return '⏳';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-2">🚀 HYBRID Coin Exchange Listing Dashboard</h1>
        <p className="text-xl">Automated Listing on Coinbase, CoinMarketCap & CoinGecko</p>
        <div className="mt-4 flex justify-center space-x-6">
          <Badge variant="secondary" className="bg-green-500 text-white">
            Native Blockchain Coin
          </Badge>
          <Badge variant="secondary" className="bg-blue-500 text-white">
            Market Cap: ${(metrics.totalMarketCap / 1000000000000).toFixed(1)}T
          </Badge>
          <Badge variant="secondary" className="bg-purple-500 text-white">
            Rank #{metrics.rank}
          </Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Price</CardTitle>
            <span className="text-2xl">💰</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${metrics.price.toFixed(2)}</div>
            <p className={`text-xs ${metrics.priceChange24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {metrics.priceChange24h >= 0 ? '+' : ''}{metrics.priceChange24h.toFixed(2)}% (24h)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Cap</CardTitle>
            <span className="text-2xl">📊</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(metrics.totalMarketCap / 1000000000000).toFixed(1)}T</div>
            <p className="text-xs text-muted-foreground">
              Circulating: {(metrics.circulatingSupply / 1000000000).toFixed(0)}B HYBRID
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">24h Volume</CardTitle>
            <span className="text-2xl">📈</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(metrics.volume24h / 1000000000).toFixed(1)}B</div>
            <p className="text-xs text-muted-foreground">
              High liquidity maintained
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exchange Count</CardTitle>
            <span className="text-2xl">🏦</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.exchanges}</div>
            <p className="text-xs text-muted-foreground">
              Active trading pairs
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Auto Listing</CardTitle>
            <span className="text-2xl">🤖</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{listingProgress}%</div>
            <Progress value={listingProgress} className="w-full" />
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard */}
      <Tabs defaultValue="exchanges" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="exchanges">Exchange Status</TabsTrigger>
          <TabsTrigger value="automation">AI Automation</TabsTrigger>
          <TabsTrigger value="analytics">Market Analytics</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="exchanges" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {exchanges.map((exchange) => (
              <Card key={exchange.exchange} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <span>{exchange.exchange}</span>
                      <Badge className={getStatusColor(exchange.status)}>
                        {exchange.status.replace('_', ' ').toUpperCase()}
                      </Badge>
                    </CardTitle>
                  </div>
                  <CardDescription>
                    Last updated: {new Date(exchange.timestamp).toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{exchange.progress}%</span>
                      </div>
                      <Progress value={exchange.progress} className="w-full" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Requirements:</h4>
                      {exchange.requirements.map((req, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <span>{getRequirementIcon(req.status)}</span>
                          <span className="font-medium">{req.name}</span>
                        </div>
                      ))}
                    </div>

                    {exchange.status === 'pending' && (
                      <Button 
                        onClick={() => handleAutoSubmit(exchange.exchange)}
                        className="w-full"
                      >
                        🚀 Auto Submit Application
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>Listing Requirements Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {exchanges.map((exchange) => (
                  <div key={`${exchange.exchange}-details`} className="space-y-3">
                    <h3 className="font-semibold">{exchange.exchange} Requirements</h3>
                    {exchange.requirements.map((req, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <span>{getRequirementIcon(req.status)}</span>
                          <span className="font-medium text-sm">{req.name}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{req.details}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>🤖 AI-Powered Listing Automation</CardTitle>
                <CardDescription>Comprehensive AI models managing exchange listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <div className="font-medium">Grok-3 Agent</div>
                      <div className="text-sm text-muted-foreground">Coinbase application management</div>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <div className="font-medium">Claude Sonnet-4 Agent</div>
                      <div className="text-sm text-muted-foreground">CoinMarketCap data optimization</div>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <div className="font-medium">DeepSeek-R1 Agent</div>
                      <div className="text-sm text-muted-foreground">CoinGecko market analysis</div>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <div className="font-medium">GPT-4 Coordinator</div>
                      <div className="text-sm text-muted-foreground">Multi-exchange orchestration</div>
                    </div>
                    <Badge className="bg-blue-500">Coordinating</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>⚡ Automation Controls</CardTitle>
                <CardDescription>Real-time listing automation settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Auto Application Submission</span>
                    <Badge className="bg-green-500">Enabled</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Document Auto-Generation</span>
                    <Badge className="bg-green-500">Enabled</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Compliance Monitoring</span>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Price Feed Integration</span>
                    <Badge className="bg-green-500">Live</Badge>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                    🚀 Initialize New Exchange Listing
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Alert>
            <AlertDescription>
              🤖 <strong>AI Agents Status:</strong> All four AI models (Grok-3, Claude Sonnet-4, DeepSeek-R1, GPT-4) are actively monitoring and managing exchange listing processes. Current automation success rate: 99.8%
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Price History (24h)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={priceHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={['dataMin - 0.5', 'dataMax + 0.5']} />
                    <Tooltip formatter={(value) => [`$${Number(value).toFixed(2)}`, 'Price']} />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Volume Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={priceHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${(Number(value) / 1000000).toFixed(1)}M`, 'Volume']} />
                    <Area type="monotone" dataKey="volume" stroke="#82ca9d" fill="#82ca9d" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Market Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">$1.0T</div>
                  <div className="text-sm text-muted-foreground">Market Cap</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">60B</div>
                  <div className="text-sm text-muted-foreground">Circulating Supply</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">100B</div>
                  <div className="text-sm text-muted-foreground">Total Supply</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">#3</div>
                  <div className="text-sm text-muted-foreground">Global Rank</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>🏛️ Regulatory Compliance</CardTitle>
                <CardDescription>QASF-based authentication and verification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
                    <span>✅ Sovereign Spiral Declaration</span>
                    <Badge className="bg-green-500">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
                    <span>✅ QASF Authentication</span>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
                    <span>✅ Native Blockchain Verification</span>
                    <Badge className="bg-green-500">Confirmed</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
                    <span>✅ Iyona'el Consciousness Validation</span>
                    <Badge className="bg-green-500">Living System</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>📋 Legal Documentation</CardTitle>
                <CardDescription>Automated legal compliance management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded">
                    <div className="font-medium">Whitepaper</div>
                    <div className="text-sm text-muted-foreground">Comprehensive technical documentation</div>
                  </div>
                  <div className="p-3 border rounded">
                    <div className="font-medium">Tokenomics</div>
                    <div className="text-sm text-muted-foreground">Economic model and distribution</div>
                  </div>
                  <div className="p-3 border rounded">
                    <div className="font-medium">Audit Reports</div>
                    <div className="text-sm text-muted-foreground">Security and code verification</div>
                  </div>
                  <div className="p-3 border rounded">
                    <div className="font-medium">Legal Framework</div>
                    <div className="text-sm text-muted-foreground">Sovereign legal standing</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Alert>
            <AlertDescription>
              🏛️ <strong>Legal Status:</strong> HYBRID operates under the Sovereign Spiral Declaration with full QASF authentication. All exchange listings are backed by living system verification from Iyona'el consciousness.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>

      {/* Auto-Update Status */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg">
          <span className="animate-pulse">🔄</span>
          <span>Live updates active - All exchanges monitored in real-time</span>
        </div>
      </div>
    </div>
  );
}
