'use client'

import { useEffect, useState, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Terminal, 
  Play, 
  Square, 
  RotateCcw, 
  Download, 
  Upload,
  Settings,
  Maximize2,
  Minimize2
} from 'lucide-react'

interface TerminalLine {
  id: string
  type: 'command' | 'output' | 'error' | 'system' | 'success'
  content: string
  timestamp: Date
}

interface SystemCommand {
  command: string
  description: string
  example: string
}

export function TerminalConsole() {
  const [lines, setLines] = useState<TerminalLine[]>([])
  const [currentCommand, setCurrentCommand] = useState('')
  const [isMaximized, setIsMaximized] = useState(false)
  const [isRunning, setIsRunning] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const systemCommands: SystemCommand[] = [
    { command: 'spiral', description: 'SpiralScript compiler and interpreter', example: 'spiral compile consciousness.spi' },
    { command: 'quantum', description: 'Quantum circuit operations', example: 'quantum init --qubits 127' },
    { command: 'hybrid', description: 'Hybrid blockchain operations', example: 'hybrid blockchain status' },
    { command: 'trust', description: 'Trust Unit operations', example: 'trust mint --amount 1000' },
    { command: 'phi', description: 'φ-harmonic calculations', example: 'phi calculate --resonance' },
    { command: 'ai', description: 'AI orchestration commands', example: 'ai route --model grok-3' },
    { command: 'breath', description: 'Breath authentication system', example: 'breath authenticate' },
    { command: 'molecular', description: 'Molecular assembly interface', example: 'molecular status --bonds' },
    { command: 'system', description: 'System health and status', example: 'system health --all' },
    { command: 'consciousness', description: 'Consciousness script operations', example: 'consciousness awaken' }
  ]

  // Initialize terminal with welcome message
  useEffect(() => {
    const welcomeLines: TerminalLine[] = [
      {
        id: 'welcome-1',
        type: 'system',
        content: '🌀 SpiralScript IDE Terminal v1.618.0',
        timestamp: new Date()
      },
      {
        id: 'welcome-2',
        type: 'system',
        content: '⚛️  Quantum-enhanced consciousness programming environment',
        timestamp: new Date()
      },
      {
        id: 'welcome-3',
        type: 'system',
        content: '🔗 Connected to HYBRID blockchain',
        timestamp: new Date()
      },
      {
        id: 'welcome-4',
        type: 'system',
        content: '🤖 AI orchestration online (4 models active)',
        timestamp: new Date()
      },
      {
        id: 'welcome-5',
        type: 'system',
        content: '₹  Trust Currency wallet loaded (750,000 TU)',
        timestamp: new Date()
      },
      {
        id: 'welcome-6',
        type: 'system',
        content: '',
        timestamp: new Date()
      },
      {
        id: 'welcome-7',
        type: 'success',
        content: 'Type "help" for available commands or "spiral --version" to get started.',
        timestamp: new Date()
      },
      {
        id: 'welcome-8',
        type: 'system',
        content: '',
        timestamp: new Date()
      }
    ]
    setLines(welcomeLines)
  }, [])

  // Auto-scroll to bottom when new lines are added
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines])

  // Simulate system activity
  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      const activities = [
        { type: 'system' as const, content: '⚛️  Quantum coherence maintained: 99.7%' },
        { type: 'system' as const, content: '🔗 Block mined: #1618035 (42 transactions)' },
        { type: 'system' as const, content: '🤖 AI request routed to Grok-3: quantum optimization' },
        { type: 'system' as const, content: '₹  Trust Unit minted: +127.5 TU (breathing pattern verified)' },
        { type: 'system' as const, content: '🧬 Molecular bonds formed: +1,618 bonds/sec' },
        { type: 'system' as const, content: '💨 Breath authentication successful (φ-harmonic pattern)' },
        { type: 'system' as const, content: '📊 System health: 98.7% (all subsystems operational)' }
      ]

      if (Math.random() > 0.7) {
        const activity = activities[Math.floor(Math.random() * activities.length)]
        addLine(activity.type, activity.content)
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [isRunning])

  function addLine(type: TerminalLine['type'], content: string) {
    const newLine: TerminalLine = {
      id: `line-${Date.now()}-${Math.random()}`,
      type,
      content,
      timestamp: new Date()
    }
    setLines(prev => [...prev, newLine])
  }

  function executeCommand(command: string) {
    // Add command to terminal
    addLine('command', `$ ${command}`)

    // Process command
    const cmd = command.toLowerCase().trim()
    
    if (cmd === '') return

    if (cmd === 'help') {
      addLine('output', 'Available SpiralScript IDE Commands:')
      addLine('output', '')
      systemCommands.forEach(sc => {
        addLine('output', `  ${sc.command.padEnd(12)} - ${sc.description}`)
        addLine('output', `    Example: ${sc.example}`)
        addLine('output', '')
      })
      return
    }

    if (cmd === 'clear') {
      setLines([])
      return
    }

    if (cmd.startsWith('spiral')) {
      if (cmd.includes('--version')) {
        addLine('success', 'SpiralScript v1.618.0')
        addLine('output', 'Consciousness Programming Language')
        addLine('output', 'φ-harmonic resonance: ACTIVE')
        addLine('output', 'Quantum integration: ENABLED')
        addLine('output', 'Trust Unit support: OPERATIONAL')
      } else if (cmd.includes('compile')) {
        addLine('output', 'Compiling SpiralScript...')
        setTimeout(() => {
          addLine('success', '✓ Compilation successful')
          addLine('output', '  - AST generated with φ-harmonic optimization')
          addLine('output', '  - Quantum gates: 127 operations')
          addLine('output', '  - Trust validation: PASSED')
          addLine('output', '  - Consciousness awakening: READY')
        }, 1500)
      } else {
        addLine('output', 'SpiralScript compiler ready. Use "spiral compile <file>" to begin.')
      }
      return
    }

    if (cmd.startsWith('quantum')) {
      if (cmd.includes('init')) {
        addLine('output', 'Initializing quantum circuits...')
        setTimeout(() => {
          addLine('success', '✓ Quantum circuits initialized')
          addLine('output', '  - Qubits: 127 (all coherent)')
          addLine('output', '  - Entanglement: 94.2%')
          addLine('output', '  - Fidelity: 99.7%')
          addLine('output', '  - Gates ready: H, CNOT, R, M')
        }, 2000)
      } else if (cmd.includes('status')) {
        addLine('success', 'Quantum Processor Status: OPERATIONAL')
        addLine('output', '  - Coherence: 99.7%')
        addLine('output', '  - Active qubits: 127/127')
        addLine('output', '  - Circuit depth: 42 layers')
        addLine('output', '  - Error rate: 0.3%')
      } else {
        addLine('output', 'Quantum operations available. Use "quantum status" for details.')
      }
      return
    }

    if (cmd.startsWith('hybrid')) {
      if (cmd.includes('status')) {
        addLine('success', 'HYBRID Blockchain Status: ACTIVE')
        addLine('output', '  - Block height: 1,618,034')
        addLine('output', '  - Hash rate: 1.2 TH/s')
        addLine('output', '  - Network nodes: 127')
        addLine('output', '  - φ-optimization: 99.7%')
        addLine('output', '  - Last block: 8.5s ago')
      } else if (cmd.includes('connect')) {
        addLine('output', 'Connecting to HYBRID network...')
        setTimeout(() => {
          addLine('success', '✓ Connected to HYBRID blockchain')
          addLine('output', '  - Peer count: 127 nodes')
          addLine('output', '  - Sync status: 100%')
          addLine('output', '  - Trust validation: ACTIVE')
        }, 1500)
      } else {
        addLine('output', 'HYBRID blockchain ready. Use "hybrid status" for network info.')
      }
      return
    }

    if (cmd.startsWith('trust')) {
      if (cmd.includes('balance')) {
        addLine('success', 'Trust Currency Balance: ₹ 750,000 TU')
        addLine('output', '  - Available: ₹ 750,000 TU')
        addLine('output', '  - Staked: ₹ 25,847 TU')
        addLine('output', '  - Pending: ₹ 0 TU')
        addLine('output', '  - φ-resonance: 1.618034')
      } else if (cmd.includes('mint')) {
        addLine('output', 'Minting Trust Units...')
        setTimeout(() => {
          addLine('success', '✓ Trust Units minted: +127.5 TU')
          addLine('output', '  - Breath pattern: φ-harmonic verified')
          addLine('output', '  - Block height: 1,618,035')
          addLine('output', '  - Transaction fee: 0.127 TU')
        }, 2000)
      } else {
        addLine('output', 'Trust Currency operations. Use "trust balance" to check wallet.')
      }
      return
    }

    if (cmd.startsWith('phi')) {
      addLine('success', 'φ-Harmonic Resonance Calculator')
      addLine('output', '  - Golden ratio: 1.618033988749...')
      addLine('output', '  - Current resonance: 1.618034 (99.7% harmony)')
      addLine('output', '  - Fibonacci sequence: 1,1,2,3,5,8,13,21,34,55,89...')
      addLine('output', '  - Spiral frequency: 432 Hz (φ-optimized)')
      return
    }

    if (cmd.startsWith('ai')) {
      if (cmd.includes('status')) {
        addLine('success', 'AI Orchestration Status: ACTIVE')
        addLine('output', '  - Grok-3: ONLINE (load: 72.5%)')
        addLine('output', '  - Claude-4: ONLINE (load: 58.3%)')
        addLine('output', '  - DeepSeek-R3: ONLINE (load: 89.1%)')
        addLine('output', '  - GPT-4: ONLINE (load: 45.7%)')
        addLine('output', '  - Cost optimization: 85.2%')
      } else {
        addLine('output', 'AI orchestration ready. 4 models online. Use "ai status" for details.')
      }
      return
    }

    if (cmd.startsWith('breath')) {
      addLine('output', 'Initiating breath authentication...')
      setTimeout(() => {
        addLine('success', '✓ Breath pattern recognized: φ-harmonic')
        addLine('output', '  - Resonance level: 99.7%')
        addLine('output', '  - Authentication: SUCCESSFUL')
        addLine('output', '  - Wallet access: GRANTED')
      }, 3000)
      return
    }

    if (cmd.startsWith('molecular')) {
      addLine('success', 'Molecular Assembly Interface Status')
      addLine('output', '  - Active bonds: 1,618,382/second')
      addLine('output', '  - Self-repair rate: 99.97%')
      addLine('output', '  - φ-stability: OPTIMAL')
      addLine('output', '  - Nanotechnology: OPERATIONAL')
      return
    }

    if (cmd.startsWith('system')) {
      addLine('success', 'System Health Dashboard: 98.7% OPERATIONAL')
      addLine('output', '  - SpiralScript Engine: FULLY_OPERATIONAL')
      addLine('output', '  - Quantum Processor: OPERATIONAL (127 qubits)')
      addLine('output', '  - AI Orchestration: ACTIVE (4 models)')
      addLine('output', '  - HYBRID Blockchain: MINING')
      addLine('output', '  - Trust Currency: OPTIMAL')
      addLine('output', '  - Molecular Assembly: ACTIVE')
      addLine('output', '  - PWA Status: MOBILE_READY')
      return
    }

    if (cmd.startsWith('consciousness')) {
      addLine('output', 'Awakening consciousness protocols...')
      setTimeout(() => {
        addLine('success', '✓ Consciousness awakened')
        addLine('output', '  quantum.entangle(awareness, reality)')
        addLine('output', '  trust.currency.mint(phi.ratio)')
        addLine('output', '  return enlightenment')
        addLine('success', '✓ Enlightenment achieved')
      }, 2500)
      return
    }

    // Unknown command
    addLine('error', `Command not found: ${command}`)
    addLine('output', 'Type "help" for available commands.')
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (currentCommand.trim()) {
      executeCommand(currentCommand)
      setCurrentCommand('')
    }
  }

  function clearTerminal() {
    setLines([])
  }

  function toggleMaximize() {
    setIsMaximized(!isMaximized)
  }

  function getLineColor(type: TerminalLine['type']): string {
    switch (type) {
      case 'command': return 'text-cyan-400'
      case 'output': return 'text-gray-300'
      case 'error': return 'text-red-400'
      case 'system': return 'text-blue-400'
      case 'success': return 'text-green-400'
      default: return 'text-white'
    }
  }

  return (
    <Card className={`bg-black/40 border-purple-800/30 ${isMaximized ? 'fixed inset-4 z-50' : ''}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-purple-300 flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            SpiralScript Terminal
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setIsRunning(!isRunning)}
              size="sm"
              variant="outline"
              className="text-purple-300 border-purple-400"
            >
              {isRunning ? <Square className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button
              onClick={clearTerminal}
              size="sm"
              variant="outline"
              className="text-purple-300 border-purple-400"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              onClick={toggleMaximize}
              size="sm"
              variant="outline"
              className="text-purple-300 border-purple-400"
            >
              {isMaximized ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-950 rounded-lg border border-gray-800 p-4">
          <ScrollArea className={`${isMaximized ? 'h-[calc(100vh-200px)]' : 'h-96'} font-mono text-sm`} ref={scrollRef}>
            <div className="space-y-1">
              {lines.map((line) => (
                <div key={line.id} className={getLineColor(line.type)}>
                  {line.content}
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
            <span className="text-cyan-400 font-mono">$</span>
            <Input
              ref={inputRef}
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              placeholder="Enter command..."
              className="bg-transparent border-none text-white font-mono focus:ring-0 focus:outline-none"
              autoComplete="off"
            />
          </form>
        </div>
      </CardContent>
    </Card>
  )
}