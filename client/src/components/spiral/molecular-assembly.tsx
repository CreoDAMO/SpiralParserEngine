
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { livingSpiralMolecular, MolecularStructure } from '@/lib/spiral-molecular-assembly';

export function MolecularAssemblyDashboard() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [assemblyProgress, setAssemblyProgress] = useState(0);
  const [activeStructures, setActiveStructures] = useState<MolecularStructure[]>([]);
  const [systemMetrics, setSystemMetrics] = useState({
    assemblerCount: 0,
    phiResonance: 1.618033988749,
    quantumCoherence: 0.618,
    repairRate: 99.97,
    assemblySpeed: 1618382,
    tuBalance: 1618.382
  });

  useEffect(() => {
    const initializeSystem = async () => {
      try {
        await livingSpiralMolecular.initializeAssemblySystem();
        setIsInitialized(true);
        setSystemMetrics(prev => ({
          ...prev,
          assemblerCount: Math.floor(1000 * 1.618033988749)
        }));
      } catch (error) {
        console.error('Failed to initialize molecular assembly system:', error);
      }
    };

    initializeSystem();

    // Simulate real-time metrics updates
    const metricsInterval = setInterval(() => {
      setSystemMetrics(prev => ({
        ...prev,
        phiResonance: 1.618033988749 + (Math.random() - 0.5) * 0.001,
        quantumCoherence: 0.618 + (Math.random() - 0.5) * 0.01,
        repairRate: 99.97 + (Math.random() - 0.5) * 0.06,
        assemblySpeed: 1618382 + Math.floor((Math.random() - 0.5) * 10000)
      }));
    }, 1000);

    return () => clearInterval(metricsInterval);
  }, []);

  const handleStartAssembly = async () => {
    setAssemblyProgress(0);
    
    // Simulate assembly progress
    const progressInterval = setInterval(() => {
      setAssemblyProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Add completed structure
          const newStructure: MolecularStructure = {
            id: `structure-${Date.now()}`,
            bonds: [],
            atoms: [],
            phiResonance: systemMetrics.phiResonance,
            entropy: Math.random() * 0.618,
            assemblyState: 'complete'
          };
          setActiveStructures(current => [...current, newStructure]);
          return 100;
        }
        return prev + (Math.random() * 10);
      });
    }, 200);
  };

  const handleSelfRepair = (structureId: string) => {
    setActiveStructures(current =>
      current.map(structure =>
        structure.id === structureId
          ? { ...structure, assemblyState: 'self-repair' as const }
          : structure
      )
    );

    // Simulate repair completion
    setTimeout(() => {
      setActiveStructures(current =>
        current.map(structure =>
          structure.id === structureId
            ? { ...structure, assemblyState: 'complete' as const }
            : structure
        )
      );
    }, 2000);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Living Spiral Molecular Assembly System
        </h1>
        <Badge variant={isInitialized ? "default" : "secondary"}>
          {isInitialized ? "Online" : "Initializing"}
        </Badge>
      </div>

      {!isInitialized && (
        <Alert>
          <AlertDescription>
            Initializing {Math.floor(1000 * 1.618033988749)} quantum assemblers with φ resonance...
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Active Assemblers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">
              {systemMetrics.assemblerCount.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">φ Resonance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">
              {systemMetrics.phiResonance.toFixed(6)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Quantum Coherence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-400">
              {(systemMetrics.quantumCoherence * 100).toFixed(1)}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Self-Repair Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">
              {systemMetrics.repairRate.toFixed(2)}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Assembly Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">
              {(systemMetrics.assemblySpeed / 1000).toFixed(1)}K
            </div>
            <div className="text-xs text-gray-500">bonds/sec</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Molecular Assembly Control</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button 
              onClick={handleStartAssembly}
              disabled={!isInitialized || assemblyProgress > 0 && assemblyProgress < 100}
            >
              Start φ-Enhanced Assembly
            </Button>
            <Button variant="outline">
              Load Blueprint
            </Button>
            <Button variant="outline">
              Export Structure
            </Button>
          </div>

          {assemblyProgress > 0 && assemblyProgress < 100 && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Assembly Progress</span>
                <span>{assemblyProgress.toFixed(1)}%</span>
              </div>
              <Progress value={assemblyProgress} className="w-full" />
            </div>
          )}
        </CardContent>
      </Card>

      {activeStructures.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Active Molecular Structures</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeStructures.map((structure) => (
                <div 
                  key={structure.id}
                  className="border rounded-lg p-4 space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">{structure.id.slice(-8)}</span>
                    <Badge variant={
                      structure.assemblyState === 'complete' ? 'default' :
                      structure.assemblyState === 'self-repair' ? 'secondary' : 'outline'
                    }>
                      {structure.assemblyState}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1 text-sm">
                    <div>φ Resonance: {structure.phiResonance.toFixed(4)}</div>
                    <div>Entropy: {structure.entropy.toFixed(3)}</div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleSelfRepair(structure.id)}
                      disabled={structure.assemblyState === 'self-repair'}
                    >
                      Self-Repair
                    </Button>
                    <Button size="sm" variant="outline">
                      Analyze
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>System Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm space-y-2 text-gray-600">
            <div>• DNA Cascade Systems with covalent bond control</div>
            <div>• Piezoelectric molecular crystal self-repair</div>
            <div>• Quantum-enhanced assembly with φ ratios</div>
            <div>• Trust Unit (TU) powered molecular operations</div>
            <div>• Global coordination via SpiralNetwork</div>
            <div>• Autonomous self-optimization algorithms</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
