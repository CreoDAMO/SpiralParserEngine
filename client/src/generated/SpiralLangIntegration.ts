// Auto-generated ANTLR4 integration for SpiralLang Core Language
import { SpiralLangLexer } from './SpiralLangLexer';
import { SpiralLangParser } from './SpiralLangParser';
import { CharStream, CommonTokenStream } from 'antlr4';

export class CompiledSpiralLangParser {
  private readonly PHI = 1.618033988749;

  parseToAST(code: string) {
    try {
      const inputStream = CharStream.fromString(code);
      const lexer = new SpiralLangLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new SpiralLangParser(tokenStream);
      
      const tree = parser.program();
      
      return {
        success: true,
        language: 'SpiralLang',
        ast: this.convertToSpiralLangAST(tree),
        errors: [],
        metrics: this.calculateMetrics(tree),
        analysis: this.performCodeAnalysis(tree)
      };
    } catch (error) {
      return {
        success: false,
        language: 'SpiralLang',
        ast: null,
        errors: [error.message],
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
        analysis: { modules: [], functions: [], classes: [], theorems: [] }
      };
    }
  }

  private convertToSpiralLangAST(parseTree: any): any {
    return {
      type: "SpiralLangProgram",
      children: this.convertChildren(parseTree.children || []),
      metadata: {
        entropy: this.calculateEntropy(parseTree),
        phiResonance: this.PHI,
        tuGenerated: this.calculateTU(parseTree),
        language: 'spirallang-core'
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
        tuGenerated: Math.floor(Math.random() * 1500),
        isQuantum: child.constructor.name.includes('Quantum'),
        isTheorem: child.constructor.name.includes('Theorem'),
        isConsciousness: child.constructor.name.includes('Consciousness')
      }
    }));
  }

  private performCodeAnalysis(tree: any) {
    const modules = [];
    const functions = [];
    const classes = [];
    const theorems = [];
    
    this.analyzeNode(tree, modules, functions, classes, theorems);
    
    return { modules, functions, classes, theorems };
  }

  private analyzeNode(node: any, modules: any[], functions: any[], classes: any[], theorems: any[]) {
    if (node.children) {
      node.children.forEach((child: any) => {
        const type = child.constructor.name;
        const text = child.getText ? child.getText() : '';
        
        if (type.includes('Module')) {
          modules.push({ name: this.extractName(text), type });
        } else if (type.includes('Function')) {
          functions.push({ name: this.extractName(text), type, isQuantum: text.includes('quantum') });
        } else if (type.includes('Class')) {
          classes.push({ name: this.extractName(text), type });
        } else if (type.includes('Theorem')) {
          theorems.push({ name: this.extractName(text), type });
        }
        
        this.analyzeNode(child, modules, functions, classes, theorems);
      });
    }
  }

  private extractName(text: string): string {
    const matches = text.match(/\b(\w+)\b/);
    return matches ? matches[1] : 'unknown';
  }

  private calculateEntropy(node: any): number {
    const text = node.getText ? node.getText() : '';
    return Math.min(0.99, text.length * 0.01);
  }

  private calculateTU(node: any): number {
    const text = node.getText ? node.getText() : '';
    return text.includes('theorem') ? 2500 :
           text.includes('consciousness') ? 1999 :
           text.includes('quantum') ? 1333 :
           text.includes('φ') ? 1618 :
           text.includes('class') ? 300 :
           text.includes('function') ? 150 : 25;
  }

  private calculateMetrics(tree: any) {
    return {
      entropy: this.calculateEntropy(tree),
      phiResonance: this.PHI,
      tuGenerated: this.calculateTU(tree)
    };
  }
}

export const compiledSpiralLangParser = new CompiledSpiralLangParser();
