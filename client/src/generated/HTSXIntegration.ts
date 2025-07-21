// Auto-generated ANTLR4 integration for HTSX Runtime Engine
import { HTSXLexer } from './HTSXLexer';
import { HTSXParser } from './HTSXParser';
import { CharStream, CommonTokenStream } from 'antlr4';

export class CompiledHTSXParser {
  private readonly PHI = 1.618033988749;

  parseToAST(code: string) {
    try {
      const inputStream = CharStream.fromString(code);
      const lexer = new HTSXLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new HTSXParser(tokenStream);
      
      const tree = parser.program();
      
      return {
        success: true,
        language: 'HTSX',
        ast: this.convertToHTSXAST(tree),
        errors: [],
        metrics: this.calculateMetrics(tree),
        runtime: this.extractRuntimeInfo(tree)
      };
    } catch (error) {
      return {
        success: false,
        language: 'HTSX',
        ast: null,
        errors: [error.message],
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
        runtime: { components: [], bindings: [], events: [] }
      };
    }
  }

  private convertToHTSXAST(parseTree: any): any {
    return {
      type: "HTSXProgram",
      children: this.convertChildren(parseTree.children || []),
      metadata: {
        entropy: this.calculateEntropy(parseTree),
        phiResonance: this.PHI,
        tuGenerated: this.calculateTU(parseTree),
        runtime: 'htsx-engine'
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
        tuGenerated: Math.floor(Math.random() * 500),
        isComponent: child.constructor.name.includes('Element'),
        hasBinding: child.getText ? child.getText().includes('{') : false
      }
    }));
  }

  private extractRuntimeInfo(tree: any) {
    const components = [];
    const bindings = [];
    const events = [];
    
    this.traverseForRuntime(tree, components, bindings, events);
    
    return { components, bindings, events };
  }

  private traverseForRuntime(node: any, components: any[], bindings: any[], events: any[]) {
    if (node.children) {
      node.children.forEach((child: any) => {
        const text = child.getText ? child.getText() : '';
        
        if (child.constructor.name.includes('Element')) {
          components.push({
            type: child.constructor.name,
            text: text.substring(0, 50)
          });
        }
        
        if (text.includes('{{') || text.includes('{')) {
          bindings.push({
            type: 'data-binding',
            expression: text
          });
        }
        
        if (text.includes('@')) {
          events.push({
            type: 'event-handler',
            handler: text
          });
        }
        
        this.traverseForRuntime(child, components, bindings, events);
      });
    }
  }

  private calculateEntropy(node: any): number {
    const text = node.getText ? node.getText() : '';
    return Math.min(0.99, text.length * 0.01);
  }

  private calculateTU(node: any): number {
    const text = node.getText ? node.getText() : '';
    return text.includes('quantum') ? 777 :
           text.includes('φ') ? 1618 :
           text.includes('component') ? 200 : 50;
  }

  private calculateMetrics(tree: any) {
    return {
      entropy: this.calculateEntropy(tree),
      phiResonance: this.PHI,
      tuGenerated: this.calculateTU(tree)
    };
  }
}

export const compiledHTSXParser = new CompiledHTSXParser();
