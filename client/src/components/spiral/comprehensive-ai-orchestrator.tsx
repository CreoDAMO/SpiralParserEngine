
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Brain, 
  Mic, 
  Send, 
  Activity, 
  Zap, 
  Clock, 
  DollarSign,
  Settings,
  Code,
  FileText,
  Database,
  Network,
  Cpu,
  Target,
  CheckCircle,
  AlertCircle,
  PlayCircle,
  PauseCircle,
  RotateCcw,
  Download,
  Upload,
  Trash2,
  Eye,
  EyeOff
} from 'lucide-react';

interface AIModel {
  id: string;
  name: string;
  provider: string;
  status: 'active' | 'standby' | 'busy' | 'error' | 'maintenance';
  responseTime: number;
  confidence: number;
  costPerToken: number;
  specialization: string[];
  lastUsed: Date;
  avatar: string;
  color: string;
  usage: {
    totalRequests: number;
    successRate: number;
    avgResponseTime: number;
    tokensUsed: number;
  };
}

interface CodingTask {
  id: string;
  title: string;
  description: string;
  type: 'feature' | 'bug' | 'optimization' | 'review' | 'test' | 'documentation';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'in-progress' | 'completed' | 'failed' | 'cancelled';
  assignedModels: string[];
  startTime?: Date;
  completionTime?: Date;
  results: { [modelId: string]: TaskResult };
  phiResonance?: number;
  tuGenerated?: number;
}

interface TaskResult {
  modelId: string;
  content: string;
  confidence: number;
  completionTime: number;
  tokensUsed: number;
  cost: number;
}

interface ConversationMessage {
  id: string;
  type: 'user' | 'ai' | 'system' | 'task';
  content: string;
  timestamp: Date;
  modelId?: string;
  taskId?: string;
  confidence?: number;
  metadata?: Record<string, any>;
}

export default function ComprehensiveAIOrchestrator() {
  const [models, setModels] = useState<AIModel[]>([
    {
      id: 'claude-sonnet-4',
      name: 'Claude Sonnet-4',
      provider: 'Anthropic',
      status: 'active',
      responseTime: 250,
      confidence: 96.8,
      costPerToken: 0.015,
      specialization: ['reasoning', 'analysis', 'code-review', 'spiral-parsing'],
      lastUsed: new Date(),
      avatar: 'C4',
      color: 'bg-blue-500',
      usage: {
        totalRequests: 1247,
        successRate: 98.7,
        avgResponseTime: 245,
        tokensUsed: 2847392
      }
    },
    {
      id: 'grok-3',
      name: 'Grok-3',
      provider: 'xAI',
      status: 'active',
      responseTime: 180,
      confidence: 94.2,
      costPerToken: 0.012,
      specialization: ['real-time', 'creativity', 'optimization', 'quantum-analysis'],
      lastUsed: new Date(),
      avatar: 'GR',
      color: 'bg-purple-500',
      usage: {
        totalRequests: 943,
        successRate: 96.2,
        avgResponseTime: 178,
        tokensUsed: 1938472
      }
    },
    {
      id: 'deepseek-r3',
      name: 'DeepSeek-R3',
      provider: 'DeepSeek',
      status: 'standby',
      responseTime: 320,
      confidence: 97.5,
      costPerToken: 0.008,
      specialization: ['mathematics', 'research', 'algorithm-design', 'phi-calculations'],
      lastUsed: new Date(),
      avatar: 'DS',
      color: 'bg-green-500',
      usage: {
        totalRequests: 654,
        successRate: 99.1,
        avgResponseTime: 315,
        tokensUsed: 1547283
      }
    },
    {
      id: 'gpt-4',
      name: 'GPT-4 Turbo',
      provider: 'OpenAI',
      status: 'active',
      responseTime: 290,
      confidence: 95.1,
      costPerToken: 0.020,
      specialization: ['general', 'writing', 'planning', 'tu-generation'],
      lastUsed: new Date(),
      avatar: 'G4',
      color: 'bg-orange-500',
      usage: {
        totalRequests: 1589,
        successRate: 97.4,
        avgResponseTime: 288,
        tokensUsed: 3247189
      }
    }
  ]);

  const [tasks, setTasks] = useState<CodingTask[]>([
    {
      id: '1',
      title: 'Optimize Spiral Parser Performance',
      description: 'Enhance the SpiralScript parser to handle larger files with improved φ-resonance calculations',
      type: 'optimization',
      priority: 'high',
      status: 'in-progress',
      assignedModels: ['deepseek-r3', 'claude-sonnet-4'],
      startTime: new Date(Date.now() - 1800000),
      results: {},
      phiResonance: 1.524,
      tuGenerated: 847.3
    },
    {
      id: '2',
      title: 'Implement Voice Command Interface',
      description: 'Add voice recognition and synthesis capabilities to the AI chat system',
      type: 'feature',
      priority: 'medium',
      status: 'completed',
      assignedModels: ['grok-3', 'gpt-4'],
      startTime: new Date(Date.now() - 7200000),
      completionTime: new Date(Date.now() - 3600000),
      results: {
        'grok-3': {
          modelId: 'grok-3',
          content: 'Voice interface implemented with 97.3% accuracy',
          confidence: 94.7,
          completionTime: 1847,
          tokensUsed: 12847,
          cost: 0.154
        }
      },
      phiResonance: 1.618,
      tuGenerated: 1247.8
    }
  ]);

  const [conversation, setConversation] = useState<ConversationMessage[]>([
    {
      id: '1',
      type: 'system',
      content: '🌀 Multi-AI Coding Agent Orchestra initialized. Ready for quantum-enhanced development assistance.',
      timestamp: new Date(),
      metadata: { systemVersion: '3.1.4', agents: 4 }
    }
  ]);

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    type: 'feature' as const,
    priority: 'medium' as const,
    selectedModels: [] as string[]
  });

  const [query, setQuery] = useState('');
  const [selectedModels, setSelectedModels] = useState<string[]>(['claude-sonnet-4']);
  const [isListening, setIsListening] = useState(false);
  const [dashboardView, setDashboardView] = useState<'overview' | 'tasks' | 'models' | 'analytics'>('overview');

  const [systemMetrics, setSystemMetrics] = useState({
    totalTasks: 247,
    completedTasks: 198,
    activeTasks: 12,
    totalCost: 2847.32,
    savedAmount: 1234.56,
    avgResponseTime: 264,
    successRate: 97.8,
    phiResonanceAvg: 1.603,
    tuGenerated: 15847.92
  });

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize speech recognition
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
    }

    // Simulate real-time updates
    const interval = setInterval(() => {
      updateModelMetrics();
      processActiveTasks();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const updateModelMetrics = () => {
    setModels(prev => prev.map(model => ({
      ...model,
      responseTime: Math.max(100, model.responseTime + (Math.random() - 0.5) * 30),
      confidence: Math.max(85, Math.min(99, model.confidence + (Math.random() - 0.5) * 1))
    })));
  };

  const processActiveTasks = () => {
    setTasks(prev => prev.map(task => {
      if (task.status === 'in-progress' && task.startTime) {
        const elapsed = Date.now() - task.startTime.getTime();
        if (elapsed > 300000 && Math.random() > 0.7) { // 5 minutes + random chance
          return {
            ...task,
            status: 'completed' as const,
            completionTime: new Date(),
            phiResonance: 1.618 + Math.random() * 0.2,
            tuGenerated: 500 + Math.random() * 1000
          };
        }
      }
      return task;
    }));
  };

  const createTask = () => {
    if (!newTask.title || !newTask.description) return;

    const task: CodingTask = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      type: newTask.type,
      priority: newTask.priority,
      status: 'pending',
      assignedModels: newTask.selectedModels.length > 0 ? newTask.selectedModels : ['claude-sonnet-4'],
      results: {}
    };

    setTasks(prev => [...prev, task]);
    setNewTask({
      title: '',
      description: '',
      type: 'feature',
      priority: 'medium',
      selectedModels: []
    });

    // Add system message
    const message: ConversationMessage = {
      id: Date.now().toString(),
      type: 'system',
      content: `✅ New task created: "${task.title}" assigned to ${task.assignedModels.length} AI agent(s)`,
      timestamp: new Date(),
      taskId: task.id
    };
    setConversation(prev => [...prev, message]);
  };

  const startTask = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, status: 'in-progress', startTime: new Date() }
        : task
    ));

    // Update assigned models status
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      setModels(prev => prev.map(model => 
        task.assignedModels.includes(model.id)
          ? { ...model, status: 'busy' as const }
          : model
      ));
    }
  };

  const cancelTask = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status: 'cancelled' } : task
    ));
  };

  const submitQuery = async () => {
    if (!query.trim()) return;

    const userMessage: ConversationMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: query,
      timestamp: new Date()
    };

    setConversation(prev => [...prev, userMessage]);

    // Process with selected models
    selectedModels.forEach(modelId => {
      const model = models.find(m => m.id === modelId);
      if (model) {
        setTimeout(() => {
          const aiMessage: ConversationMessage = {
            id: `${Date.now()}-${modelId}`,
            type: 'ai',
            content: generateAIResponse(query, model),
            timestamp: new Date(),
            modelId,
            confidence: 85 + Math.random() * 10
          };
          setConversation(prev => [...prev, aiMessage]);
        }, model.responseTime);
      }
    });

    setQuery('');
  };

  const generateAIResponse = (query: string, model: AIModel): string => {
    const responses = {
      'claude-sonnet-4': `🧠 Analyzing "${query}" with advanced reasoning...\n\n• Code structure optimization identified\n• φ-harmonic patterns detected\n• Trust Unit generation potential: High\n\nRecommendation: Implement spiral-based architecture for enhanced performance.`,
      'grok-3': `🚀 Real-time analysis of "${query}"...\n\n• Creative solutions identified\n• Quantum optimization possible\n• Integration pathways: 3 viable options\n\nNext steps: Deploy quantum-enhanced implementation with φ-resonance tuning.`,
      'deepseek-r3': `🔬 Mathematical analysis of "${query}":\n\n• Complexity: O(φⁿ) where φ = 1.618\n• Optimization potential: 94.7%\n• Research applications identified\n\nMathematical proof: Implementation follows golden ratio principles.`,
      'gpt-4': `💡 Comprehensive analysis of "${query}":\n\n• Context understanding: Complete\n• Solution pathways: Multiple options\n• Integration compatibility: High\n\nStrategic recommendation: Proceed with modular implementation approach.`
    };

    return responses[model.id as keyof typeof responses] || `Processing "${query}" with ${model.name}...`;
  };

  const toggleModelSelection = (modelId: string) => {
    setSelectedModels(prev => 
      prev.includes(modelId) 
        ? prev.filter(id => id !== modelId)
        : [...prev, modelId]
    );
  };

  const toggleTaskModelSelection = (modelId: string) => {
    setNewTask(prev => ({
      ...prev,
      selectedModels: prev.selectedModels.includes(modelId)
        ? prev.selectedModels.filter(id => id !== modelId)
        : [...prev.selectedModels, modelId]
    }));
  };

  const startVoiceInput = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'standby': return 'bg-yellow-500';
      case 'busy': return 'bg-blue-500';
      case 'error': return 'bg-red-500';
      case 'maintenance': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getTaskStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'pending': return 'bg-yellow-500';
      case 'failed': return 'bg-red-500';
      case 'cancelled': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-900 text-gray-100">
      {/* Header Dashboard */}
      <div className="border-b border-gray-700 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Multi-AI Coding Agent Orchestra</h1>
              <p className="text-sm text-gray-400">Quantum-enhanced development assistance</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="grid grid-cols-4 gap-3 text-center">
              <div className="bg-blue-900/30 px-3 py-1 rounded">
                <div className="text-xs text-blue-400">Active Tasks</div>
                <div className="text-lg font-bold">{systemMetrics.activeTasks}</div>
              </div>
              <div className="bg-green-900/30 px-3 py-1 rounded">
                <div className="text-xs text-green-400">Success Rate</div>
                <div className="text-lg font-bold">{systemMetrics.successRate}%</div>
              </div>
              <div className="bg-purple-900/30 px-3 py-1 rounded">
                <div className="text-xs text-purple-400">φ-Resonance</div>
                <div className="text-lg font-bold">{systemMetrics.phiResonanceAvg.toFixed(3)}</div>
              </div>
              <div className="bg-yellow-900/30 px-3 py-1 rounded">
                <div className="text-xs text-yellow-400">TU Generated</div>
                <div className="text-lg font-bold">{systemMetrics.tuGenerated.toFixed(0)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation */}
        <Tabs value={dashboardView} onValueChange={(v) => setDashboardView(v as any)}>
          <TabsList className="grid w-full grid-cols-4 bg-gray-800">
            <TabsTrigger value="overview">📊 Overview</TabsTrigger>
            <TabsTrigger value="tasks">📋 Tasks</TabsTrigger>
            <TabsTrigger value="models">🤖 Models</TabsTrigger>
            <TabsTrigger value="analytics">📈 Analytics</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Main Dashboard Content */}
      <div className="flex-1 p-4">
        {dashboardView === 'overview' && (
          <div className="grid grid-cols-2 gap-6 h-full">
            {/* Active Models */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-5 h-5" />
                  Active AI Models
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {models.slice(0, 4).map(model => (
                    <div key={model.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar className={`${model.color} text-white`}>
                          <AvatarFallback>{model.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{model.name}</div>
                          <div className="text-xs text-gray-400">{model.provider}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={`${getStatusColor(model.status)} text-white text-xs`}>
                          {model.status}
                        </Badge>
                        <div className="text-xs text-gray-400 mt-1">
                          {model.responseTime.toFixed(0)}ms
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Recent Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64">
                  <div className="space-y-3">
                    {tasks.slice(-5).reverse().map(task => (
                      <div key={task.id} className="p-3 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={`${getTaskStatusColor(task.status)} text-white text-xs`}>
                            {task.status}
                          </Badge>
                          <Badge className={`${getPriorityColor(task.priority)} text-white text-xs`}>
                            {task.priority}
                          </Badge>
                        </div>
                        <div className="font-medium text-sm mb-1">{task.title}</div>
                        <div className="text-xs text-gray-400 truncate">{task.description}</div>
                        {task.phiResonance && (
                          <div className="text-xs text-purple-400 mt-1">
                            φ: {task.phiResonance.toFixed(3)} | TU: +{task.tuGenerated?.toFixed(1)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        )}

        {dashboardView === 'tasks' && (
          <div className="space-y-6">
            {/* Create New Task */}
            <Card>
              <CardHeader>
                <CardTitle>Create New Coding Task</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Task title"
                    value={newTask.title}
                    onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))}
                  />
                  <div className="flex gap-2">
                    <select
                      value={newTask.type}
                      onChange={(e) => setNewTask(prev => ({ ...prev, type: e.target.value as any }))}
                      className="px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white"
                    >
                      <option value="feature">Feature</option>
                      <option value="bug">Bug Fix</option>
                      <option value="optimization">Optimization</option>
                      <option value="review">Code Review</option>
                      <option value="test">Testing</option>
                      <option value="documentation">Documentation</option>
                    </select>
                    <select
                      value={newTask.priority}
                      onChange={(e) => setNewTask(prev => ({ ...prev, priority: e.target.value as any }))}
                      className="px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>
                </div>
                
                <Textarea
                  placeholder="Task description..."
                  value={newTask.description}
                  onChange={(e) => setNewTask(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />

                <div>
                  <div className="text-sm text-gray-400 mb-2">Assign AI Models:</div>
                  <div className="flex flex-wrap gap-2">
                    {models.map(model => (
                      <Button
                        key={model.id}
                        variant={newTask.selectedModels.includes(model.id) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleTaskModelSelection(model.id)}
                        className="text-xs"
                      >
                        {model.avatar} {model.name.split(' ')[0]}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button onClick={createTask} disabled={!newTask.title || !newTask.description}>
                  Create Task
                </Button>
              </CardContent>
            </Card>

            {/* Task List */}
            <Card>
              <CardHeader>
                <CardTitle>Active Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tasks.map(task => (
                    <div key={task.id} className="p-4 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Badge className={`${getTaskStatusColor(task.status)} text-white`}>
                            {task.status}
                          </Badge>
                          <Badge className={`${getPriorityColor(task.priority)} text-white`}>
                            {task.priority}
                          </Badge>
                          <span className="font-medium">{task.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {task.status === 'pending' && (
                            <Button size="sm" onClick={() => startTask(task.id)}>
                              <PlayCircle className="w-4 h-4" />
                            </Button>
                          )}
                          {(task.status === 'pending' || task.status === 'in-progress') && (
                            <Button size="sm" variant="destructive" onClick={() => cancelTask(task.id)}>
                              <PauseCircle className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-300 mb-3">{task.description}</p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center gap-4">
                          <span>Assigned: {task.assignedModels.join(', ')}</span>
                          {task.startTime && (
                            <span>Started: {task.startTime.toLocaleTimeString()}</span>
                          )}
                        </div>
                        {task.phiResonance && (
                          <span>φ: {task.phiResonance.toFixed(3)} | TU: +{task.tuGenerated?.toFixed(1)}</span>
                        )}
                      </div>

                      {task.status === 'in-progress' && (
                        <Progress value={66} className="mt-2 h-1" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {dashboardView === 'models' && (
          <div className="grid grid-cols-2 gap-6">
            {models.map(model => (
              <Card key={model.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Avatar className={`${model.color} text-white`}>
                      <AvatarFallback>{model.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div>{model.name}</div>
                      <div className="text-sm text-gray-400 font-normal">{model.provider}</div>
                    </div>
                    <Badge className={`${getStatusColor(model.status)} text-white ml-auto`}>
                      {model.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Response Time:</span>
                      <div className="font-medium">{model.responseTime.toFixed(0)}ms</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Confidence:</span>
                      <div className="font-medium">{model.confidence.toFixed(1)}%</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Cost/Token:</span>
                      <div className="font-medium">${model.costPerToken.toFixed(3)}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Success Rate:</span>
                      <div className="font-medium">{model.usage.successRate.toFixed(1)}%</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-400 text-sm">Specializations:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {model.specialization.map(spec => (
                        <Badge key={spec} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
                    <div>
                      <span>Total Requests:</span>
                      <div className="text-white">{model.usage.totalRequests.toLocaleString()}</div>
                    </div>
                    <div>
                      <span>Tokens Used:</span>
                      <div className="text-white">{model.usage.tokensUsed.toLocaleString()}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {dashboardView === 'analytics' && (
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Cost Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-900/20 p-3 rounded-lg">
                    <div className="text-red-400 text-sm">Total Cost</div>
                    <div className="text-2xl font-bold">${systemMetrics.totalCost.toFixed(2)}</div>
                  </div>
                  <div className="bg-green-900/20 p-3 rounded-lg">
                    <div className="text-green-400 text-sm">Saved</div>
                    <div className="text-2xl font-bold">${systemMetrics.savedAmount.toFixed(2)}</div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  {models.map(model => (
                    <div key={model.id} className="flex justify-between text-sm">
                      <span>{model.name}</span>
                      <span>${(model.usage.tokensUsed * model.costPerToken).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Overall Success Rate</span>
                      <span>{systemMetrics.successRate}%</span>
                    </div>
                    <Progress value={systemMetrics.successRate} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>φ-Resonance Quality</span>
                      <span>{((systemMetrics.phiResonanceAvg / 1.618) * 100).toFixed(1)}%</span>
                    </div>
                    <Progress value={(systemMetrics.phiResonanceAvg / 1.618) * 100} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Task Completion Rate</span>
                      <span>{((systemMetrics.completedTasks / systemMetrics.totalTasks) * 100).toFixed(1)}%</span>
                    </div>
                    <Progress value={(systemMetrics.completedTasks / systemMetrics.totalTasks) * 100} className="h-2" />
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <div className="text-sm text-gray-400 mb-2">Average Response Times:</div>
                    {models.map(model => (
                      <div key={model.id} className="flex justify-between text-xs mb-1">
                        <span>{model.name}</span>
                        <span>{model.responseTime.toFixed(0)}ms</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Quick Chat Interface */}
      <div className="border-t border-gray-700 p-4">
        <div className="flex items-center gap-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Quick query to AI agents..."
            className="flex-1 bg-gray-800 border-gray-600"
            onKeyPress={(e) => e.key === 'Enter' && submitQuery()}
          />
          <Button
            onClick={isListening ? () => {} : startVoiceInput}
            variant={isListening ? "destructive" : "outline"}
            size="sm"
            disabled={!recognitionRef.current}
          >
            <Mic className={`w-4 h-4 ${isListening ? 'animate-pulse' : ''}`} />
          </Button>
          <Button onClick={submitQuery} disabled={!query.trim()} size="sm">
            <Send className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
          <span>Active models:</span>
          {selectedModels.map(modelId => {
            const model = models.find(m => m.id === modelId);
            return model ? (
              <Badge key={modelId} className={`${model.color} text-white text-xs`}>
                {model.avatar}
              </Badge>
            ) : null;
          })}
        </div>
      </div>

      <Alert className="m-4">
        <Zap className="w-4 h-4" />
        <AlertDescription>
          HTSX Multi-AI Orchestra active. Intelligent task routing, cost optimization ({((systemMetrics.savedAmount / (systemMetrics.totalCost + systemMetrics.savedAmount)) * 100).toFixed(1)}% savings), and φ-resonance enhancement enabled.
        </AlertDescription>
      </Alert>
    </div>
  );
}
