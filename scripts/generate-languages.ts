import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, resolve } from 'path';

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

// Copy syntax files from languages directory to syntaxes directory
const syntaxFiles = [
  'spiral.tmLanguage.json',
  'htsx.tmLanguage.json',
  'consciousness.tmLanguage.json',
  'quantum.tmLanguage.json'
];

syntaxFiles.forEach(file => {
  const sourcePath = join(languagesDir, file);
  const targetPath = join(syntaxesDir, file);

  if (existsSync(sourcePath)) {
    const content = require(sourcePath);
    writeFileSync(targetPath, JSON.stringify(content, null, 2));
    console.log(`Generated: ${targetPath}`);
  }
});

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