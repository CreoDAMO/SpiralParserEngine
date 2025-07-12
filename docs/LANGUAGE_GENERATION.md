
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
2. **`.github/languages.yml`** - GitHub Linguist configuration
3. **`syntaxes/*.tmLanguage.json`** - TextMate grammars for syntax highlighting
4. **`language-configuration.json`** - VS Code language support
5. **Parser artifacts** - AST, metrics, and transaction logs

### Usage

```bash
# Generate all language files
npm run generate:languages

# Test parser functionality
npm run test:parser

# Validate language support
npm run validate:languages
```

### GitHub Actions

The workflow automatically:
- Generates language files on push to main/develop
- Validates parser functionality
- Commits generated files back to repository
- Runs comprehensive parsing tests

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

1. Update `scripts/generate-languages.ts`
2. Add grammar file to `client/src/grammars/`
3. Extend parser in `client/src/lib/spiral-parser.ts`
4. Run `npm run generate:languages`

### Testing

```bash
# Test specific file
npx tsx -e "
  import { autoParser } from './client/src/lib/auto-parser';
  autoParser.parseFile('test.spiral', 'theorem Test { require True; }')
    .then(r => console.log('Result:', r));
"

# Test GitHub detection
npx tsx -e "
  import { githubIntegration } from './client/src/lib/spiral-parser';
  console.log('Detected:', githubIntegration.detectLanguage('proof.spiral'));
"
```

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
