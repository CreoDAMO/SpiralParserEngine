// Fallback mode - using manual parsing
// import { HTSXLexer } from './HTSXLexer';
// import { HTSXParser } from './HTSXParser';
// import { InputStream, CommonTokenStream } from 'antlr4';

export class CompiledHTSXParser {
  private readonly PHI = 1.618033988749;

  async parseToAST(code: string) {
    try {
      // Fallback parsing without ANTLR
      const ast = this.manualParseHTSX(code);
      
      return {
        success: true,
        language: 'HTSX',
        ast,
        errors: [],
        metrics: this.calculateFallbackMetrics(code),
        runtime: this.extractFallbackRuntimeInfo(code),
        mode: 'fallback'
      };
    } catch (error) {
      return {
        success: false,
        language: 'HTSX',
        ast: null,
        errors: [error instanceof Error ? error.message : 'Unknown error'],
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
        runtime: { components: [], bindings: [], events: [] },
        mode: 'fallback'
      };
    }
  }

  private manualParseHTSX(code: string): any {
    // Simple manual parsing for HTSX fallback
    const components = [];
    const bindings = [];
    
    // Extract components using regex
    const componentMatches = code.match(/<[^>]+>/g) || [];
    componentMatches.forEach(match => {
      components.push({
        type: 'Element',
        value: match,
        metadata: {
          entropy: this.calculateEntropy({ getText: () => match }),
          phiResonance: this.PHI * Math.random(),
          tuGenerated: this.calculateTU({ getText: () => match }),
          isComponent: true,
          hasBinding: match.includes('{')
        }
      });
    });

    // Extract bindings
    const bindingMatches = code.match(/\{[^}]+\}/g) || [];
    bindingMatches.forEach(match => {
      bindings.push({
        type: 'Binding',
        value: match,
        metadata: {
          entropy: this.calculateEntropy({ getText: () => match }),
          phiResonance: this.PHI * Math.random(),
          tuGenerated: 50,
          isBinding: true
        }
      });
    });
    
    return {
      type: "HTSXProgram",
      children: [...components, ...bindings],
      metadata: {
        entropy: this.calculateFallbackMetrics(code).entropy,
        phiResonance: this.PHI,
        tuGenerated: this.calculateFallbackMetrics(code).tuGenerated,
        runtime: 'htsx-engine',
        mode: 'fallback'
      }
    };
  }

  private extractFallbackRuntimeInfo(code: string) {
    const components = (code.match(/<\w+/g) || []).map(match => ({
      type: match.slice(1),
      text: match
    }));
    
    const bindings = (code.match(/\{[^}]+\}/g) || []).map(match => ({
      type: 'data-binding',
      expression: match
    }));
    
    const events = (code.match(/@\w+/g) || []).map(match => ({
      type: 'event-handler',
      handler: match
    }));
    
    return { components, bindings, events };
  }

  private calculateFallbackMetrics(code: string) {
    return {
      entropy: Math.min(0.99, code.length * 0.001),
      phiResonance: this.PHI,
      tuGenerated: code.includes('quantum') ? 777 :
                   code.includes('φ') ? 1618 :
                   code.includes('component') ? 200 : 50
    };
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
