
export enum AIProviderType {
  OPENAI_GPT4 = "openai_gpt4",
  ANTHROPIC_CLAUDE = "anthropic_claude",
  NVIDIA_NEMO = "nvidia_nemo",
  GOOGLE_GEMINI = "google_gemini",
  MICROSOFT_AZURE = "microsoft_azure",
}

export interface AIRateLimit {
  provider: AIProviderType;
  requestsPerMinute: number;
  tokensPerMinute: number;
  costPer1kTokens: number;
  currentUsage: number;
  resetTime: Date;
  isActive: boolean;
}

export class AIRateLimitOptimizer {
  private rateLimits: Map<AIProviderType, AIRateLimit>;
  private costOptimizationTarget: number = 0.001; // $0.001 per optimization

  constructor() {
    this.rateLimits = new Map([
      [AIProviderType.OPENAI_GPT4, {
        provider: AIProviderType.OPENAI_GPT4,
        requestsPerMinute: 3000,
        tokensPerMinute: 150000,
        costPer1kTokens: 0.03,
        currentUsage: 0,
        resetTime: new Date(Date.now() + 60000),
        isActive: true
      }],
      [AIProviderType.ANTHROPIC_CLAUDE, {
        provider: AIProviderType.ANTHROPIC_CLAUDE,
        requestsPerMinute: 4000,
        tokensPerMinute: 200000,
        costPer1kTokens: 0.008,
        currentUsage: 0,
        resetTime: new Date(Date.now() + 60000),
        isActive: true
      }],
      [AIProviderType.NVIDIA_NEMO, {
        provider: AIProviderType.NVIDIA_NEMO,
        requestsPerMinute: 5000,
        tokensPerMinute: 300000,
        costPer1kTokens: 0.002,
        currentUsage: 0,
        resetTime: new Date(Date.now() + 60000),
        isActive: true
      }],
      [AIProviderType.GOOGLE_GEMINI, {
        provider: AIProviderType.GOOGLE_GEMINI,
        requestsPerMinute: 2000,
        tokensPerMinute: 100000,
        costPer1kTokens: 0.0005,
        currentUsage: 0,
        resetTime: new Date(Date.now() + 60000),
        isActive: true
      }],
      [AIProviderType.MICROSOFT_AZURE, {
        provider: AIProviderType.MICROSOFT_AZURE,
        requestsPerMinute: 2500,
        tokensPerMinute: 120000,
        costPer1kTokens: 0.02,
        currentUsage: 0,
        resetTime: new Date(Date.now() + 60000),
        isActive: true
      }]
    ]);
  }

  getOptimalProvider(tokenCount: number): AIProviderType {
    const availableProviders: Array<[AIProviderType, number]> = [];

    for (const [provider, limits] of this.rateLimits.entries()) {
      if (limits.isActive &&
          limits.currentUsage < limits.requestsPerMinute &&
          tokenCount < (limits.tokensPerMinute - limits.currentUsage)) {
        const cost = (tokenCount / 1000) * limits.costPer1kTokens;
        availableProviders.push([provider, cost]);
      }
    }

    if (availableProviders.length > 0) {
      return availableProviders.reduce((min, current) => 
        current[1] < min[1] ? current : min
      )[0];
    }

    // Fallback to lowest cost provider
    return Array.from(this.rateLimits.entries())
      .reduce((min, current) => 
        current[1].costPer1kTokens < min[1].costPer1kTokens ? current : min
      )[0];
  }

  updateUsage(provider: AIProviderType, tokensUsed: number): void {
    const limits = this.rateLimits.get(provider);
    if (!limits) return;

    limits.currentUsage += tokensUsed;

    // Reset counters if reset time has passed
    if (new Date() >= limits.resetTime) {
      limits.currentUsage = 0;
      limits.resetTime = new Date(Date.now() + 60000);
    }
  }

  calculateCostSavings(): number {
    let totalSavings = 0;
    
    for (const limits of this.rateLimits.values()) {
      if (limits.currentUsage > 0) {
        const costWithoutOptimization = limits.currentUsage * 0.05; // Assume 5¢ without optimization
        const actualCost = (limits.currentUsage / 1000) * limits.costPer1kTokens;
        totalSavings += costWithoutOptimization - actualCost;
      }
    }
    
    return totalSavings;
  }

  getTotalAICost(): number {
    return Array.from(this.rateLimits.values())
      .reduce((total, limits) => {
        const cost = (limits.currentUsage / 1000) * limits.costPer1kTokens;
        return total + cost;
      }, 0);
  }

  getProviderStatus(): Array<{provider: AIProviderType, usagePercentage: number, cost: number}> {
    return Array.from(this.rateLimits.entries()).map(([provider, limits]) => ({
      provider,
      usagePercentage: (limits.currentUsage / limits.requestsPerMinute) * 100,
      cost: limits.costPer1kTokens
    }));
  }

  enableAutoSwitching(): void {
    // Auto-switch providers based on cost and availability
    setInterval(() => {
      for (const [provider, limits] of this.rateLimits.entries()) {
        if (limits.currentUsage / limits.requestsPerMinute > 0.8) {
          // Switch to alternative provider when approaching limits
          const alternative = this.getOptimalProvider(1000);
          if (alternative !== provider) {
            console.log(`Auto-switching from ${provider} to ${alternative}`);
          }
        }
      }
    }, 10000); // Check every 10 seconds
  }
}
