import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RevenueOptimizer, RevenueStreamType } from '@/lib/revenue-optimizer';
import { AIRateLimitOptimizer, AIProviderType } from '@/lib/ai-rate-optimizer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

export default function RevenueDashboard() {
  const [revenueOptimizer] = useState(() => new RevenueOptimizer());
  const [aiOptimizer] = useState(() => new AIRateLimitOptimizer());
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    const updateMetrics = () => {
      setTotalRevenue(revenueOptimizer.calculateTotalMonthlyRevenue());
      setTotalProfit(revenueOptimizer.calculateTotalProfit());
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, [revenueOptimizer]);

  const revenueStreams = revenueOptimizer.getRevenueStreams();
  const taxConfig = revenueOptimizer.getTaxConfiguration();
  const providerStatus = aiOptimizer.getProviderStatus();
  const totalAICost = aiOptimizer.getTotalAICost();
  const aiSavings = aiOptimizer.calculateCostSavings();

  const profitMargin = totalRevenue > 0 ? (totalProfit / totalRevenue) * 100 : 0;
  const salesTax = revenueOptimizer.calculateTaxes(totalRevenue);
  const commRevenue = revenueStreams.find(s => s.streamType === RevenueStreamType.COMMUNICATION_PLATFORM)?.monthlyRevenue || 0;
  const commTax = revenueOptimizer.calculateTaxes(commRevenue, true);

  const handleRefresh = () => {
    setRefreshCount(prev => prev + 1);
    // Simulate some AI usage updates
    aiOptimizer.updateUsage(AIProviderType.ANTHROPIC_CLAUDE, Math.floor(Math.random() * 100));
    aiOptimizer.updateUsage(AIProviderType.NVIDIA_NEMO, Math.floor(Math.random() * 150));
  };

  const revenueChartData = revenueStreams.map(stream => ({
    name: stream.streamType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    revenue: stream.monthlyRevenue / 1000000, // Convert to millions
    profit: (stream.monthlyRevenue * stream.profitMargin) / 1000000,
    margin: stream.profitMargin * 100,
    growth: stream.growthRate * 100,
    customers: stream.customerCount
  }));

  const pieChartColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00ff88', '#ff6b8a', '#4ecdc4', '#45b7d1'];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-2">🚀 Autonomous Nanotechnology Revenue Platform</h1>
        <p className="text-xl">Miami-Dade County Tax Optimized • AI Rate Limit Optimized • Maximum Profitability</p>
        <div className="mt-4 flex justify-center space-x-6">
          <Badge variant="secondary" className="bg-green-500 text-white">
            Sales Tax ID: {taxConfig.salesTaxId}
          </Badge>
          <Badge variant="secondary" className="bg-blue-500 text-white">
            Comm Tax ID: {taxConfig.communicationServicesTaxId}
          </Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <span className="text-2xl">💰</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(totalRevenue / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">
              +${((totalRevenue * 0.25) / 1000000).toFixed(1)}M from growth
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Profit</CardTitle>
            <span className="text-2xl">📈</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${(totalProfit / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">
              {profitMargin.toFixed(1)}% profit margin
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Cost Savings</CardTitle>
            <span className="text-2xl">🤖</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${aiSavings.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              Total AI costs: ${totalAICost.toFixed(2)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tax Burden</CardTitle>
            <span className="text-2xl">🏛️</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${((salesTax + commTax) / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">
              Sales: ${(salesTax / 1000000).toFixed(1)}M | Comm: ${(commTax / 1000000).toFixed(1)}M
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard */}
      <Tabs defaultValue="revenue" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="revenue">Revenue Streams</TabsTrigger>
          <TabsTrigger value="ai-optimization">AI Optimization</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="taxes">Tax Management</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Stream (Millions)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}M`, 'Revenue']} />
                    <Bar dataKey="revenue" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profit Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={revenueChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: $${value}M`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="profit"
                    >
                      {revenueChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={pieChartColors[index % pieChartColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`$${value}M`, 'Profit']} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Stream Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {revenueStreams.map((stream) => (
                  <div key={stream.streamType} className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-sm mb-2">
                      {stream.streamType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </h3>
                    <div className="space-y-2 text-xs">
                      <div>Rate: ${(stream.hourlyRate / 1000).toFixed(0)}K/hr</div>
                      <div>Revenue: ${(stream.monthlyRevenue / 1000000).toFixed(1)}M/mo</div>
                      <div>Margin: {(stream.profitMargin * 100).toFixed(0)}%</div>
                      <div>Growth: {(stream.growthRate * 100).toFixed(0)}%</div>
                      <div>Customers: {stream.customerCount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-optimization" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Provider Status</CardTitle>
                <CardDescription>Real-time usage and cost optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {providerStatus.map((provider) => (
                    <div key={provider.provider} className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <div className="font-medium">{provider.provider.replace(/_/g, ' ').toUpperCase()}</div>
                        <div className="text-sm text-muted-foreground">
                          ${provider.cost.toFixed(4)}/1K tokens
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-medium ${
                          provider.usagePercentage < 50 ? 'text-green-500' :
                          provider.usagePercentage < 80 ? 'text-yellow-500' : 'text-red-500'
                        }`}>
                          {provider.usagePercentage.toFixed(1)}% used
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cost Optimization</CardTitle>
                <CardDescription>AI usage efficiency metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">${totalAICost.toFixed(2)}</div>
                    <div className="text-sm text-blue-600">Total AI Costs</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">${aiSavings.toFixed(2)}</div>
                    <div className="text-sm text-green-600">Cost Savings</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      ${(totalAICost / totalRevenue * 1000000).toFixed(6)}
                    </div>
                    <div className="text-sm text-purple-600">Cost per $1M Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Molecular Assembly</CardTitle>
                <CardDescription>Pricing Tiers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Basic</span>
                    <span className="font-bold">$1K/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Advanced</span>
                    <span className="font-bold">$5K/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enterprise</span>
                    <span className="font-bold">$25K/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantum</span>
                    <span className="font-bold">$100K/hr</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Satellite Services</CardTitle>
                <CardDescription>Global Communication</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Ground Station</span>
                    <span className="font-bold">$5K/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tracking</span>
                    <span className="font-bold">$2K/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data Transmission</span>
                    <span className="font-bold">$10K/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Global Comm</span>
                    <span className="font-bold">$25K/hr</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Communication Platform</CardTitle>
                <CardDescription>Subscription Tiers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Basic</span>
                    <span className="font-bold">$100/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional</span>
                    <span className="font-bold">$500/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enterprise</span>
                    <span className="font-bold">$2K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantum</span>
                    <span className="font-bold">$10K/mo</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Active Services</CardTitle>
              <CardDescription>Real-time service monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">2,547</div>
                  <div className="text-sm text-muted-foreground">Active Contracts</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">99.97%</div>
                  <div className="text-sm text-muted-foreground">System Uptime</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">$1,234</div>
                  <div className="text-sm text-muted-foreground">Revenue/Second</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">98.5%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="taxes" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tax Configuration</CardTitle>
                <CardDescription>Miami-Dade County Registration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 border border-green-200 rounded">
                    <div className="font-medium">✅ Sales Tax ID</div>
                    <div className="text-sm text-muted-foreground">{taxConfig.salesTaxId}</div>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded">
                    <div className="font-medium">✅ Communication Services Tax ID</div>
                    <div className="text-sm text-muted-foreground">{taxConfig.communicationServicesTaxId}</div>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                    <div className="font-medium">📍 Jurisdiction</div>
                    <div className="text-sm text-muted-foreground">{taxConfig.jurisdiction}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tax Calculations</CardTitle>
                <CardDescription>Monthly tax obligations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <div className="font-medium">Sales Tax (7%)</div>
                      <div className="text-sm text-muted-foreground">On all revenue</div>
                    </div>
                    <div className="text-xl font-bold">${(salesTax / 1000000).toFixed(2)}M</div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <div className="font-medium">Communication Tax (5.25%)</div>
                      <div className="text-sm text-muted-foreground">On communication services</div>
                    </div>
                    <div className="text-xl font-bold">${(commTax / 1000000).toFixed(2)}M</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium">Total Tax Burden</div>
                      <div className="text-sm text-muted-foreground">Monthly total</div>
                    </div>
                    <div className="text-xl font-bold">${((salesTax + commTax) / 1000000).toFixed(2)}M</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Refresh Button */}
      <div className="text-center">
        <Button onClick={handleRefresh} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
          🔄 Refresh Real-time Data
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          Last refresh: {new Date().toLocaleTimeString()} | Updates: {refreshCount}
        </p>
      </div>
    </div>
  );
}

export default RevenueDashboard;