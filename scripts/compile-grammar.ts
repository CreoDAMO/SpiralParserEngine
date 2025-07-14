
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
  const grammarFile = path.join(GRAMMAR_DIR, 'SpiralScript.g4');
  
  if (!fs.existsSync(grammarFile)) {
    console.error('❌ SpiralScript.g4 not found');
    return;
  }

  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('🔧 Compiling SpiralScript grammar...');
  
  try {
    // Compile grammar to TypeScript
    execSync(`java -jar ${ANTLR_JAR} -Dlanguage=TypeScript -o ${OUTPUT_DIR} ${grammarFile}`, {
      stdio: 'inherit'
    });
    
    console.log('✅ Grammar compiled successfully');
    
    // Generate parser integration
    generateParserIntegration();
    
  } catch (error) {
    console.error('❌ Grammar compilation failed:', error.message);
  }
}

function generateParserIntegration() {
  const integrationCode = `// Auto-generated ANTLR4 integration for SpiralScript
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
      
      // Parse starting from program rule
      const tree = parser.program();
      
      return {
        success: true,
        ast: this.convertToSpiralAST(tree),
        errors: []
      };
    } catch (error) {
      return {
        success: false,
        ast: null,
        errors: [error.message]
      };
    }
  }

  private convertToSpiralAST(parseTree: any): any {
    // Convert ANTLR4 parse tree to SpiralScript AST
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
}

export const compiledParser = new CompiledSpiralParser();
`;

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'SpiralScriptIntegration.ts'),
    integrationCode
  );

  console.log('✅ Parser integration generated');
}

async function main() {
  console.log('🚀 Starting ANTLR4 compilation process...');
  
  await downloadANTLR();
  await compileGrammar();
  
  console.log('🎉 ANTLR4 compilation complete!');
}

if (require.main === module) {
  main().catch(console.error);
}
