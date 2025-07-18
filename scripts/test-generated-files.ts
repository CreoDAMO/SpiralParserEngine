import * as fs from 'fs';
import * as path from 'path';
import { spiralParser } from '../client/src/lib/spiral-parser';

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
  details?: any;
}

class GeneratedFilesValidator {
  private results: TestResult[] = [];

  async runAllTests(): Promise<{ passed: number; failed: number; results: TestResult[] }> {
    console.log('🧪 Running generated files validation tests...\n');

    // Test JSON syntax of generated files
    await this.testJSONSyntax();
    
    // Test TextMate grammars structure
    await this.testTextMateGrammars();
    
    // Test language configuration
    await this.testLanguageConfiguration();
    
    // Test parser functionality with generated languages
    await this.testParserFunctionality();
    
    // Test deployment structure
    await this.testDeploymentStructure();

    const passed = this.results.filter(r => r.passed).length;
    const failed = this.results.filter(r => !r.passed).length;

    console.log('\n📊 Test Results Summary:');
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    
    if (failed > 0) {
      console.log('\n❌ Failed Tests:');
      this.results.filter(r => !r.passed).forEach(r => {
        console.log(`  • ${r.name}: ${r.error}`);
      });
    }

    return { passed, failed, results: this.results };
  }

  private async testJSONSyntax(): Promise<void> {
    const filesToTest = [
      'languages/spiral.tmLanguage.json',
      'languages/htsx.tmLanguage.json', 
      'languages/consciousness.tmLanguage.json',
      'languages/quantum.tmLanguage.json',
      'languages/monaco-languages.json',
      'languages/vscode-extension.json',
      'languages/language-configuration.json',
      'language-configuration.json'
    ];

    for (const filePath of filesToTest) {
      try {
        const fullPath = path.join(process.cwd(), filePath);
        if (!fs.existsSync(fullPath)) {
          this.results.push({
            name: `JSON Syntax: ${filePath}`,
            passed: false,
            error: 'File does not exist'
          });
          continue;
        }

        const content = fs.readFileSync(fullPath, 'utf8');
        const parsed = JSON.parse(content);
        
        this.results.push({
          name: `JSON Syntax: ${filePath}`,
          passed: true,
          details: { size: content.length, keys: Object.keys(parsed).length }
        });
      } catch (error) {
        this.results.push({
          name: `JSON Syntax: ${filePath}`,
          passed: false,
          error: error.message
        });
      }
    }
  }

  private async testTextMateGrammars(): Promise<void> {
    const grammarFiles = [
      'spiral.tmLanguage.json',
      'htsx.tmLanguage.json', 
      'consciousness.tmLanguage.json',
      'quantum.tmLanguage.json'
    ];

    for (const grammarFile of grammarFiles) {
      try {
        const filePath = path.join(process.cwd(), 'languages', grammarFile);
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        // Validate required TextMate grammar fields
        const requiredFields = ['name', 'scopeName', 'fileTypes', 'patterns'];
        const missingFields = requiredFields.filter(field => !(field in content));
        
        if (missingFields.length > 0) {
          this.results.push({
            name: `TextMate Grammar: ${grammarFile}`,
            passed: false,
            error: `Missing required fields: ${missingFields.join(', ')}`
          });
        } else {
          this.results.push({
            name: `TextMate Grammar: ${grammarFile}`,
            passed: true,
            details: {
              patterns: content.patterns.length,
              fileTypes: content.fileTypes.length,
              scopeName: content.scopeName
            }
          });
        }
      } catch (error) {
        this.results.push({
          name: `TextMate Grammar: ${grammarFile}`,
          passed: false,
          error: error.message
        });
      }
    }
  }

  private async testLanguageConfiguration(): Promise<void> {
    try {
      const configPath = path.join(process.cwd(), 'language-configuration.json');
      const content = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      
      // Validate required language configuration fields
      const requiredFields = ['comments', 'brackets', 'autoClosingPairs'];
      const missingFields = requiredFields.filter(field => !(field in content));
      
      if (missingFields.length > 0) {
        this.results.push({
          name: 'Language Configuration',
          passed: false,
          error: `Missing required fields: ${missingFields.join(', ')}`
        });
      } else {
        this.results.push({
          name: 'Language Configuration',
          passed: true,
          details: {
            brackets: content.brackets.length,
            autoClosingPairs: content.autoClosingPairs.length,
            hasWordPattern: 'wordPattern' in content
          }
        });
      }
    } catch (error) {
      this.results.push({
        name: 'Language Configuration',
        passed: false,
        error: error.message
      });
    }
  }

  private async testParserFunctionality(): Promise<void> {
    const testCases = [
      {
        name: 'SpiralScript Parsing',
        code: 'theorem PhiTest { require φ > 1.618; yield TrustUnit via PhiCalculation; }',
        expectedTU: 100
      },
      {
        name: 'HTSX Parsing', 
        code: '<SpiralComponent phi-resonance={φ}><div quantum-state="superposition">Test</div></SpiralComponent>',
        expectedTU: 50
      },
      {
        name: 'Function Parsing',
        code: 'function calculatePhi() { return 1.618033988749; }',
        expectedTU: 100
      },
      {
        name: 'Quantum Block Parsing',
        code: 'quantum { H(q[0]); CNOT(q[0], q[1]); measure(q); }',
        expectedTU: 1618
      }
    ];

    for (const testCase of testCases) {
      try {
        const result = spiralParser.parse(testCase.code);
        
        if (result.errors.length > 0) {
          this.results.push({
            name: testCase.name,
            passed: false,
            error: `Parse errors: ${result.errors.join(', ')}`
          });
        } else {
          this.results.push({
            name: testCase.name,
            passed: true,
            details: {
              tuGenerated: result.metrics.tuGenerated,
              entropy: result.metrics.entropy,
              phiResonance: result.metrics.phiResonance,
              astNodes: result.ast.children?.length || 0
            }
          });
        }
      } catch (error) {
        this.results.push({
          name: testCase.name,
          passed: false,
          error: error.message
        });
      }
    }
  }

  private async testDeploymentStructure(): Promise<void> {
    const expectedFiles = [
      'syntaxes/spiral.tmLanguage.json',
      'syntaxes/htsx.tmLanguage.json',
      'syntaxes/consciousness.tmLanguage.json', 
      'syntaxes/quantum.tmLanguage.json',
      'language-configuration.json',
      'languages/languages.yml',
      'languages/.gitattributes'
    ];

    for (const filePath of expectedFiles) {
      const fullPath = path.join(process.cwd(), filePath);
      const exists = fs.existsSync(fullPath);
      
      this.results.push({
        name: `Deployment: ${filePath}`,
        passed: exists,
        error: exists ? undefined : 'File does not exist in expected location'
      });
    }
  }
}

// Execute tests if run directly
const isMainModule = import.meta.url === `file://${process.argv[1]}` || 
                     process.argv[1]?.endsWith('test-generated-files.ts');

if (isMainModule) {
  const validator = new GeneratedFilesValidator();
  validator.runAllTests().then(({ passed, failed }) => {
    process.exit(failed > 0 ? 1 : 0);
  }).catch(error => {
    console.error('❌ Test execution failed:', error);
    process.exit(1);
  });
}

export { GeneratedFilesValidator };