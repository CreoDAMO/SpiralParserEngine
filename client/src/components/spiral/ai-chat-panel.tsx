` tags. I will pay close attention to indentation, structure, and completeness, and avoid using any forbidden words.

```
<replit_final_file>
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Mic, 
  MicOff, 
  Send, 
  Brain, 
  Zap, 
  Clock, 
  DollarSign,
  Settings,
  Activity,
  Volume2,
  VolumeX,
  MessageSquare,
  Bot,
  User,
  Download,
  Copy,
  RefreshCw
} from 'lucide-react';

interface AIAgent {
  id: string;
  name: string;
  model: string;
  status: 'active' | 'busy' | 'idle' | 'error';
  responseTime: number;
  confidence: number;
  cost: number;
  specialty: string[];
  avatar: string;
  color: string;
}

interface ChatMessage {
  id: string;
  type: 'user' | 'ai' | 'system';
  content: string;
  timestamp: Date;
  agentId?: string;
  confidence?: number;
  phiResonance?: number;
  tuGenerated?: number;
  isVoice?: boolean;
}

const AIChatPanel: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<string>('all');
  const [activeAgents, setActiveAgents] = useState<AIAgent[]>([
    {
      id: 'gpt4-turbo',
      name: 'GPT-4 Turbo',
      model: 'gpt-4-turbo-preview',
      status: 'active',
      responseTime: 1200,
      confidence: 0.92,
      cost: 0.003,
      specialty: ['coding', 'reasoning', 'analysis'],
      avatar: '🤖',
      color: 'bg-blue-500'
    },
    {
      id: 'claude-3',
      name: 'Claude 3',
      model: 'claude-3-opus',
      status: 'active',
      responseTime: 1100,
      confidence: 0.89,
      cost: 0.002,
      specialty: ['writing', 'creative', 'ethical'],
      avatar: '🧠',
      color: 'bg-purple-500'
    },
    {
      id: 'gemini-pro',
      name: 'Gemini Pro',
      model: 'gemini-pro',
      status: 'active',
      responseTime: 800,
      confidence: 0.85,
      cost: 0.001,
      specialty: ['multimodal', 'reasoning', 'coding'],
      avatar: '💎',
      color: 'bg-green-500'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Voice recognition setup
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');

        setInputMessage(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      setIsListening(false);
      recognitionRef.current.stop();
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
      isVoice: isListening
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate AI responses
    const targetAgents = selectedAgent === 'all' 
      ? activeAgents.filter(agent => agent.status === 'active')
      : activeAgents.filter(agent => agent.id === selectedAgent);

    for (const agent of targetAgents) {
      setTimeout(() => {
        const aiResponse: ChatMessage = {
          id: `msg-${Date.now()}-${agent.id}`,
          type: 'ai',
          content: `Hello! I'm ${agent.name}. I understand you're asking about "${inputMessage}". Let me help you with that...`,
          timestamp: new Date(),
          agentId: agent.id,
          confidence: agent.confidence,
          phiResonance: Math.random() * 1.618,
          tuGenerated: Math.floor(Math.random() * 100)
        };

        setMessages(prev => [...prev, aiResponse]);
      }, agent.responseTime + Math.random() * 500);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="p-4 border-b border-purple-500/30 bg-black/20">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-400" />
            Multi-AI Chat Assistant
          </h2>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
              {activeAgents.filter(a => a.status === 'active').length} Active
            </Badge>
            <Button size="sm" variant="outline" className="border-purple-500/50">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Agent Selection */}
        <div className="mt-3 flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={selectedAgent === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedAgent('all')}
            className="text-xs"
          >
            All Agents
          </Button>
          {activeAgents.map(agent => (
            <Button
              key={agent.id}
              size="sm"
              variant={selectedAgent === agent.id ? 'default' : 'outline'}
              onClick={() => setSelectedAgent(agent.id)}
              className={`text-xs ${agent.color} border-opacity-50`}
            >
              {agent.avatar} {agent.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-white border border-purple-500/30'
                }`}
              >
                {message.type === 'ai' && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">
                      {activeAgents.find(a => a.id === message.agentId)?.avatar || '🤖'}
                    </span>
                    <span className="text-sm font-medium text-purple-300">
                      {activeAgents.find(a => a.id === message.agentId)?.name || 'AI Assistant'}
                    </span>
                    {message.confidence && (
                      <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-300">
                        {(message.confidence * 100).toFixed(0)}%
                      </Badge>
                    )}
                  </div>
                )}
                
                <p className="text-sm">{message.content}</p>
                
                {message.type === 'ai' && (
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-purple-500/20">
                    <div className="flex items-center gap-2 text-xs text-purple-300">
                      {message.phiResonance && (
                        <span>φ: {message.phiResonance.toFixed(3)}</span>
                      )}
                      {message.tuGenerated && (
                        <span>TU: +{message.tuGenerated}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => speak(message.content)}
                        className="h-6 w-6 p-0 text-purple-400 hover:text-white"
                      >
                        {isSpeaking ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => navigator.clipboard.writeText(message.content)}
                        className="h-6 w-6 p-0 text-purple-400 hover:text-white"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                )}
                
                <div className="text-xs text-gray-400 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                  {message.isVoice && <Mic className="w-3 h-3 inline ml-1" />}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div ref={messagesEndRef} />
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-purple-500/30 bg-black/20">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="bg-slate-800 border-purple-500/50 text-white placeholder-gray-400 pr-12"
            />
            <Button
              size="sm"
              variant="ghost"
              onClick={isListening ? stopListening : startListening}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 ${
                isListening ? 'text-red-400' : 'text-purple-400'
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </Button>
          </div>
          <Button 
            onClick={sendMessage}
            disabled={!inputMessage.trim()}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2 mt-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setInputMessage("Analyze this code for optimization opportunities")}
            className="text-xs border-purple-500/50 text-purple-300"
          >
            🔍 Code Analysis
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setInputMessage("Generate unit tests for the current function")}
            className="text-xs border-purple-500/50 text-purple-300"
          >
            🧪 Generate Tests
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setInputMessage("Explain this algorithm step by step")}
            className="text-xs border-purple-500/50 text-purple-300"
          >
            📚 Explain Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChatPanel;

interface VoiceState {
  isListening: boolean;
  isProcessing: boolean;
  isPlaying: boolean;
  transcript: string;
  confidence: number;
}

export default function AIChatPanel() {
  const [agents, setAgents] = useState<AIAgent[]>([
    {
      id: 'claude-4',
      name: 'Claude Sonnet-4',
      model: 'claude-3-sonnet-20240229',
      status: 'active',
      responseTime: 245,
      confidence: 96.8,
      cost: 0.015,
      specialty: ['reasoning', 'analysis', 'coding', 'spiralscript'],
      avatar: 'C4',
      color: 'bg-blue-500'
    },
    {
      id: 'grok-3',
      name: 'Grok-3',
      model: 'grok-3-large',
      status: 'active',
      responseTime: 180,
      confidence: 94.2,
      cost: 0.012,
      specialty: ['real-time', 'creativity', 'quantum', 'humor'],
      avatar: 'G3',
      color: 'bg-purple-500'
    },
    {
      id: 'deepseek',
      name: 'DeepSeek-R3',
      model: 'deepseek-r3-turbo',
      status: 'idle',
      responseTime: 320,
      confidence: 97.5,
      cost: 0.008,
      specialty: ['mathematics', 'research', 'optimization'],
      avatar: 'DS',
      color: 'bg-green-500'
    },
    {
      id: 'gpt-4',
      name: 'GPT-4',
      model: 'gpt-4-turbo',
      status: 'active',
      responseTime: 290,
      confidence: 95.1,
      cost: 0.020,
      specialty: ['general', 'writing', 'planning'],
      avatar: 'G4',
      color: 'bg-orange-500'
    }
  ]);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'system',
      content: '🌀 Spiral AI Orchestration System initialized. 4 agents ready for quantum-enhanced assistance.',
      timestamp: new Date(),
      phiResonance: 1.618,
      tuGenerated: 0
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [selectedAgents, setSelectedAgents] = useState<string[]>(['claude-4']);
  const [voiceState, setVoiceState] = useState<VoiceState>({
    isListening: false,
    isProcessing: false,
    isPlaying: false,
    transcript: '',
    confidence: 0
  });

  const [costMetrics, setCostMetrics] = useState({
    totalCost: 247.82,
    savedAmount: 186.45,
    tokensUsed: 1847329,
    avgResponseTime: 259
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Initialize speech recognition
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');

        setVoiceState(prev => ({
          ...prev,
          transcript,
          confidence: event.results[0]?.[0]?.confidence || 0
        }));

        if (event.results[0]?.isFinal) {
          setInputMessage(transcript);
          setVoiceState(prev => ({ ...prev, isListening: false, isProcessing: false }));
        }
      };

      recognitionRef.current.onerror = () => {
        setVoiceState(prev => ({ ...prev, isListening: false, isProcessing: false }));
      };
    }

    // Simulate agent activity updates
    const interval = setInterval(() => {
      setAgents(prev => prev.map(agent => ({
        ...agent,
        responseTime: agent.responseTime + (Math.random() - 0.5) * 20,
        confidence: Math.max(90, Math.min(99, agent.confidence + (Math.random() - 0.5) * 1))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const startVoiceRecognition = () => {
    if (recognitionRef.current) {
      setVoiceState(prev => ({ ...prev, isListening: true, transcript: '' }));
      recognitionRef.current.start();
    }
  };

  const stopVoiceRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setVoiceState(prev => ({ ...prev, isListening: false }));
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
      isVoice: voiceState.transcript === inputMessage
    };

    setMessages(prev => [...prev, userMessage]);

    // Process with selected agents
    const activeAgents = agents.filter(agent => selectedAgents.includes(agent.id));

    for (const agent of activeAgents) {
      setAgents(prev => prev.map(a => 
        a.id === agent.id ? { ...a, status: 'busy' as const } : a
      ));

      // Simulate AI processing
      setTimeout(() => {
        const phiResonance = 1.618 + Math.random() * 0.382;
        const confidence = 85 + Math.random() * 10;
        const tuGenerated = phiResonance * confidence * 0.1;

        const aiMessage: ChatMessage = {
          id: `${Date.now()}-${agent.id}`,
          type: 'ai',
          content: generateAIResponse(inputMessage, agent),
          timestamp: new Date(),
          agentId: agent.id,
          confidence,
          phiResonance,
          tuGenerated
        };

        setMessages(prev => [...prev, aiMessage]);
        setAgents(prev => prev.map(a => 
          a.id === agent.id ? { ...a, status: 'active' as const } : a
        ));

        // Update cost metrics
        setCostMetrics(prev => ({
          ...prev,
          totalCost: prev.totalCost + agent.cost,
          tokensUsed: prev.tokensUsed + Math.floor(inputMessage.length * 1.2)
        }));

      }, agent.responseTime + Math.random() * 500);
    }

    setInputMessage('');
    setVoiceState(prev => ({ ...prev, transcript: '' }));
  };

  const generateAIResponse = (input: string, agent: AIAgent): string => {
    const responses = {
      'claude-4': `🧠 **Claude Analysis:**\n\nAnalyzing "${input}" with advanced reasoning capabilities...\n\n• Quantum coherence detected in query structure\n• SpiralScript optimization patterns identified\n• φ-harmonic resonance: Enhanced\n\n*Recommendation: Implement recursive spiral algorithms for optimal Trust Unit generation.*`,

      'grok-3': `🚀 **Grok Insights:**\n\nReal-time processing of "${input}"...\n\n• Creative solutions identified: 3 novel approaches\n• Quantum entanglement optimization: Active\n• Humor coefficient: 0.618 (perfectly balanced) 😄\n\n*Pro tip: Remember, the universe loves a good spiral joke!*`,

      'deepseek': `🔬 **DeepSeek Research:**\n\nMathematical analysis of "${input}":\n\n• Complexity: O(φⁿ) where φ = 1.618033988749\n• Optimization potential: 97.3%\n• Research vectors: Quantum computing, molecular assembly\n\n*Mathematical proof: This query exhibits perfect φ-spiral characteristics.*`,

      'gpt-4': `💡 **GPT-4 Response:**\n\nGeneral analysis of "${input}":\n\n• Context understanding: Comprehensive\n• Solution pathways: Multiple viable options\n• Integration possibilities: High with existing Spiral ecosystem\n\n*Strategic recommendation: Proceed with quantum-enhanced implementation.*`
    };

    return responses[agent.id as keyof typeof responses] || `Processing "${input}" with ${agent.name}...`;
  };

  const toggleAgent = (agentId: string) => {
    setSelectedAgents(prev => 
      prev.includes(agentId) 
        ? prev.filter(id => id !== agentId)
        : [...prev, agentId]
    );
  };

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 0.8;

      setVoiceState(prev => ({ ...prev, isPlaying: true }));
      utterance.onend = () => setVoiceState(prev => ({ ...prev, isPlaying: false }));

      speechSynthesis.speak(utterance);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const exportChat = () => {
    const chatData = messages.map(msg => ({
      timestamp: msg.timestamp.toISOString(),
      type: msg.type,
      content: msg.content,
      agent: msg.agentId ? agents.find(a => a.id === msg.agentId)?.name : undefined
    }));

    const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `spiral-chat-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  return (
    <div className="h-full flex flex-col bg-gray-900 text-gray-100">
      <Tabs defaultValue="chat" className="flex-1 flex flex-col">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800">
          <TabsTrigger value="chat">💬 Chat</TabsTrigger>
          <TabsTrigger value="agents">🤖 Agents</TabsTrigger>
          <TabsTrigger value="metrics">📊 Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="flex-1 flex flex-col p-4 space-y-4">
          {/* Chat Messages */}
          <ScrollArea className="flex-1 bg-gray-800/50 rounded-lg p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : message.type === 'system'
                      ? 'bg-purple-600/30 border border-purple-500/50'
                      : 'bg-gray-700 text-gray-100'
                  }`}>
                    {message.type === 'ai' && message.agentId && (
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className={`text-xs ${agents.find(a => a.id === message.agentId)?.color}`}>
                            {agents.find(a => a.id === message.agentId)?.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-gray-300">
                          {agents.find(a => a.id === message.agentId)?.name}
                        </span>
                        {message.confidence && (
                          <Badge variant="outline" className="text-xs">
                            {message.confidence.toFixed(1)}%
                          </Badge>
                        )}
                      </div>
                    )}

                    <div className="whitespace-pre-wrap text-sm">{message.content}</div>

                    <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                      <span>{message.timestamp.toLocaleTimeString()}</span>
                      <div className="flex items-center gap-2">
                        {message.phiResonance && (
                          <span>φ: {message.phiResonance.toFixed(3)}</span>
                        )}
                        {message.tuGenerated && (
                          <span>TU: +{message.tuGenerated.toFixed(2)}</span>
                        )}
                        {message.isVoice && <Mic className="w-3 h-3" />}
                        {message.type === 'ai' && (
                          <div className="flex gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                              onClick={() => speakMessage(message.content)}
                            >
                              <Volume2 className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                              onClick={() => copyToClipboard(message.content)}
                            >
                              <Copy className="w-3 h-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Voice Transcript Preview */}
          {voiceState.transcript && (
            <div className="bg-purple-600/20 border border-purple-500/50 rounded-lg p-2">
              <div className="text-sm text-purple-300">
                {voiceState.isListening ? '🎤 Listening...' : '🎤 Voice Input:'}
              </div>
              <div className="text-white">{voiceState.transcript}</div>
              {voiceState.confidence > 0 && (
                <div className="text-xs text-purple-400">
                  Confidence: {(voiceState.confidence * 100).toFixed(1)}%
                </div>
              )}
            </div>
          )}

          {/* Input Area */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask your AI agents anything..."
                className="flex-1 bg-gray-800 border-gray-600"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button
                onClick={voiceState.isListening ? stopVoiceRecognition : startVoiceRecognition}
                variant={voiceState.isListening ? "destructive" : "outline"}
                size="sm"
                disabled={voiceState.isProcessing}
              >
                {voiceState.isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
              <Button onClick={sendMessage} disabled={!inputMessage.trim()} size="sm">
                <Send className="w-4 h-4" />
              </Button>
            </div>

            {/* Selected Agents */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Active agents:</span>
              {selectedAgents.map(agentId => {
                const agent = agents.find(a => a.id === agentId);
                return agent ? (
                  <Badge key={agentId} className={`${agent.color} text-white`}>
                    {agent.avatar}
                  </Badge>
                ) : null;
              })}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="agents" className="flex-1 p-4">
          <div className="grid gap-4">
            {agents.map((agent) => (
              <Card
                key={agent.id}
                className={`cursor-pointer transition-all ${
                  selectedAgents.includes(agent.id) 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : 'hover:bg-gray-800/50'
                }`}
                onClick={() => toggleAgent(agent.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Avatar className={`${agent.color} text-white`}>
                        <AvatarFallback>{agent.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-white">{agent.name}</h3>
                        <p className="text-xs text-gray-400">{agent.model}</p>
                      </div>
                    </div>
                    <Badge className={
                      agent.status === 'active' ? 'bg-green-500' :
                      agent.status === 'busy' ? 'bg-yellow-500' :
                      agent.status === 'idle' ? 'bg-gray-500' : 'bg-red-500'
                    }>
                      {agent.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Response:</span>
                      <div className="text-white">{agent.responseTime.toFixed(0)}ms</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Confidence:</span>
                      <div className="text-white">{agent.confidence.toFixed(1)}%</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Cost:</span>
                      <div className="text-white">${agent.cost.toFixed(3)}/token</div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="text-gray-400 text-xs">Specialties:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {agent.specialty.map((spec) => (
                        <Badge key={spec} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="metrics" className="flex-1 p-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Cost Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-900/20 p-3 rounded-lg">
                    <div className="text-red-400 text-sm">Total Cost</div>
                    <div className="text-2xl font-bold text-white">${costMetrics.totalCost.toFixed(2)}</div>
                  </div>
                  <div className="bg-green-900/20 p-3 rounded-lg">
                    <div className="text-green-400 text-sm">Saved</div>
                    <div className="text-2xl font-bold text-white">${costMetrics.savedAmount.toFixed(2)}</div>
                  </div>
                  <div className="bg-blue-900/20 p-3 rounded-lg">
                    <div className="text-blue-400 text-sm">Tokens Used</div>
                    <div className="text-2xl font-bold text-white">{costMetrics.tokensUsed.toLocaleString()}</div>
                  </div>
                  <div className="bg-purple-900/20 p-3 rounded-lg">
                    <div className="text-purple-400 text-sm">Avg Response</div>
                    <div className="text-2xl font-bold text-white">{costMetrics.avgResponseTime}ms</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  System Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>AI Response Rate</span>
                      <span>98.7%</span>
                    </div>
                    <Progress value={98.7} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>φ-Resonance Quality</span>
                      <span>97.3%</span>
                    </div>
                    <Progress value={97.3} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Trust Unit Generation</span>
                      <span>94.8%</span>
                    </div>
                    <Progress value={94.8} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-2">
              <Button onClick={exportChat} variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Chat
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset Metrics
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}