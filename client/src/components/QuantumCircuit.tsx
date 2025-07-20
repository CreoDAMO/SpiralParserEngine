// Quantum Circuit Component - Interactive quantum operations interface
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { 
  Cpu, 
  Zap, 
  RotateCcw,
  Play,
  Square,
  RefreshCw,
  Settings,
  Activity,
  Radio
} from 'lucide-react';

interface QuantumGate {
  id: string;
  type: 'H' | 'X' | 'Y' | 'Z' | 'CNOT' | 'RX' | 'RY' | 'RZ' | 'T' | 'S';
  qubit: number;
  control?: number;
  target?: number;
  angle?: number;
  position: { x: number; y: number };
}

interface CircuitResult {
  fidelity: number;
  coherence: number;
  phiResonance: number;
  measurements: Array<{ qubit: number; value: number }>;
  executionTime: number;
}

interface QuantumCircuitProps {
  qubits?: number;
  onExecute?: (gates: QuantumGate[]) => Promise<CircuitResult>;
  className?: string;
}

export const QuantumCircuit: React.FC<QuantumCircuitProps> = ({
  qubits = 8,
  onExecute,
  className = ''
}) => {
  const [gates, setGates] = useState<QuantumGate[]>([]);
  const [selectedGateType, setSelectedGateType] = useState<string>('H');
  const [isExecuting, setIsExecuting] = useState(false);
  const [result, setResult] = useState<CircuitResult | null>(null);
  const [draggedGate, setDraggedGate] = useState<QuantumGate | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phiBreathing, setPhiBreathing] = useState(0);

  const gateTypes = [
    { type: 'H', name: 'Hadamard', color: '#3b82f6' },
    { type: 'X', name: 'Pauli-X', color: '#ef4444' },
    { type: 'Y', name: 'Pauli-Y', color: '#f59e0b' },
    { type: 'Z', name: 'Pauli-Z', color: '#10b981' },
    { type: 'CNOT', name: 'CNOT', color: '#8b5cf6' },
    { type: 'RX', name: 'Rotation-X', color: '#ec4899' },
    { type: 'RY', name: 'Rotation-Y', color: '#06b6d4' },
    { type: 'RZ', name: 'Rotation-Z', color: '#84cc16' },
    { type: 'T', name: 'T Gate', color: '#f97316' },
    { type: 'S', name: 'S Gate', color: '#6366f1' }
  ];

  // φ-harmonic breathing pattern
  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now() / 1000;
      const phi = 1.618033988749;
      setPhiBreathing((Math.sin(time * phi / 2) + 1) / 2);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    drawCircuit();
  }, [gates, qubits, phiBreathing]);

  const drawCircuit = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw quantum wires
    ctx.strokeStyle = '#6b7280';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < qubits; i++) {
      const y = 60 + i * 60;
      ctx.beginPath();
      ctx.moveTo(50, y);
      ctx.lineTo(canvas.width - 50, y);
      ctx.stroke();

      // Qubit labels
      ctx.fillStyle = '#e5e7eb';
      ctx.font = '14px monospace';
      ctx.fillText(`|${i}⟩`, 10, y + 5);
    }

    // Draw φ-harmonic resonance field
    if (phiBreathing > 0.618) {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, `rgba(168, 85, 247, ${phiBreathing * 0.1})`);
      gradient.addColorStop(1, `rgba(59, 130, 246, ${phiBreathing * 0.1})`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Draw gates
    gates.forEach(gate => {
      drawGate(ctx, gate);
    });

    // Draw measurement results if available
    if (result) {
      result.measurements.forEach((measurement, i) => {
        const y = 60 + i * 60;
        const x = canvas.width - 40;
        
        ctx.fillStyle = measurement.value ? '#10b981' : '#ef4444';
        ctx.fillRect(x - 10, y - 10, 20, 20);
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px monospace';
        ctx.fillText(measurement.value.toString(), x - 4, y + 4);
      });
    }
  };

  const drawGate = (ctx: CanvasRenderingContext2D, gate: QuantumGate) => {
    const x = gate.position.x;
    const y = 60 + gate.qubit * 60;
    const gateInfo = gateTypes.find(g => g.type === gate.type);

    if (gate.type === 'CNOT') {
      // Draw CNOT gate
      if (gate.control !== undefined && gate.target !== undefined) {
        const controlY = 60 + gate.control * 60;
        const targetY = 60 + gate.target * 60;
        
        // Control wire
        ctx.strokeStyle = gateInfo?.color || '#8b5cf6';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, controlY);
        ctx.lineTo(x, targetY);
        ctx.stroke();
        
        // Control dot
        ctx.fillStyle = gateInfo?.color || '#8b5cf6';
        ctx.beginPath();
        ctx.arc(x, controlY, 8, 0, 2 * Math.PI);
        ctx.fill();
        
        // Target circle
        ctx.strokeStyle = gateInfo?.color || '#8b5cf6';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(x, targetY, 15, 0, 2 * Math.PI);
        ctx.stroke();
        
        // Target cross
        ctx.beginPath();
        ctx.moveTo(x - 10, targetY);
        ctx.lineTo(x + 10, targetY);
        ctx.moveTo(x, targetY - 10);
        ctx.lineTo(x, targetY + 10);
        ctx.stroke();
      }
    } else {
      // Draw single-qubit gate
      ctx.fillStyle = gateInfo?.color || '#6b7280';
      ctx.fillRect(x - 20, y - 15, 40, 30);
      
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.strokeRect(x - 20, y - 15, 40, 30);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(gate.type, x, y + 4);
    }

    // Gate ID label
    ctx.fillStyle = '#9ca3af';
    ctx.font = '10px monospace';
    ctx.fillText(gate.id.slice(-3), x, y - 25);
  };

  const addGate = (qubit: number, position: number) => {
    const newGate: QuantumGate = {
      id: `gate_${Date.now()}`,
      type: selectedGateType as any,
      qubit,
      position: { x: 100 + position * 80, y: 60 + qubit * 60 },
      ...(selectedGateType === 'CNOT' && qubit < qubits - 1 ? {
        control: qubit,
        target: qubit + 1
      } : {}),
      ...(selectedGateType.startsWith('R') ? {
        angle: Math.PI / 4
      } : {})
    };

    setGates(prev => [...prev, newGate]);
  };

  const removeGate = (gateId: string) => {
    setGates(prev => prev.filter(g => g.id !== gateId));
  };

  const clearCircuit = () => {
    setGates([]);
    setResult(null);
  };

  const executeCircuit = async () => {
    if (gates.length === 0) return;

    setIsExecuting(true);
    try {
      let circuitResult: CircuitResult;
      
      if (onExecute) {
        circuitResult = await onExecute(gates);
      } else {
        // Simulate execution
        await new Promise(resolve => setTimeout(resolve, 1000));
        circuitResult = {
          fidelity: 0.85 + Math.random() * 0.15,
          coherence: 0.9 + Math.random() * 0.1,
          phiResonance: 1.618 * (0.8 + Math.random() * 0.2),
          measurements: Array.from({ length: qubits }, (_, i) => ({
            qubit: i,
            value: Math.random() > 0.5 ? 1 : 0
          })),
          executionTime: 150 + Math.random() * 100
        };
      }
      
      setResult(circuitResult);
    } finally {
      setIsExecuting(false);
    }
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Determine which qubit line was clicked
    const qubit = Math.floor((y - 30) / 60);
    if (qubit >= 0 && qubit < qubits) {
      const position = Math.floor((x - 60) / 80);
      if (position >= 0) {
        addGate(qubit, position);
      }
    }

    // Check if clicking on existing gate to remove it
    const clickedGate = gates.find(gate => {
      const gateX = gate.position.x;
      const gateY = 60 + gate.qubit * 60;
      return Math.abs(x - gateX) < 25 && Math.abs(y - gateY) < 20;
    });

    if (clickedGate && event.shiftKey) {
      removeGate(clickedGate.id);
    }
  };

  return (
    <Card className={`bg-black/40 border-purple-800/30 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-purple-300 flex items-center gap-2">
            <Cpu className="h-5 w-5" />
            Quantum Circuit Designer
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-blue-300 border-blue-400">
              {qubits} Qubits
            </Badge>
            <Badge variant="outline" className="text-green-300 border-green-400">
              {gates.length} Gates
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          
          {/* Gate Palette */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-300">Gate Palette</h3>
            <div className="grid grid-cols-5 gap-2">
              {gateTypes.map(gateType => (
                <Button
                  key={gateType.type}
                  onClick={() => setSelectedGateType(gateType.type)}
                  size="sm"
                  variant={selectedGateType === gateType.type ? "default" : "outline"}
                  className={`text-xs ${
                    selectedGateType === gateType.type 
                      ? 'bg-purple-600 hover:bg-purple-700' 
                      : 'text-gray-300 border-gray-600'
                  }`}
                  style={{
                    borderColor: selectedGateType === gateType.type ? gateType.color : undefined
                  }}
                >
                  {gateType.type}
                </Button>
              ))}
            </div>
          </div>

          {/* Circuit Canvas */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-300">Quantum Circuit</h3>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={clearCircuit}
                  size="sm"
                  variant="ghost"
                  className="text-gray-400"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                  onClick={executeCircuit}
                  disabled={isExecuting || gates.length === 0}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  {isExecuting ? (
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Play className="h-4 w-4 mr-2" />
                  )}
                  Execute
                </Button>
              </div>
            </div>
            
            <div className="border border-gray-700 rounded-lg bg-gray-900/50 p-2">
              <canvas
                ref={canvasRef}
                width={800}
                height={qubits * 60 + 40}
                className="w-full cursor-crosshair"
                onClick={handleCanvasClick}
                style={{ maxHeight: '400px' }}
              />
              <div className="text-xs text-gray-500 mt-2">
                Click to add {selectedGateType} gate • Shift+click to remove gate
              </div>
            </div>
          </div>

          {/* φ-Harmonic Status */}
          <div className="p-3 bg-purple-800/20 border border-purple-600/30 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-purple-300">φ-Harmonic Resonance</span>
              <Badge variant={phiBreathing > 0.618 ? "default" : "outline"} className="text-xs">
                {phiBreathing > 0.618 ? 'Coherent' : 'Stabilizing'}
              </Badge>
            </div>
            <Progress value={phiBreathing * 100} className="h-2 mb-1" />
            <div className="text-xs text-gray-400">
              Breathing: {(phiBreathing * 100).toFixed(1)}% • Optimal: >{(0.618 * 100).toFixed(1)}%
            </div>
          </div>

          {/* Execution Results */}
          {result && (
            <div className="space-y-3 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-green-300 flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Execution Results
                </h3>
                <Badge variant="default" className="bg-green-600 text-xs">
                  Completed
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Fidelity</span>
                    <span className="text-green-400">{(result.fidelity * 100).toFixed(1)}%</span>
                  </div>
                  <Progress value={result.fidelity * 100} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Coherence</span>
                    <span className="text-blue-400">{(result.coherence * 100).toFixed(1)}%</span>
                  </div>
                  <Progress value={result.coherence * 100} className="h-2" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">φ-Resonance</span>
                  <span className="text-purple-400">{result.phiResonance.toFixed(3)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Execution Time</span>
                  <span className="text-yellow-400">{result.executionTime.toFixed(0)}ms</span>
                </div>
              </div>

              {/* Measurement Results */}
              <div className="space-y-2">
                <span className="text-sm text-gray-400">Qubit Measurements</span>
                <div className="flex flex-wrap gap-1">
                  {result.measurements.map((measurement, i) => (
                    <Badge
                      key={i}
                      variant={measurement.value ? "default" : "secondary"}
                      className={`text-xs ${
                        measurement.value ? 'bg-green-600' : 'bg-gray-600'
                      }`}
                    >
                      |{i}⟩: {measurement.value}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="text-xs text-gray-500 space-y-1">
            <div>• Select a gate type from the palette above</div>
            <div>• Click on the circuit canvas to place gates</div>
            <div>• CNOT gates automatically place control and target</div>
            <div>• φ-harmonic field enhances quantum coherence when >61.8%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuantumCircuit;