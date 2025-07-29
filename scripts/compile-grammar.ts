#!/usr/bin/env tsx
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const ANTLR_JAR = 'antlr-4.13.2-complete.jar';
const GRAMMAR_DIR = 'client/src/grammars';
const OUTPUT_DIR = 'client/src/generated';

async function downloadANTLR() {
  const antlrUrl = 'https://www.antlr.org/download/antlr-4.13.2-complete.jar';
  
  if (!fs.existsSync(ANTLR_JAR)) {
    console.log('📥 Downloading ANTLR4 JAR...');
    execSync(`curl -o ${ANTLR_JAR} ${antlrUrl}`);
    console.log('✅ ANTLR4 JAR downloaded');
  }
}

async function compileGrammar() {
  const grammars = [
    'SpiralScript.g4',
    'HTSX.g4', 
    'SpiralLang.g4'
  ];

  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('🔧 Compiling all Spiral grammars...');
  
  for (const grammarName of grammars) {
    const grammarFile = path.join(GRAMMAR_DIR, grammarName);
    
    if (!fs.existsSync(grammarFile)) {
      console.warn(`⚠️ ${grammarName} not found, skipping...`);
      continue;
    }

    console.log(`📝 Compiling ${grammarName}...`);
    
    try {
      // Compile grammar to TypeScript
      execSync(`java -jar ${ANTLR_JAR} -Dlanguage=TypeScript -o ${OUTPUT_DIR} ${grammarFile}`, {
        stdio: 'inherit'
      });
      
      console.log(`✅ ${grammarName} compiled successfully`);
      
    } catch (error) {
      console.error(`❌ ${grammarName} compilation failed:`, error.message);
    }
  }
  
  // Generate parser integrations
  generateParserIntegrations();
}

function generateParserIntegrations() {
  // Generate SpiralScript integration
  const spiralIntegration = generateSpiralScriptIntegration();
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'SpiralScriptIntegration.ts'),
    spiralIntegration
  );

  // Generate HTSX integration
  const htsxIntegration = generateHTSXIntegration();
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'HTSXIntegration.ts'),
    htsxIntegration
  );

  // Generate SpiralLang integration
  const spiralLangIntegration = generateSpiralLangIntegration();
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'SpiralLangIntegration.ts'),
    spiralLangIntegration
  );

  // Generate unified parser
  const unifiedIntegration = generateUnifiedIntegration();
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'UnifiedSpiralParser.ts'),
    unifiedIntegration
  );

  console.log('✅ All parser integrations generated');
}

function generateSpiralScriptIntegration(): string {
  return `// Auto-generated ANTLR4 integration for SpiralScript
import { SpiralScriptLexer } from './SpiralScriptLexer';
import { SpiralScriptParser } from './SpiralScriptParser';
import { InputStream, CommonTokenStream } from 'antlr4';

export class CompiledSpiralParser {
  private readonly PHI = 1.618033988749;

  parseToAST(code: string) {
    try {
      const inputStream = new InputStream(code);
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
`;
}

function generateHTSXIntegration(): string {
  return `// Auto-generated ANTLR4 integration for HTSX Runtime Engine
import { HTSXLexer } from './HTSXLexer';
import { HTSXParser } from './HTSXParser';
import { InputStream, CommonTokenStream } from 'antlr4';

export class CompiledHTSXParser {
  private readonly PHI = 1.618033988749;

  parseToAST(code: string) {
    try {
      const inputStream = new InputStream(code);
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
`;
}

function generateSpiralLangIntegration(): string {
  return `// Auto-generated ANTLR4 integration for SpiralLang Core Language
import { SpiralLangLexer } from './SpiralLangLexer';
import { SpiralLangParser } from './SpiralLangParser';
import { InputStream, CommonTokenStream } from 'antlr4';

export class CompiledSpiralLangParser {
  private readonly PHI = 1.618033988749;

  parseToAST(code: string) {
    try {
      const inputStream = new InputStream(code);
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
    const matches = text.match(/\\b(\\w+)\\b/);
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
`;
}

function generateUnifiedIntegration(): string {
  return `// Unified Spiral Language Parser Integration
import { compiledSpiralParser } from './SpiralScriptIntegration';
import { compiledHTSXParser } from './HTSXIntegration';
import { compiledSpiralLangParser } from './SpiralLangIntegration';

export class UnifiedSpiralParser {
  private languageMap = new Map([
    ['.spiral', 'spiralscript'],
    ['.spi', 'spiralscript'],
    ['.htsx', 'htsx'],
    ['.sprl', 'spirallang'],
    ['.consciousness', 'spirallang'],
    ['.cons', 'spirallang']
  ]);

  async parseMultiLanguage(files: { name: string; content: string }[]) {
    const results = [];
    
    for (const file of files) {
      const result = await this.parseFile(file.name, file.content);
      results.push({
        filename: file.name,
        ...result
      });
    }
    
    return {
      success: results.every(r => r.success),
      results,
      totalFiles: files.length,
      totalTU: results.reduce((sum, r) => sum + (r.metrics?.tuGenerated || 0), 0),
      summary: this.generateSummary(results)
    };
  }

  async parseFile(filename: string, content: string) {
    const ext = this.getFileExtension(filename);
    const language = this.languageMap.get(ext);
    
    switch (language) {
      case 'spiralscript':
        return compiledSpiralParser.parseToAST(content);
      case 'htsx':
        return compiledHTSXParser.parseToAST(content);
      case 'spirallang':
        return compiledSpiralLangParser.parseToAST(content);
      default:
        return {
          success: false,
          language: 'unknown',
          ast: null,
          errors: [\`Unsupported file type: \${ext}\`],
          metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 }
        };
    }
  }

  detectLanguage(filename: string): string | null {
    const ext = this.getFileExtension(filename);
    return this.languageMap.get(ext) || null;
  }

  getSupportedExtensions(): string[] {
    return Array.from(this.languageMap.keys());
  }

  private getFileExtension(filename: string): string {
    return filename.substring(filename.lastIndexOf('.'));
  }

  private generateSummary(results: any[]) {
    const languageCounts = {};
    const errors = [];
    let totalEntropy = 0;
    let totalPhi = 0;
    
    results.forEach(result => {
      const lang = result.language || 'unknown';
      languageCounts[lang] = (languageCounts[lang] || 0) + 1;
      
      if (result.errors && result.errors.length > 0) {
        errors.push(...result.errors);
      }
      
      if (result.metrics) {
        totalEntropy += result.metrics.entropy || 0;
        totalPhi += result.metrics.phiResonance || 0;
      }
    });
    
    return {
      languageCounts,
      errorCount: errors.length,
      avgEntropy: totalEntropy / results.length,
      avgPhiResonance: totalPhi / results.length,
      hasQuantumCode: results.some(r => r.ast && JSON.stringify(r.ast).includes('quantum')),
      hasTheoremCode: results.some(r => r.ast && JSON.stringify(r.ast).includes('theorem'))
    };
  }
}

export const unifiedSpiralParser = new UnifiedSpiralParser();
export { compiledSpiralParser, compiledHTSXParser, compiledSpiralLangParser };
`;
}

async function main() {
  console.log('🚀 Starting ANTLR4 compilation process...');
  
  await downloadANTLR();
  await compileGrammar();
  
  console.log('🎉 ANTLR4 compilation complete!');
}

// ES module equivalent of require.main === module
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}
