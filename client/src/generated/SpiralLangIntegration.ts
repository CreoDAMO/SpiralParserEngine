// Fallback mode - using manual parsing
// import { SpiralLangLexer } from './SpiralLangLexer';
// import { SpiralLangParser } from './SpiralLangParser';
// import { InputStream, CommonTokenStream } from 'antlr4';

export class CompiledSpiralLangParser {
  private readonly PHI = 1.618033988749;

  async parseToAST(code: string) {
    try {
      // Fallback parsing without ANTLR
      const ast = this.manualParseSpiralLang(code);
      
      return {
        success: true,
        language: 'SpiralLang',
        ast,
        errors: [],
        metrics: this.calculateFallbackMetrics(code),
        analysis: this.performFallbackAnalysis(code),
        mode: 'fallback'
      };
    } catch (error) {
      return {
        success: false,
        language: 'SpiralLang',
        ast: null,
        errors: [error instanceof Error ? error.message : 'Unknown error'],
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
        analysis: { modules: [], functions: [], classes: [], theorems: [] },
        mode: 'fallback'
      };
    }
  }

  private manualParseSpiralLang(code: string): any {
    const lines = code.split('\n');
    const nodes = [];
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed) {
        nodes.push({
          type: this.detectSpiralLangNodeType(trimmed),
          value: trimmed,
          metadata: {
            entropy: this.calculateEntropy({ getText: () => trimmed }),
            phiResonance: this.PHI * Math.random(),
            tuGenerated: this.calculateTU({ getText: () => trimmed }),
            isQuantum: trimmed.includes('quantum'),
            isTheorem: trimmed.includes('theorem'),
            isConsciousness: trimmed.includes('consciousness')
          }
        });
      }
    }
    
    return {
      type: "SpiralLangProgram",
      children: nodes,
      metadata: {
        entropy: this.calculateFallbackMetrics(code).entropy,
        phiResonance: this.PHI,
        tuGenerated: this.calculateFallbackMetrics(code).tuGenerated,
        language: 'spirallang-core',
        mode: 'fallback'
      }
    };
  }

  private detectSpiralLangNodeType(line: string): string {
    if (line.includes('module')) return 'ModuleDeclaration';
    if (line.includes('theorem')) return 'TheoremDeclaration';
    if (line.includes('consciousness')) return 'ConsciousnessBlock';
    if (line.includes('function')) return 'FunctionDeclaration';
    if (line.includes('class')) return 'ClassDeclaration';
    if (line.includes('quantum')) return 'QuantumExpression';
    return 'Statement';
  }

  private performFallbackAnalysis(code: string) {
    const modules = (code.match(/module\s+(\w+)/g) || []).map(match => ({
      name: match.split(' ')[1],
      type: 'ModuleDeclaration'
    }));
    
    const functions = (code.match(/function\s+(\w+)/g) || []).map(match => ({
      name: match.split(' ')[1],
      type: 'FunctionDeclaration',
      isQuantum: code.includes('quantum')
    }));
    
    const classes = (code.match(/class\s+(\w+)/g) || []).map(match => ({
      name: match.split(' ')[1],
      type: 'ClassDeclaration'
    }));
    
    const theorems = (code.match(/theorem\s+(\w+)/g) || []).map(match => ({
      name: match.split(' ')[1],
      type: 'TheoremDeclaration'
    }));
    
    return { modules, functions, classes, theorems };
  }

  private calculateFallbackMetrics(code: string) {
    return {
      entropy: Math.min(0.99, code.length * 0.001),
      phiResonance: this.PHI,
      tuGenerated: code.includes('theorem') ? 2500 :
                   code.includes('consciousness') ? 1999 :
                   code.includes('quantum') ? 1333 :
                   code.includes('φ') ? 1618 :
                   code.includes('class') ? 300 :
                   code.includes('function') ? 150 : 25
    };
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
