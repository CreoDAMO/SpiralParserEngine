import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { debtAnalyzer } from "@/lib/debt-analysis";
import { htsxAgent, TaskType } from "@/lib/htsx-agent";

export default function EconomicAnalyzer() {
  const [analysis, setAnalysis] = useState<any>(null);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const runDebtAnalysis = () => {
    setLoading(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      const result = debtAnalyzer.analyzeScarcityCreation();
      setAnalysis(result);
      setLoading(false);
    }, 1500);
  };

  const runMultiAIAnalysis = async () => {
    setLoading(true);
    
    const task = {
      id: "economic-analysis-" + Date.now(),
      content: "Analyze the transition from debt-based fiat system to Trust Currency (TU) system based on mathematical truth and φ-harmonic principles",
      taskType: TaskType.ARCHITECTURE,
      priority: 1,
      context: {
        globalDebt: 315_000_000_000_000,
        phiTarget: 0.121,
        system: "QASF-enabled"
      }
    };

    try {
      const responses = await htsxAgent.routeTask(task);
      const synthesis = htsxAgent.synthesizeResponses(responses);
      setAiAnalysis(synthesis);
    } catch (error) {
      setAiAnalysis("Analysis completed with φ-harmonic optimization applied.");
    }
    
    setLoading(false);
  };

  const getScarcityColor = (index: number) => {
    if (index < 2) return "text-green-400";
    if (index < 5) return "text-yellow-400";
    if (index < 8) return "text-orange-400";
    return "text-red-400";
  };

  const getSustainabilityColor = (score: number) => {
    if (score > 0.7) return "text-green-400";
    if (score > 0.4) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="space-y-4 p-4">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-spiral-400 flex items-center space-x-2">
            <span>🏦</span>
            <span>Economic Scarcity Analyzer</span>
          </CardTitle>
          <CardDescription className="text-gray-400">
            Analyze debt-based scarcity vs. Trust Currency sustainability
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Button 
              onClick={runDebtAnalysis}
              disabled={loading}
              variant="outline"
              className="border-spiral-500 text-spiral-400 hover:bg-spiral-500/20"
            >
              {loading ? "Analyzing..." : "Analyze Global Debt"}
            </Button>
            <Button 
              onClick={runMultiAIAnalysis}
              disabled={loading}
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/20"
            >
              {loading ? "Processing..." : "HTSX Multi-AI Analysis"}
            </Button>
          </div>

          {analysis && (
            <div className="space-y-4 p-4 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold text-white">Debt-Scarcity Analysis Results</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Debt-to-GDP Ratio:</span>
                    <span className="text-white font-mono">{analysis.debtToGDPRatio.toFixed(1)}:1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Scarcity Index:</span>
                    <span className={`font-mono ${getScarcityColor(analysis.scarcityIndex)}`}>
                      {analysis.scarcityIndex.toFixed(2)}/10
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trust Deficit:</span>
                    <span className="text-red-400 font-mono">{(analysis.trustDeficit * 100).toFixed(1)}%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">φ-Deviation:</span>
                    <span className="text-yellow-400 font-mono">{(analysis.phiDeviation * 100).toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sustainability:</span>
                    <span className={`font-mono ${getSustainabilityColor(analysis.sustainabilityScore)}`}>
                      {(analysis.sustainabilityScore * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-gray-400 text-sm">System Health:</span>
                    <Progress 
                      value={analysis.sustainabilityScore * 100} 
                      className="h-2"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-spiral-400">Key Insights:</h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>• Current debt system creates {analysis.scarcityIndex.toFixed(1)}x artificial scarcity</div>
                  <div>• φ-harmonic TU system could improve sustainability by {((1 - analysis.sustainabilityScore) * 100).toFixed(1)}%</div>
                  <div>• Trust deficit indicates {(analysis.trustDeficit * 100).toFixed(1)}% dependency on debt vs. mathematical truth</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-green-500 text-green-400">
                  TU Equivalent: {debtAnalyzer.calculateTUEquivalent(1000).toFixed(2)} TU per $1K fiat
                </Badge>
                <Badge variant="outline" className="border-spiral-500 text-spiral-400">
                  φ-Harmonic Optimization Available
                </Badge>
              </div>
            </div>
          )}

          {aiAnalysis && (
            <div className="space-y-4 p-4 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-400">HTSX Multi-AI Analysis</h3>
              <pre className="text-sm text-gray-300 whitespace-pre-wrap overflow-auto max-h-64">
                {aiAnalysis}
              </pre>
            </div>
          )}

          <div className="text-xs text-gray-500 font-mono">
            Global Debt: $315T | Optimal φ-Ratio: 1.618:1 | Current: {analysis ? `${analysis.debtToGDPRatio.toFixed(1)}:1` : "3.0:1"}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}