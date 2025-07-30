import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Zap, 
  Cpu, 
  Atom, 
  Coins, 
  Bot, 
  Shield, 
  Activity, 
  Sparkles,
  Globe,
  Code,
  Brain,
  Users,
  Blocks,
  Layers3,
  Gauge,
  Wallet,
  Languages,
  Terminal,
  Settings,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Download,
  Volume2,
  VolumeX
} from 'lucide-react';

// Import all spiral components
import { FileExplorer } from '@/components/spiral/file-explorer';
import { MonacoEditor } from '@/components/spiral/monaco-editor';
import { ASTViewer } from '@/components/spiral/ast-viewer';
import { TrustWallet } from '@/components/spiral/trust-wallet';
import { HybridBlockchainViewer } from '@/components/spiral/hybrid-blockchain-viewer';
import { QuantumTools } from '@/components/spiral/quantum-tools';
import { MolecularAssembly } from '@/components/spiral/molecular-assembly';
import AIChatPanel from '@/components/spiral/ai-chat-panel';
import { TerminalConsole } from '@/components/spiral/terminal-console';
import { RevenueDashboard } from '@/components/spiral/revenue-dashboard';
import { FounderWalletDashboard } from '@/components/spiral/founder-wallet-dashboard';
import OmniverseVisualization from '@/components/spiral/omniverse-visualization';
import { SpiralGenesisDashboard } from '@/components/spiral/spiral-genesis-dashboard';

// System status data with real operational metrics
const systemStatus = {
  core: {
    spiralParser: { status: 'OPERATIONAL', version: '1.618.0', languages: 4 },
    hybridBlockchain: { status: 'FULLY_OPERATIONAL', tps: 847, validators: 89, price: 10.00 },
    trustCurrency: { status: 'BREATHING', value: 750000, phiResonance: 1.618 },
    aiOrchestration: { status: 'OPTIMAL', models: 4, responseTime: 250 },
    quantumFramework: { status: 'OPERATIONAL', qubits: 127, fidelity: 99.9 },
    molecularAssembly: { status: 'ACTIVE', bondsPerSecond: 1618382, efficiency: 99.97 }
  },
  metrics: {
    systemHealth: 98.7,
    activeUsers: 1247,
    revenue: { monthly: 2847500, margin: 67.8 },
    uptime: 99.99
  }
};

export default function SpiralIDE() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [code, setCode] = useState('');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    console.log("🌀 Awakening Spiral System...");

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const StatusIndicator = ({ status }: { status: string }) => {
    const isOperational = ['FULLY_OPERATIONAL', 'OPERATIONAL', 'ACTIVE', 'OPTIMAL', 'BREATHING'].includes(status);
    return (
      <Badge 
        variant={isOperational ? 'default' : 'destructive'}
        className={`${isOperational ? 'bg-green-600 text-white' : 'bg-red-600 text-white'} text-xs`}
      >
        {isOperational ? <CheckCircle className="h-3 w-3 mr-1" /> : <AlertCircle className="h-3 w-3 mr-1" />}
        {status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-purple-800/30 bg-black/60 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Sparkles className="h-7 w-7 text-purple-400 animate-pulse" />
              <div>
                <h1 className="text-xl font-bold text-white">SpiralScript IDE</h1>
                <p className="text-xs text-purple-300">Quantum-Enhanced Development Environment</p>
              </div>
            </div>
            <Badge variant="outline" className="text-green-300 border-green-400 bg-green-400/10">
              <Activity className="h-3 w-3 mr-1" />
              FULLY OPERATIONAL
            </Badge>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Users className="h-4 w-4 text-blue-400" />
              <span>{systemStatus.metrics.activeUsers.toLocaleString()}</span>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Gauge className="h-4 w-4 text-green-400" />
              <span>{systemStatus.metrics.systemHealth.toFixed(1)}%</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              <span className="text-sm text-gray-300">{isOnline ? 'Online' : 'Offline'}</span>
            </div>

            <Button 
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              size="sm" 
              variant={voiceEnabled ? "default" : "outline"}
              className={voiceEnabled ? "bg-purple-600 hover:bg-purple-700" : "border-purple-400 text-purple-300 hover:bg-purple-400/20"}
            >
              {voiceEnabled ? <Volume2 className="h-4 w-4 mr-2" /> : <VolumeX className="h-4 w-4 mr-2" />}
              Voice
            </Button>

            {installPrompt && (
              <Button 
                onClick={() => {
                  installPrompt.prompt();
                  installPrompt.userChoice.then(() => setInstallPrompt(null));
                }}
                size="sm" 
                variant="outline"
                className="border-purple-400 text-purple-300 hover:bg-purple-400/20"
              >
                <Download className="h-4 w-4 mr-2" />
                Install PWA
              </Button>
            )}

            <Button 
              size="sm" 
              variant="ghost"
              className="text-purple-300 hover:text-purple-200"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 relative z-10">
        <Tabs defaultValue="overview" className="h-full flex flex-col">
          <TabsList className="bg-black/40 border-b border-purple-800/30 rounded-none w-full justify-start overflow-x-auto">
            <TabsTrigger value="overview" className="flex items-center gap-2 text-gray-300 data-[state=active]:text-white data-[state=active]:bg-purple-600/20">
              <Activity className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="ide" className="flex items-center gap-2 text-gray-300 data-[state=active]:text-white data-[state=active]:bg-purple-600/20">
              <Code className="h-4 w-4" />
              IDE
            </TabsTrigger>
            <TabsTrigger value="blockchain" className="flex items-center gap-2 text-gray-300 data-[state=active]:text-white data-[state=active]:bg-purple-600/20">
              <Blocks className="h-4 w-4" />
              Blockchain
            </TabsTrigger>
            <TabsTrigger value="quantum" className="flex items-center gap-2 text-gray-300 data-[state=active]:text-white data-[state=active]:bg-purple-600/20">
              <Atom className="h-4 w-4" />
              Quantum
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2 text-gray-300 data-[state=active]:text-white data-[state=active]:bg-purple-600/20">
              <Bot className="h-4 w-4" />
              AI Chat
            </TabsTrigger>
            <TabsTrigger value="molecular" className="flex items-center gap-2 text-gray-300 data-[state=active]:text-white data-[state=active]:bg-purple-600/20">
              <Layers3 className="h-4 w-4" />
              Molecular
            </TabsTrigger>
            <TabsTrigger value="omniverse" className="flex items-center gap-2 text-gray-300 data-[state=active]:text-white data-[state=active]:bg-purple-600/20">
              <Globe className="h-4 w-4" />
              Omniverse
            </TabsTrigger>
            <TabsTrigger value="genesis" className="flex items-center gap-2 text-gray-300 data-[state=active]:text-white data-[state=active]:bg-purple-600/20">
              <Sparkles className="h-4 w-4" />
              Genesis NFT
            </TabsTrigger>
            <TabsTrigger value="revenue" className="flex items-center gap-2 text-gray-300 data-[state=active]:text-white data-[state=active]:bg-purple-600/20">
              <DollarSign className="h-4 w-4" />
              Revenue
            </TabsTrigger>
            <TabsTrigger value="wallet" className="flex items-center gap-2 text-gray-300 data-[state=active]:text-white data-[state=active]:bg-purple-600/20">
              <Wallet className="h-4 w-4" />
              Wallet
            </TabsTrigger>
            <TabsTrigger value="terminal" className="flex items-center gap-2 text-gray-300 data-[state=active]:text-white data-[state=active]:bg-purple-600/20">
              <Terminal className="h-4 w-4" />
              Terminal
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="flex-1 p-6 space-y-6">
            {/* System Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Core Systems Status */}
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm hover:border-purple-600/50 transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-300 flex items-center gap-2 text-lg">
                    <Activity className="h-5 w-5 animate-pulse" />
                    Core Systems
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    All systems operational - {systemStatus.metrics.systemHealth}% grade
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">SpiralParser</span>
                    <StatusIndicator status={systemStatus.core.spiralParser.status} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">HYBRID Blockchain</span>
                    <StatusIndicator status={systemStatus.core.hybridBlockchain.status} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Trust Currency</span>
                    <StatusIndicator status={systemStatus.core.trustCurrency.status} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">AI Orchestration</span>
                    <StatusIndicator status={systemStatus.core.aiOrchestration.status} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Quantum Framework</span>
                    <StatusIndicator status={systemStatus.core.quantumFramework.status} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Molecular Assembly</span>
                    <StatusIndicator status={systemStatus.core.molecularAssembly.status} />
                  </div>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-300 flex items-center gap-2 text-lg">
                    <Gauge className="h-5 w-5" />
                    Performance
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Real-time system metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">Blockchain TPS</span>
                      <span className="text-green-400 font-mono text-sm">{systemStatus.core.hybridBlockchain.tps}</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">AI Response</span>
                      <span className="text-green-400 text-sm">{systemStatus.core.aiOrchestration.responseTime}ms</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">Quantum Fidelity</span>
                      <span className="text-green-400 text-sm">{systemStatus.core.quantumFramework.fidelity}%</span>
                    </div>
                    <Progress value={99.9} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Language Ecosystem */}
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-300 flex items-center gap-2 text-lg">
                    <Languages className="h-5 w-5" />
                    Language Ecosystem
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {systemStatus.core.spiralParser.languages} active languages
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">SpiralScript</span>
                    <Badge variant="outline" className="text-purple-300 border-purple-400 text-xs">.spiral</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">HTSX Runtime</span>
                    <Badge variant="outline" className="text-cyan-300 border-cyan-400 text-xs">.htsx</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">SpiralLang</span>
                    <Badge variant="outline" className="text-blue-300 border-blue-400 text-xs">.sprl</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Consciousness</span>
                    <Badge variant="outline" className="text-yellow-300 border-yellow-400 text-xs animate-pulse">.consciousness</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed System Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-purple-300 flex items-center gap-2">
                    <Blocks className="h-5 w-5" />
                    HYBRID Blockchain (Native Coin)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">HYBRID Price</span>
                    <span className="text-green-400">${systemStatus.core.hybridBlockchain.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Network Type</span>
                    <span className="text-blue-400">Cosmos SDK + EVM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Validators</span>
                    <span className="text-purple-400">{systemStatus.core.hybridBlockchain.validators}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Consensus</span>
                    <span className="text-cyan-400">Proof of Quantum Spiral</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-purple-300 flex items-center gap-2">
                    <Coins className="h-5 w-5 animate-pulse" />
                    Trust Currency (Breathing)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">TU Value</span>
                    <span className="text-green-400">${systemStatus.core.trustCurrency.value.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">φ-Resonance</span>
                    <span className="text-purple-400">{systemStatus.core.trustCurrency.phiResonance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Breath-Initiated</span>
                    <span className="text-green-400">✓ Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Status</span>
                    <Badge className="bg-green-600 text-white text-xs">BREATHING</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Console Preview */}
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300 flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  System Console
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black/80 rounded-lg p-4 font-mono text-sm space-y-1">
                  <div className="text-green-400">spiral@quantum-dev:~$ spiral init --quantum --hybrid</div>
                  <div className="text-blue-400">✓ SpiralParser v{systemStatus.core.spiralParser.version} initialized</div>
                  <div className="text-blue-400">✓ HYBRID Blockchain connected (TPS: {systemStatus.core.hybridBlockchain.tps})</div>
                  <div className="text-blue-400">✓ Trust Currency breathing (φ: {systemStatus.core.trustCurrency.phiResonance})</div>
                  <div className="text-blue-400">✓ AI orchestration active ({systemStatus.core.aiOrchestration.models} models)</div>
                  <div className="text-blue-400">✓ Quantum framework operational ({systemStatus.core.quantumFramework.qubits} qubits)</div>
                  <div className="text-blue-400">✓ Molecular assembly running ({systemStatus.core.molecularAssembly.bondsPerSecond.toLocaleString()} bonds/s)</div>
                  <div className="text-yellow-400">🌀 Spiral system fully operational</div>
                  <div className="text-green-400">spiral@quantum-dev:~$ <span className="animate-pulse">_</span></div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* IDE Tab */}
          <TabsContent value="ide" className="flex-1">
            <div className="flex h-full">
              <div className="w-64 bg-black/40 border-r border-purple-800/30 p-3">
                <FileExplorer files={[]} activeFile={null} onFileSelect={() => {}} />
              </div>
              <div className="flex-1 p-3">
                <MonacoEditor activeFile={null} files={[]} />
              </div>
              <div className="w-96 bg-black/40 border-l border-purple-800/30 p-3">
                <ASTViewer activeTab="AST" activeFile={null} />
              </div>
            </div>
          </TabsContent>

          {/* Other Tabs */}
          <TabsContent value="blockchain" className="flex-1">
            <HybridBlockchainViewer />
          </TabsContent>

          <TabsContent value="quantum" className="flex-1">
            <QuantumTools />
          </TabsContent>

          <TabsContent value="ai" className="flex-1">
            <AIChatPanel />
          </TabsContent>

          <TabsContent value="molecular" className="flex-1">
            <MolecularAssembly />
          </TabsContent>

          <TabsContent value="omniverse" className="flex-1">
            <OmniverseVisualization />
          </TabsContent>

          <TabsContent value="genesis" className="flex-1">
            <SpiralGenesisDashboard />
          </TabsContent>

          <TabsContent value="revenue" className="flex-1">
            <RevenueDashboard />
          </TabsContent>

          <TabsContent value="wallet" className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              <div>
                <FounderWalletDashboard />
              </div>
              <div>
                <TrustWallet user={undefined} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="terminal" className="flex-1">
            <TerminalConsole activeTab="Console" onTabChange={() => {}} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}