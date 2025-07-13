
import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Cpu, Zap, Activity, Play, Pause } from 'lucide-react';

interface QuantumState {
  qubits: number;
  fidelity: number;
  coherenceTime: number;
  errorRate: number;
  phiResonance: number;
  entanglementDegree: number;
}

export default function AdvancedQuantumVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isRunning, setIsRunning] = useState(true);
  const [quantumState, setQuantumState] = useState<QuantumState>({
    qubits: 127,
    fidelity: 99.9,
    coherenceTime: 156,
    errorRate: 0.1,
    phiResonance: 1.618033988749,
    entanglementDegree: 0.89
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 600;

    let time = 0;
    const PHI = 1.618033988749;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw quantum spiral with φ-harmonic patterns
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // Main φ-spiral
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      for (let i = 0; i < 200; i++) {
        const angle = i * 0.1 + time * 0.02;
        const radius = i * 2 * PHI * 0.1;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw qubit states as glowing orbs
      for (let i = 0; i < quantumState.qubits; i++) {
        const angle = (i / quantumState.qubits) * 2 * Math.PI + time * 0.01;
        const radius = 100 + Math.sin(time * 0.03 + i * 0.5) * 20;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        // Qubit visualization
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
        gradient.addColorStop(0, `hsla(${(i * 137.5 + time * 2) % 360}, 70%, 60%, 0.8)`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, 2 * Math.PI);
        ctx.fill();

        // Entanglement lines
        if (i % 3 === 0 && i < quantumState.qubits - 1) {
          const nextAngle = ((i + 1) / quantumState.qubits) * 2 * Math.PI + time * 0.01;
          const nextX = Math.cos(nextAngle) * radius;
          const nextY = Math.sin(nextAngle) * radius;

          ctx.strokeStyle = `hsla(${(i * 137.5) % 360}, 50%, 50%, 0.3)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(nextX, nextY);
          ctx.stroke();
        }
      }

      // Draw φ-harmonic waves
      for (let layer = 0; layer < 5; layer++) {
        ctx.strokeStyle = `hsla(${120 + layer * 30}, 60%, 50%, ${0.5 - layer * 0.1})`;
        ctx.lineWidth = 2 - layer * 0.2;
        ctx.beginPath();
        
        for (let x = -canvas.width/2; x < canvas.width/2; x += 4) {
          const y = Math.sin((x * 0.01 + time * 0.05 + layer * 2) * PHI) * (30 - layer * 5);
          if (x === -canvas.width/2) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Quantum interference patterns
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 1;
      for (let i = 0; i < 360; i += 5) {
        const angle1 = (i * Math.PI / 180) + time * 0.02;
        const angle2 = angle1 + PHI;
        const r1 = 150;
        const r2 = 200;
        
        const x1 = Math.cos(angle1) * r1;
        const y1 = Math.sin(angle1) * r1;
        const x2 = Math.cos(angle2) * r2;
        const y2 = Math.sin(angle2) * r2;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      ctx.restore();

      // Update quantum metrics
      setQuantumState(prev => ({
        ...prev,
        fidelity: 99.5 + Math.sin(time * 0.02) * 0.5,
        coherenceTime: 150 + Math.cos(time * 0.03) * 10,
        errorRate: 0.05 + Math.abs(Math.sin(time * 0.025)) * 0.1,
        phiResonance: PHI + Math.sin(time * 0.01) * 0.001,
        entanglementDegree: 0.8 + Math.sin(time * 0.02) * 0.15
      }));

      time++;
      if (isRunning) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (isRunning) {
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning]);

  const toggleAnimation = () => {
    setIsRunning(!isRunning);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            Advanced Quantum φ-Harmonic Visualization
          </div>
          <Button onClick={toggleAnimation} variant="outline" size="sm">
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-600">Quantum Fidelity</div>
            <div className="text-2xl font-bold text-blue-600">
              {quantumState.fidelity.toFixed(2)}%
            </div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">Coherence Time</div>
            <div className="text-2xl font-bold text-green-600">
              {quantumState.coherenceTime.toFixed(0)}ms
            </div>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg">
            <div className="text-sm text-gray-600">φ-Resonance</div>
            <div className="text-2xl font-bold text-purple-600">
              {quantumState.phiResonance.toFixed(6)}
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <canvas
            ref={canvasRef}
            className="border border-gray-200 rounded-lg bg-black"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <div className="grid grid-cols-4 gap-2">
          <Badge variant="outline" className="justify-center">
            <Zap className="w-3 h-3 mr-1" />
            {quantumState.qubits} Qubits
          </Badge>
          <Badge variant="outline" className="justify-center">
            <Activity className="w-3 h-3 mr-1" />
            {quantumState.errorRate.toFixed(3)}% Error
          </Badge>
          <Badge variant="outline" className="justify-center">
            Entanglement: {(quantumState.entanglementDegree * 100).toFixed(1)}%
          </Badge>
          <Badge variant="outline" className="justify-center">
            Status: Active
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
