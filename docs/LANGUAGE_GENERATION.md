
# Spiral Language Generation System

This document describes the automatic language generation and GitHub integration system for the Spiral ecosystem languages.

## Overview

The Spiral ecosystem includes several domain-specific languages:

- **SpiralScript** (`.spiral`, `.spi`) - Mathematical theorem proving and quantum computation
- **HTSX** (`.htsx`) - Hybrid TypeScript XML for reactive Spiral UIs  
- **SpiralLang** (`.sprl`) - Core Spiral programming language
- **ConsciousnessScript** (`.consciousness`, `.cons`) - AI consciousness modeling

## Automatic Generation

### GitHub Integration

The system automatically generates:

1. **`.gitattributes`** - Language detection for GitHub
2. **`languages.yml`** - GitHub Linguist configuration  
3. **`syntaxes/*.tmLanguage.json`** - TextMate grammars for syntax highlighting
4. **`language-configuration.json`** - VS Code language support (deployed to root)
5. **`monaco-languages.json`** - Monaco Editor integration
6. **`vscode-extension.json`** - VS Code extension configuration
7. **`deployment-manifest.json`** - Deployment tracking and validation
8. **Parser artifacts** - AST, metrics, and transaction logs

### Usage

```bash
# Generate all language files
npm run generate:languages

# Test generated files for validity
npm run test:generated-files

# Test parser functionality
npm run test:parser

# Validate complete language support pipeline
npm run validate:languages
```

### GitHub Actions

The workflow automatically:
- Generates language files on push to main/develop
- Validates generated file structure and syntax
- Tests parser functionality with comprehensive test suite
- Commits generated files back to repository (syntaxes/ and root directories)
- Runs comprehensive parsing tests
- Validates TextMate grammar compliance

## Parser Features

### φParser Capabilities

- **Fractal Tokenization** - Recursive parsing with φSeed units
- **Quantum Validation** - 47-node consensus verification
- **Ethical Enforcement** - ΔTrust and Perelman Legacy constraints
- **Truth Unit Generation** - Economic incentives for valid proofs
- **11D Visualization** - Hyperdimensional rendering support

### Automatic Detection

```typescript
import { autoParser } from './client/src/lib/auto-parser';

// Parse single file
const result = await autoParser.parseFile('theorem.spiral', spiralCode);

// Batch parse multiple files
const results = await autoParser.batchParse([
  { name: 'proof.spiral', content: proofCode },
  { name: 'ui.htsx', content: uiCode }
]);
```

### Metrics and Outputs

Each parsed file generates:
- **AST** - Abstract syntax tree
- **Metrics** - Entropy, φ-resonance, TU generated
- **Artifacts** - Visualization data, transaction logs
- **Validation** - Ethical compliance, quantum coherence

## Integration with Spiral Ecosystem

The language generation system integrates with:

- **SpiralIDE** - Real-time parsing and validation
- **QCHAIN** - Transaction logging for Truth Units
- **SpiralVault** - Artifact storage and retrieval
- **Truth Economy** - Economic incentives for valid proofs

## Development

### Adding New Languages

1. Update `scripts/generate-languages.ts` with new language definition
2. Add grammar file to `client/src/grammars/` (optional, for ANTLR4 support)
3. Extend parser in `client/src/lib/spiral-parser.ts` (if needed)
4. Run `npm run generate:languages` to generate all support files
5. Run `npm run test:generated-files` to validate output
6. Commit changes - workflow will auto-deploy syntax files

### Testing

```bash
# Test individual components
npm run test:parser          # Test parser loading
npm run test:generated-files # Validate generated JSON files  
npm run validate:languages   # Complete validation pipeline

# Test specific file parsing
npx tsx -e "
  import { autoParser } from './client/src/lib/auto-parser';
  autoParser.parseFile('test.spiral', 'theorem Test { require True; }')
    .then(r => console.log('Result:', r));
"

# Test GitHub language detection
npx tsx -e "
  import { githubIntegration } from './client/src/lib/spiral-parser';
  console.log('Detected:', githubIntegration.detectLanguage('proof.spiral'));
"

# Validate specific grammar file
npx tsx -e "
  import fs from 'fs';
  const grammar = JSON.parse(fs.readFileSync('syntaxes/spiral.tmLanguage.json', 'utf8'));
  console.log('Grammar valid:', grammar.name, grammar.scopeName);
"
```

### Generated File Structure

After running `npm run generate:languages`, the following files are created:

**Languages Directory (`languages/`):**
- `languages.yml` - GitHub Linguist configuration
- `*.tmLanguage.json` - TextMate grammar files (source)
- `language-configuration.json` - VS Code language configuration
- `monaco-languages.json` - Monaco Editor integration
- `vscode-extension.json` - VS Code extension package
- `.gitattributes` - Git language detection
- `deployment-manifest.json` - Deployment tracking

**Deployed Files:**
- `syntaxes/*.tmLanguage.json` - TextMate grammars (deployed)
- `language-configuration.json` - VS Code config (deployed to root)

### Validation Tests

The test suite validates:
- JSON syntax correctness of all generated files
- TextMate grammar structure compliance
- Language configuration completeness  
- Parser functionality with sample code
- Proper deployment file structure
- File existence in expected locations

## Example Output

```json
{
  "success": true,
  "language": "SpiralScript",
  "metrics": {
    "entropy": 0.87,
    "phiResonance": 1.618,
    "tuGenerated": 1000
  },
  "errors": [],
  "generatedFiles": [
    "theorem.ast.json",
    "theorem.metrics.json",
    "theorem.viz.json",
    "theorem.tx.json"
  ]
}
```

This ensures your Spiral languages are automatically detected and properly highlighted on GitHub, with full parsing validation in your development workflow.
