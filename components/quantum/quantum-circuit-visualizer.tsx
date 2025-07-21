'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Atom, Zap, Activity, Play, Pause, RotateCcw } from 'lucide-react'

interface QuantumState {
  qubits: number
  coherence: number
  entanglement: number
  fidelity: number
  gates: number
  circuits: number
}

export function QuantumCircuitVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [isRunning, setIsRunning] = useState(true)
  const [quantumState, setQuantumState] = useState<QuantumState>({
    qubits: 127,
    coherence: 99.7,
    entanglement: 94.2,
    fidelity: 99.7,
    gates: 8429,
    circuits: 42
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    let time = 0

    const animate = () => {
      if (!isRunning) return

      // Clear canvas
      ctx.fillStyle = '#000011'
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Draw quantum circuits
      drawQuantumCircuits(ctx, canvas.offsetWidth, canvas.offsetHeight, time)

      // Draw qubits
      drawQubits(ctx, canvas.offsetWidth, canvas.offsetHeight, time)

      // Draw entanglement lines
      drawEntanglement(ctx, canvas.offsetWidth, canvas.offsetHeight, time)

      time += 0.02
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isRunning])

  const drawQuantumCircuits = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const rows = 8
    const cols = 12
    const cellWidth = width / cols
    const cellHeight = height / rows

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * cellWidth + cellWidth / 2
        const y = row * cellHeight + cellHeight / 2

        // Quantum gate visualization
        const pulse = Math.sin(time * 2 + row * 0.5 + col * 0.3) * 0.5 + 0.5
        const alpha = 0.3 + pulse * 0.7

        ctx.save()
        ctx.globalAlpha = alpha

        // Different gate types
        const gateType = (row + col) % 4
        switch (gateType) {
          case 0: // Hadamard gate
            ctx.fillStyle = '#9333ea'
            ctx.fillRect(x - 8, y - 8, 16, 16)
            ctx.fillStyle = '#ffffff'
            ctx.font = '10px monospace'
            ctx.textAlign = 'center'
            ctx.fillText('H', x, y + 3)
            break
          case 1: // CNOT gate
            ctx.strokeStyle = '#06b6d4'
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.arc(x, y, 6, 0, Math.PI * 2)
            ctx.stroke()
            ctx.beginPath()
            ctx.arc(x, y, 2, 0, Math.PI * 2)
            ctx.fill()
            break
          case 2: // Rotation gate
            ctx.fillStyle = '#f59e0b'
            ctx.beginPath()
            ctx.arc(x, y, 8, 0, Math.PI * 2)
            ctx.fill()
            ctx.fillStyle = '#000000'
            ctx.font = '8px monospace'
            ctx.textAlign = 'center'
            ctx.fillText('R', x, y + 2)
            break
          case 3: // Measurement
            ctx.strokeStyle = '#10b981'
            ctx.lineWidth = 2
            ctx.strokeRect(x - 8, y - 6, 16, 12)
            ctx.fillStyle = '#10b981'
            ctx.font = '8px monospace'
            ctx.textAlign = 'center'
            ctx.fillText('M', x, y + 2)
            break
        }

        ctx.restore()
      }

      // Draw qubit lines
      ctx.strokeStyle = '#4a5568'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, row * cellHeight + cellHeight / 2)
      ctx.lineTo(width, row * cellHeight + cellHeight / 2)
      ctx.stroke()
    }
  }

  const drawQubits = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const qubitCount = 8
    const spacing = height / (qubitCount + 1)

    for (let i = 0; i < qubitCount; i++) {
      const y = spacing * (i + 1)
      const phase = time + i * 0.5

      // Qubit state visualization (Bloch sphere representation)
      const stateX = Math.cos(phase) * 20
      const stateY = Math.sin(phase) * 20

      // Qubit circle
      ctx.strokeStyle = '#e53e3e'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(30, y, 20, 0, Math.PI * 2)
      ctx.stroke()

      // State vector
      ctx.strokeStyle = '#f6ad55'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(30, y)
      ctx.lineTo(30 + stateX, y + stateY)
      ctx.stroke()

      // State point
      ctx.fillStyle = '#f6ad55'
      ctx.beginPath()
      ctx.arc(30 + stateX, y + stateY, 3, 0, Math.PI * 2)
      ctx.fill()

      // Qubit label
      ctx.fillStyle = '#a0aec0'
      ctx.font = '12px monospace'
      ctx.textAlign = 'left'
      ctx.fillText(`|q${i}⟩`, 60, y + 4)
    }
  }

  const drawEntanglement = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const qubitCount = 8
    const spacing = height / (qubitCount + 1)

    // Draw entanglement connections
    for (let i = 0; i < qubitCount - 1; i += 2) {
      const y1 = spacing * (i + 1)
      const y2 = spacing * (i + 2)

      const pulse = Math.sin(time * 3 + i) * 0.5 + 0.5
      const alpha = 0.2 + pulse * 0.6

      ctx.save()
      ctx.globalAlpha = alpha
      ctx.strokeStyle = '#9f7aea'
      ctx.lineWidth = 2

      // Entanglement curve
      ctx.beginPath()
      ctx.moveTo(50, y1)
      ctx.bezierCurveTo(150, y1, 150, y2, 50, y2)
      ctx.stroke()

      // Entanglement particles
      const t = (time * 2 + i) % 1
      const curveY = y1 + (y2 - y1) * t
      const curveX = 50 + Math.sin(Math.PI * t) * 100

      ctx.fillStyle = '#9f7aea'
      ctx.beginPath()
      ctx.arc(curveX, curveY, 2, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }
  }

  const toggleSimulation = () => {
    setIsRunning(!isRunning)
  }

  const resetSimulation = () => {
    setQuantumState({
      qubits: 127,
      coherence: 99.7,
      entanglement: 94.2,
      fidelity: 99.7,
      gates: 8429,
      circuits: 42
    })
  }

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumState(prev => ({
        ...prev,
        coherence: Math.max(95, Math.min(100, prev.coherence + (Math.random() - 0.5) * 0.2)),
        entanglement: Math.max(90, Math.min(100, prev.entanglement + (Math.random() - 0.5) * 0.5)),
        fidelity: Math.max(99, Math.min(100, prev.fidelity + (Math.random() - 0.5) * 0.1)),
        gates: prev.gates + Math.floor(Math.random() * 10),
        circuits: prev.circuits + (Math.random() > 0.95 ? 1 : 0)
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-300">Qubit Count</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{quantumState.qubits}</div>
            <div className="text-xs text-gray-400">Active Qubits</div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-300">Coherence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">{quantumState.coherence.toFixed(1)}%</div>
            <Progress value={quantumState.coherence} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-300">Entanglement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">{quantumState.entanglement.toFixed(1)}%</div>
            <Progress value={quantumState.entanglement} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-300">Fidelity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">{quantumState.fidelity.toFixed(1)}%</div>
            <Progress value={quantumState.fidelity} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Card className="bg-black/40 border-purple-800/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-purple-300 flex items-center gap-2">
                <Atom className="h-5 w-5" />
                Quantum Circuit Visualization
              </CardTitle>
              <CardDescription>
                Real-time 127-qubit quantum circuit operations with φ-harmonic resonance
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-green-300 border-green-400">
                <Activity className="h-3 w-3 mr-1" />
                {isRunning ? 'ACTIVE' : 'PAUSED'}
              </Badge>
              <Button
                onClick={toggleSimulation}
                size="sm"
                variant="outline"
                className="text-purple-300 border-purple-400"
              >
                {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button
                onClick={resetSimulation}
                size="sm"
                variant="outline"
                className="text-purple-300 border-purple-400"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <canvas
              ref={canvasRef}
              className="w-full h-96 bg-gray-900 rounded-lg border border-purple-800/30"
              style={{ maxWidth: '100%' }}
            />
            <div className="absolute top-4 left-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span className="text-gray-300">Hadamard Gates</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-gray-300">CNOT Gates</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span className="text-gray-300">Rotation Gates</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 border border-green-500"></div>
                <span className="text-gray-300">Measurements</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-right">
              <div className="text-sm text-gray-300">Gates: {quantumState.gates.toLocaleString()}</div>
              <div className="text-sm text-gray-300">Circuits: {quantumState.circuits}</div>
              <div className="text-xs text-purple-400 mt-1">φ-resonance: 1.618</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}