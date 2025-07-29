// #!/usr/bin/env tsx

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

interface LanguageDefinition {
  name: string;
  extensions: string[];
  tm_scope: string;
  ace_mode: string;
  language_id: number;
  aliases?: string[];
  filenames?: string[];
  interpreters?: string[];
  color?: string;
  group?: string;
}

interface TextMateGrammar {
  name: string;
  scopeName: string;
  fileTypes: string[];
  patterns: any[];
  repository: any;
}

const spiralLanguages: LanguageDefinition[] = [
  {
    name: "SpiralScript",
    extensions: [".spiral", ".sprl"],
    tm_scope: "source.spiral",
    ace_mode: "spiral",
    language_id: 1001,
    aliases: ["spiral", "spiralscript"],
    color: "#FF6B35",
    group: "programming"
  },
  {
    name: "HTSX",
    extensions: [".htsx"],
    tm_scope: "source.htsx",
    ace_mode: "htsx", 
    language_id: 1002,
    aliases: ["htsx"],
    color: "#61DAFB",
    group: "markup"
  },
  {
    name: "Consciousness",
    extensions: [".consciousness", ".cons"],
    tm_scope: "source.consciousness",
    ace_mode: "consciousness",
    language_id: 1003,
    aliases: ["consciousness", "cons"],
    color: "#9B59B6",
    group: "data"
  },
  {
    name: "Quantum Assembly",
    extensions: [".qasm", ".quantum"],
    tm_scope: "source.quantum",
    ace_mode: "quantum",
    language_id: 1004,
    aliases: ["quantum", "qasm"],
    color: "#00D4AA",
    group: "programming"
  }
];

const textMateGrammars: Record<string, TextMateGrammar> = {
  spiral: {
    name: "SpiralScript",
    scopeName: "source.spiral",
    fileTypes: ["spiral", "sprl"],
    patterns: [
      {
        name: "comment.line.double-slash.spiral",
        match: "//.*$"
      },
      {
        name: "comment.block.spiral",
        begin: "/\\*",
        end: "\\*/"
      },
      {
        name: "keyword.control.spiral",
        match: "\\b(if|else|while|for|return|break|continue|function|class|import|export|quantum|consciousness|spiral|phi|trust|breathe)\\b"
      },
      {
        name: "string.quoted.double.spiral",
        begin: "\"",
        end: "\"",
        patterns: [
          {
            name: "constant.character.escape.spiral",
            match: "\\\\."
          }
        ]
      },
      {
        name: "constant.numeric.spiral",
        match: "\\b\\d+(\\.\\d+)?\\b"
      },
      {
        name: "constant.language.spiral",
        match: "\\b(true|false|null|undefined|φ|π|∞)\\b"
      },
      {
        name: "entity.name.function.spiral",
        match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\s*(?=\\()"
      },
      {
        name: "variable.other.spiral",
        match: "\\b[a-zA-Z_][a-zA-Z0-9_]*\\b"
      }
    ],
    repository: {}
  },
  htsx: {
    name: "HTSX",
    scopeName: "source.htsx",
    fileTypes: ["htsx"],
    patterns: [
      {
        name: "meta.tag.htsx",
        begin: "<([a-zA-Z][a-zA-Z0-9]*)",
        end: ">",
        patterns: [
          {
            name: "entity.other.attribute-name.htsx",
            match: "\\b[a-zA-Z-]+(?=\\s*=)"
          },
          {
            name: "string.quoted.double.htsx",
            begin: "\"",
            end: "\""
          }
        ]
      },
      {
        name: "meta.tag.closing.htsx",
        match: "</([a-zA-Z][a-zA-Z0-9]*)>"
      },
      {
        name: "comment.block.htsx",
        begin: "<!--",
        end: "-->"
      }
    ],
    repository: {}
  },
  consciousness: {
    name: "Consciousness",
    scopeName: "source.consciousness",
    fileTypes: ["consciousness", "cons"],
    patterns: [
      {
        name: "keyword.control.consciousness",
        match: "\\b(think|feel|know|believe|experience|consciousness|awareness|mindfulness|meditation|enlightenment)\\b"
      },
      {
        name: "string.quoted.double.consciousness",
        begin: "\"",
        end: "\""
      },
      {
        name: "comment.line.consciousness",
        match: "#.*$"
      }
    ],
    repository: {}
  },
  quantum: {
    name: "Quantum Assembly",
    scopeName: "source.quantum",
    fileTypes: ["qasm", "quantum"],
    patterns: [
      {
        name: "keyword.control.quantum",
        match: "\\b(OPENQASM|include|qreg|creg|gate|measure|reset|barrier|if|opaque|U|CX|H|X|Y|Z|S|T|CNOT|CCX|RX|RY|RZ)\\b"
      },
      {
        name: "constant.numeric.quantum",
        match: "\\b\\d+(\\.\\d+)?\\b"
      },
      {
        name: "comment.line.quantum",
        match: "//.*$"
      },
      {
        name: "string.quoted.double.quantum",
        begin: "\"",
        end: "\""
      }
    ],
    repository: {}
  }
};

async function generateLanguageFiles() {
  console.log('🚀 Generating GitHub language detection files...');
  
  const outputDir = path.join(process.cwd(), 'languages');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate languages.yml for GitHub Linguist
  const yamlContent = spiralLanguages.map(lang => {
    const extensions = lang.extensions.map(ext => `  - "${ext}"`).join('\n');
    return `${lang.name}:
  type: programming
  color: "${lang.color}"
  extensions:
${extensions}
  tm_scope: "${lang.tm_scope}"
  ace_mode: "${lang.ace_mode}"
  language_id: ${lang.language_id}`;
  }).join('\n\n');

  fs.writeFileSync(path.join(outputDir, 'languages.yml'), yamlContent);
  console.log('✅ Generated languages.yml');

  // Generate individual TextMate grammar files
  Object.entries(textMateGrammars).forEach(([key, grammar]) => {
    const grammarPath = path.join(outputDir, `${key}.tmLanguage.json`);
    fs.writeFileSync(grammarPath, JSON.stringify(grammar, null, 2));
    console.log(`✅ Generated ${key}.tmLanguage.json`);
  });

  // Generate .gitattributes file
  const gitattributes = spiralLanguages.map(lang => 
    lang.extensions.map(ext => `*${ext} linguist-language=${lang.name}`).join('\n')
  ).join('\n');

  fs.writeFileSync(path.join(outputDir, '.gitattributes'), gitattributes);
  console.log('✅ Generated .gitattributes');

  // Generate Monaco Editor language configurations
  const monacoConfig = {
    languages: spiralLanguages.map(lang => ({
      id: lang.name.toLowerCase(),
      extensions: lang.extensions,
      aliases: lang.aliases,
      mimetypes: [`text/x-${lang.name.toLowerCase()}`]
    })),
    grammars: Object.entries(textMateGrammars).map(([key, grammar]) => ({
      language: key,
      scopeName: grammar.scopeName,
      path: `./languages/${key}.tmLanguage.json`
    }))
  };

  fs.writeFileSync(
    path.join(outputDir, 'monaco-languages.json'), 
    JSON.stringify(monacoConfig, null, 2)
  );
  console.log('✅ Generated monaco-languages.json');

  // Generate VS Code extension configuration
  const vscodeConfig = {
    contributes: {
      languages: spiralLanguages.map(lang => ({
        id: lang.name.toLowerCase(),
        aliases: lang.aliases,
        extensions: lang.extensions,
        configuration: `./language-configuration.json`
      })),
      grammars: Object.entries(textMateGrammars).map(([key, grammar]) => ({
        language: key,
        scopeName: grammar.scopeName,
        path: `./syntaxes/${key}.tmLanguage.json`
      }))
    }
  };

  fs.writeFileSync(
    path.join(outputDir, 'vscode-extension.json'), 
    JSON.stringify(vscodeConfig, null, 2)
  );
  console.log('✅ Generated vscode-extension.json');

  // Generate standalone language-configuration.json for VS Code integration
  const languageConfiguration = {
    comments: {
      lineComment: "//",
      blockComment: ["/*", "*/"]
    },
    brackets: [
      ["{", "}"],
      ["[", "]"],
      ["(", ")"],
      ["<", ">"]
    ],
    autoClosingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: "\"", close: "\"" },
      { open: "'", close: "'" },
      { open: "<", close: ">" }
    ],
    surroundingPairs: [
      ["{", "}"],
      ["[", "]"],
      ["(", ")"],
      ["\"", "\""],
      ["'", "'"],
      ["<", ">"]
    ],
    wordPattern: "\\b[a-zA-Z_φπ∞][a-zA-Z0-9_φπ∞]*\\b",
    indentationRules: {
      increaseIndentPattern: "^.*\\{[^}\"']*$",
      decreaseIndentPattern: "^\\s*\\}.*$"
    }
  };

  fs.writeFileSync(
    path.join(outputDir, 'language-configuration.json'),
    JSON.stringify(languageConfiguration, null, 2)
  );
  console.log('✅ Generated language-configuration.json');

  // Deploy syntax files to the syntaxes directory
  const syntaxesDir = path.join(process.cwd(), 'syntaxes');
  if (!fs.existsSync(syntaxesDir)) {
    fs.mkdirSync(syntaxesDir, { recursive: true });
  }

  Object.entries(textMateGrammars).forEach(([key, grammar]) => {
    const sourcePath = path.join(outputDir, `${key}.tmLanguage.json`);
    const destPath = path.join(syntaxesDir, `${key}.tmLanguage.json`);
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✅ Deployed ${key}.tmLanguage.json to syntaxes/`);
  });

  // Copy language-configuration.json to root directory
  const rootConfigPath = path.join(process.cwd(), 'language-configuration.json');
  fs.copyFileSync(
    path.join(outputDir, 'language-configuration.json'),
    rootConfigPath
  );
  console.log('✅ Deployed language-configuration.json to root');

  // Generate deployment manifest
  const deploymentManifest = {
    generated: new Date().toISOString(),
    languages: spiralLanguages.length,
    files: {
      grammars: Object.keys(textMateGrammars).map(key => `${key}.tmLanguage.json`),
      configuration: 'language-configuration.json',
      linguist: 'languages.yml',
      gitattributes: '.gitattributes',
      monaco: 'monaco-languages.json',
      vscode: 'vscode-extension.json'
    },
    deployment: {
      syntaxes: Object.keys(textMateGrammars).map(key => `syntaxes/${key}.tmLanguage.json`),
      root: ['language-configuration.json']
    }
  };

  fs.writeFileSync(
    path.join(outputDir, 'deployment-manifest.json'),
    JSON.stringify(deploymentManifest, null, 2)
  );
  console.log('✅ Generated deployment-manifest.json');

  console.log('\n🎉 All language files generated successfully!');
  console.log(`📁 Files created in: ${outputDir}`);
  console.log(`📁 Files deployed to: syntaxes/ and root`);
  console.log(`📊 Languages supported: ${spiralLanguages.length}`);
}

// Execute the generation
generateLanguageFiles().catch(console.error);
