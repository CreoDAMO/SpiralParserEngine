// Economic analysis engine based on debt-scarcity principles
// Inspired by the global debt analysis in user documentation

export interface DebtMetrics {
  globalDebt: number; // $315 trillion
  publicDebt: number; // $91.4 trillion  
  householdDebt: number; // $59.1 trillion
  businessDebt: number; // $164.5 trillion
  financialDebt: number; // $70.4 trillion
  globalGDP: number; // ~$105 trillion
}

export interface ScarcityAnalysis {
  debtToGDPRatio: number;
  scarcityIndex: number;
  trustDeficit: number;
  phiDeviation: number;
  sustainabilityScore: number;
}

export class DebtScarcityAnalyzer {
  private readonly PHI = 1.618033988749;
  private readonly GLOBAL_METRICS: DebtMetrics = {
    globalDebt: 315_000_000_000_000, // $315 trillion
    publicDebt: 91_400_000_000_000,   // $91.4 trillion
    householdDebt: 59_100_000_000_000, // $59.1 trillion  
    businessDebt: 164_500_000_000_000, // $164.5 trillion
    financialDebt: 70_400_000_000_000,  // $70.4 trillion
    globalGDP: 105_000_000_000_000     // ~$105 trillion
  };

  analyzeScarcityCreation(): ScarcityAnalysis {
    const debtToGDPRatio = this.GLOBAL_METRICS.globalDebt / this.GLOBAL_METRICS.globalGDP;
    
    // Scarcity Index: measures how debt creates artificial scarcity
    // Higher values indicate more scarcity pressure
    const scarcityIndex = this.calculateScarcityIndex(debtToGDPRatio);
    
    // Trust Deficit: measures deviation from trust-based economy
    const trustDeficit = this.calculateTrustDeficit();
    
    // φ-Deviation: measures how far the system deviates from natural φ proportions
    const phiDeviation = this.calculatePhiDeviation();
    
    // Sustainability Score: 0-1 scale, higher is more sustainable
    const sustainabilityScore = this.calculateSustainabilityScore(scarcityIndex, trustDeficit);

    return {
      debtToGDPRatio,
      scarcityIndex,
      trustDeficit,
      phiDeviation,
      sustainabilityScore
    };
  }

  private calculateScarcityIndex(debtToGDPRatio: number): number {
    // Scarcity increases exponentially with debt ratio
    // At φ ratio (1.618), scarcity should be minimal
    // At current 3:1 ratio, scarcity is severe
    
    const optimalRatio = this.PHI; // φ-harmonic optimal debt ratio
    const deviation = Math.abs(debtToGDPRatio - optimalRatio);
    
    // Exponential scarcity function
    return Math.min(10, Math.pow(deviation / optimalRatio, 2));
  }

  private calculateTrustDeficit(): number {
    // Trust deficit measures reliance on debt vs. mathematical truth
    const debtDependency = this.GLOBAL_METRICS.globalDebt / 
      (this.GLOBAL_METRICS.globalGDP * 10); // Normalize to 0-1 scale
    
    // In a trust-based system, this ratio should approach 0
    return Math.min(1, debtDependency);
  }

  private calculatePhiDeviation(): number {
    // Analyze how current debt distribution deviates from φ-harmonic proportions
    const publicRatio = this.GLOBAL_METRICS.publicDebt / this.GLOBAL_METRICS.globalDebt;
    const businessRatio = this.GLOBAL_METRICS.businessDebt / this.GLOBAL_METRICS.globalDebt;
    const householdRatio = this.GLOBAL_METRICS.householdDebt / this.GLOBAL_METRICS.globalDebt;
    
    // Ideal φ-harmonic distribution
    const phiTotal = this.PHI + 1 + (1 / this.PHI); // φ + 1 + φ⁻¹
    const idealPublic = this.PHI / phiTotal;
    const idealBusiness = 1 / phiTotal;
    const idealHousehold = (1 / this.PHI) / phiTotal;
    
    // Calculate total deviation
    const deviation = Math.abs(publicRatio - idealPublic) +
                     Math.abs(businessRatio - idealBusiness) +
                     Math.abs(householdRatio - idealHousehold);
    
    return deviation;
  }

  private calculateSustainabilityScore(scarcityIndex: number, trustDeficit: number): number {
    // Sustainability decreases with scarcity and trust deficit
    const baseScore = 1;
    const scarcityPenalty = scarcityIndex / 10; // Normalize scarcity impact
    const trustPenalty = trustDeficit;
    
    return Math.max(0, baseScore - scarcityPenalty - trustPenalty);
  }

  calculateTUEquivalent(fiatAmount: number): number {
    // Calculate how much TU would be needed to replace fiat amount
    // Based on mathematical truth vs. debt-based value
    
    const analysis = this.analyzeScarcityCreation();
    
    // TU is more valuable due to truth-backing vs. debt-scarcity
    const truthMultiplier = 1 / analysis.scarcityIndex; // Higher scarcity = lower fiat value
    const phiAdjustment = this.PHI; // φ-harmonic enhancement
    
    return (fiatAmount * truthMultiplier) / phiAdjustment;
  }

  generateLiveDebtReport(): string {
    const analysis = this.analyzeScarcityCreation();
    
    return `# Global Debt-Scarcity Analysis

## Current State (2024)
- **Global Debt:** $${(this.GLOBAL_METRICS.globalDebt / 1e12).toFixed(1)} trillion
- **Debt-to-GDP Ratio:** ${analysis.debtToGDPRatio.toFixed(1)}:1
- **Optimal φ-Ratio:** ${this.PHI.toFixed(3)}:1

## Scarcity Metrics
- **Scarcity Index:** ${analysis.scarcityIndex.toFixed(2)}/10 (${this.getScarcityLevel(analysis.scarcityIndex)})
- **Trust Deficit:** ${(analysis.trustDeficit * 100).toFixed(1)}%
- **φ-Deviation:** ${(analysis.phiDeviation * 100).toFixed(1)}%
- **Sustainability Score:** ${(analysis.sustainabilityScore * 100).toFixed(1)}%

## Key Insights
${this.generateInsights(analysis)}

## Trust Currency Alternative
A φ-harmonic, truth-based monetary system could reduce scarcity by ${((1 - analysis.sustainabilityScore) * 100).toFixed(1)}% and eliminate artificial debt-dependency.

*Analysis based on QASF principles and spiral mathematical frameworks.*`;
  }

  private getScarcityLevel(index: number): string {
    if (index < 2) return "Low";
    if (index < 5) return "Moderate"; 
    if (index < 8) return "High";
    return "Critical";
  }

  private generateInsights(analysis: ScarcityAnalysis): string {
    const insights = [];
    
    if (analysis.debtToGDPRatio > 2.5) {
      insights.push("• Global economy is severely over-leveraged");
    }
    
    if (analysis.scarcityIndex > 5) {
      insights.push("• Debt system creates artificial scarcity pressure");
    }
    
    if (analysis.trustDeficit > 0.5) {
      insights.push("• High reliance on debt vs. mathematical truth");
    }
    
    if (analysis.phiDeviation > 0.3) {
      insights.push("• Debt distribution deviates from natural φ-harmonic proportions");
    }
    
    if (analysis.sustainabilityScore < 0.3) {
      insights.push("• Current system approaching unsustainable limits");
    }

    return insights.join("\n");
  }
}

export const debtAnalyzer = new DebtScarcityAnalyzer();