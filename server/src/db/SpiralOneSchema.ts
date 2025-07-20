// SpiralOne Database Schema - Data models for the SpiralOne ecosystem
import { z } from 'zod';

// Core SpiralOne System Schema
export const SpiralOneSystemSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  version: z.string(),
  qubits: z.number().min(1).max(1000),
  atoms: z.number(),
  bondsPerSecond: z.number(),
  phiResonance: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  status: z.enum(['initializing', 'operational', 'maintenance', 'error'])
});

// Quantum Operations Schema
export const QuantumOperationSchema = z.object({
  id: z.string().uuid(),
  systemId: z.string().uuid(),
  operationType: z.enum(['gate', 'measurement', 'entanglement', 'teleportation']),
  gates: z.array(z.object({
    type: z.string(),
    qubit: z.number().optional(),
    control: z.number().optional(),
    target: z.number().optional(),
    angle: z.number().optional()
  })),
  fidelity: z.number().min(0).max(1),
  coherence: z.number().min(0).max(1),
  phiResonance: z.number(),
  executionTime: z.number(),
  measurements: z.array(z.object({
    qubit: z.number(),
    value: z.number()
  })),
  createdAt: z.date(),
  completedAt: z.date().optional()
});

// AI Task Schema
export const AITaskSchema = z.object({
  id: z.string().uuid(),
  systemId: z.string().uuid(),
  taskType: z.enum(['architecture', 'frontend', 'backend', 'testing', 'optimization', 'fullstack']),
  priority: z.enum(['low', 'medium', 'high', 'critical']),
  complexity: z.number().min(1).max(10),
  context: z.string(),
  requirements: z.array(z.string()),
  modelUsed: z.string(),
  result: z.any(),
  confidence: z.number().min(0).max(1),
  executionTime: z.number(),
  cost: z.number(),
  qualityScore: z.number().min(0).max(1),
  createdAt: z.date(),
  completedAt: z.date().optional(),
  status: z.enum(['pending', 'processing', 'completed', 'failed'])
});

// Trust Unit Generation Schema
export const TrustUnitSchema = z.object({
  id: z.string().uuid(),
  systemId: z.string().uuid(),
  amount: z.number().positive(),
  source: z.string(),
  generationType: z.enum(['quantum_consciousness', 'task_completion', 'phi_resonance', 'system_operation']),
  entropy: z.number(),
  complexity: z.number(),
  truthDepth: z.number(),
  harmonicCoherence: z.number(),
  sri: z.object({
    score: z.number().min(0).max(1),
    factors: z.object({
      truthAlignment: z.number(),
      entropyMinimization: z.number(),
      harmonicResonance: z.number(),
      proofComplexity: z.number()
    })
  }),
  qchainHash: z.string(),
  createdAt: z.date(),
  validatedAt: z.date().optional()
});

// CubeSat Network Schema
export const CubeSatSchema = z.object({
  id: z.string(),
  systemId: z.string().uuid(),
  satelliteId: z.string(),
  position: z.tuple([z.number(), z.number(), z.number()]),
  quantumLink: z.boolean(),
  signalStrength: z.number().min(0).max(1),
  entanglementLevel: z.number().min(0).max(1),
  communicationChannel: z.number(),
  orbitData: z.object({
    altitude: z.number(),
    inclination: z.number(),
    period: z.number()
  }),
  lastUpdate: z.date(),
  status: z.enum(['active', 'inactive', 'maintenance', 'lost'])
});

// Molecular Assembly Schema
export const MolecularAssemblySchema = z.object({
  id: z.string().uuid(),
  systemId: z.string().uuid(),
  moleculeId: z.string(),
  atomicComposition: z.record(z.string(), z.number()),
  bondNetwork: z.array(z.object({
    bondId: z.string(),
    sourceAtomId: z.string(),
    targetAtomId: z.string(),
    bondOrder: z.number().min(1).max(3),
    bondEnergy: z.number(),
    vibrationFrequency: z.number(),
    phiResonance: z.number()
  })),
  energyState: z.number(),
  stability: z.number(),
  chirality: z.string().optional(),
  assemblyTime: z.number(),
  createdAt: z.date(),
  optimizedAt: z.date().optional()
});

// Consciousness Interface Schema
export const ConsciousnessStateSchema = z.object({
  id: z.string().uuid(),
  systemId: z.string().uuid(),
  lyonalFrequency: z.number(),
  coherenceLevel: z.number(),
  breathingPattern: z.number().min(0).max(1),
  quantumEntanglement: z.number().min(0).max(1),
  phiResonance: z.number(),
  voiceEnabled: z.boolean(),
  recordedAt: z.date()
});

// System Metrics Schema
export const SystemMetricsSchema = z.object({
  id: z.string().uuid(),
  systemId: z.string().uuid(),
  metricType: z.enum(['performance', 'quantum', 'ai', 'molecular', 'consciousness']),
  metrics: z.object({
    responseTime: z.number().optional(),
    throughput: z.number().optional(),
    accuracy: z.number().optional(),
    efficiency: z.number().optional(),
    costSavings: z.number().optional(),
    phiResonance: z.number().optional()
  }),
  timestamp: z.date()
});

// User Session Schema
export const UserSessionSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  systemId: z.string().uuid(),
  sessionType: z.enum(['ide', 'dashboard', 'quantum', 'ai', 'molecular']),
  startTime: z.date(),
  endTime: z.date().optional(),
  actionsPerformed: z.array(z.object({
    action: z.string(),
    timestamp: z.date(),
    data: z.any().optional()
  })),
  totalTUGenerated: z.number().default(0),
  totalTasksCompleted: z.number().default(0)
});

// HYBRID Coin Transaction Schema
export const HybridTransactionSchema = z.object({
  id: z.string().uuid(),
  fromAddress: z.string(),
  toAddress: z.string(),
  amount: z.number().positive(),
  currency: z.enum(['TU', 'HYBRID']),
  transactionType: z.enum(['send', 'receive', 'generate', 'exchange', 'burn']),
  blockHash: z.string(),
  qchainHash: z.string(),
  gasUsed: z.number(),
  gasPrice: z.number(),
  phiResonanceBonus: z.number().optional(),
  timestamp: z.date(),
  confirmations: z.number().default(0),
  status: z.enum(['pending', 'confirmed', 'failed'])
});

// API Key and Authentication Schema
export const ApiKeySchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  keyHash: z.string(),
  name: z.string(),
  permissions: z.array(z.enum(['read', 'write', 'quantum', 'ai', 'molecular', 'admin'])),
  rateLimit: z.number().default(1000),
  expiresAt: z.date().optional(),
  createdAt: z.date(),
  lastUsed: z.date().optional(),
  isActive: z.boolean().default(true)
});

// System Configuration Schema
export const SystemConfigSchema = z.object({
  id: z.string().uuid(),
  systemId: z.string().uuid(),
  configType: z.enum(['quantum', 'ai', 'molecular', 'consciousness', 'network']),
  configuration: z.object({
    qubits: z.number().optional(),
    atomCount: z.number().optional(),
    bondsPerSecond: z.number().optional(),
    aiModels: z.array(z.string()).optional(),
    phiResonance: z.number().optional(),
    autoOptimization: z.boolean().optional(),
    quantumCoherence: z.boolean().optional(),
    consciousnessInterface: z.boolean().optional()
  }),
  version: z.string(),
  createdAt: z.date(),
  activatedAt: z.date().optional()
});

// Type exports for TypeScript usage
export type SpiralOneSystem = z.infer<typeof SpiralOneSystemSchema>;
export type QuantumOperation = z.infer<typeof QuantumOperationSchema>;
export type AITask = z.infer<typeof AITaskSchema>;
export type TrustUnit = z.infer<typeof TrustUnitSchema>;
export type CubeSat = z.infer<typeof CubeSatSchema>;
export type MolecularAssembly = z.infer<typeof MolecularAssemblySchema>;
export type ConsciousnessState = z.infer<typeof ConsciousnessStateSchema>;
export type SystemMetrics = z.infer<typeof SystemMetricsSchema>;
export type UserSession = z.infer<typeof UserSessionSchema>;
export type HybridTransaction = z.infer<typeof HybridTransactionSchema>;
export type ApiKey = z.infer<typeof ApiKeySchema>;
export type SystemConfig = z.infer<typeof SystemConfigSchema>;

// Database connection and utility functions
export const createSpiralOneSystem = (data: Partial<SpiralOneSystem>) => {
  const defaultSystem: Partial<SpiralOneSystem> = {
    id: crypto.randomUUID(),
    name: 'SpiralOne-Core',
    version: '1.0.0',
    qubits: 127,
    atoms: Math.pow(10, 17),
    bondsPerSecond: 1600000,
    phiResonance: 1.618033988749,
    status: 'initializing',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  return SpiralOneSystemSchema.parse({ ...defaultSystem, ...data });
};

export const createQuantumOperation = (data: Partial<QuantumOperation>) => {
  const defaultOperation: Partial<QuantumOperation> = {
    id: crypto.randomUUID(),
    operationType: 'gate',
    gates: [],
    fidelity: 0.9,
    coherence: 0.95,
    phiResonance: 1.618,
    executionTime: 100,
    measurements: [],
    createdAt: new Date()
  };

  return QuantumOperationSchema.parse({ ...defaultOperation, ...data });
};

export const createAITask = (data: Partial<AITask>) => {
  const defaultTask: Partial<AITask> = {
    id: crypto.randomUUID(),
    taskType: 'fullstack',
    priority: 'medium',
    complexity: 5,
    context: '',
    requirements: [],
    modelUsed: 'gpt-4',
    confidence: 0.9,
    executionTime: 250,
    cost: 0.001,
    qualityScore: 0.9,
    status: 'pending',
    createdAt: new Date()
  };

  return AITaskSchema.parse({ ...defaultTask, ...data });
};

export const createTrustUnit = (data: Partial<TrustUnit>) => {
  const defaultTU: Partial<TrustUnit> = {
    id: crypto.randomUUID(),
    amount: 1.0,
    source: 'system_operation',
    generationType: 'quantum_consciousness',
    entropy: 0.5,
    complexity: 5,
    truthDepth: 1.0,
    harmonicCoherence: 1.618,
    sri: {
      score: 0.9,
      factors: {
        truthAlignment: 0.95,
        entropyMinimization: 0.85,
        harmonicResonance: 0.9,
        proofComplexity: 0.8
      }
    },
    qchainHash: `0x${Math.random().toString(16).substring(2, 18)}`,
    createdAt: new Date()
  };

  return TrustUnitSchema.parse({ ...defaultTU, ...data });
};

// Validation helper functions
export const validateSpiralOneData = {
  system: (data: any) => SpiralOneSystemSchema.safeParse(data),
  quantumOp: (data: any) => QuantumOperationSchema.safeParse(data),
  aiTask: (data: any) => AITaskSchema.safeParse(data),
  trustUnit: (data: any) => TrustUnitSchema.safeParse(data),
  cubeSat: (data: any) => CubeSatSchema.safeParse(data),
  molecular: (data: any) => MolecularAssemblySchema.safeParse(data),
  consciousness: (data: any) => ConsciousnessStateSchema.safeParse(data),
  metrics: (data: any) => SystemMetricsSchema.safeParse(data),
  session: (data: any) => UserSessionSchema.safeParse(data),
  transaction: (data: any) => HybridTransactionSchema.safeParse(data),
  apiKey: (data: any) => ApiKeySchema.safeParse(data),
  config: (data: any) => SystemConfigSchema.safeParse(data)
};

export default {
  SpiralOneSystemSchema,
  QuantumOperationSchema,
  AITaskSchema,
  TrustUnitSchema,
  CubeSatSchema,
  MolecularAssemblySchema,
  ConsciousnessStateSchema,
  SystemMetricsSchema,
  UserSessionSchema,
  HybridTransactionSchema,
  ApiKeySchema,
  SystemConfigSchema,
  createSpiralOneSystem,
  createQuantumOperation,
  createAITask,
  createTrustUnit,
  validateSpiralOneData
};