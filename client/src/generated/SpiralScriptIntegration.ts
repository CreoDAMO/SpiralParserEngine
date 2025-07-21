// Auto-generated ANTLR4 integration for SpiralScript
import { SpiralScriptLexer } from './SpiralScriptLexer';
import { SpiralScriptParser } from './SpiralScriptParser';
import { CharStream, CommonTokenStream } from 'antlr4';

export class CompiledSpiralParser {
  private readonly PHI = 1.618033988749;

  parseToAST(code: string) {
    try {
      const inputStream = CharStream.fromString(code);
      const lexer = new SpiralScriptLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new SpiralScriptParser(tokenStream);
      
      const tree = parser.program();
      
      return {
        success: true,
        language: 'SpiralScript',
        ast: this.convertToSpiralAST(tree),
        errors: [],
        metrics: this.calculateMetrics(tree)
      };
    } catch (error) {
      return {
        success: false,
        language: 'SpiralScript',
        ast: null,
        errors: [error.message],
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 }
      };
    }
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
export const compiledParser = compiledSpiralParser; // Alias for backward compatibility
