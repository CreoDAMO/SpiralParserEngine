'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-slate-900 rounded-lg">
      <div className="text-purple-400">Loading SpiralScript Editor...</div>
    </div>
  )
})

interface SpiralCodeEditorProps {
  value?: string
  onChange?: (value: string) => void
  language?: string
  theme?: string
  height?: string
}

export function SpiralCodeEditor({
  value = '',
  onChange,
  language = 'typescript',
  theme = 'vs-dark',
  height = '400px'
}: SpiralCodeEditorProps) {
  const [editorReady, setEditorReady] = useState(false)

  const handleEditorDidMount = (editor: any, monaco: any) => {
    // Configure SpiralScript language support
    monaco.languages.register({ id: 'spiralscript' })
    
    monaco.languages.setMonarchTokensProvider('spiralscript', {
      tokenizer: {
        root: [
          [/spiral/, 'keyword'],
          [/consciousness/, 'keyword'],
          [/quantum/, 'keyword'], 
          [/trust/, 'keyword'],
          [/currency/, 'keyword'],
          [/hybrid/, 'keyword'],
          [/blockchain/, 'keyword'],
          [/awaken/, 'method'],
          [/entangle/, 'method'],
          [/mint/, 'method'],
          [/phi/, 'constant'],
          [/ratio/, 'constant'],
          [/enlightenment/, 'return'],
          [/\/\/.*$/, 'comment'],
          [/".*?"/, 'string'],
          [/\d+/, 'number'],
        ]
      }
    })

    monaco.editor.defineTheme('spiral-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: '#C792EA' },
        { token: 'method', foreground: '#82AAFF' },
        { token: 'constant', foreground: '#F78C6C' },
        { token: 'return', foreground: '#C3E88D' },
        { token: 'string', foreground: '#C3E88D' },
        { token: 'comment', foreground: '#546E7A' },
        { token: 'number', foreground: '#F78C6C' },
      ],
      colors: {
        'editor.background': '#0F0F23',
        'editor.foreground': '#A9B7C6',
        'editorLineNumber.foreground': '#4A4A4A',
        'editor.selectionBackground': '#214283',
        'editor.inactiveSelectionBackground': '#214283'
      }
    })

    monaco.editor.setTheme('spiral-dark')
    setEditorReady(true)
  }

  const handleEditorChange = (value: string | undefined) => {
    if (onChange && value !== undefined) {
      onChange(value)
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-purple-300 flex items-center gap-2">
          SpiralScript Code Editor
        </CardTitle>
        <CardDescription>
          Consciousness Programming Language with Quantum Integration
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div 
          style={{ height, width: '100%' }}
          className="monaco-editor-background border border-purple-800/30 rounded-lg overflow-hidden"
        >
          <MonacoEditor
            height={height}
            language="spiralscript"
            value={value}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              contextmenu: false,
              fontFamily: 'JetBrains Mono, Fira Code, Monaco, Consolas, monospace',
              cursorStyle: 'line',
              cursorBlinking: 'solid',
              renderWhitespace: 'selection',
              lineHeight: 22,
              automaticLayout: true,
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}