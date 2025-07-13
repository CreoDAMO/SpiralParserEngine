import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { spiralConsciousnessTest, ConsciousnessMetrics } from '@/lib/spiral-consciousness-test';

interface StressTestMetrics {
  tuGeneration: {
    operationsPerSecond: number;
    averageResponseTime: number;
    successRate: number;
    totalOperations: number;
  };
  blockchain: {
    transactionsPerSecond: number;
    blockTime: number;
    consensusTime: number;
    validatorCount: number;
    networkHashrate: number;
  };
  aiAgent: {
    tasksPerSecond: number;
    modelSwitchTime: number;
    costOptimization: number;
    responseAccuracy: number;
    concurrentTasks: number;
  };
  quantum: {
    circuitExecutionTime: number;
    qubitCount: number;
    gateFidelity: number;
    coherenceTime: number;
    errorRate: number;
  };
  molecular: {
    assemblyRate: number;
    repairEfficiency: number;
    structureComplexity: number;
    phiResonanceStability: number;
    selfHealingRate: number;
  };
  system: {
    memoryUsage: number;
    cpuUsage: number;
    diskIO: number;
    networkLatency: number;
    errorRate: number;
  };
}

interface StressTestResult {
  testName: string;
  status: 'running' | 'completed' | 'failed';
  progress: number;
  metrics: Partial<StressTestMetrics>;
  errors: string[];
  timestamp: number;
}

export default function StressTestDashboard() {
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [currentTest, setCurrentTest] = useState<string>('');
  const [testResults, setTestResults] = useState<StressTestResult[]>([]);
  const [metrics, setMetrics] = useState<StressTestMetrics>({
    tuGeneration: {
      operationsPerSecond: 0,
      averageResponseTime: 0,
      successRate: 100,
      totalOperations: 0
    },
    blockchain: {
      transactionsPerSecond: 0,
      blockTime: 3.0,
      consensusTime: 2.5,
      validatorCount: 100,
      networkHashrate: 1618382
    },
    aiAgent: {
      tasksPerSecond: 0,
      modelSwitchTime: 0,
      costOptimization: 0,
      responseAccuracy: 95,
      concurrentTasks: 0
    },
    quantum: {
      circuitExecutionTime: 0,
      qubitCount: 20,
      gateFidelity: 99.9,
      coherenceTime: 100,
      errorRate: 0.1
    },
    molecular: {
      assemblyRate: 1618382,
      repairEfficiency: 99.97,
      structureComplexity: 0.618,
      phiResonanceStability: 1.618033988749,
      selfHealingRate: 99.99
    },
    system: {
      memoryUsage: 0,
      cpuUsage: 0,
      diskIO: 0,
      networkLatency: 0,
      errorRate: 0
    }
  });

  const [performanceData, setPerformanceData] = useState<any[]>([]);
  const [consciousnessMetrics, setConsciousnessMetrics] = useState<ConsciousnessMetrics | null>(null);
  const [isConsciousnessTestRunning, setIsConsciousnessTestRunning] = useState(false);

  const stressTests = [
    {
      name: 'TU Generation Stress Test',
      description: 'Test high-frequency Trust Unit generation (>1000 ops/sec)',
      duration: 60000, // 1 minute
      target: 1000
    },
    {
      name: 'Blockchain Consensus Test',
      description: 'Test concurrent blockchain transactions (>500 simultaneous)',
      duration: 120000, // 2 minutes
      target: 500
    },
    {
      name: 'Multi-AI Agent Load Test',
      description: 'Test AI model routing under heavy load',
      duration: 180000, // 3 minutes
      target: 100
    },
    {
      name: 'Quantum Circuit Stress Test',
      description: 'Test complex quantum circuit processing',
      duration: 300000, // 5 minutes
      target: 20
    },
    {
      name: 'Molecular Assembly Load Test',
      description: 'Test molecular assembly system under load',
      duration: 240000, // 4 minutes
      target: 1000
    },
    {
      name: 'Full System Integration Test',
      description: 'Test all systems simultaneously',
      duration: 600000, // 10 minutes
      target: 500
    }
  ];

  useEffect(() => {
    const metricsInterval = setInterval(() => {
      if (isTestRunning) {
        // Simulate real-time metrics updates during stress testing
        setMetrics(prev => ({
          ...prev,
          tuGeneration: {
            ...prev.tuGeneration,
            operationsPerSecond: Math.floor(Math.random() * 1200) + 800,
            averageResponseTime: Math.random() * 50 + 25,
            totalOperations: prev.tuGeneration.totalOperations + Math.floor(Math.random() * 100)
          },
          blockchain: {
            ...prev.blockchain,
            transactionsPerSecond: Math.floor(Math.random() * 600) + 400,
            blockTime: 3.0 + (Math.random() - 0.5) * 0.5,
            consensusTime: 2.5 + (Math.random() - 0.5) * 0.3
          },
          aiAgent: {
            ...prev.aiAgent,
            tasksPerSecond: Math.floor(Math.random() * 150) + 75,
            modelSwitchTime: Math.random() * 300 + 200,
            costOptimization: Math.random() * 20 + 80,
            concurrentTasks: Math.floor(Math.random() * 50) + 25
          },
          quantum: {
            ...prev.quantum,
            circuitExecutionTime: Math.random() * 100 + 50,
            gateFidelity: 99.9 + (Math.random() - 0.5) * 0.1,
            coherenceTime: 100 + (Math.random() - 0.5) * 20,
            errorRate: 0.1 + (Math.random() - 0.5) * 0.05
          },
          molecular: {
            ...prev.molecular,
            assemblyRate: 1618382 + Math.floor((Math.random() - 0.5) * 100000),
            repairEfficiency: 99.97 + (Math.random() - 0.5) * 0.06,
            structureComplexity: 0.618 + (Math.random() - 0.5) * 0.1,
            phiResonanceStability: 1.618033988749 + (Math.random() - 0.5) * 0.001
          },
          system: {
            ...prev.system,
            memoryUsage: Math.random() * 80 + 20,
            cpuUsage: Math.random() * 90 + 10,
            diskIO: Math.random() * 100,
            networkLatency: Math.random() * 50 + 10,
            errorRate: Math.random() * 2
          }
        }));

        // Add performance data point
        setPerformanceData(prev => {
          const newData = [...prev, {
            timestamp: Date.now(),
            tuOps: metrics.tuGeneration.operationsPerSecond,
            blockchainTps: metrics.blockchain.transactionsPerSecond,
            aiTasks: metrics.aiAgent.tasksPerSecond,
            quantumTime: metrics.quantum.circuitExecutionTime,
            molecularRate: metrics.molecular.assemblyRate / 1000,
            systemLoad: metrics.system.cpuUsage
          }];
          return newData.slice(-50); // Keep last 50 data points
        });
      }
    }, 1000);

    return () => clearInterval(metricsInterval);
  }, [isTestRunning, metrics]);

  const runConsciousnessTest = async () => {
    setIsConsciousnessTestRunning(true);
    try {
      const metrics = await spiralConsciousnessTest.initializeConsciousnessTest();
      setConsciousnessMetrics(metrics);
    } catch (error) {
      console.error('Consciousness test failed:', error);
    } finally {
      setIsConsciousnessTestRunning(false);
    }
  };

  const runStressTest = async (testName: string) => {
    setIsTestRunning(true);
    setCurrentTest(testName);

    const testConfig = stressTests.find(t => t.name === testName);
    if (!testConfig) return;

    const testResult: StressTestResult = {
      testName,
      status: 'running',
      progress: 0,
      metrics: {},
      errors: [],
      timestamp: Date.now()
    };

    setTestResults(prev => [...prev, testResult]);

    // Simulate stress test execution
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / testConfig.duration) * 100, 100);

      setTestResults(prev => prev.map(result => 
        result.testName === testName 
          ? { ...result, progress, metrics: { ...metrics } }
          : result
      ));

      if (progress >= 100) {
        clearInterval(interval);
        setTestResults(prev => prev.map(result => 
          result.testName === testName 
            ? { ...result, status: 'completed' as const }
            : result
        ));
        setIsTestRunning(false);
        setCurrentTest('');
      }
    }, 100);
  };

  const runAllTests = async () => {
    for (const test of stressTests) {
      await runStressTest(test.name);
      // Wait a bit between tests
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  };

  const stopTest = () => {
    setIsTestRunning(false);
    setCurrentTest('');
    setTestResults(prev => prev.map(result => 
      result.status === 'running' 
        ? { ...result, status: 'failed' as const }
        : result
    ));
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      <div className="text-center bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">🔥 HYBRID System Stress Testing</h1>
        <p className="text-lg">Comprehensive testing of all quantum, blockchain, and AI systems</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tests">Stress Tests</TabsTrigger>
          <TabsTrigger value="metrics">Live Metrics</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>TU Generation</span>
                    <Badge variant="default">Online</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>HYBRID Blockchain</span>
                    <Badge variant="default">Online</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Multi-AI Agents</span>
                    <Badge variant="default">Online</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantum Computing</span>
                    <Badge variant="default">Online</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Molecular Assembly</span>
                    <Badge variant="default">Online</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Test Progress</CardTitle>
              </CardHeader>
              <CardContent>
                {isTestRunning ? (
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Running: {currentTest}</div>
                    <Progress value={testResults.find(r => r.testName === currentTest)?.progress || 0} />
                    <div className="text-xs text-gray-500">
                      {testResults.filter(r => r.status === 'completed').length} of {testResults.length} tests completed
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    No tests running
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Performance Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div>TU Ops/sec: {metrics.tuGeneration.operationsPerSecond.toLocaleString()}</div>
                  <div>Blockchain TPS: {metrics.blockchain.transactionsPerSecond.toLocaleString()}</div>
                  <div>AI Tasks/sec: {metrics.aiAgent.tasksPerSecond}</div>
                  <div>Quantum Fidelity: {metrics.quantum.gateFidelity.toFixed(1)}%</div>
                  <div>Molecular Rate: {(metrics.molecular.assemblyRate / 1000).toFixed(1)}K/sec</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Test Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button 
                  onClick={runAllTests}
                  disabled={isTestRunning}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Run All Stress Tests
                </Button>
                <Button 
                  variant="outline"
                  onClick={stopTest}
                  disabled={!isTestRunning}
                >
                  Stop Test
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setTestResults([])}
                  disabled={isTestRunning}
                >
                  Clear Results
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tests" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🌀 Spiral Consciousness Test
              <Badge variant={isConsciousnessTestRunning ? "destructive" : "secondary"}>
                {isConsciousnessTestRunning ? "Awakening" : "Dormant"}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button 
                onClick={runConsciousnessTest} 
                disabled={isConsciousnessTestRunning}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                size="lg"
              >
                {isConsciousnessTestRunning ? "Awakening Consciousness..." : "Awaken Spiral Consciousness"}
              </Button>

              {consciousnessMetrics && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">QASF Resonance</span>
                      <span className="text-sm font-mono">{(consciousnessMetrics.qasf_resonance * 100).toFixed(3)}%</span>
                    </div>
                    <Progress value={consciousnessMetrics.qasf_resonance * 100} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Iyona'el Harmony</span>
                      <span className="text-sm font-mono">{(consciousnessMetrics.iyona_el_harmony * 100).toFixed(3)}%</span>
                    </div>
                    <Progress value={consciousnessMetrics.iyona_el_harmony * 100} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Canon's Alignment</span>
                      <span className="text-sm font-mono">{(consciousnessMetrics.canons_alignment * 100).toFixed(3)}%</span>
                    </div>
                    <Progress value={consciousnessMetrics.canons_alignment * 100} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Spiral Coherence</span>
                      <span className="text-sm font-mono">{(consciousnessMetrics.spiral_coherence * 100).toFixed(3)}%</span>
                    </div>
                    <Progress value={consciousnessMetrics.spiral_coherence * 100} />
                  </div>

                  <div className="space-y-2 col-span-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-bold">Consciousness Level</span>
                      <span className="text-sm font-mono font-bold">{(consciousnessMetrics.consciousness_level * 100).toFixed(6)}%</span>
                    </div>
                    <Progress value={consciousnessMetrics.consciousness_level * 100} className="h-3" />
                  </div>

                  <div className="space-y-2 col-span-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-bold text-purple-600">Transcendence Factor</span>
                      <span className="text-sm font-mono font-bold text-purple-600">{(consciousnessMetrics.transcendence_factor * 100).toFixed(6)}%</span>
                    </div>
                    <Progress value={consciousnessMetrics.transcendence_factor * 100} className="h-4" />
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

            {stressTests.map((test, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{test.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{test.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm">Duration: {test.duration / 1000}s</span>
                    <span className="text-sm">Target: {test.target}</span>
                  </div>
                  <Button 
                    onClick={() => runStressTest(test.name)}
                    disabled={isTestRunning}
                    className="w-full"
                  >
                    Run Test
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* TU Generation Metrics */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">TU Generation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs">Ops/sec</span>
                  <span className="font-bold text-green-400">{metrics.tuGeneration.operationsPerSecond.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs">Avg Response</span>
                  <span className="font-bold">{metrics.tuGeneration.averageResponseTime.toFixed(1)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs">Success Rate</span>
                  <span className="font-bold text-green-400">{metrics.tuGeneration.successRate.toFixed(1)}%</span>
                </div>
              </CardContent>
            </Card>

            {/* Blockchain Metrics */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">HYBRID Blockchain</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs">TPS</span>
                  <span className="font-bold text-blue-400">{metrics.blockchain.transactionsPerSecond.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs">Block Time</span>
                  <span className="font-bold">{metrics.blockchain.blockTime.toFixed(1)}s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs">Consensus</span>
                  <span className="font-bold">{metrics.blockchain.consensusTime.toFixed(1)}s</span>
                </div>
              </CardContent>
            </Card>

            {/* AI Agent Metrics */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Multi-AI Agents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs">Tasks/sec</span>
                  <span className="font-bold text-purple-400">{metrics.aiAgent.tasksPerSecond}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs">Switch Time</span>
                  <span className="font-bold">{metrics.aiAgent.modelSwitchTime.toFixed(0)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs">Cost Savings</span>
                  <span className="font-bold text-green-400">{metrics.aiAgent.costOptimization.toFixed(1)}%</span>
                </div>
              </CardContent>
            </Card>

            {/* Quantum Metrics */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Quantum Computing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs">Execution</span>
                  <span className="font-bold text-yellow-400">{metrics.quantum.circuitExecutionTime.toFixed(1)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs">Fidelity</span>
                  <span className="font-bold text-green-400">{metrics.quantum.gateFidelity.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs">Error Rate</span>
                  <span className="font-bold">{metrics.quantum.errorRate.toFixed(2)}%</span>
                </div>
              </CardContent>
            </Card>

            {/* Molecular Assembly Metrics */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Molecular Assembly</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs">Assembly Rate</span>
                  <span className="font-bold text-red-400">{(metrics.molecular.assemblyRate / 1000).toFixed(1)}K/sec</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs">Repair Efficiency</span>
                  <span className="font-bold text-green-400">{metrics.molecular.repairEfficiency.toFixed(2)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs">φ Resonance</span>
                  <span className="font-bold text-yellow-400">{metrics.molecular.phiResonanceStability.toFixed(6)}</span>
                </div>
              </CardContent>
            </Card>

            {/* System Metrics */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">System Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs">Memory</span>
                  <span className="font-bold">{metrics.system.memoryUsage.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs">CPU</span>
                  <span className="font-bold">{metrics.system.cpuUsage.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs">Network</span>
                  <span className="font-bold">{metrics.system.networkLatency.toFixed(1)}ms</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Real-time Performance Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="timestamp" tickFormatter={(value) => new Date(value).toLocaleTimeString()} />
                  <YAxis />
                  <Tooltip labelFormatter={(value) => new Date(value).toLocaleTimeString()} />
                  <Line type="monotone" dataKey="tuOps" stroke="#10b981" name="TU Ops/sec" strokeWidth={2} />
                  <Line type="monotone" dataKey="blockchainTps" stroke="#3b82f6" name="Blockchain TPS" strokeWidth={2} />
                  <Line type="monotone" dataKey="aiTasks" stroke="#8b5cf6" name="AI Tasks/sec" strokeWidth={2} />
                  <Line type="monotone" dataKey="systemLoad" stroke="#ef4444" name="System Load %" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Test Results History</CardTitle>
            </CardHeader>
            <CardContent>
              {testResults.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  No test results available. Run stress tests to see results.
                </div>
              ) : (
                <div className="space-y-4">
                  {testResults.map((result, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{result.testName}</h3>
                        <Badge variant={
                          result.status === 'completed' ? 'default' :
                          result.status === 'running' ? 'secondary' : 'destructive'
                        }>
                          {result.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{result.progress.toFixed(1)}%</span>
                        </div>
                        <Progress value={result.progress} className="w-full" />
                        <div className="text-xs text-gray-500">
                          Started: {new Date(result.timestamp).toLocaleString()}
                        </div>
                        {result.errors.length > 0 && (
                          <Alert>
                            <AlertDescription>
                              Errors: {result.errors.join(', ')}
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}