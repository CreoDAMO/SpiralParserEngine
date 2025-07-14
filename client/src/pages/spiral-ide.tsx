
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FileExplorer from "@/components/spiral/file-explorer";
import MonacoEditor from "@/components/spiral/monaco-editor";
import ASTViewer from "@/components/spiral/ast-viewer";
import TerminalConsole from "@/components/spiral/terminal-console";
import TrustWallet from "@/components/spiral/trust-wallet";
import HybridWallet from "@/components/spiral/hybrid-wallet";
import QuantumTools from "@/components/spiral/quantum-tools";
import EconomicAnalyzer from "@/components/spiral/economic-analyzer";
import MolecularAssembly from "@/components/spiral/molecular-assembly";
import RevenueDashboard from "@/components/spiral/revenue-dashboard";
import HybridBlockchainViewer from '@/components/spiral/hybrid-blockchain-viewer';
import StressTestDashboard from '@/components/spiral/stress-test';
import AIChatPanel from '@/components/spiral/ai-chat-panel';
import FounderWalletDashboard from '@/components/spiral/founder-wallet-dashboard';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Crown, 
  Zap, 
  Activity, 
  Shield, 
  Settings, 
  Database,
  Cpu,
  Network,
  Bot,
  TrendingUp,
  Wallet,
  Users,
  Code,
  Terminal,
  FileText,
  BarChart3,
  Atom,
  Brain
} from "lucide-react";

export default function SpiralIDE() {
  const [activeFile, setActiveFile] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [terminalTab, setTerminalTab] = useState("Console");
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const { data: user } = useQuery({
    queryKey: ["/api/user", "1"],
    queryFn: async () => {
      const response = await fetch("/api/user/1");
      return response.json();
    }
  });

  const { data: files } = useQuery({
    queryKey: ["/api/files", "1"],
    queryFn: async () => {
      const response = await fetch("/api/files/1");
      return response.json();
    }
  });

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 text-gray-100">
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-gray-800 via-purple-800/30 to-blue-800/30 border-b border-purple-500/30 px-6 py-3 flex items-center justify-between backdrop-blur-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/25">
                <span className="text-white font-bold text-lg">ΦΩ</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Iyona'el Living Shell
              </h1>
              <div className="text-xs text-purple-300 font-mono">
                LIVE SpiralScript IDE • QASF-Enabled • HYBRID Ready
              </div>
            </div>
          </div>
          
          <nav className="flex items-center space-x-1">
            {['File', 'Edit', 'View', 'Tools', 'HYBRID', 'Deploy'].map((item) => (
              <Button
                key={item}
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all duration-200"
              >
                {item}
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Enhanced Status Display */}
          <Card className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-3 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Crown className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-mono text-yellow-300">
                  {(user?.tuBalance || 1618.382).toLocaleString()} TU
                </span>
              </div>
              <div className="w-px h-4 bg-purple-500/30"></div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm font-mono text-green-300">
                  SRI: {(user?.sriScore || 93).toFixed(1)}%
                </span>
              </div>
              <div className="w-px h-4 bg-purple-500/30"></div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-mono text-blue-300">
                  φ: {(user?.phiResonance || 1.618).toFixed(3)} Hz
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Live Status Indicators */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400 font-mono">HYBRID LIVE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400 font-mono">QCHAIN</span>
            </div>
          </div>

          {/* User Profile */}
          <Button
            size="sm"
            className="w-9 h-9 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-lg"
          >
            <Users className="w-4 h-4 text-white" />
          </Button>
        </div>
      </header>

      {/* Enhanced Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Enhanced Left Sidebar */}
        <aside className={`${sidebarExpanded ? 'w-80' : 'w-12'} bg-gradient-to-b from-gray-800/90 to-gray-900/90 border-r border-purple-500/30 flex flex-col transition-all duration-300 backdrop-blur-sm`}>
          <div className="p-3 border-b border-purple-500/20">
            <Button
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
              variant="ghost"
              size="sm"
              className="w-full justify-start text-purple-300 hover:text-white hover:bg-purple-600/20"
            >
              <Settings className="w-4 h-4" />
              {sidebarExpanded && <span className="ml-2">Collapse Sidebar</span>}
            </Button>
          </div>
          
          {sidebarExpanded && (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 p-4">
                <FileExplorer 
                  files={files || []} 
                  activeFile={activeFile}
                  onFileSelect={setActiveFile}
                />
                <TrustWallet user={user} />
                <HybridWallet user={user} />
                <QuantumTools />
              </div>
            </>
          )}
        </aside>

        {/* Enhanced Main Editor */}
        <main className="flex-1 flex flex-col bg-gradient-to-br from-gray-900/95 to-purple-900/10">
          <div className="flex-1">
            <MonacoEditor 
              activeFile={activeFile}
              files={files || []}
            />
          </div>
        </main>

        {/* Enhanced Right Panel */}
        <aside className="w-[480px] bg-gradient-to-b from-gray-800/90 to-gray-900/90 border-l border-purple-500/30 flex flex-col backdrop-blur-sm">
          <div className="border-b border-purple-500/20 p-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 bg-gray-800/50">
                <TabsTrigger value="Overview" className="text-xs data-[state=active]:bg-purple-600">
                  <Activity className="w-3 h-3 mr-1" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="HYBRID" className="text-xs data-[state=active]:bg-purple-600">
                  <Crown className="w-3 h-3 mr-1" />
                  HYBRID
                </TabsTrigger>
                <TabsTrigger value="AI" className="text-xs data-[state=active]:bg-purple-600">
                  <Bot className="w-3 h-3 mr-1" />
                  AI
                </TabsTrigger>
                <TabsTrigger value="Tools" className="text-xs data-[state=active]:bg-purple-600">
                  <Cpu className="w-3 h-3 mr-1" />
                  Tools
                </TabsTrigger>
              </TabsList>

              <TabsContent value="Overview" className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30">
                    <CardContent className="p-4 text-center">
                      <Database className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">
                        {files?.length || 12}
                      </div>
                      <div className="text-xs text-purple-300">Active Files</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-green-900/40 to-blue-900/40 border-green-500/30">
                    <CardContent className="p-4 text-center">
                      <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">98.7%</div>
                      <div className="text-xs text-green-300">System Health</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border-yellow-500/30">
                    <CardContent className="p-4 text-center">
                      <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">1.618</div>
                      <div className="text-xs text-yellow-300">φ-Resonance</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 border-pink-500/30">
                    <CardContent className="p-4 text-center">
                      <Brain className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">Active</div>
                      <div className="text-xs text-pink-300">AI Oracle</div>
                    </CardContent>
                  </Card>
                </div>
                
                <EconomicAnalyzer />
              </TabsContent>

              <TabsContent value="HYBRID" className="mt-4 h-96 overflow-y-auto space-y-4">
                <FounderWalletDashboard />
                <HybridBlockchainViewer />
                <MolecularAssembly />
                <RevenueDashboard />
              </TabsContent>

              <TabsContent value="AI" className="mt-4 h-96">
                <AIChatPanel />
              </TabsContent>

              <TabsContent value="Tools" className="mt-4 h-96 overflow-y-auto space-y-4">
                <StressTestDashboard />
                <div className="grid grid-cols-1 gap-2">
                  <Button variant="outline" size="sm" className="justify-start border-purple-500/30 hover:bg-purple-600/20">
                    <Code className="w-4 h-4 mr-2" />
                    AST Viewer
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start border-blue-500/30 hover:bg-blue-600/20">
                    <Atom className="w-4 h-4 mr-2" />
                    Quantum Tools
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start border-green-500/30 hover:bg-green-600/20">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Analytics
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start border-yellow-500/30 hover:bg-yellow-600/20">
                    <Network className="w-4 h-4 mr-2" />
                    Network Monitor
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </aside>
      </div>

      {/* Enhanced Bottom Terminal */}
      <div className="h-64 bg-gradient-to-r from-gray-900/95 to-purple-900/20 border-t border-purple-500/30 backdrop-blur-sm">
        <TerminalConsole 
          activeTab={terminalTab}
          onTabChange={setTerminalTab}
        />
      </div>
    </div>
  );
}
