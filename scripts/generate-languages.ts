import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = resolve(__dirname, '..');
const syntaxesDir = join(rootDir, 'syntaxes');
const languagesDir = join(rootDir, 'languages');

// Ensure syntaxes directory exists
if (!existsSync(syntaxesDir)) {
  mkdirSync(syntaxesDir, { recursive: true });
}

// Language configuration for VS Code extensions
const languageConfiguration = {
  "comments": {
    "lineComment": "//",
    "blockComment": ["/*", "*/"]
  },
  "brackets": [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  "autoClosingPairs": [
    { "open": "{", "close": "}" },
    { "open": "[", "close": "]" },
    { "open": "(", "close": ")" },
    { "open": "\"", "close": "\"" },
    { "open": "'", "close": "'" }
  ],
  "surroundingPairs": [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["\"", "\""],
    ["'", "'"]
  ]
};

// Generate language-configuration.json at repo root
const langConfigPath = join(rootDir, 'language-configuration.json');
writeFileSync(langConfigPath, JSON.stringify(languageConfiguration, null, 2));

// Create syntax files for each language
const syntaxFiles = [
  'spiral.tmLanguage.json',
  'htsx.tmLanguage.json',
  'consciousness.tmLanguage.json',
  'quantum.tmLanguage.json'
];

// Basic TextMate grammar template
const createGrammar = (name: string, fileTypes: string[], patterns: any[]) => ({
  name,
  scopeName: `source.${name.toLowerCase()}`,
  fileTypes,
  patterns,
  repository: {
    keywords: {
      match: "\\b(if|else|while|for|function|return|class|interface|type|let|const|var|import|export|from|as|namespace|module|declare|extends|implements|public|private|protected|static|abstract|readonly|async|await|yield|try|catch|finally|throw|new|this|super|null|undefined|true|false|void|number|string|boolean|any|never|unknown|object)\\b",
      name: "keyword.control"
    },
    strings: {
      name: "string.quoted.double",
      begin: "\"",
      end: "\"",
      patterns: [
        {
          name: "constant.character.escape",
          match: "\\\\."
        }
      ]
    },
    comments: {
      patterns: [
        {
          name: "comment.line.double-slash",
          match: "//.*$"
        },
        {
          name: "comment.block",
          begin: "/\\*",
          end: "\\*/"
        }
      ]
    }
  }
});

// Generate each syntax file
const grammars = {
  'spiral.tmLanguage.json': createGrammar('SpiralScript', ['spiral', 'spi'], [
    { include: "#keywords" },
    { include: "#strings" },
    { include: "#comments" },
    {
      match: "\\b(quantum|consciousness|φ|∆|∞|proof|theorem|lemma|axiom|verify|assert|trust|hybrid|molecular|assembly)\\b",
      name: "keyword.other.spiral"
    }
  ]),
  'htsx.tmLanguage.json': createGrammar('HTSX', ['htsx'], [
    { include: "#keywords" },
    { include: "#strings" },
    { include: "#comments" },
    {
      match: "<[^>]+>",
      name: "entity.name.tag.htsx"
    }
  ]),
  'consciousness.tmLanguage.json': createGrammar('ConsciousnessScript', ['consciousness', 'cons'], [
    { include: "#keywords" },
    { include: "#strings" },
    { include: "#comments" },
    {
      match: "\\b(aware|conscious|neural|memory|perception|cognition|thought|emotion|learning|adaptation)\\b",
      name: "keyword.other.consciousness"
    }
  ]),
  'quantum.tmLanguage.json': createGrammar('QuantumScript', ['quantum', 'qnt'], [
    { include: "#keywords" },
    { include: "#strings" },
    { include: "#comments" },
    {
      match: "\\b(qubit|entangle|superposition|measurement|gate|circuit|algorithm|teleport|oracle)\\b",
      name: "keyword.other.quantum"
    }
  ])
};

// Write syntax files
Object.entries(grammars).forEach(([filename, grammar]) => {
  const sourcePath = join(languagesDir, filename);
  const targetPath = join(syntaxesDir, filename);
  
  // Ensure source file exists
  if (!existsSync(sourcePath)) {
    writeFileSync(sourcePath, JSON.stringify(grammar, null, 2));
    console.log(`Created: ${sourcePath}`);
  }
  
  // Copy to syntaxes directory
  writeFileSync(targetPath, JSON.stringify(grammar, null, 2));
  console.log(`Generated: ${targetPath}`);
});

// Generate GitHub integration files
const gitattributes = `# GitHub Language Detection
*.spiral linguist-language=SpiralScript
*.spi linguist-language=SpiralScript
*.htsx linguist-language=HTSX
*.sprl linguist-language=SpiralLang
*.consciousness linguist-language=ConsciousnessScript
*.cons linguist-language=ConsciousnessScript
*.qnt linguist-language=QuantumScript
*.quantum linguist-language=QuantumScript

# File associations
*.spiral text eol=lf
*.spi text eol=lf
*.htsx text eol=lf
*.sprl text eol=lf
*.consciousness text eol=lf
*.cons text eol=lf
*.qnt text eol=lf
*.quantum text eol=lf
`;

const githubLanguages = `# GitHub Linguist Configuration
SpiralScript:
  type: programming
  extensions:
    - ".spiral"
    - ".spi"
  tm_scope: source.spiralscript
  ace_mode: text
  color: "#ff6b6b"

HTSX:
  type: programming
  extensions:
    - ".htsx"
  tm_scope: source.htsx
  ace_mode: typescript
  color: "#4ecdc4"

SpiralLang:
  type: programming
  extensions:
    - ".sprl"
  tm_scope: source.spirallang
  ace_mode: text
  color: "#45b7d1"

ConsciousnessScript:
  type: programming
  extensions:
    - ".consciousness"
    - ".cons"
  tm_scope: source.consciousness
  ace_mode: text
  color: "#96ceb4"

QuantumScript:
  type: programming
  extensions:
    - ".quantum"
    - ".qnt"
  tm_scope: source.quantum
  ace_mode: text
  color: "#ffeaa7"
`;

// Write GitHub integration files
writeFileSync(join(rootDir, '.gitattributes'), gitattributes);
writeFileSync(join(languagesDir, 'languages.yml'), githubLanguages);

console.log('✅ GitHub integration files generated');

// Generate VS Code extension package.json
const extensionPackage = {
  "name": "spiralscript-language-support",
  "displayName": "SpiralScript Language Support",
  "description": "Language support for SpiralScript, HTSX, and quantum-enhanced development",
  "version": "1.0.0",
  "engines": {
    "vscode": "^1.0.0"
  },
  "categories": ["Programming Languages"],
  "contributes": {
    "languages": [
      {
        "id": "spiral",
        "aliases": ["SpiralScript", "spiral"],
        "extensions": [".spiral", ".sprl"],
        "configuration": "./language-configuration.json"
      },
      {
        "id": "htsx",
        "aliases": ["HTSX", "htsx"],
        "extensions": [".htsx"],
        "configuration": "./language-configuration.json"
      },
      {
        "id": "consciousness",
        "aliases": ["Consciousness", "consciousness"],
        "extensions": [".consciousness"],
        "configuration": "./language-configuration.json"
      },
      {
        "id": "quantum",
        "aliases": ["Quantum", "quantum"],
        "extensions": [".quantum"],
        "configuration": "./language-configuration.json"
      }
    ],
    "grammars": [
      {
        "language": "spiral",
        "scopeName": "source.spiral",
        "path": "./syntaxes/spiral.tmLanguage.json"
      },
      {
        "language": "htsx",
        "scopeName": "source.htsx",
        "path": "./syntaxes/htsx.tmLanguage.json"
      },
      {
        "language": "consciousness",
        "scopeName": "source.consciousness",
        "path": "./syntaxes/consciousness.tmLanguage.json"
      },
      {
        "language": "quantum",
        "scopeName": "source.quantum",
        "path": "./syntaxes/quantum.tmLanguage.json"
      }
    ]
  }
};

writeFileSync(join(rootDir, 'package.json.vscode'), JSON.stringify(extensionPackage, null, 2));

console.log('✅ Language configuration files generated successfully');
console.log('✅ Syntaxes directory created with language files');
console.log('✅ VS Code extension configuration generated');