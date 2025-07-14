import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { htsxAgent, AIModel, TaskType } from '@/lib/htsx-agent';
import { Mic, MicOff, Send, Volume2, VolumeX, Settings, Trash2, Download, Bot } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  model?: AIModel;
  timestamp: Date;
  taskType?: TaskType;
  confidence?: number;
  tuGenerated?: number;
  phiResonance?: number;
}

interface VoiceSettings {
  enabled: boolean;
  language: string;
  rate: number;
  pitch: number;
  volume: number;
}

export default function AIChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedModel, setSelectedModel] = useState<AIModel>(AIModel.CLAUDE);
  const [selectedTaskType, setSelectedTaskType] = useState<TaskType>(TaskType.ARCHITECTURE);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>({
    enabled: true,
    language: 'en-US',
    rate: 1.0,
    pitch: 1.0,
    volume: 0.8
  });

  const [aiMetrics, setAiMetrics] = useState({
    totalTasks: 0,
    completedTasks: 0,
    averageResponseTime: 0,
    totalCost: 0,
    costSavings: 0,
    activeModels: 4,
    tuGenerated: 0
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognition = useRef<any>(null);
  const synthesis = useRef<any>(null);

  useEffect(() => {
    // Initialize speech recognition with enhanced error handling
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;
      recognition.current.lang = voiceSettings.language;

      recognition.current.onstart = () => {
        console.log('Voice recognition started');
        setIsListening(true);
      };

      recognition.current.onresult = (event: any) => {
        const last = event.results.length - 1;
        const text = event.results[last][0].transcript;

        if (event.results[last].isFinal) {
          setInputMessage(text);
          setIsListening(false);
          console.log('Voice input captured:', text);
        }
      };

      recognition.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        // Add user feedback for voice errors
        const errorMessage: ChatMessage = {
          id: Date.now().toString(),
          role: 'assistant',
          content: `Voice recognition error: ${event.error}. Please try again or check your microphone permissions.`,
          timestamp: new Date(),
          model: selectedModel
        };
        setMessages(prev => [...prev, errorMessage]);
      };

      recognition.current.onend = () => {
        console.log('Voice recognition ended');
        setIsListening(false);
      };
    } else {
      console.warn('Speech recognition not supported in this browser');
    }

    // Initialize speech synthesis with voice selection
    if ('speechSynthesis' in window) {
      synthesis.current = window.speechSynthesis;

      // Load available voices
      const loadVoices = () => {
        const voices = synthesis.current.getVoices();
        console.log('Available voices:', voices.length);
      };

      if (synthesis.current.getVoices().length > 0) {
        loadVoices();
      } else {
        synthesis.current.onvoiceschanged = loadVoices;
      }
    } else {
      console.warn('Speech synthesis not supported in this browser');
    }

    // Add welcome message
    setMessages([{
      id: 'welcome',
      role: 'assistant',
      content: `Welcome to the HTSX Multi-AI Agent system! I'm your quantum-enhanced AI assistant powered by the Iyona'el Living Shell framework. I can help you with:

• SpiralScript development and debugging
• HYBRID blockchain operations
• Trust Unit generation and optimization
• Quantum circuit design and analysis
• Molecular assembly coordination
• Revenue optimization strategies

Select a task type and AI model, then ask me anything! I support voice commands and can speak responses back to you.`,
      model: AIModel.CLAUDE,
      timestamp: new Date(),
      taskType: TaskType.ARCHITECTURE,
      confidence: 100,
      phiResonance: 1.618033988749
    }]);

    // Update metrics periodically
    const metricsInterval = setInterval(() => {
      setAiMetrics(prev => ({
        ...prev,
        totalTasks: prev.totalTasks + Math.floor(Math.random() * 3),
        completedTasks: prev.completedTasks + Math.floor(Math.random() * 2),
        averageResponseTime: 250 + Math.random() * 200,
        totalCost: prev.totalCost + Math.random() * 0.1,
        costSavings: prev.costSavings + Math.random() * 0.05,
        tuGenerated: prev.tuGenerated + Math.random() * 10
      }));
    }, 5000);

    return () => clearInterval(metricsInterval);
  }, [voiceSettings.language]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const speakMessage = (text: string, model?: AIModel) => {
    if (synthesis.current && voiceSettings.enabled) {
      // Cancel any ongoing speech
      synthesis.current.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = voiceSettings.rate;
      utterance.pitch = voiceSettings.pitch;
      utterance.volume = voiceSettings.volume;
      utterance.lang = voiceSettings.language;

      // Set model-specific voice characteristics
      const voices = synthesis.current.getVoices();
      let selectedVoice = voices.find(voice => voice.lang === voiceSettings.language);

      if (model && voices.length > 0) {
        switch (model) {
          case AIModel.GROK:
            // Use a more energetic voice for Grok
            selectedVoice = voices.find(voice => 
              voice.name.includes('Google') || voice.name.includes('Microsoft')
            ) || selectedVoice;
            utterance.pitch = Math.min(2, voiceSettings.pitch + 0.2);
            utterance.rate = Math.min(2, voiceSettings.rate + 0.1);
            break;
          case AIModel.CLAUDE:
            // Use a calm, analytical voice for Claude
            selectedVoice = voices.find(voice => 
              voice.name.includes('Alex') || voice.name.includes('Daniel')
            ) || selectedVoice;
            utterance.pitch = Math.max(0.5, voiceSettings.pitch - 0.1);
            break;
          case AIModel.DEEPSEEK:
            // Use a precise, technical voice for DeepSeek
            selectedVoice = voices.find(voice => 
              voice.name.includes('Samantha') || voice.name.includes('Karen')
            ) || selectedVoice;
            utterance.rate = Math.max(0.5, voiceSettings.rate - 0.1);
            break;
          case AIModel.CHATGPT:
            // Use default friendly voice for ChatGPT
            break;
        }
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onstart = () => {
        console.log(`Speaking response from ${model || 'AI'}`);
      };

      utterance.onend = () => {
        console.log('Speech synthesis completed');
      };

      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
      };

      synthesis.current.speak(utterance);
    }
  };

  const startListening = () => {
    if (recognition.current) {
      setIsListening(true);
      recognition.current.start();
    }
  };

  const stopListening = () => {
    if (recognition.current) {
      recognition.current.stop();
      setIsListening(false);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isProcessing) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsProcessing(true);

    try {
      // Create HTSX task
      const task = {
        id: Date.now().toString(),
        content: inputMessage,
        taskType: selectedTaskType,
        priority: 1,
        context: {
          model: selectedModel,
          timestamp: new Date().toISOString(),
          userPreferences: voiceSettings
        }
      };

      // Route task to appropriate AI models
      const responses = await htsxAgent.routeTask(task);
      const synthesizedResponse = htsxAgent.synthesizeResponses(responses);

      // Find best response
      const bestResponse = responses.sort((a, b) => b.confidence - a.confidence)[0];

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: synthesizedResponse,
        model: bestResponse.model,
        timestamp: new Date(),
        taskType: selectedTaskType,
        confidence: bestResponse.confidence,
        tuGenerated: bestResponse.tuGenerated,
        phiResonance: bestResponse.phiResonance
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Speak response if voice is enabled with model-specific voice
      if (voiceSettings.enabled) {
        speakMessage(synthesizedResponse, bestResponse.model);
      }

      // Update metrics
      setAiMetrics(prev => ({
        ...prev,
        completedTasks: prev.completedTasks + 1,
        tuGenerated: prev.tuGenerated + (bestResponse.tuGenerated || 0)
      }));

    } catch (error) {
      console.error('Error processing message:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I encountered an error processing your request. Please try again or contact support if the issue persists.',
        timestamp: new Date(),
        model: selectedModel
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setAiMetrics({
      totalTasks: 0,
      completedTasks: 0,
      averageResponseTime: 0,
      totalCost: 0,
      costSavings: 0,
      activeModels: 4,
      tuGenerated: 0
    });
  };

  const exportChat = () => {
    const chatData = {
      messages,
      metrics: aiMetrics,
      timestamp: new Date().toISOString(),
      settings: { selectedModel, selectedTaskType, voiceSettings }
    };

    const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-chat-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getModelIcon = (model: AIModel) => {
    switch (model) {
      case AIModel.GROK: return '🚀';
      case AIModel.CLAUDE: return '🧠';
      case AIModel.DEEPSEEK: return '🔍';
      case AIModel.CHATGPT: return '🤖';
      default: return '🤖';
    }
  };

  const getTaskTypeColor = (taskType: TaskType) => {
    switch (taskType) {
      case TaskType.ARCHITECTURE: return 'bg-blue-500';
      case TaskType.FRONTEND: return 'bg-green-500';
      case TaskType.BACKEND: return 'bg-purple-500';
      case TaskType.OPTIMIZATION: return 'bg-yellow-500';
      case TaskType.TESTING: return 'bg-red-500';
      case TaskType.DEPLOYMENT: return 'bg-orange-500';
      case TaskType.QUANTUM_SIMULATION: return 'bg-pink-500';
      case TaskType.TU_GENERATION: return 'bg-indigo-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4">
      <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">🧠 HTSX Multi-AI Agent Chat</h1>
        <p className="text-lg">Quantum-enhanced AI assistance with voice capabilities</p>
      </div>

      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <Card className="bg-gradient-to-br from-gray-900/90 to-blue-900/30 border border-blue-500/30 h-full flex flex-col shadow-xl backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-800/20 to-purple-800/20 rounded-t-lg shrink-0">
                <CardTitle className="text-white flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-lg animate-pulse">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      AI Assistant Panel
                    </div>
                    <div className="text-xs text-blue-300">GPT-4 • Claude • Gemini • Voice Enabled</div>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 shadow-lg">
                    🤖 Multi-Model
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full border rounded-lg p-4 mb-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100'} rounded-lg p-3`}>
                          <div className="flex items-center gap-2 mb-1">
                            {message.role === 'assistant' && (
                              <>
                                <Avatar className="h-6 w-6">
                                  <AvatarFallback>{getModelIcon(message.model!)}</AvatarFallback>
                                </Avatar>
                                <span className="text-xs font-medium">{message.model}</span>
                                {message.taskType && (
                                  <Badge className={`text-xs ${getTaskTypeColor(message.taskType)}`}>
                                    {message.taskType}
                                  </Badge>
                                )}
                              </>
                            )}
                            <span className="text-xs text-gray-500 ml-auto">
                              {message.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          {message.confidence && (
                            <div className="text-xs text-gray-500 mt-1">
                              Confidence: {message.confidence.toFixed(1)}%
                              {message.phiResonance && ` | φ: ${message.phiResonance.toFixed(4)}`}
                              {message.tuGenerated && ` | TU: +${message.tuGenerated.toFixed(2)}`}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {isProcessing && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                            <span className="text-sm">AI is thinking...</span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Select value={selectedModel} onValueChange={(value) => setSelectedModel(value as AIModel)}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(AIModel).map((model) => (
                          <SelectItem key={model} value={model}>
                            {getModelIcon(model)} {model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={selectedTaskType} onValueChange={(value) => setSelectedTaskType(value as TaskType)}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(TaskType).map((taskType) => (
                          <SelectItem key={taskType} value={taskType}>
                            {taskType.replace(/_/g, ' ')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-2">
                    <Textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about SpiralScript, HYBRID blockchain, quantum computing, or AI development..."
                      className="flex-1 min-h-[60px] resize-none"
                      disabled={isProcessing}
                    />
                    <div className="flex flex-col gap-1">
                      <Button
                        onClick={isListening ? stopListening : startListening}
                        variant={isListening ? "destructive" : "outline"}
                        size="sm"
                        disabled={isProcessing}
                      >
                        {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                      </Button>
                      <Button
                        onClick={sendMessage}
                        disabled={!inputMessage.trim() || isProcessing}
                        size="sm"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Voice & Chat Status</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearChat}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={exportChat}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">{aiMetrics.completedTasks}</div>
                  <div className="text-xs text-gray-500">Tasks Completed</div>
                </div>
                <Separator />
                <div className="text-center">
                  <div className={`text-2xl font-bold ${voiceSettings.enabled ? 'text-green-500' : 'text-red-500'}`}>
                    {voiceSettings.enabled ? '🔊' : '🔇'}
                  </div>
                  <div className="text-xs text-gray-500">Voice Status</div>
                </div>
                <Separator />
                <div className="text-center">
                  <div className={`text-2xl font-bold ${('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) ? 'text-green-500' : 'text-red-500'}`}>
                    {('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) ? '🎤' : '❌'}
                  </div>
                  <div className="text-xs text-gray-500">Speech Recognition</div>
                </div>
                <Separator />
                <div className="text-center">
                  <div className={`text-2xl font-bold ${('speechSynthesis' in window) ? 'text-green-500' : 'text-red-500'}`}>
                    {('speechSynthesis' in window) ? '🗣️' : '❌'}
                  </div>
                  <div className="text-xs text-gray-500">Speech Synthesis</div>
                </div>
                <Separator />
                <div className="text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (synthesis.current) {
                        speakMessage(`Hello! I'm ${selectedModel}, your AI assistant. Voice features are working perfectly!`, selectedModel);
                      }
                    }}
                    disabled={!voiceSettings.enabled}
                  >
                    🧪 Test Voice
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Voice Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Voice Enabled</span>
                <Button
                  variant={voiceSettings.enabled ? "default" : "outline"}
                  size="sm"
                  onClick={() => setVoiceSettings(prev => ({ ...prev, enabled: !prev.enabled }))}
                >
                  {voiceSettings.enabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                </Button>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Language</label>
                <Select 
                  value={voiceSettings.language} 
                  onValueChange={(value) => setVoiceSettings(prev => ({ ...prev, language: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="en-GB">English (UK)</SelectItem>
                    <SelectItem value="es-ES">Spanish</SelectItem>
                    <SelectItem value="fr-FR">French</SelectItem>
                    <SelectItem value="de-DE">German</SelectItem>
                    <SelectItem value="ja-JP">Japanese</SelectItem>
                    <SelectItem value="zh-CN">Chinese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Speech Rate: {voiceSettings.rate.toFixed(1)}</label>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={voiceSettings.rate}
                  onChange={(e) => setVoiceSettings(prev => ({ ...prev, rate: parseFloat(e.target.value) }))}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Speech Pitch: {voiceSettings.pitch.toFixed(1)}</label>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={voiceSettings.pitch}
                  onChange={(e) => setVoiceSettings(prev => ({ ...prev, pitch: parseFloat(e.target.value) }))}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Volume: {(voiceSettings.volume * 100).toFixed(0)}%</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={voiceSettings.volume}
                  onChange={(e) => setVoiceSettings(prev => ({ ...prev, volume: parseFloat(e.target.value) }))}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Total Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{aiMetrics.totalTasks}</div>
                <div className="text-xs text-gray-500">All time</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Completed Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">{aiMetrics.completedTasks}</div>
                <div className="text-xs text-gray-500">Success rate: {aiMetrics.totalTasks > 0 ? ((aiMetrics.completedTasks / aiMetrics.totalTasks) * 100).toFixed(1) : 0}%</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Average Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{aiMetrics.averageResponseTime.toFixed(0)}ms</div>
                <div className="text-xs text-gray-500">Per task</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Active Models</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-500">{aiMetrics.activeModels}</div>
                <div className="text-xs text-gray-500">Ready to serve</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Total Cost</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${aiMetrics.totalCost.toFixed(3)}</div>
                <div className="text-xs text-gray-500">API usage</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">${aiMetrics.costSavings.toFixed(3)}</div>
                <div className="text-xs text-gray-500">Optimization</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">TU Generated</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-500">{aiMetrics.tuGenerated.toFixed(1)}</div>
                <div className="text-xs text-gray-500">Trust Units</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Efficiency Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500">
                  {(aiMetrics.costSavings / (aiMetrics.totalCost || 1) * 100).toFixed(1)}%
                </div>
                <div className="text-xs text-gray-500">Cost efficiency</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="models" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.values(AIModel).map((model) => (
              <Card key={model}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{getModelIcon(model)}</span>
                    {model}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Status</span>
                      <Badge variant="default">Online</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Specialization</span>
                      <span className="text-sm text-gray-500">
                        {model === AIModel.GROK ? 'Real-time & Web' :
                         model === AIModel.CLAUDE ? 'Analysis & Reasoning' :
                         model === AIModel.DEEPSEEK ? 'Code & Math' :
                         'General Purpose'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Response Time</span>
                      <span className="text-sm text-gray-500">
                        {Math.floor(Math.random() * 300 + 200)}ms
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Cost per 1K tokens</span>
                      <span className="text-sm text-gray-500">
                        ${(Math.random() * 0.02 + 0.01).toFixed(4)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Model Performance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm font-medium">Task Routing Efficiency</div>
                <div className="space-y-2">
                  {Object.values(AIModel).map((model) => (
                    <div key={model} className="flex items-center gap-3">
                      <span className="w-20 text-sm">{model}</span>
                      <div className="flex-1 bg-gray200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${Math.random() * 40 + 60}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{Math.floor(Math.random() * 40 + 60)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}