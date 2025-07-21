'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Brain, 
  Zap, 
  Clock, 
  TrendingUp, 
  Activity, 
  MessageSquare, 
  DollarSign,
  Cpu,
  Bot,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Settings
} from 'lucide-react'

interface AIModel {
  id: string
  name: string
  status: 'active' | 'idle' | 'offline' | 'processing'
  load: number
  responseTime: number
  accuracy: number
  requests: number
  cost: number
  lastQuery: string
  capabilities: string[]
}

interface AIRequest {
  id: string
  timestamp: Date
  model: string
  query: string
  response: string
  responseTime: number
  cost: number
  status: 'completed' | 'processing' | 'queued' | 'failed'
}

interface OrchestrationStats {
  totalRequests: number
  totalCost: number
  averageResponseTime: number
  successRate: number
  costOptimization: number
  activeModels: number
}

export function AIOrchestrationPanel() {
  const [models, setModels] = useState<AIModel[]>([
    {
      id: 'grok-3',
      name: 'Grok-3',
      status: 'active',
      load: 72.5,
      responseTime: 1.2,
      accuracy: 97.8,
      requests: 1429,
      cost: 247.50,
      lastQuery: 'Quantum entanglement optimization for SpiralScript compilation',
      capabilities: ['Reasoning', 'Code Generation', 'Mathematics', 'Science']
    },
    {
      id: 'claude-4',
      name: 'Claude-4',
      status: 'active',
      load: 58.3,
      responseTime: 0.8,
      accuracy: 98.2,
      requests: 1186,
      cost: 189.75,
      lastQuery: 'Trust Unit blockchain validation algorithms',
      capabilities: ['Analysis', 'Writing', 'Coding', 'Research']
    },
    {
      id: 'deepseek-r3',
      name: 'DeepSeek-R3',
      status: 'active',
      load: 89.1,
      responseTime: 2.1,
      accuracy: 96.4,
      requests: 892,
      cost: 156.25,
      lastQuery: 'Molecular assembly pattern recognition',
      capabilities: ['Deep Learning', 'Pattern Recognition', 'Optimization']
    },
    {
      id: 'gpt-4',
      name: 'GPT-4',
      status: 'active',
      load: 45.7,
      responseTime: 1.5,
      accuracy: 97.1,
      requests: 2156,
      cost: 298.80,
      lastQuery: 'Natural language processing for consciousness interfaces',
      capabilities: ['Language', 'Creative Writing', 'Problem Solving']
    }
  ])

  const [requests, setRequests] = useState<AIRequest[]>([])
  const [stats, setStats] = useState<OrchestrationStats>({
    totalRequests: 5663,
    totalCost: 892.30,
    averageResponseTime: 1.4,
    successRate: 98.7,
    costOptimization: 85.2,
    activeModels: 4
  })
  const [selectedModel, setSelectedModel] = useState<string>('grok-3')
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const [orchestrationActive, setOrchestrationActive] = useState(true)

  // Simulate real-time AI activity
  useEffect(() => {
    const interval = setInterval(() => {
      if (!orchestrationActive) return

      // Update model loads and metrics
      setModels(prev => prev.map(model => ({
        ...model,
        load: Math.max(10, Math.min(100, model.load + (Math.random() - 0.5) * 10)),
        responseTime: Math.max(0.1, Math.min(5, model.responseTime + (Math.random() - 0.5) * 0.3)),
        accuracy: Math.max(95, Math.min(100, model.accuracy + (Math.random() - 0.5) * 0.2)),
        requests: model.requests + Math.floor(Math.random() * 3),
        cost: model.cost + Math.random() * 2
      })))

      // Add new AI request occasionally
      if (Math.random() > 0.7) {
        const queries = [
          'Optimize quantum circuit for φ-harmonic resonance',
          'Generate Trust Unit validation algorithm',
          'Analyze molecular assembly patterns',
          'Process consciousness interface data',
          'Evaluate blockchain transaction integrity',
          'Optimize SpiralScript compilation performance',
          'Generate quantum entanglement protocols',
          'Analyze breathing pattern authentication',
          'Process phi-ratio calculations',
          'Evaluate system health metrics'
        ]

        const modelIds = ['grok-3', 'claude-4', 'deepseek-r3', 'gpt-4']
        const selectedModelId = modelIds[Math.floor(Math.random() * modelIds.length)]
        
        const newRequest: AIRequest = {
          id: `req_${Date.now()}`,
          timestamp: new Date(),
          model: selectedModelId,
          query: queries[Math.floor(Math.random() * queries.length)],
          response: 'Processing...',
          responseTime: 0,
          cost: 0,
          status: 'processing'
        }

        setRequests(prev => [newRequest, ...prev.slice(0, 19)])

        // Complete request after a delay
        setTimeout(() => {
          setRequests(prev => prev.map(req => 
            req.id === newRequest.id 
              ? {
                  ...req,
                  response: 'Analysis complete. Optimized parameters generated.',
                  responseTime: Math.random() * 3 + 0.5,
                  cost: Math.random() * 5 + 0.1,
                  status: 'completed' as const
                }
              : req
          ))
        }, 2000 + Math.random() * 3000)
      }

      // Update stats
      setStats(prev => ({
        ...prev,
        totalRequests: prev.totalRequests + Math.floor(Math.random() * 2),
        totalCost: prev.totalCost + Math.random() * 2,
        averageResponseTime: Math.max(0.5, Math.min(3, prev.averageResponseTime + (Math.random() - 0.5) * 0.1)),
        successRate: Math.max(95, Math.min(100, prev.successRate + (Math.random() - 0.5) * 0.1)),
        costOptimization: Math.max(80, Math.min(90, prev.costOptimization + (Math.random() - 0.5) * 0.5))
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [orchestrationActive])

  function formatTimeAgo(date: Date): string {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
    if (seconds < 60) return `${seconds}s ago`
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    return `${hours}h ago`
  }

  function getStatusColor(status: string): string {
    switch (status) {
      case 'active': return 'bg-green-600 text-white'
      case 'processing': return 'bg-blue-600 text-white'
      case 'idle': return 'bg-yellow-600 text-white'
      case 'offline': return 'bg-red-600 text-white'
      default: return 'bg-gray-600 text-white'
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-300 flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Active Models
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.activeModels}</div>
            <div className="text-xs text-gray-400">AI Systems Online</div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-300 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Avg Response
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">{stats.averageResponseTime.toFixed(1)}s</div>
            <div className="text-xs text-gray-400">Response Time</div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-300 flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Cost Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">{stats.costOptimization.toFixed(1)}%</div>
            <Progress value={stats.costOptimization} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-purple-800/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-300 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Success Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">{stats.successRate.toFixed(1)}%</div>
            <Progress value={stats.successRate} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Control Panel */}
      <Card className="bg-black/40 border-purple-800/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-purple-300 flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AI Orchestration Control
              </CardTitle>
              <CardDescription>
                Multi-AI model routing and optimization dashboard
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-green-300 border-green-400">
                <Activity className="h-3 w-3 mr-1" />
                {orchestrationActive ? 'ACTIVE' : 'PAUSED'}
              </Badge>
              <Button
                onClick={() => setOrchestrationActive(!orchestrationActive)}
                size="sm"
                variant="outline"
                className="text-purple-300 border-purple-400"
              >
                {orchestrationActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                size="sm"
                variant={voiceEnabled ? "default" : "outline"}
                className={voiceEnabled ? "bg-purple-600 hover:bg-purple-700" : "text-purple-300 border-purple-400"}
              >
                {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-purple-300 border-purple-400"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* AI Models */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-purple-300">AI Models</h3>
              {models.map((model) => (
                <Card
                  key={model.id}
                  className={`cursor-pointer transition-all ${
                    selectedModel === model.id
                      ? 'bg-purple-900/30 border-purple-500'
                      : 'bg-gray-900/50 border-gray-700 hover:bg-gray-800/50'
                  }`}
                  onClick={() => setSelectedModel(model.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-purple-400" />
                        <span className="font-medium text-white">{model.name}</span>
                      </div>
                      <Badge className={getStatusColor(model.status)}>
                        {model.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Load</span>
                        <span className="text-white">{model.load.toFixed(1)}%</span>
                      </div>
                      <Progress value={model.load} className="h-2" />
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Response:</span>
                          <span className="text-green-400 ml-1">{model.responseTime.toFixed(1)}s</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Accuracy:</span>
                          <span className="text-blue-400 ml-1">{model.accuracy.toFixed(1)}%</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Requests:</span>
                          <span className="text-white ml-1">{model.requests}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Cost:</span>
                          <span className="text-yellow-400 ml-1">${model.cost.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <div className="text-xs text-gray-400 mb-1">Last Query:</div>
                        <div className="text-xs text-gray-300 truncate">{model.lastQuery}</div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-2">
                        {model.capabilities.map((cap) => (
                          <Badge
                            key={cap}
                            variant="outline"
                            className="text-xs text-purple-300 border-purple-400"
                          >
                            {cap}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Requests */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-purple-300">Recent Requests</h3>
              <ScrollArea className="h-96">
                <div className="space-y-3">
                  {requests.map((request) => (
                    <Card key={request.id} className="bg-gray-900/50 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge className={
                              request.status === 'completed' ? 'bg-green-600 text-white' :
                              request.status === 'processing' ? 'bg-blue-600 text-white' :
                              request.status === 'queued' ? 'bg-yellow-600 text-white' :
                              'bg-red-600 text-white'
                            }>
                              {request.status}
                            </Badge>
                            <span className="text-sm text-gray-300">{formatTimeAgo(request.timestamp)}</span>
                          </div>
                          <span className="text-sm text-purple-400">{request.model}</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div>
                            <div className="text-xs text-gray-400">Query:</div>
                            <div className="text-sm text-white">{request.query}</div>
                          </div>
                          
                          {request.status === 'completed' && (
                            <>
                              <div>
                                <div className="text-xs text-gray-400">Response:</div>
                                <div className="text-sm text-gray-300">{request.response}</div>
                              </div>
                              
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-green-400">
                                  {request.responseTime.toFixed(1)}s
                                </span>
                                <span className="text-yellow-400">
                                  ${request.cost.toFixed(2)}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}