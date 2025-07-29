// Unified Spiral Language Parser Integration
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

  private readonly mode = 'fallback';

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
            errors: [`Unsupported file type: ${ext}`],
            metrics: { entropy: 0, phiResonance: 0, tuGenerated: 0 },
            mode: this.mode
          };
      }
    } catch (error) {
      return {
        success: false,
        language: language || 'unknown',
        ast: null,
        errors: [error instanceof Error ? error.message : 'Unknown error'],
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
