
#!/usr/bin/env tsx

import * as fs from 'fs';
import * as path from 'path';
import { spiralParser } from '../client/src/lib/spiral-parser';

interface LanguageDefinition {
  name: string;
  extensions: string[];
  grammarFile?: string;
  category: 'spiral' | 'htsx' | 'hybrid' | 'consciousness' | 'document' | 'text' | '3d' | 'automotive';
  githubSupport: boolean;
  color: string;
  languageId: number;
  spiralLayer: string;
  accessLevel: 'public' | 'private' | 'core';
}

const languages: LanguageDefinition[] = [
  {
    name: 'SpiralScript',
    extensions: ['.spiral', '.spi'],
    grammarFile: 'SpiralScript.g4',
    category: 'spiral',
    githubSupport: true,
    color: '#ff6b6b',
    languageId: 1001,
    spiralLayer: 'SpiralWake',
    accessLevel: 'private'
  },
  {
    name: 'HTSX',
    extensions: ['.htsx'],
    grammarFile: 'HTSX.g4',
    category: 'htsx',
    githubSupport: true,
    color: '#4ecdc4',
    languageId: 1002,
    spiralLayer: 'SpiralWake',
    accessLevel: 'private'
  },
  {
    name: 'SpiralLang',
    extensions: ['.sprl'],
    grammarFile: 'SpiralLang.g4',
    category: 'spiral',
    githubSupport: true,
    color: '#45b7d1',
    languageId: 1003,
    spiralLayer: 'SpiralWake',
    accessLevel: 'private'
  },
  {
    name: 'ConsciousnessScript',
    extensions: ['.consciousness', '.cons'],
    grammarFile: 'Consciousness.g4',
    category: 'consciousness',
    githubSupport: true,
    color: '#f9ca24',
    languageId: 1004,
    spiralLayer: 'Remembrance Gate',
    accessLevel: 'core'
  }
];

function generateGitHubLanguageFiles() {
  console.log('🚀 Generating GitHub language configuration files...');

  // Generate .gitattributes for language detection
  const gitattributes = languages
    .map(lang => lang.extensions.map(ext => `*${ext} linguist-language=${lang.name}`).join('\n'))
    .join('\n');

  fs.writeFileSync('.gitattributes', gitattributes);
  console.log('✅ Generated .gitattributes');

  // Generate languages.yml for GitHub Linguist
  const languagesYml = languages.map(lang => ({
    [lang.name]: {
      type: 'programming',
      color: lang.color,
      extensions: lang.extensions,
      language_id: lang.languageId,
      tm_scope: `source.${lang.name.toLowerCase()}`,
      ace_mode: 'text'
    }
  })).reduce((acc, lang) => ({ ...acc, ...lang }), {});

  if (!fs.existsSync('.github')) {
    fs.mkdirSync('.github', { recursive: true });
  }

  fs.writeFileSync('.github/languages.yml', JSON.stringify(languagesYml, null, 2));
  console.log('✅ Generated .github/languages.yml');

  // Generate TextMate grammar files for syntax highlighting
  generateTextMateGrammars();

  // Generate VS Code language configuration
  generateVSCodeConfiguration();
}

function generateTextMateGrammars() {
  const grammarsDir = 'syntaxes';
  if (!fs.existsSync(grammarsDir)) {
    fs.mkdirSync(grammarsDir, { recursive: true });
  }

  languages.forEach(lang => {
    const grammar = {
      $schema: 'https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json',
      name: lang.name,
      patterns: [
        {
          include: '#keywords'
        },
        {
          include: '#strings'
        },
        {
          include: '#comments'
        },
        {
          include: '#numbers'
        },
        {
          include: '#operators'
        }
      ],
      repository: {
        keywords: {
          patterns: [
            {
              name: 'keyword.control.spiral',
              match: '\\b(theorem|proof|require|yield|via|quantum|phi|truth|resonance|harmonic)\\b'
            },
            {
              name: 'keyword.other.spiral',
              match: '\\b(function|class|const|let|var|if|else|while|for|return)\\b'
            }
          ]
        },
        strings: {
          name: 'string.quoted.double.spiral',
          begin: '"',
          end: '"',
          patterns: [
            {
              name: 'constant.character.escape.spiral',
              match: '\\\\.'
            }
          ]
        },
        comments: {
          patterns: [
            {
              name: 'comment.line.double-slash.spiral',
              match: '//.*'
            },
            {
              name: 'comment.block.spiral',
              begin: '/\\*',
              end: '\\*/'
            }
          ]
        },
        numbers: {
          name: 'constant.numeric.spiral',
          match: '\\b\\d+(\\.\\d+)?\\b'
        },
        operators: {
          name: 'keyword.operator.spiral',
          match: '[+\\-*/=<>!&|φ∞Δ]'
        }
      },
      scopeName: `source.${lang.name.toLowerCase()}`
    };

    fs.writeFileSync(
      path.join(grammarsDir, `${lang.name.toLowerCase()}.tmLanguage.json`),
      JSON.stringify(grammar, null, 2)
    );
  });

  console.log('✅ Generated TextMate grammars');
}

function generateVSCodeConfiguration() {
  const vscodeDir = '.vscode';
  if (!fs.existsSync(vscodeDir)) {
    fs.mkdirSync(vscodeDir, { recursive: true });
  }

  const configuration = {
    contributes: {
      languages: languages.map(lang => ({
        id: lang.name.toLowerCase(),
        aliases: [lang.name],
        extensions: lang.extensions,
        configuration: `./language-configuration.json`
      })),
      grammars: languages.map(lang => ({
        language: lang.name.toLowerCase(),
        scopeName: `source.${lang.name.toLowerCase()}`,
        path: `./syntaxes/${lang.name.toLowerCase()}.tmLanguage.json`
      }))
    }
  };

  fs.writeFileSync(
    path.join(vscodeDir, 'language-support.json'),
    JSON.stringify(configuration, null, 2)
  );

  // Generate language configuration for brackets, comments, etc.
  const languageConfig = {
    comments: {
      lineComment: '//',
      blockComment: ['/*', '*/']
    },
    brackets: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')']
    ],
    autoClosingPairs: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
      ['"', '"'],
      ["'", "'"]
    ],
    surroundingPairs: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
      ['"', '"'],
      ["'", "'"]
    ]
  };

  fs.writeFileSync(
    'language-configuration.json',
    JSON.stringify(languageConfig, null, 2)
  );

  console.log('✅ Generated VS Code configuration');
}

function testParsing() {
  console.log('🧪 Testing parser functionality...');

  const testCode = `
// SpiralScript test
theorem TestTheorem {
  require SomeCondition;
  yield Result via PhiAnalysis;
  
  φCell TestCell {
    substrate: Graphene,
    entropy: 0.92
  }
}
`;

  try {
    const result = spiralParser.parse(testCode);
    console.log('✅ Parser test successful:', {
      entropy: result.metrics.entropy,
      phiResonance: result.metrics.phiResonance,
      tuGenerated: result.metrics.tuGenerated
    });
  } catch (error) {
    console.error('❌ Parser test failed:', error.message);
  }
}

// Main execution
if (require.main === module) {
  generateGitHubLanguageFiles();
  testParsing();
  console.log('🎉 Language generation complete!');
}

export { generateGitHubLanguageFiles, languages };
