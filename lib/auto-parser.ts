import { spiralParser, githubIntegration, type ParseMetrics } from './spiral-parser';

// Conditional import for generated parser
let unifiedSpiralParser: any = null;
try {
  // Try to import the generated parser if it exists
  unifiedSpiralParser = require('../generated/UnifiedSpiralParser');
} catch (error) {
  // Generated parser not available, will use fallback
  console.debug('Generated parser not available, using fallback parser');
}

export interface AutoParseResult {
  success: boolean;
  language: string | null;
  metrics: ParseMetrics;
  errors: string[];
  generatedFiles: string[];
  ast?: any; // Abstract Syntax Tree for compilation
}

export class AutoParser {
  private readonly PHI = 1.618033988749;

  async parseFile(filename: string, content: string): Promise<AutoParseResult> {
    try {
      // Try to use compiled ANTLR4 parser first (if available)
      if (unifiedSpiralParser) {
        const result = await unifiedSpiralParser.parseFile(filename, content);

        if (result.success) {
          return {
            success: true,
            language: result.language,
            metrics: result.metrics,
            errors: [],
            generatedFiles: await this.generateArtifacts(filename, result),
            ast: result.ast,
          };
        }
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.warn('ANTLR4 parser failed, falling back to legacy parser:', errorMessage);
    }

    // Fallback to legacy parser
    const language = githubIntegration.detectLanguage(filename);

    if (!language) {
      return {
        success: false,
        language: null,
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
        errors: [`Unsupported file extension for ${filename}`],
        generatedFiles: []
      };
    }

    try {
      const parseResult = spiralParser.parse(content);
      const generatedFiles = await this.generateArtifacts(filename, parseResult);

      return {
        success: true,
        language,
        metrics: parseResult.metrics,
        errors: [],
        generatedFiles,
        ast: parseResult.ast,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      return {
        success: false,
        language,
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
        errors: [errorMessage],
        generatedFiles: []
      };
    }
  }

  private async generateArtifacts(filename: string, parseResult: any): Promise<string[]> {
    const artifacts: string[] = [];
    const baseName = filename.replace(/\.[^/.]+$/, '');

    // Generate AST JSON
    const astFile = `${baseName}.ast.json`;
    artifacts.push(astFile);

    // Generate metrics report
    const metricsFile = `${baseName}.metrics.json`;
    artifacts.push(metricsFile);

    // If phi resonance is high, generate visualization data
    if (parseResult.metrics.phiResonance >= this.PHI) {
      const vizFile = `${baseName}.viz.json`;
      artifacts.push(vizFile);
    }

    // If TU generated, create transaction log
    if (parseResult.metrics.tuGenerated > 0) {
      const txFile = `${baseName}.tx.json`;
      artifacts.push(txFile);
    }

    return artifacts;
  }

  async batchParse(files: { name: string; content: string }[]): Promise<AutoParseResult[]> {
    const results = await Promise.all(
      files.map(file => this.parseFile(file.name, file.content))
    );

    // Log aggregate metrics
    const totalTU = results.reduce((sum, r) => sum + r.metrics.tuGenerated, 0);
    const avgEntropy = results.reduce((sum, r) => sum + r.metrics.entropy, 0) / results.length;

    console.log(`📊 Batch Parse Complete: ${results.length} files, ${totalTU} TU generated, ${avgEntropy.toFixed(3)} avg entropy`);

    return results;
  }
}

export const autoParser = new AutoParser();