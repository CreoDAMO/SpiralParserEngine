import { spiralParser, githubIntegration, type ParseMetrics } from './spiral-parser';
import { unifiedSpiralParser } from '../generated/UnifiedSpiralParser';

export interface AutoParseResult {
  success: boolean;
  language: string | null;
  metrics: ParseMetrics;
  errors: string[];
  generatedFiles: string[];
}

export class AutoParser {
  private readonly PHI = 1.618033988749;

  async parseFile(filename: string, content: string): Promise<AutoParseResult> {
    try {
      // Try to use compiled ANTLR4 parser first
      const result = await unifiedSpiralParser.parseFile(filename, content);

      if (result.success) {
        return {
          success: true,
          language: result.language,
          metrics: result.metrics,
          errors: [],
          generatedFiles: await this.generateArtifacts(filename, result),
          // compiler: 'antlr4-compiled' // Removed 'compiler' for consistency with the interface
        };
      }
    } catch (error) {
      console.warn('ANTLR4 parser failed, falling back to legacy parser:', error.message);
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
        generatedFiles
      };
    } catch (error) {
      return {
        success: false,
        language,
        metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
        errors: [error.message],
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