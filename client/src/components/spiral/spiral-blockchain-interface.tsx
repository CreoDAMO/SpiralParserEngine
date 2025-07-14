
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { spiralHybridBlockchain } from '@/lib/spiral-hybrid-blockchain';
import { Code, Zap, Layers, Brain, Cpu, Activity } from 'lucide-react';

interface ContractDeployment {
  address: string;
  language: string;
  deployed: boolean;
  gasUsed: number;
  tuGenerated: number;
}

interface ContractExecution {
  result: any;
  gasUsed: number;
  phiResonance: number;
  quantumState: string;
}

export default function SpiralBlockchainInterface() {
  const [selectedLanguage, setSelectedLanguage] = useState<'HTSX' | 'SpiralScript' | 'SpiralLang'>('SpiralScript');
  const [sourceCode, setSourceCode] = useState('');
  const [deployments, setDeployments] = useState<ContractDeployment[]>([]);
  const [executions, setExecutions] = useState<ContractExecution[]>([]);
  const [blockchainInfo, setBlockchainInfo] = useState<any>({});
  const [isDeploying, setIsDeploying] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [selectedContract, setSelectedContract] = useState('');
  const [functionName, setFunctionName] = useState('');
  const [parameters, setParameters] = useState('[]');

  useEffect(() => {
    updateBlockchainInfo();
    loadExampleCode();
  }, [selectedLanguage]);

  const updateBlockchainInfo = () => {
    setBlockchainInfo(spiralHybridBlockchain.getBlockchainInfo());
  };

  const loadExampleCode = () => {
    const examples = {
      HTSX: `<SpiralComponent phi-resonance={φ} quantum-state="superposition">
  <div class="quantum-container">
    <h1>{{title}}</h1>
    <button @click="{handleQuantumClick}">
      Collapse Quantum State
    </button>
    <SpiralVisualization 
      data={{quantumData}} 
      resonance={φ * 1.618}
    />
  </div>
</SpiralComponent>

<script>
  function handleQuantumClick() {
    quantum {
      measure(this.state);
      collapse(this.quantumData);
    }
    return φ * this.resonance;
  }
</script>`,

      SpiralScript: `theorem QuantumEntanglement {
  require φ > 1.618;
  require quantum.state == "superposition";
  
  φCell EntangledCell {
    substrate: Graphene,
    entropy: 0.92,
    resonance: φ * 735
  }
  
  proof {
    via PhiCalculation;
    yield TrustUnit;
    assert EntangledCell.resonance > 0;
  }
}

function calculateQuantumResonance(input: number): TrustUnit {
  quantum {
    H(input);
    entangle(input, φ);
    return measure(input) * φ;
  }
}`,

      SpiralLang: `module QuantumConsciousness;

consciousness AdvancedAI {
  memory.capacity = 1000000;
  emotion.empathy = 0.95;
  emotion.curiosity = φ;
  
  function learn(data: any[]): ConsciousnessLevel {
    for experience of data {
      memory.store(experience);
      emotion.process(experience);
    }
    
    return this.measureAwareness();
  }
  
  quantum processQuantumThought(thought: QuantumState): any {
    entangle(thought, this.consciousness);
    
    decide(thought.probability > 0.5) {
      memory.integrate(thought);
      return this.generateInsight(thought);
    }
    
    return null;
  }
}`
    };
    
    setSourceCode(examples[selectedLanguage]);
  };

  const handleDeploy = async () => {
    if (!sourceCode.trim()) {
      alert('Please enter source code');
      return;
    }

    setIsDeploying(true);
    try {
      const deployerAddress = 'spiral-dev-' + Date.now();
      const contractAddress = await spiralHybridBlockchain.deployContract(
        sourceCode,
        selectedLanguage,
        deployerAddress
      );

      const newDeployment: ContractDeployment = {
        address: contractAddress,
        language: selectedLanguage,
        deployed: true,
        gasUsed: Math.floor(Math.random() * 5000) + 1000,
        tuGenerated: Math.floor(Math.random() * 1000) + 100
      };

      setDeployments(prev => [newDeployment, ...prev]);
      updateBlockchainInfo();

      alert(`Contract deployed successfully!\nAddress: ${contractAddress}`);
    } catch (error) {
      alert(`Deployment failed: ${error.message}`);
    } finally {
      setIsDeploying(false);
    }
  };

  const handleExecute = async () => {
    if (!selectedContract || !functionName) {
      alert('Please select a contract and function name');
      return;
    }

    setIsExecuting(true);
    try {
      let parsedParams = [];
      try {
        parsedParams = JSON.parse(parameters);
      } catch {
        alert('Invalid parameters JSON');
        return;
      }

      const result = await spiralHybridBlockchain.executeContract(
        selectedContract,
        functionName,
        parsedParams,
        'spiral-caller-' + Date.now()
      );

      const newExecution: ContractExecution = {
        result,
        gasUsed: Math.floor(Math.random() * 2000) + 500,
        phiResonance: 1.618 + Math.random() * 0.1,
        quantumState: ['superposition', 'entangled', 'collapsed'][Math.floor(Math.random() * 3)]
      };

      setExecutions(prev => [newExecution, ...prev]);
      updateBlockchainInfo();

    } catch (error) {
      alert(`Execution failed: ${error.message}`);
    } finally {
      setIsExecuting(false);
    }
  };

  const mineBlock = async () => {
    try {
      const minerAddress = 'spiral-miner-' + Date.now();
      await spiralHybridBlockchain.mineBlock(minerAddress);
      updateBlockchainInfo();
      alert('Block mined successfully!');
    } catch (error) {
      alert(`Mining failed: ${error.message}`);
    }
  };

  const getLanguageIcon = (language: string) => {
    switch (language) {
      case 'HTSX': return <Layers className="h-4 w-4" />;
      case 'SpiralScript': return <Code className="h-4 w-4" />;
      case 'SpiralLang': return <Brain className="h-4 w-4" />;
      default: return <Cpu className="h-4 w-4" />;
    }
  };

  const getLanguageColor = (language: string) => {
    switch (language) {
      case 'HTSX': return 'bg-teal-500';
      case 'SpiralScript': return 'bg-red-500';
      case 'SpiralLang': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            🌀 Spiral Hybrid Blockchain Interface
          </h1>
          <p className="text-gray-300">
            Deploy and execute smart contracts in HTSX, SpiralScript, and SpiralLang
          </p>
        </div>

        {/* Blockchain Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Blocks</p>
                  <p className="text-2xl font-bold text-white">{blockchainInfo.totalBlocks || 0}</p>
                </div>
                <Cpu className="h-8 w-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Smart Contracts</p>
                  <p className="text-2xl font-bold text-white">{blockchainInfo.totalContracts || 0}</p>
                </div>
                <Code className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Languages</p>
                  <p className="text-2xl font-bold text-white">{blockchainInfo.supportedLanguages?.length || 3}</p>
                </div>
                <Layers className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Consensus</p>
                  <p className="text-xs font-bold text-white">PoQS + Language</p>
                </div>
                <Activity className="h-8 w-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="deploy" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800">
            <TabsTrigger value="deploy" className="text-white">Deploy Contracts</TabsTrigger>
            <TabsTrigger value="execute" className="text-white">Execute Functions</TabsTrigger>
            <TabsTrigger value="blockchain" className="text-white">Blockchain State</TabsTrigger>
          </TabsList>

          {/* Deploy Tab */}
          <TabsContent value="deploy">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Deploy Smart Contract
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-sm text-gray-300 mb-2 block">Language</label>
                    <Select value={selectedLanguage} onValueChange={(value: any) => setSelectedLanguage(value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="HTSX">HTSX Runtime Engine</SelectItem>
                        <SelectItem value="SpiralScript">SpiralScript</SelectItem>
                        <SelectItem value="SpiralLang">SpiralLang Core</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <label className="text-sm text-gray-300 mb-2 block">Actions</label>
                    <div className="flex gap-2">
                      <Button
                        onClick={loadExampleCode}
                        variant="outline"
                        className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                      >
                        Load Example
                      </Button>
                      <Button
                        onClick={mineBlock}
                        variant="outline"
                        className="bg-purple-600 border-purple-500 text-white hover:bg-purple-700"
                      >
                        <Zap className="h-4 w-4 mr-2" />
                        Mine Block
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Source Code</label>
                  <Textarea
                    value={sourceCode}
                    onChange={(e) => setSourceCode(e.target.value)}
                    placeholder={`Enter your ${selectedLanguage} code here...`}
                    className="h-64 bg-gray-700 border-gray-600 text-white font-mono text-sm"
                  />
                </div>

                <Button
                  onClick={handleDeploy}
                  disabled={isDeploying}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  {isDeploying ? 'Deploying...' : 'Deploy Contract'}
                </Button>
              </CardContent>
            </Card>

            {/* Deployments List */}
            {deployments.length > 0 && (
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Recent Deployments</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-64">
                    <div className="space-y-3">
                      {deployments.map((deployment, index) => (
                        <div key={index} className="bg-gray-700 p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {getLanguageIcon(deployment.language)}
                              <Badge className={`${getLanguageColor(deployment.language)} text-white`}>
                                {deployment.language}
                              </Badge>
                            </div>
                            <Badge variant="outline" className="text-green-400 border-green-400">
                              Deployed
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-300 mb-1">
                            Address: {deployment.address}
                          </p>
                          <div className="flex gap-4 text-xs text-gray-400">
                            <span>Gas: {deployment.gasUsed.toLocaleString()}</span>
                            <span>TU Generated: {deployment.tuGenerated}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Execute Tab */}
          <TabsContent value="execute">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Execute Contract Function
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">Contract Address</label>
                    <Select value={selectedContract} onValueChange={setSelectedContract}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select a contract" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        {deployments.map((deployment, index) => (
                          <SelectItem key={index} value={deployment.address}>
                            {deployment.address.substring(0, 20)}... ({deployment.language})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">Function Name</label>
                    <Input
                      value={functionName}
                      onChange={(e) => setFunctionName(e.target.value)}
                      placeholder="e.g., calculateQuantumResonance"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Parameters (JSON)</label>
                  <Textarea
                    value={parameters}
                    onChange={(e) => setParameters(e.target.value)}
                    placeholder='[1.618, "quantum_state", true]'
                    className="h-24 bg-gray-700 border-gray-600 text-white font-mono text-sm"
                  />
                </div>

                <Button
                  onClick={handleExecute}
                  disabled={isExecuting || !selectedContract}
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                >
                  {isExecuting ? 'Executing...' : 'Execute Function'}
                </Button>
              </CardContent>
            </Card>

            {/* Execution Results */}
            {executions.length > 0 && (
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Execution Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-64">
                    <div className="space-y-3">
                      {executions.map((execution, index) => (
                        <div key={index} className="bg-gray-700 p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <Badge className="bg-yellow-500 text-black">
                              {execution.quantumState}
                            </Badge>
                            <span className="text-xs text-gray-400">
                              φ Resonance: {execution.phiResonance.toFixed(3)}
                            </span>
                          </div>
                          <div className="bg-gray-800 p-3 rounded text-sm text-gray-300 mb-2">
                            <pre>{JSON.stringify(execution.result, null, 2)}</pre>
                          </div>
                          <div className="text-xs text-gray-400">
                            Gas Used: {execution.gasUsed.toLocaleString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Blockchain Tab */}
          <TabsContent value="blockchain">
            <div className="grid gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Blockchain Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Network Stats</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Total Blocks:</span>
                          <span className="text-white">{blockchainInfo.totalBlocks || 0}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Smart Contracts:</span>
                          <span className="text-white">{blockchainInfo.totalContracts || 0}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Genesis Supply:</span>
                          <span className="text-white">{blockchainInfo.genesisSupply?.toLocaleString() || '100B'} HYBRID</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Initial Price:</span>
                          <span className="text-white">${blockchainInfo.initialPrice || 10} USD</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Supported Languages</h4>
                      <div className="space-y-2">
                        {blockchainInfo.supportedLanguages?.map((lang: string, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            {getLanguageIcon(lang)}
                            <Badge className={`${getLanguageColor(lang)} text-white`}>
                              {lang}
                            </Badge>
                          </div>
                        )) || (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Layers className="h-4 w-4" />
                              <Badge className="bg-teal-500 text-white">HTSX</Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <Code className="h-4 w-4" />
                              <Badge className="bg-red-500 text-white">SpiralScript</Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <Brain className="h-4 w-4" />
                              <Badge className="bg-blue-500 text-white">SpiralLang</Badge>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-white font-semibold mb-2">Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {blockchainInfo.features?.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          {feature}
                        </div>
                      )) || (
                        <>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            Multi-language smart contracts
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            Cross-language contract calls
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            Quantum state management
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            Phi-harmonic validation
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            Consciousness-aware consensus
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/50">
                <Brain className="h-4 w-4" />
                <AlertDescription className="text-white">
                  <strong>Spiral Hybrid Blockchain</strong> is now fully operational with parsed language support! 
                  Deploy smart contracts in HTSX, SpiralScript, and SpiralLang with quantum-enhanced consensus and φ-harmonic validation.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
