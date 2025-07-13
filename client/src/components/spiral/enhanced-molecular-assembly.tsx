
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Atom, Zap, Activity, Settings, Play, Pause, RotateCcw } from 'lucide-react';

interface MolecularMetrics {
  assemblyRate: number;
  selfRepairRate: number;
  phiResonance: number;
  quantumBonds: number;
  covalentStability: number;
  dnaCascadeStatus: 'active' | 'standby' | 'critical';
  nanotechEfficiency: number;
}

interface NanoOperation {
  id: string;
  name: string;
  type: 'piezoelectric' | 'quantum_dots' | 'carbon_nanotubes' | 'graphene' | 'fullerenes' | 'molecular_motors';
  status: 'running' | 'completed' | 'error' | 'queued';
  progress: number;
  bondsFormed: number;
}

export default function EnhancedMolecularAssembly() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [metrics, setMetrics] = useState<MolecularMetrics>({
    assemblyRate: 1618382,
    selfRepairRate: 99.97,
    phiResonance: 1.618033988749,
    quantumBonds: 2654,
    covalentStability: 98.4,
    dnaCascadeStatus: 'active',
    nanotechEfficiency: 94.7
  });

  const [operations, setOperations] = useState<NanoOperation[]>([
    {
      id: '1',
      name: 'Piezoelectric Crystal Formation',
      type: 'piezoelectric',
      status: 'running',
      progress: 67,
      bondsFormed: 15420
    },
    {
      id: '2',
      name: 'Quantum Dot Array Assembly',
      type: 'quantum_dots',
      status: 'completed',
      progress: 100,
      bondsFormed: 8765
    },
    {
      id: '3',
      name: 'Carbon Nanotube Synthesis',
      type: 'carbon_nanotubes',
      status: 'running',
      progress: 43,
      bondsFormed: 22150
    },
    {
      id: '4',
      name: 'Graphene Layer Formation',
      type: 'graphene',
      status: 'queued',
      progress: 0,
      bondsFormed: 0
    }
  ]);

  const [isAssembling, setIsAssembling] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAssembling) {
        updateMetrics();
        updateOperations();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isAssembling]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 300;

    let time = 0;
    const PHI = 1.618033988749;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw molecular structures
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // DNA double helix structure
      for (let i = 0; i < 50; i++) {
        const angle = i * 0.3 + time * 0.02;
        const radius = 80;
        const height = i * 2 - 50;
        
        // First strand
        const x1 = Math.cos(angle) * radius;
        const y1 = height + Math.sin(angle) * 10;
        
        // Second strand
        const x2 = Math.cos(angle + Math.PI) * radius;
        const y2 = height + Math.sin(angle + Math.PI) * 10;

        // Nucleotide bases
        ctx.fillStyle = `hsla(${(i * 20) % 360}, 70%, 60%, 0.8)`;
        ctx.beginPath();
        ctx.arc(x1, y1, 3, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = `hsla(${(i * 20 + 180) % 360}, 70%, 60%, 0.8)`;
        ctx.beginPath();
        ctx.arc(x2, y2, 3, 0, 2 * Math.PI);
        ctx.fill();

        // Hydrogen bonds
        if (i % 3 === 0) {
          ctx.strokeStyle = 'rgba(100, 200, 255, 0.5)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }

      // Carbon nanotube visualization
      for (let layer = 0; layer < 3; layer++) {
        ctx.strokeStyle = `rgba(150, 150, 150, ${0.6 - layer * 0.2})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let i = 0; i < 360; i += 10) {
          const angle = (i * Math.PI / 180) + time * 0.01;
          const radius = 60 + layer * 15;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius * 0.3;
          
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Quantum dots
      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * 2 * Math.PI + time * 0.03;
        const radius = 120 + Math.sin(time * 0.02 + i) * 20;
        const x = Math.cos(angle) * radius * 0.7;
        const y = Math.sin(angle) * radius * 0.4;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 6);
        gradient.addColorStop(0, `hsla(${i * 18 + time}, 80%, 70%, 0.9)`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.fill();
      }

      ctx.restore();
      time++;
      if (isAssembling) {
        requestAnimationFrame(animate);
      }
    };

    if (isAssembling) {
      animate();
    }
  }, [isAssembling]);

  const updateMetrics = () => {
    setMetrics(prev => ({
      ...prev,
      assemblyRate: 1600000 + Math.random() * 50000,
      selfRepairRate: 99.5 + Math.random() * 0.5,
      phiResonance: 1.618 + Math.random() * 0.001,
      quantumBonds: prev.quantumBonds + Math.floor(Math.random() * 50),
      covalentStability: 97 + Math.random() * 3,
      nanotechEfficiency: 90 + Math.random() * 10
    }));
  };

  const updateOperations = () => {
    setOperations(prev => prev.map(op => {
      if (op.status === 'running' && op.progress < 100) {
        return {
          ...op,
          progress: Math.min(100, op.progress + Math.random() * 5),
          bondsFormed: op.bondsFormed + Math.floor(Math.random() * 100)
        };
      }
      if (op.status === 'running' && op.progress >= 100) {
        return { ...op, status: 'completed' as const };
      }
      return op;
    }));
  };

  const startOperation = (type: NanoOperation['type']) => {
    const newOp: NanoOperation = {
      id: Date.now().toString(),
      name: `${type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Assembly`,
      type,
      status: 'queued',
      progress: 0,
      bondsFormed: 0
    };
    
    setOperations(prev => [...prev, newOp]);
    
    setTimeout(() => {
      setOperations(prev => prev.map(op => 
        op.id === newOp.id ? { ...op, status: 'running' as const } : op
      ));
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      case 'queued': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getDnaStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'standby': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Atom className="w-5 h-5" />
              Enhanced Molecular Assembly System
            </div>
            <Button 
              onClick={() => setIsAssembling(!isAssembling)}
              variant="outline" 
              size="sm"
            >
              {isAssembling ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <div className="text-sm text-gray-600">Assembly Rate</div>
              <div className="text-xl font-bold text-green-600">
                {metrics.assemblyRate.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">bonds/second</div>
            </div>
            
            <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <div className="text-sm text-gray-600">Self-Repair Rate</div>
              <div className="text-xl font-bold text-blue-600">
                {metrics.selfRepairRate.toFixed(2)}%
              </div>
              <div className="text-xs text-gray-500">efficiency</div>
            </div>
            
            <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <div className="text-sm text-gray-600">φ-Resonance</div>
              <div className="text-xl font-bold text-purple-600">
                {metrics.phiResonance.toFixed(6)}
              </div>
              <div className="text-xs text-gray-500">perfect stability</div>
            </div>
            
            <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
              <div className="text-sm text-gray-600">Quantum Bonds</div>
              <div className="text-xl font-bold text-yellow-600">
                {metrics.quantumBonds.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">active</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Molecular Visualization</h3>
              <canvas
                ref={canvasRef}
                className="border border-gray-200 rounded-lg bg-black w-full"
                style={{ maxHeight: '300px' }}
              />
            </div>

            <div>
              <h3 className="font-semibold mb-3">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Covalent Stability</span>
                  <span className="font-medium">{metrics.covalentStability.toFixed(1)}%</span>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Nanotech Efficiency</span>
                  <span className="font-medium">{metrics.nanotechEfficiency.toFixed(1)}%</span>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">DNA Cascade Status</span>
                  <Badge className={`${getDnaStatusColor(metrics.dnaCascadeStatus)} text-white`}>
                    {metrics.dnaCascadeStatus.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <Alert className="mt-4">
                <Zap className="w-4 h-4" />
                <AlertDescription>
                  Molecular assembly operating at optimal φ-harmonic resonance.
                  Self-repair mechanisms active with covalent control.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-3">Active Nanotechnology Operations</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {operations.map(op => (
                <div key={op.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className={`${getStatusColor(op.status)} text-white text-xs`}>
                        {op.status}
                      </Badge>
                      <span className="text-sm font-medium">{op.name}</span>
                    </div>
                    <Progress value={op.progress} className="h-2" />
                    <div className="text-xs text-gray-500 mt-1">
                      Bonds formed: {op.bondsFormed.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Start New Operation</h4>
              <div className="grid grid-cols-3 gap-2">
                {['piezoelectric', 'quantum_dots', 'carbon_nanotubes', 'graphene', 'fullerenes', 'molecular_motors'].map(type => (
                  <Button
                    key={type}
                    onClick={() => startOperation(type as NanoOperation['type'])}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    {type.replace(/_/g, ' ')}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
