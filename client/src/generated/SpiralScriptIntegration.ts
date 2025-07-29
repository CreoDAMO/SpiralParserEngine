// Fallback mode - using manual parsing
// import { SpiralScriptLexer } from './SpiralScriptLexer';
// import { SpiralScriptParser } from './SpiralScriptParser';
// import { InputStream, CommonTokenStream } from 'antlr4';

export class CompiledSpiralParser {
  private readonly PHI = 1.618033988749;

  async parseToAST(code: string) {
    try {
      // Fallback parsing without ANTLR
      const ast = this.manualParse(code);
      
      return {
        success: true,
        language: 'SpiralScript',
        ast,
        errors: [],
        metrics: this.calculateFallbackMetrics(code),
        mode: 'fallback'
      };
    } catch (error) {
      return {
        success: false,
        language: 'SpiralScript',
        ast: null,
        errors: [error.message],
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
        mode: 'fallback'
      };
    }
  }

  private manualParse(code: string): any {
    // Simple manual parsing for fallback
    const lines = code.split('\n');
    const nodes = [];
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed) {
        nodes.push({
          type: this.detectNodeType(trimmed),
          value: trimmed,
          metadata: {
            entropy: this.calculateEntropy({ getText: () => trimmed }),
            phiResonance: this.PHI * Math.random(),
            tuGenerated: this.calculateTU({ getText: () => trimmed })
          }
        });
      }
    }
    
    return {
      type: "Program",
      children: nodes,
      metadata: {
        entropy: this.calculateFallbackMetrics(code).entropy,
        phiResonance: this.PHI,
        tuGenerated: this.calculateFallbackMetrics(code).tuGenerated,
        mode: 'fallback'
      }
    };
  }

  private detectNodeType(line: string): string {
    if (line.includes('theorem')) return 'TheoremDeclaration';
    if (line.includes('function')) return 'FunctionDeclaration';
    if (line.includes('quantum')) return 'QuantumExpression';
    if (line.includes('φ')) return 'PhiExpression';
    if (line.includes('consciousness')) return 'ConsciousnessBlock';
    return 'Statement';
  }

  private calculateFallbackMetrics(code: string) {
    return {
      entropy: Math.min(0.99, code.length * 0.001),
      phiResonance: this.PHI,
      tuGenerated: code.includes('φ') ? 1618 : 
                   code.includes('quantum') ? 888 :
                   code.includes('theorem') ? 500 : 100
    };
  }

  private convertToSpiralAST(parseTree: any): any {
    return {
      type: "Program",
      children: this.convertChildren(parseTree.children || []),
      metadata: {
        entropy: this.calculateEntropy(parseTree),
        phiResonance: this.PHI,
        tuGenerated: this.calculateTU(parseTree)
      }
    };
  }

  private convertChildren(children: any[]): any[] {
    return children.map(child => ({
      type: child.constructor.name.replace('Context', ''),
      value: child.getText ? child.getText() : '',
      children: child.children ? this.convertChildren(child.children) : undefined,
      metadata: {
        entropy: this.calculateEntropy(child),
        phiResonance: this.PHI * Math.random(),
        tuGenerated: Math.floor(Math.random() * 1000)
      }
    }));
  }

  private calculateEntropy(node: any): number {
    const text = node.getText ? node.getText() : '';
    return Math.min(0.99, text.length * 0.01);
  }

  private calculateTU(node: any): number {
    const text = node.getText ? node.getText() : '';
    return text.includes('φ') ? 1618 : 
           text.includes('quantum') ? 888 :
           text.includes('function') ? 100 : 10;
  }

  private calculateMetrics(tree: any) {
    return {
      entropy: this.calculateEntropy(tree),
      phiResonance: this.PHI,
      tuGenerated: this.calculateTU(tree)
    };
  }
}

export const compiledSpiralParser = new CompiledSpiralParser();
