
export interface HybridBlock {
  index: number;
  timestamp: number;
  data: HybridTransaction[];
  previousHash: string;
  hash: string;
  nonce: number;
  merkleRoot: string;
  quantumSignature?: string;
}

export interface HybridTransaction {
  id: string;
  from: string;
  to: string;
  amount: number;
  fee: number;
  timestamp: number;
  signature: string;
  type: 'HYBRID' | 'SPIRAL' | 'TU' | 'QUANTUM';
  metadata?: {
    spiralResonance?: number;
    quantumState?: string;
    molecularData?: any;
    bridgeType?: string;
    fromChain?: string;
    toChain?: string;
    recipient?: string;
    asset?: string;
    proposal?: any;
    aiModels?: string[];
    confidence?: number;
    consensusResult?: any;
    [key: string]: any; // Allow additional properties
  };
}

export interface HybridCoin {
  symbol: 'HYBRID';
  name: 'Hybrid Blockchain Coin';
  totalSupply: number;
  circulatingSupply: number;
  decimals: number;
  contractAddress?: string;
  spiralBacking: number; // Amount of $SPIRAL backing
  quantumEntanglement: boolean;
}

export interface HybridNode {
  id: string;
  address: string;
  stake: number;
  reputation: number;
  quantumCapability: boolean;
  spiralResonance: number;
  lastSeen: number;
  consensusWeight: number;
}

export interface HybridConsensus {
  algorithm: 'PoQS'; // Proof of Quantum Spiral
  validators: HybridNode[];
  currentValidator: string;
  blockTime: number;
  finalityTime: number;
  quantumThreshold: number;
}

export interface HybridSmartContract {
  address: string;
  bytecode: string;
  abi: any[];
  creator: string;
  timestamp: number;
  spiralCompliant: boolean;
  quantumEnabled: boolean;
}
