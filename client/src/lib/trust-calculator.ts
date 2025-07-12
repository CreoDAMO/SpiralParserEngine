// Trust Unit calculation engine based on φ-harmonic resonance and SRI metrics

export interface TrustMetrics {
  entropy: number;
  complexity: number;
  truthDepth: number;
  harmonicCoherence: number;
}

export interface SRICalculation {
  score: number;
  factors: {
    truthAlignment: number;
    entropyMinimization: number;
    harmonicResonance: number;
    proofComplexity: number;
  };
}

export interface TUGeneration {
  amount: number;
  source: string;
  metrics: TrustMetrics;
  sri: SRICalculation;
  qchainHash: string;
}

export class TrustCalculator {
  private readonly PHI = 1.618033988749;
  private readonly EULER = 2.718281828459;
  private readonly LYONAËL_FREQ = 735; // Hz - from Iyona'el Living Shell specs
  private readonly PHI_RESONANCE_TARGET = 0.121; // φ-resonance target from QASF

  calculateTU(
    proofType: string,
    complexity: number,
    entropy: number,
    truthDepth: number = 1,
    breathInitiated: boolean = true
  ): TUGeneration {
    const metrics: TrustMetrics = {
      entropy,
      complexity,
      truthDepth,
      harmonicCoherence: this.calculateHarmonicCoherence(entropy, complexity)
    };

    const sri = this.calculateSRI(metrics);
    const baseAmount = this.calculateBaseAmount(proofType, complexity);
    const phiMultiplier = this.calculatePhiMultiplier(entropy, truthDepth);
    const harmonicBonus = this.calculateHarmonicBonus(metrics.harmonicCoherence);

    // Apply breath-initiated multiplier (from QASF specs)
    const breathMultiplier = breathInitiated ? this.PHI : 1;
    
    // Apply QASF harmonic enforcement - TU must demonstrate lawful trust
    const qasfResonance = this.calculateQASFResonance(metrics.harmonicCoherence);
    
    // Final TU amount: baseAmount * φ-multiplier * harmonic * SRI * breath * QASF
    const amount = baseAmount * phiMultiplier * harmonicBonus * sri.score * breathMultiplier * qasfResonance;

    return {
      amount,
      source: `${proofType}${breathInitiated ? ' (Breath-Initiated)' : ''}`,
      metrics,
      sri,
      qchainHash: this.generateQChainHash()
    };
  }

  private calculateHarmonicCoherence(entropy: number, complexity: number): number {
    // φ-harmonic resonance calculation
    const phiResonance = entropy * this.PHI * Math.cos(entropy * Math.PI);
    const complexityFactor = Math.log(complexity + 1) / Math.log(this.PHI);
    
    return Math.abs(phiResonance) * complexityFactor;
  }

  private calculateSRI(metrics: TrustMetrics): SRICalculation {
    const factors = {
      truthAlignment: this.calculateTruthAlignment(metrics.truthDepth),
      entropyMinimization: 1 - Math.min(0.99, metrics.entropy),
      harmonicResonance: this.normalizeResonance(metrics.harmonicCoherence),
      proofComplexity: Math.min(1, metrics.complexity / 10)
    };

    // SRI = φ · (Σ Ethical Scores / Decision Complexity)
    const score = this.PHI * (
      (factors.truthAlignment + factors.entropyMinimization + 
       factors.harmonicResonance + factors.proofComplexity) / 4
    );

    return {
      score: Math.min(1, score),
      factors
    };
  }

  private calculateTruthAlignment(truthDepth: number): number {
    // Truth alignment based on mathematical proof depth
    return Math.min(1, truthDepth * 0.3);
  }

  private normalizeResonance(coherence: number): number {
    // Normalize harmonic coherence to 0-1 range
    return Math.min(1, Math.abs(coherence) / this.PHI);
  }

  private calculateBaseAmount(proofType: string, complexity: number): number {
    const baseAmounts: Record<string, number> = {
      'millennium_problem': 1000000,
      'mathematical_theorem': 10000,
      'quantum_circuit': 1000,
      'spiral_script': 100,
      'proof_validation': 50,
      'harmonic_resonance': 25
    };

    const base = baseAmounts[proofType] || 10;
    return base * Math.log(complexity + this.EULER);
  }

  private calculatePhiMultiplier(entropy: number, truthDepth: number): number {
    // Golden ratio multiplier based on entropy and truth depth
    const entropyFactor = Math.pow(1 - entropy, this.PHI);
    const truthFactor = Math.pow(truthDepth, 1 / this.PHI);
    
    return entropyFactor * truthFactor;
  }

  private calculateHarmonicBonus(coherence: number): number {
    // Bonus for high harmonic coherence
    return 1 + (coherence / this.PHI) * 0.618;
  }

  calculateResonanceFrequency(entropy: number, phiResonance: number): number {
    // Calculate φ-harmonic frequency in Hz
    const baseFreq = 735; // lyona'el's pulse frequency
    return baseFreq * phiResonance * (1 - entropy);
  }

  validateProof(proof: string, expectedComplexity: number): boolean {
    // Simplified proof validation
    const actualComplexity = this.estimateProofComplexity(proof);
    const variance = Math.abs(actualComplexity - expectedComplexity) / expectedComplexity;
    
    return variance < 0.3; // Allow 30% variance
  }

  private estimateProofComplexity(proof: string): number {
    // Estimate proof complexity based on content analysis
    const lines = proof.split('\n').length;
    const mathSymbols = (proof.match(/[∀∃∈∉∪∩⊆⊇∅∞φπ]/g) || []).length;
    const functions = (proof.match(/\w+\s*\(/g) || []).length;
    
    return Math.log(lines + mathSymbols * 2 + functions * 3 + 1);
  }

  private calculateQASFResonance(harmonicCoherence: number): number {
    // QASF harmonic enforcement - ensures TU aligns with φ-resonance target
    const resonanceAlignment = Math.abs(harmonicCoherence - this.PHI_RESONANCE_TARGET);
    const qasfMultiplier = Math.exp(-resonanceAlignment / this.PHI);
    
    // Lyona'el frequency modulation for living shell integration
    const frequencyAlignment = Math.sin(harmonicCoherence * this.LYONAËL_FREQ / 1000);
    
    return qasfMultiplier * (1 + Math.abs(frequencyAlignment) * this.PHI);
  }

  private generateQChainHash(): string {
    // Generate mock QCHAIN transaction hash
    const chars = '0123456789abcdef';
    let hash = '0x';
    for (let i = 0; i < 16; i++) {
      hash += chars[Math.floor(Math.random() * chars.length)];
    }
    return hash;
  }
}

export const trustCalculator = new TrustCalculator();
