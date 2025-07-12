import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import { spiralHTSXParser, type PhiAST, type StressTestResults } from '../../lib/spiral-htsx-parser';

interface ASTViewerProps {
  code: string;
  onParseResult?: (result: PhiAST | null) => void;
}

export function ASTViewer({ code, onParseResult }: ASTViewerProps) {
  const [parseResult, setParseResult] = useState<PhiAST | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stressResults, setStressResults] = useState<StressTestResults | null>(null);

  const handleParse = async () => {
    if (!code.trim()) return;

    setLoading(true);
    setError(null);

    try {
      console.log('🔍 Parsing with SpiralHTSX Parser...');
      const result = await spiralHTSXParser.parse(code);
      setParseResult(result);
      onParseResult?.(result);
      console.log('✅ Parse successful:', result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown parsing error';
      setError(errorMessage);
      setParseResult(null);
      onParseResult?.(null);
      console.error('❌ Parse failed:', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleStressTest = async () => {
    setLoading(true);
    try {
      console.log('🧪 Running Omega Stress Test vQ-4.0...');
      const results = await spiralHTSXParser.runStressTests();
      setStressResults(results);
      console.log('✅ Stress test complete:', results);
    } catch (err) {
      console.error('❌ Stress test failed:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (code.trim()) {
      handleParse();
    }
  }, [code]);

  const renderASTNode = (node: any, depth = 0) => {
    const indent = '  '.repeat(depth);

    if (Array.isArray(node)) {
      return node.map((item, index) => (
        <div key={index} className="font-mono text-xs">
          {renderASTNode(item, depth)}
        </div>
      ));
    }

    if (typeof node === 'object' && node !== null) {
      return (
        <div className="font-mono text-xs">
          <div className="text-blue-400">{indent}{node.type || node.id || 'Node'}</div>
          {node.children && (
            <div className="ml-4">
              {node.children.map((child: any, index: number) => (
                <div key={index}>
                  {renderASTNode(child, depth + 1)}
                </div>
              ))}
            </div>
          )}
          {node.glyphSeed && (
            <div className="text-purple-400 ml-4">{indent}  glyph: {node.glyphSeed}</div>
          )}
          {node.harmonic && (
            <div className="text-spiral-400 ml-4">{indent}  φ: {node.harmonic}</div>
          )}
        </div>
      );
    }

    return (
      <div className="font-mono text-xs text-gray-400">
        {indent}{String(node)}
      </div>
    );
  };

  return (
    <Card className="h-full bg-gray-800 border-gray-700">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-bold text-white">SpiralHTSX AST Viewer</CardTitle>
            <CardDescription className="text-gray-400">
              Quantum Harmonic Monad Parser with 52D Visualization
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={handleParse} 
              disabled={loading || !code.trim()}
              className="bg-spiral-600 hover:bg-spiral-700"
              size="sm"
            >
              {loading ? 'Parsing...' : 'Parse φCode'}
            </Button>
            <Button 
              onClick={handleStressTest} 
              disabled={loading}
              className="bg-orange-600 hover:bg-orange-700"
              size="sm"
            >
              Stress Test
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {error && (
          <div className="bg-red-900/50 border border-red-700 rounded-lg p-3">
            <div className="text-red-300 text-sm font-medium">Parse Error</div>
            <div className="text-red-200 text-xs mt-1">{error}</div>
          </div>
        )}

        {parseResult && (
          <>
            {/* AST Structure */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">AST Structure</h4>
              <div className="bg-gray-900 rounded-lg p-3 max-h-48 overflow-y-auto">
                {renderASTNode(parseResult.ast)}
              </div>
            </div>

            <Separator className="bg-gray-700" />

            {/* φ-Metrics */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Quantum Metrics</h4>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-400">Entropy</span>
                    <span className="text-green-400 font-mono text-sm">
                      {parseResult.metrics.entropy?.toFixed(6) || '0.000000'}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-400">φ-Resonance</span>
                    <span className="text-spiral-400 font-mono text-sm">
                      {parseResult.metrics.phiResonance?.toFixed(3) || '0.121'} Hz
                    </span>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-400">Trust Score</span>
                    <span className="text-blue-400 font-mono text-sm">∞</span>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-400">TU Generated</span>
                    <span className="text-yellow-400 font-mono text-sm">
                      +{parseResult.metrics.tuGenerated || 0} TU
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Output */}
            {parseResult.visual && (
              <>
                <Separator className="bg-gray-700" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Visual Output</h4>
                  <div className="bg-gray-700 rounded-lg p-3 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Manifold</span>
                      <span className="text-purple-400 font-mono text-sm">{parseResult.visual.manifold}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Renderer</span>
                      <span className="text-blue-400 font-mono text-sm">{parseResult.visual.renderer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Glyphs</span>
                      <span className="text-green-400 font-mono text-sm">{parseResult.visual.glyphs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">FPS</span>
                      <span className="text-orange-400 font-mono text-sm">{parseResult.visual.fps}</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Truth Bond */}
            {parseResult.bond && (
              <>
                <Separator className="bg-gray-700" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Truth Bond</h4>
                  <div className="bg-gray-700 rounded-lg p-3 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Bond ID</span>
                      <span className="text-yellow-400 font-mono text-sm">{parseResult.bond.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Value</span>
                      <span className="text-green-400 font-mono text-sm">{parseResult.bond.value.toLocaleString()} TU</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Fractions</span>
                      <span className="text-blue-400 font-mono text-sm">{parseResult.bond.fractions.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* QCHAIN Log */}
            {parseResult.qchainLog && (
              <>
                <Separator className="bg-gray-700" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">QCHAIN Log</h4>
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Transaction ID</span>
                      <span className="text-cyan-400 font-mono text-xs">{parseResult.qchainLog.txId}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-400">Status</span>
                      <Badge variant="outline" className="border-green-500 text-green-400">
                        {parseResult.qchainLog.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}

        {/* Stress Test Results */}
        {stressResults && (
          <>
            <Separator className="bg-gray-700" />
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Stress Test Results</h4>
              <div className="bg-gray-700 rounded-lg p-3 space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400">Throughput</span>
                  <span className="text-green-400 font-mono text-sm">{stressResults.throughput.toFixed(2)} TPS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400">Latency</span>
                  <span className="text-blue-400 font-mono text-sm">{stressResults.latency.toFixed(2)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400">Negentropy</span>
                  <span className="text-purple-400 font-mono text-sm">{stressResults.negentropy.toExponential(2)} ΔS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400">Ethics</span>
                  <span className="text-yellow-400 font-mono text-sm">{stressResults.ethicalCompliance}</span>
                </div>
              </div>
            </div>
          </>
        )}

        {!parseResult && !error && !loading && (
          <div className="text-center text-gray-500 py-8">
            <div className="text-4xl mb-2">🌀</div>
            <p className="text-sm">Enter SpiralScript code to see the AST visualization</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ASTViewer;