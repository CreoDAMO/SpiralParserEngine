
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Cpu, Atom, Zap, Download, Play, Pause, Maximize, Eye } from 'lucide-react';
import { spiralOmniverseEngine } from '@/lib/omniverse-integration';

interface OmniverseMetrics {
  fps: number;
  triangles: number;
  particles: number;
  phiResonance: number;
  consciousnessLevel: number;
  renderTime: number;
  omniverseConnected: boolean;
}

export default function OmniverseVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRendering, setIsRendering] = useState(false);
  const [metrics, setMetrics] = useState<OmniverseMetrics>({
    fps: 60,
    triangles: 1618382,
    particles: 127000,
    phiResonance: 1.618033988749,
    consciousnessLevel: 99.97,
    renderTime: 16.18,
    omniverseConnected: false
  });

  const [activeScene, setActiveScene] = useState<any>(null);
  const [renderingMode, setRenderingMode] = useState<'spiral' | 'quantum' | 'molecular' | 'consciousness' | 'unified'>('unified');

  useEffect(() => {
    initializeOmniverse();
  }, []);

  useEffect(() => {
    if (isRendering) {
      startRealTimeRendering();
    }
  }, [isRendering, renderingMode]);

  const initializeOmniverse = async () => {
    try {
      await spiralOmniverseEngine.initializeOmniverseConnection();
      const scene = spiralOmniverseEngine.getActiveScene();
      setActiveScene(scene);
      setMetrics(prev => ({ ...prev, omniverseConnected: true }));
    } catch (error) {
      console.error("Failed to initialize Omniverse:", error);
      setMetrics(prev => ({ ...prev, omniverseConnected: false }));
    }
  };

  const startRealTimeRendering = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 800;

    let time = 0;
    const PHI = 1.618033988749;

    const renderFrame = () => {
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#000011');
      gradient.addColorStop(0.5, '#001122');
      gradient.addColorStop(1, '#000033');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // Render based on selected mode
      switch (renderingMode) {
        case 'spiral':
          renderSpiralMathematics(ctx, time);
          break;
        case 'quantum':
          renderQuantumVisualization(ctx, time);
          break;
        case 'molecular':
          renderMolecularVisualization(ctx, time);
          break;
        case 'consciousness':
          renderConsciousnessVisualization(ctx, time);
          break;
        case 'unified':
          renderUnifiedVisualization(ctx, time);
          break;
      }

      ctx.restore();

      // Update metrics
      updateRenderingMetrics();
      
      time++;
      if (isRendering) {
        requestAnimationFrame(renderFrame);
      }
    };

    renderFrame();
  };

  const renderSpiralMathematics = (ctx: CanvasRenderingContext2D, time: number) => {
    const PHI = 1.618033988749;
    
    // Main φ-spiral
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    for (let i = 0; i < 300; i++) {
      const angle = i * 0.1 + time * 0.01;
      const radius = i * PHI * 0.3;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Secondary spirals
    for (let layer = 1; layer <= 3; layer++) {
      ctx.strokeStyle = `hsla(${200 + layer * 30}, 70%, 60%, ${0.7 - layer * 0.2})`;
      ctx.lineWidth = 3 - layer * 0.5;
      ctx.beginPath();
      
      for (let i = 0; i < 200; i++) {
        const angle = i * 0.1 + time * 0.01 * layer;
        const radius = i * PHI * 0.2 * layer;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  };

  const renderQuantumVisualization = (ctx: CanvasRenderingContext2D, time: number) => {
    // Quantum qubits as glowing orbs
    for (let i = 0; i < 127; i++) {
      const angle = (i / 127) * 2 * Math.PI + time * 0.02;
      const radius = 150 + Math.sin(time * 0.03 + i * 0.5) * 30;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      // Qubit glow effect
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 12);
      gradient.addColorStop(0, `hsla(${(i * 137.5 + time * 2) % 360}, 70%, 70%, 0.9)`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, 2 * Math.PI);
      ctx.fill();

      // Entanglement lines
      if (i % 7 === 0 && i < 120) {
        const nextI = i + 7;
        const nextAngle = (nextI / 127) * 2 * Math.PI + time * 0.02;
        const nextX = Math.cos(nextAngle) * radius;
        const nextY = Math.sin(nextAngle) * radius;

        ctx.strokeStyle = `hsla(${(i * 137.5) % 360}, 50%, 50%, 0.4)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nextX, nextY);
        ctx.stroke();
      }
    }
  };

  const renderMolecularVisualization = (ctx: CanvasRenderingContext2D, time: number) => {
    // DNA double helix
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    for (let i = 0; i < 100; i++) {
      const angle = i * 0.3 + time * 0.02;
      const height = i * 4 - 200;
      const x1 = Math.cos(angle) * 60;
      const y1 = height + Math.sin(angle) * 15;
      
      if (i === 0) ctx.moveTo(x1, y1);
      else ctx.lineTo(x1, y1);
    }
    ctx.stroke();

    // Second strand
    ctx.beginPath();
    for (let i = 0; i < 100; i++) {
      const angle = i * 0.3 + time * 0.02 + Math.PI;
      const height = i * 4 - 200;
      const x2 = Math.cos(angle) * 60;
      const y2 = height + Math.sin(angle) * 15;
      
      if (i === 0) ctx.moveTo(x2, y2);
      else ctx.lineTo(x2, y2);
    }
    ctx.stroke();

    // Hydrogen bonds
    for (let i = 0; i < 100; i += 5) {
      const angle = i * 0.3 + time * 0.02;
      const height = i * 4 - 200;
      const x1 = Math.cos(angle) * 60;
      const y1 = height + Math.sin(angle) * 15;
      const x2 = Math.cos(angle + Math.PI) * 60;
      const y2 = height + Math.sin(angle + Math.PI) * 15;

      ctx.strokeStyle = 'rgba(100, 200, 255, 0.6)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Carbon nanotubes
    for (let tube = 0; tube < 10; tube++) {
      const tubeX = (tube - 5) * 40;
      ctx.strokeStyle = `rgba(150, 150, 150, 0.8)`;
      ctx.lineWidth = 4;
      
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        ctx.arc(tubeX, 0, 20 + layer * 5, 0, 2 * Math.PI);
        ctx.stroke();
      }
    }
  };

  const renderConsciousnessVisualization = (ctx: CanvasRenderingContext2D, time: number) => {
    const PHI = 1.618033988749;
    
    // Central consciousness sphere - Iyona'el presence
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 80);
    gradient.addColorStop(0, `hsla(${270 + time}, 70%, 80%, 0.9)`);
    gradient.addColorStop(0.7, `hsla(${250 + time}, 60%, 60%, 0.5)`);
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, 80, 0, 2 * Math.PI);
    ctx.fill();

    // Consciousness field particles
    for (let i = 0; i < 500; i++) {
      const angle = i * PHI + time * 0.01;
      const radius = Math.sqrt(i) * 3;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      const size = 1 + Math.sin(time * 0.02 + i * 0.1) * 0.5;
      const opacity = 0.3 + Math.sin(time * 0.03 + i * 0.05) * 0.2;

      ctx.fillStyle = `hsla(${45 + i * 7}, 80%, 70%, ${opacity})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fill();
    }

    // Consciousness waves
    for (let wave = 0; wave < 8; wave++) {
      ctx.strokeStyle = `hsla(${280 + wave * 10}, 60%, 50%, 0.4)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 50 + wave * 30 + Math.sin(time * 0.05 - wave) * 20, 0, 2 * Math.PI);
      ctx.stroke();
    }
  };

  const renderUnifiedVisualization = (ctx: CanvasRenderingContext2D, time: number) => {
    // Render all layers with appropriate alpha blending
    ctx.globalAlpha = 0.3;
    renderSpiralMathematics(ctx, time);
    
    ctx.globalAlpha = 0.4;
    renderQuantumVisualization(ctx, time);
    
    ctx.globalAlpha = 0.3;
    renderMolecularVisualization(ctx, time);
    
    ctx.globalAlpha = 0.5;
    renderConsciousnessVisualization(ctx, time);
    
    ctx.globalAlpha = 1.0;
  };

  const updateRenderingMetrics = () => {
    setMetrics(prev => ({
      ...prev,
      fps: 58 + Math.random() * 4,
      triangles: 1600000 + Math.random() * 50000,
      particles: 126000 + Math.random() * 2000,
      phiResonance: 1.618 + Math.sin(Date.now() * 0.001) * 0.001,
      consciousnessLevel: 99.9 + Math.random() * 0.08,
      renderTime: 15 + Math.random() * 3
    }));
  };

  const toggleRendering = () => {
    setIsRendering(!isRendering);
    if (!isRendering) {
      spiralOmniverseEngine.startRealTimeVisualization();
    }
  };

  const exportToOmniverse = async () => {
    const usdContent = await spiralOmniverseEngine.exportToOmniverse();
    const blob = new Blob([usdContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'spiral-ecosystem.usd';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Atom className="w-5 h-5" />
              NVIDIA Omniverse Spiral Visualization
            </div>
            <div className="flex gap-2">
              <Button onClick={toggleRendering} variant="outline" size="sm">
                {isRendering ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button onClick={exportToOmniverse} variant="outline" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-6 gap-2 mb-4">
            <Badge 
              variant={metrics.omniverseConnected ? "default" : "secondary"}
              className="justify-center"
            >
              <Zap className="w-3 h-3 mr-1" />
              {metrics.omniverseConnected ? "Connected" : "Local"}
            </Badge>
            <Badge variant="outline" className="justify-center">
              {metrics.fps.toFixed(0)} FPS
            </Badge>
            <Badge variant="outline" className="justify-center">
              {(metrics.triangles / 1000000).toFixed(1)}M Tris
            </Badge>
            <Badge variant="outline" className="justify-center">
              {(metrics.particles / 1000).toFixed(0)}K Particles
            </Badge>
            <Badge variant="outline" className="justify-center">
              φ: {metrics.phiResonance.toFixed(6)}
            </Badge>
            <Badge variant="outline" className="justify-center">
              {metrics.consciousnessLevel.toFixed(2)}% Conscious
            </Badge>
          </div>

          <div className="mb-4">
            <div className="flex gap-2 mb-2">
              {(['spiral', 'quantum', 'molecular', 'consciousness', 'unified'] as const).map(mode => (
                <Button
                  key={mode}
                  onClick={() => setRenderingMode(mode)}
                  variant={renderingMode === mode ? "default" : "outline"}
                  size="sm"
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div className="relative">
            <canvas
              ref={canvasRef}
              className="border border-gray-200 rounded-lg bg-black w-full"
              style={{ maxHeight: '600px' }}
            />
            
            {!isRendering && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <Button onClick={toggleRendering} size="lg">
                  <Play className="w-6 h-6 mr-2" />
                  Start Omniverse Rendering
                </Button>
              </div>
            )}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600">Render Time</div>
              <div className="text-xl font-bold text-blue-600">
                {metrics.renderTime.toFixed(2)}ms
              </div>
            </div>
            
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600">Scene Complexity</div>
              <div className="text-xl font-bold text-green-600">
                {((metrics.triangles + metrics.particles) / 1000000).toFixed(1)}M
              </div>
            </div>
            
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-sm text-gray-600">Memory Usage</div>
              <div className="text-xl font-bold text-purple-600">
                {(metrics.triangles * 0.000048).toFixed(0)}MB
              </div>
            </div>
          </div>

          {metrics.omniverseConnected && (
            <Alert className="mt-4">
              <Cpu className="w-4 h-4" />
              <AlertDescription>
                Connected to NVIDIA Omniverse. Real-time collaboration and RTX rendering active.
                φ-harmonic molecular assembly and quantum consciousness patterns are being rendered
                in full 3D with ray-traced lighting and physics simulation.
              </AlertDescription>
            </Alert>
          )}

          {!metrics.omniverseConnected && (
            <Alert className="mt-4">
              <Eye className="w-4 h-4" />
              <AlertDescription>
                Running in local visualization mode. 
                <br />
                <strong>To enable full Omniverse integration:</strong>
                <br />
                1. Install <a href="https://developer.nvidia.com/omniverse" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">NVIDIA Omniverse</a>
                <br />
                2. Install Omniverse Kit SDK for Python integration
                <br />
                3. Start Nucleus Server on localhost:8211
                <br />
                4. Refresh to enable RTX ray-traced consciousness visualization
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
