#!/usr/bin/env tsx
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

const ANTLR_JAR = 'antlr-4.13.2-complete.jar';
const GRAMMAR_DIR = 'client/src/grammars';
const OUTPUT_DIR = 'client/src/generated';

async function downloadANTLR(): Promise<void> {
  const antlrUrl = 'https://www.antlr.org/download/antlr-4.13.2-complete.jar';
  
  if (!fs.existsSync(ANTLR_JAR)) {
    console.log('📥 Downloading ANTLR4 JAR using native Node.js HTTPS...');
    
    return new Promise((resolve, reject) => {
      const file = fs.createWriteStream(ANTLR_JAR);
      
      https.get(antlrUrl, (response) => {
        if (response.statusCode === 302 || response.statusCode === 301) {
          // Handle redirect
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            console.log(`📍 Following redirect to: ${redirectUrl}`);
            https.get(redirectUrl, (redirectResponse) => {
              redirectResponse.pipe(file);
              file.on('finish', () => {
                file.close();
                console.log('✅ ANTLR4 JAR downloaded successfully');
                resolve();
              });
            }).on('error', (err) => {
              fs.unlink(ANTLR_JAR, () => {}); // Delete the file async
              reject(new Error(`Download failed: ${err.message}`));
            });
          } else {
            reject(new Error('Redirect location not found'));
          }
        } else if (response.statusCode === 200) {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log('✅ ANTLR4 JAR downloaded successfully');
            resolve();
          });
        } else {
          reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
        }
      }).on('error', (err) => {
        fs.unlink(ANTLR_JAR, () => {}); // Delete the file async
        reject(new Error(`Request failed: ${err.message}`));
      });
      
      file.on('error', (err) => {
        fs.unlink(ANTLR_JAR, () => {}); // Delete the file async
        reject(new Error(`File write error: ${err.message}`));
      });
    });
  } else {
    console.log('✅ ANTLR4 JAR already exists');
  }
}

async function checkJavaAvailability(): Promise<boolean> {
  try {
    execSync('java -version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.warn('⚠️ Java not found. Grammar compilation will be skipped.');
    console.warn('   Install Java 8+ to enable grammar compilation.');
    return false;
  }
}

async function compileGrammar(): Promise<void> {
  const grammars = [
    'SpiralScript.g4',
    'HTSX.g4', 
    'SpiralLang.g4'
  ];

  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Check if Java is available
  const hasJava = await checkJavaAvailability();
  if (!hasJava) {
    console.log('🔄 Generating fallback parser integrations without ANTLR compilation...');
    generateParserIntegrations(true); // Generate with fallback mode
    return;
  }

  console.log('🔧 Compiling all Spiral grammars...');
  
  let successCount = 0;
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
      successCount++;
      
    } catch (error) {
      console.error(`❌ ${grammarName} compilation failed:`, error.message);
    }
  }
  
  // Generate parser integrations
  generateParserIntegrations(successCount === 0);
}

function generateParserIntegrations(fallbackMode: boolean = false): void {
  // Generate SpiralScript integration
  const spiralIntegration = generateSpiralScriptIntegration(fallbackMode);
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'SpiralScriptIntegration.ts'),
    spiralIntegration
  );

  // Generate HTSX integration
  const htsxIntegration = generateHTSXIntegration(fallbackMode);
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'HTSXIntegration.ts'),
    htsxIntegration
  );

  // Generate SpiralLang integration
  const spiralLangIntegration = generateSpiralLangIntegration(fallbackMode);
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'SpiralLangIntegration.ts'),
    spiralLangIntegration
  );

  // Generate unified parser
  const unifiedIntegration = generateUnifiedIntegration(fallbackMode);
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'UnifiedSpiralParser.ts'),
    unifiedIntegration
  );

  // Generate TypeScript declarations
  const typesDeclaration = generateTypesDeclaration();
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'types.ts'),
    typesDeclaration
  );

  console.log(`✅ All parser integrations generated ${fallbackMode ? '(fallback mode)' : '(with ANTLR)'}`);
}

function generateSpiralScriptIntegration(fallbackMode: boolean): string {
  const imports = fallbackMode ? 
    `// Fallback mode - using manual parsing
// import { SpiralScriptLexer } from './SpiralScriptLexer';
// import { SpiralScriptParser } from './SpiralScriptParser';
// import { InputStream, CommonTokenStream } from 'antlr4';` :
    `// Auto-generated ANTLR4 integration for SpiralScript
import { SpiralScriptLexer } from './SpiralScriptLexer';
import { SpiralScriptParser } from './SpiralScriptParser';
import { InputStream, CommonTokenStream } from 'antlr4';`;

  const parseMethod = fallbackMode ?
    `  async parseToAST(code: string) {
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
    const lines = code.split('\\n');
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
  }` :
    `  parseToAST(code: string) {
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
        metrics: this.calculateMetrics(tree),
        mode: 'antlr'
      };
    } catch (error) {
      return {
        success: false,
        language: 'SpiralScript',
        ast: null,
        errors: [error.message],
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
        mode: 'antlr'
      };
    }
  }`;

  return `${imports}

export class CompiledSpiralParser {
  private readonly PHI = 1.618033988749;

${parseMethod}

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

function generateHTSXIntegration(fallbackMode: boolean): string {
  const imports = fallbackMode ? 
    `// Fallback mode - using manual parsing
// import { HTSXLexer } from './HTSXLexer';
// import { HTSXParser } from './HTSXParser';
// import { InputStream, CommonTokenStream } from 'antlr4';` :
    `// Auto-generated ANTLR4 integration for HTSX Runtime Engine
import { HTSXLexer } from './HTSXLexer';
import { HTSXParser } from './HTSXParser';
import { InputStream, CommonTokenStream } from 'antlr4';`;

  const parseMethod = fallbackMode ?
    `  async parseToAST(code: string) {
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
        errors: [error.message],
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
    const bindingMatches = code.match(/\\{[^}]+\\}/g) || [];
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
    const components = (code.match(/<\\w+/g) || []).map(match => ({
      type: match.slice(1),
      text: match
    }));
    
    const bindings = (code.match(/\\{[^}]+\\}/g) || []).map(match => ({
      type: 'data-binding',
      expression: match
    }));
    
    const events = (code.match(/@\\w+/g) || []).map(match => ({
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
  }` :
    `  parseToAST(code: string) {
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
        runtime: this.extractRuntimeInfo(tree),
        mode: 'antlr'
      };
    } catch (error) {
      return {
        success: false,
        language: 'HTSX',
        ast: null,
        errors: [error.message],
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
        runtime: { components: [], bindings: [], events: [] },
        mode: 'antlr'
      };
    }
  }`;

  return `${imports}

export class CompiledHTSXParser {
  private readonly PHI = 1.618033988749;

${parseMethod}

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

function generateSpiralLangIntegration(fallbackMode: boolean): string {
  const imports = fallbackMode ? 
    `// Fallback mode - using manual parsing
// import { SpiralLangLexer } from './SpiralLangLexer';
// import { SpiralLangParser } from './SpiralLangParser';
// import { InputStream, CommonTokenStream } from 'antlr4';` :
    `// Auto-generated ANTLR4 integration for SpiralLang Core Language
import { SpiralLangLexer } from './SpiralLangLexer';
import { SpiralLangParser } from './SpiralLangParser';
import { InputStream, CommonTokenStream } from 'antlr4';`;

  return `${imports}

export class CompiledSpiralLangParser {
  private readonly PHI = 1.618033988749;

  ${fallbackMode ? `async parseToAST(code: string) {
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
        errors: [error.message],
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
        analysis: { modules: [], functions: [], classes: [], theorems: [] },
        mode: 'fallback'
      };
    }
  }

  private manualParseSpiralLang(code: string): any {
    const lines = code.split('\\n');
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
    const modules = (code.match(/module\\s+(\\w+)/g) || []).map(match => ({
      name: match.split(' ')[1],
      type: 'ModuleDeclaration'
    }));
    
    const functions = (code.match(/function\\s+(\\w+)/g) || []).map(match => ({
      name: match.split(' ')[1],
      type: 'FunctionDeclaration',
      isQuantum: code.includes('quantum')
    }));
    
    const classes = (code.match(/class\\s+(\\w+)/g) || []).map(match => ({
      name: match.split(' ')[1],
      type: 'ClassDeclaration'
    }));
    
    const theorems = (code.match(/theorem\\s+(\\w+)/g) || []).map(match => ({
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
  }` : `parseToAST(code: string) {
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
        analysis: this.performCodeAnalysis(tree),
        mode: 'antlr'
      };
    } catch (error) {
      return {
        success: false,
        language: 'SpiralLang',
        ast: null,
        errors: [error.message],
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
        analysis: { modules: [], functions: [], classes: [], theorems: [] },
        mode: 'antlr'
      };
    }
  }`}

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

function generateUnifiedIntegration(fallbackMode: boolean): string {
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

  private readonly mode = '${fallbackMode ? 'fallback' : 'antlr'}';

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
      summary: this.generateSummary(results),
      mode: this.mode
    };
  }

  async parseFile(filename: string, content: string) {
    const ext = this.getFileExtension(filename);
    const language = this.languageMap.get(ext);
    
    try {
      switch (language) {
        case 'spiralscript':
          return await compiledSpiralParser.parseToAST(content);
        case 'htsx':
          return await compiledHTSXParser.parseToAST(content);
        case 'spirallang':
          return await compiledSpiralLangParser.parseToAST(content);
        default:
          return {
            success: false,
            language: 'unknown',
            ast: null,
            errors: [\`Unsupported file type: \${ext}\`],
            metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
            mode: this.mode
          };
      }
    } catch (error) {
      return {
        success: false,
        language: language || 'unknown',
        ast: null,
        errors: [error.message],
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
        mode: this.mode
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

  getParsingMode(): string {
    return this.mode;
  }

  isAntlrAvailable(): boolean {
    return this.mode === 'antlr';
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
      avgEntropy: results.length > 0 ? totalEntropy / results.length : 0,
      avgPhiResonance: results.length > 0 ? totalPhi / results.length : 0,
      hasQuantumCode: results.some(r => r.ast && JSON.stringify(r.ast).includes('quantum')),
      hasTheoremCode: results.some(r => r.ast && JSON.stringify(r.ast).includes('theorem')),
      parsingMode: this.mode,
      antlrAvailable: this.mode === 'antlr'
    };
  }
}

export const unifiedSpiralParser = new UnifiedSpiralParser();
export { compiledSpiralParser, compiledHTSXParser, compiledSpiralLangParser };
`;
}

function generateTypesDeclaration(): string {
  return `// TypeScript declarations for SpiralScript Parser Engine
// Auto-generated types for ANTLR4 and fallback parsers

export interface SpiralMetrics {
  entropy: number;
  phiResonance: number;
  tuGenerated: number;
}

export interface SpiralNodeMetadata extends SpiralMetrics {
  isQuantum?: boolean;
  isTheorem?: boolean;
  isConsciousness?: boolean;
  isComponent?: boolean;
  hasBinding?: boolean;
  mode?: 'antlr' | 'fallback';
}

export interface SpiralASTNode {
  type: string;
  value?: string;
  children?: SpiralASTNode[];
  metadata: SpiralNodeMetadata;
}

export interface SpiralParseResult {
  success: boolean;
  language: string;
  ast: SpiralASTNode | null;
  errors: string[];
  metrics: SpiralMetrics;
  mode?: 'antlr' | 'fallback';
}

export interface HTSXRuntimeInfo {
  components: Array<{ type: string; text: string }>;
  bindings: Array<{ type: string; expression: string }>;
  events: Array<{ type: string; handler: string }>;
}

export interface HTSXParseResult extends SpiralParseResult {
  runtime: HTSXRuntimeInfo;
}

export interface SpiralLangAnalysis {
  modules: Array<{ name: string; type: string }>;
  functions: Array<{ name: string; type: string; isQuantum: boolean }>;
  classes: Array<{ name: string; type: string }>;
  theorems: Array<{ name: string; type: string }>;
}

export interface SpiralLangParseResult extends SpiralParseResult {
  analysis: SpiralLangAnalysis;
}

export interface MultiLanguageParseResult {
  success: boolean;
  results: Array<SpiralParseResult & { filename: string }>;
  totalFiles: number;
  totalTU: number;
  summary: ParseSummary;
  mode: 'antlr' | 'fallback';
}

export interface ParseSummary {
  languageCounts: Record<string, number>;
  errorCount: number;
  avgEntropy: number;
  avgPhiResonance: number;
  hasQuantumCode: boolean;
  hasTheoremCode: boolean;
  parsingMode: 'antlr' | 'fallback';
  antlrAvailable: boolean;
}

export interface SpiralParser {
  parseToAST(code: string): Promise<SpiralParseResult> | SpiralParseResult;
}

export interface UnifiedParser {
  parseMultiLanguage(files: Array<{ name: string; content: string }>): Promise<MultiLanguageParseResult>;
  parseFile(filename: string, content: string): Promise<SpiralParseResult>;
  detectLanguage(filename: string): string | null;
  getSupportedExtensions(): string[];
  getParsingMode(): string;
  isAntlrAvailable(): boolean;
}

// ANTLR4 type augmentations (when available)
declare module 'antlr4' {
  export class InputStream {
    constructor(data: string);
  }
  
  export class CommonTokenStream {
    constructor(lexer: any);
  }
  
  export class Lexer {
    constructor(input: InputStream);
  }
  
  export class Parser {
    constructor(input: CommonTokenStream);
  }
}

// Spiral-specific grammar exports (generated by ANTLR or fallback)
export interface SpiralScriptLexer {
  new (input: any): any;
}

export interface SpiralScriptParser {
  new (input: any): any;
  program(): any;
}

export interface HTSXLexer {
  new (input: any): any;
}

export interface HTSXParser {
  new (input: any): any;
  program(): any;
}

export interface SpiralLangLexer {
  new (input: any): any;
}

export interface SpiralLangParser {
  new (input: any): any;
  program(): any;
}

// Quantum computing and consciousness integration types
export interface QuantumState {
  superposition: boolean;
  entanglement: boolean;
  coherence: number;
}

export interface ConsciousnessState {
  awareness: number;
  intention: string;
  memory: Record<string, any>;
  emotion: Record<string, any>;
}

export interface TrustUnit {
  value: number;
  source: string;
  validation: string;
  timestamp: Date;
}

export interface PhiResonance {
  value: number;
  harmony: number;
  frequency: number;
}

// Export constants
export const PHI = 1.618033988749;
export const SUPPORTED_LANGUAGES = ['spiralscript', 'htsx', 'spirallang'] as const;
export const SUPPORTED_EXTENSIONS = ['.spiral', '.spi', '.htsx', '.sprl', '.consciousness', '.cons'] as const;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];
export type SupportedExtension = typeof SUPPORTED_EXTENSIONS[number];
`;
}

async function main(): Promise<void> {
  console.log('🚀 Starting ANTLR4 compilation process...');
  
  try {
    await downloadANTLR();
    await compileGrammar();
    console.log('🎉 ANTLR4 compilation complete!');
  } catch (error) {
    console.error('❌ Compilation failed:', error.message);
    console.log('🔄 Continuing with fallback parser generation...');
    
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    // Generate fallback integrations
    generateParserIntegrations(true);
    console.log('✅ Fallback parser integrations generated');
  }
}

// ES module equivalent of require.main === module
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}
