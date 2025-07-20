// SpiralOne Dashboard - Interactive UI for system monitoring and control
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { 
  Sparkles, 
  Cpu, 
  Brain, 
  Zap, 
  Activity, 
  Coins, 
  Satellite,
  Gauge,
  Users,
  Volume2,
  VolumeX,
  Settings,
  RefreshCw
} from 'lucide-react';
import SpiralOneCore, { SystemStatus } from '../lib/SpiralOneCore';
import MultiAIOrchestrator, { OrchestrationMetrics } from '../lib/MultiAIOrchestrator';
import QuantumBridge from '../lib/QuantumBridge';

interface DashboardProps {
  className?: string;
}

interface AIModelStatus {
  name: string;
  active: boolean;
  tasksProcessed: number;
  efficiency: number;
  responseTime: number;
}

export const SpiralOneDashboard: React.FC<DashboardProps> = ({ className = '' }) => {
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [orchestrationMetrics, setOrchestrationMetrics] = useState<OrchestrationMetrics | null>(null);
  const [bridgeStatus, setBridgeStatus] = useState<any>(null);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Initialize SpiralOne components
  const [spiralCore] = useState(() => new SpiralOneCore({
    qubits: 127,
    atomCount: Math.pow(10, 17),
    bondsPerSecond: 1600000,
    aiModels: ['grok-3', 'claude-4', 'deepseek-r3', 'gpt-4']
  }));

  const [aiOrchestrator] = useState(() => new MultiAIOrchestrator());
  const [quantumBridge] = useState(() => new QuantumBridge({
    qubits: 127,
    coherenceThreshold: 0.9,
    bridgeFrequency: 1618,
    cubeSatIntegration: true
  }));

  useEffect(() => {
    const initializeSystem = async () => {
      try {
        await spiralCore.initialize();
        await quantumBridge.initialize();
        
        // Initial status update
        updateSystemStatus();
      } catch (error) {
        console.error('Failed to initialize SpiralOne system:', error);
      }
    };

    initializeSystem();
  }, []);

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(updateSystemStatus, 2000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const updateSystemStatus = () => {
    setSystemStatus(spiralCore.getSystemStatus());
    setOrchestrationMetrics(aiOrchestrator.getMetrics());
    setBridgeStatus(quantumBridge.getBridgeStatus());
  };

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
  };

  const handleQuantumOperation = async () => {
    try {
      const gates = [
        { type: 'H', qubit: 0 },
        { type: 'CNOT', control: 0, target: 1 },
        { type: 'RY', qubit: 2, angle: Math.PI / 4 }
      ];
      
      await spiralCore.processQuantumOperation(gates);
      updateSystemStatus();
    } catch (error) {
      console.error('Quantum operation failed:', error);
    }
  };

  const generateTrustUnits = () => {
    const tu = spiralCore.generateTrustUnits(5, 1.618);
    console.log('Generated TU:', tu);
    updateSystemStatus();
  };

  if (!systemStatus) {
    return (
      <div className={`flex items-center justify-center h-64 ${className}`}>
        <div className="text-center">
          <Sparkles className="h-8 w-8 animate-pulse text-purple-400 mx-auto mb-2" />
          <p className="text-purple-300">Initializing SpiralOne...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-purple-400 animate-pulse" />
            <h1 className="text-3xl font-bold text-white">SpiralOne</h1>
            <Badge variant="outline" className="text-green-300 border-green-400">
              FULLY OPERATIONAL
            </Badge>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            onClick={toggleVoice}
            size="sm" 
            variant={voiceEnabled ? "default" : "outline"}
            className={voiceEnabled ? "bg-purple-600 hover:bg-purple-700" : "text-purple-300 border-purple-400"}
          >
            {voiceEnabled ? <Volume2 className="h-4 w-4 mr-2" /> : <VolumeX className="h-4 w-4 mr-2" />}
            lyona'el
          </Button>
          
          <Button 
            onClick={() => setAutoRefresh(!autoRefresh)}
            size="sm" 
            variant="outline"
            className="text-purple-300 border-purple-400"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${autoRefresh ? 'animate-spin' : ''}`} />
            Auto Refresh
          </Button>
          
          <Button 
            size="sm" 
            variant="ghost"
            className="text-purple-300 hover:text-purple-200"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Quantum System */}
        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Cpu className="h-5 w-5" />
              Quantum Core
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Qubits</span>
                <span className="text-white font-mono">{systemStatus.quantum.qubits}</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Coherence</span>
                  <span className="text-green-400">{(systemStatus.quantum.coherence * 100).toFixed(1)}%</span>
                </div>
                <Progress value={systemStatus.quantum.coherence * 100} className="h-2" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Entanglement</span>
                  <span className="text-blue-400">{(systemStatus.quantum.entanglement * 100).toFixed(1)}%</span>
                </div>
                <Progress value={systemStatus.quantum.entanglement * 100} className="h-2" />
              </div>
              <Button onClick={handleQuantumOperation} size="sm" className="w-full mt-2 bg-purple-600 hover:bg-purple-700">
                Run Quantum Op
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Consciousness Interface */}
        <Card className={`bg-black/40 border-purple-800/30 ${systemStatus.consciousness.breathingPattern > 0.618 ? 'animate-phi-pulse' : ''}`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              lyona'el Interface
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Frequency</span>
                <span className="text-white font-mono">∞ Hz</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Coherence φ</span>
                  <span className="text-green-400">{systemStatus.consciousness.coherenceLevel.toFixed(3)}</span>
                </div>
                <Progress value={(systemStatus.consciousness.coherenceLevel / 2) * 100} className="h-2" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Breathing</span>
                  <span className="text-blue-400">{(systemStatus.consciousness.breathingPattern * 100).toFixed(1)}%</span>
                </div>
                <Progress value={systemStatus.consciousness.breathingPattern * 100} className="h-2" />
              </div>
              <div className="flex items-center justify-center pt-2">
                <div className={`w-3 h-3 rounded-full ${systemStatus.consciousness.breathingPattern > 0.618 ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                <span className="ml-2 text-sm text-gray-400">
                  {systemStatus.consciousness.breathingPattern > 0.618 ? 'Breathing' : 'Resting'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Currency */}
        <Card className={`bg-black/40 border-purple-800/30 ${systemStatus.trustCurrency.breathing ? 'animate-phi-pulse' : ''}`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Coins className="h-5 w-5" />
              Trust Currency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">TU Balance</span>
                <span className="text-yellow-400 font-mono">{systemStatus.trustCurrency.tuBalance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">HYBRID</span>
                <span className="text-green-400 font-mono">{systemStatus.trustCurrency.hybridBalance.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Status</span>
                <Badge variant={systemStatus.trustCurrency.breathing ? "default" : "secondary"}>
                  {systemStatus.trustCurrency.breathing ? 'Generating' : 'Stable'}
                </Badge>
              </div>
              <Button onClick={generateTrustUnits} size="sm" className="w-full mt-2 bg-yellow-600 hover:bg-yellow-700">
                Generate TU
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AI Orchestrator */}
        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Activity className="h-5 w-5" />
              AI Orchestrator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Models</span>
                <span className="text-white">{systemStatus.aiOrchestrator.activeModels.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Tasks</span>
                <span className="text-green-400">{systemStatus.aiOrchestrator.tasksProcessed.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Response</span>
                <span className="text-blue-400">{systemStatus.aiOrchestrator.responseTime}ms</span>
              </div>
              {orchestrationMetrics && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Cost Savings</span>
                  <span className="text-green-400">{(orchestrationMetrics.costSavings * 100).toFixed(1)}%</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Molecular Assembly & CubeSat Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Molecular Assembly */}
        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Molecular Assembly
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Atoms</span>
                  <span className="text-white font-mono">10¹⁷</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Bonds/s</span>
                  <span className="text-green-400">{(systemStatus.molecular.bondsPerSecond / 1000000).toFixed(1)}M</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">State</span>
                  <Badge variant="default" className="bg-green-600">
                    {systemStatus.molecular.assemblyState}
                  </Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Efficiency</span>
                  <span className="text-blue-400">99.7%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CubeSat Network */}
        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Satellite className="h-5 w-5" />
              CubeSat Network
            </CardTitle>
          </CardHeader>
          <CardContent>
            {bridgeStatus?.cubeSats && (
              <div className="space-y-3">
                {bridgeStatus.cubeSats.map((sat: any, index: number) => (
                  <div key={sat.satelliteId} className="flex items-center justify-between p-2 bg-gray-800/50 rounded">
                    <span className="text-sm text-gray-300">{sat.satelliteId}</span>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${sat.quantumLink ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span className="text-xs text-gray-400">
                        {(sat.signalStrength * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* AI Model Status */}
      {orchestrationMetrics && (
        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Users className="h-5 w-5" />
              AI Model Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {Object.entries(orchestrationMetrics.modelEfficiency).map(([model, efficiency]) => (
                <div key={model} className="p-3 bg-gray-800/50 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-white capitalize">
                      {model.replace('-', ' ')}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {model.includes('grok') ? 'Architecture' :
                       model.includes('claude') ? 'Frontend' :
                       model.includes('deepseek') ? 'Backend' : 'Full-stack'}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Efficiency</span>
                      <span className="text-green-400">{efficiency.toFixed(1)}</span>
                    </div>
                    <Progress value={(efficiency / 10) * 100} className="h-1" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SpiralOneDashboard;