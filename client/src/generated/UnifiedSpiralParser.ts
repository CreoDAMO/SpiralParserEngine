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
          errors: [`Unsupported file type: ${ext}`],
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
    const languageCounts: Record<string, number> = {};
    const errors: string[] = [];
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
