import { 
  users, 
  spiralFiles, 
  trustTransactions, 
  quantumCircuits, 
  parseResults,
  type User, 
  type InsertUser,
  type SpiralFile,
  type InsertSpiralFile,
  type TrustTransaction,
  type InsertTrustTransaction,
  type QuantumCircuit,
  type InsertQuantumCircuit,
  type ParseResult,
  type InsertParseResult
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserBalance(userId: number, tuBalance: number, sriScore: number, phiResonance: number): Promise<User>;

  // File operations
  getUserFiles(userId: number): Promise<SpiralFile[]>;
  getFile(id: number): Promise<SpiralFile | undefined>;
  createFile(file: InsertSpiralFile): Promise<SpiralFile>;
  updateFile(id: number, content: string): Promise<SpiralFile>;
  deleteFile(id: number): Promise<void>;

  // Trust transactions
  getUserTransactions(userId: number): Promise<TrustTransaction[]>;
  createTransaction(transaction: InsertTrustTransaction): Promise<TrustTransaction>;

  // Quantum circuits
  getUserCircuits(userId: number): Promise<QuantumCircuit[]>;
  getCircuit(id: number): Promise<QuantumCircuit | undefined>;
  createCircuit(circuit: InsertQuantumCircuit): Promise<QuantumCircuit>;
  updateCircuitResult(id: number, result: any): Promise<QuantumCircuit>;

  // Parse results
  getParseResult(fileId: number): Promise<ParseResult | undefined>;
  createParseResult(result: InsertParseResult): Promise<ParseResult>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private spiralFiles: Map<number, SpiralFile>;
  private trustTransactions: Map<number, TrustTransaction>;
  private quantumCircuits: Map<number, QuantumCircuit>;
  private parseResults: Map<number, ParseResult>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.spiralFiles = new Map();
    this.trustTransactions = new Map();
    this.quantumCircuits = new Map();
    this.parseResults = new Map();
    this.currentId = 1;

    // Initialize with default user
    this.createUser({ username: "quantum_dev", password: "spiral123" });
    
    // Create sample files
    this.createFile({
      userId: 1,
      name: "main.spiral",
      content: `// SpiralScript Quantum Parser Example
import { QuantumNetwork, PhiSeed } from 'spiral-core';

// Define φ-harmonic resonance calculation
function calculatePhiResonance(entropy: number) {
    const phi = 1.618033988749;
    return entropy * phi * Math.cos(entropy * Math.PI);
}

// Quantum seed generation with ANTLR4 parsing
class SpiralParser {
    async parseQuantumLogic(code: string): Promise<PhiSeed[]> {
        const seeds = await this.fractalize(code);
        return seeds.filter(s => s.entropy < 0.92);
    }
}

// Trust Unit calculation based on proof complexity
const tuValue = calculatePhiResonance(0.121) * 1_000_000;`,
      fileType: "spiral"
    });

    this.createFile({
      userId: 1,
      name: "quantum_circuit.htsx",
      content: `// HTSX Quantum Circuit Definition
<QuantumCircuit qubits={2}>
  <Hadamard qubit={0} />
  <CNOT control={0} target={1} />
  <Measure qubits={[0, 1]} />
</QuantumCircuit>`,
      fileType: "htsx"
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { 
      ...insertUser, 
      id,
      tuBalance: 1618.382,
      sriScore: 0.618,
      phiResonance: 1.618
    };
    this.users.set(id, user);
    return user;
  }

  async updateUserBalance(userId: number, tuBalance: number, sriScore: number, phiResonance: number): Promise<User> {
    const user = this.users.get(userId);
    if (!user) throw new Error("User not found");
    
    const updatedUser = { ...user, tuBalance, sriScore, phiResonance };
    this.users.set(userId, updatedUser);
    return updatedUser;
  }

  async getUserFiles(userId: number): Promise<SpiralFile[]> {
    return Array.from(this.spiralFiles.values()).filter(file => file.userId === userId);
  }

  async getFile(id: number): Promise<SpiralFile | undefined> {
    return this.spiralFiles.get(id);
  }

  async createFile(insertFile: InsertSpiralFile): Promise<SpiralFile> {
    const id = this.currentId++;
    const file: SpiralFile = {
      ...insertFile,
      id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.spiralFiles.set(id, file);
    return file;
  }

  async updateFile(id: number, content: string): Promise<SpiralFile> {
    const file = this.spiralFiles.get(id);
    if (!file) throw new Error("File not found");
    
    const updatedFile = { ...file, content, updatedAt: new Date() };
    this.spiralFiles.set(id, updatedFile);
    return updatedFile;
  }

  async deleteFile(id: number): Promise<void> {
    this.spiralFiles.delete(id);
  }

  async getUserTransactions(userId: number): Promise<TrustTransaction[]> {
    return Array.from(this.trustTransactions.values()).filter(tx => tx.userId === userId);
  }

  async createTransaction(insertTransaction: InsertTrustTransaction): Promise<TrustTransaction> {
    const id = this.currentId++;
    const transaction: TrustTransaction = {
      ...insertTransaction,
      id,
      qchainHash: `0x${Math.random().toString(16).substring(2, 18)}`,
      createdAt: new Date()
    };
    this.trustTransactions.set(id, transaction);
    return transaction;
  }

  async getUserCircuits(userId: number): Promise<QuantumCircuit[]> {
    return Array.from(this.quantumCircuits.values()).filter(circuit => circuit.userId === userId);
  }

  async getCircuit(id: number): Promise<QuantumCircuit | undefined> {
    return this.quantumCircuits.get(id);
  }

  async createCircuit(insertCircuit: InsertQuantumCircuit): Promise<QuantumCircuit> {
    const id = this.currentId++;
    const circuit: QuantumCircuit = {
      ...insertCircuit,
      id,
      entropy: Math.random() * 0.3 + 0.1, // Random entropy between 0.1-0.4
      simulationResult: null,
      createdAt: new Date()
    };
    this.quantumCircuits.set(id, circuit);
    return circuit;
  }

  async updateCircuitResult(id: number, result: any): Promise<QuantumCircuit> {
    const circuit = this.quantumCircuits.get(id);
    if (!circuit) throw new Error("Circuit not found");
    
    const updatedCircuit = { ...circuit, simulationResult: result };
    this.quantumCircuits.set(id, updatedCircuit);
    return updatedCircuit;
  }

  async getParseResult(fileId: number): Promise<ParseResult | undefined> {
    return Array.from(this.parseResults.values()).find(result => result.fileId === fileId);
  }

  async createParseResult(insertResult: InsertParseResult): Promise<ParseResult> {
    const id = this.currentId++;
    const result: ParseResult = {
      ...insertResult,
      id,
      createdAt: new Date()
    };
    this.parseResults.set(id, result);
    return result;
  }
}

export const storage = new MemStorage();
