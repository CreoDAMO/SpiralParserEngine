import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface ASTViewerProps {
  activeTab: string;
  activeFile: number | null;
}

export default function ASTViewer({ activeTab, activeFile }: ASTViewerProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(["Program"]));

  const { data: parseResult } = useQuery({
    queryKey: ["/api/parse", activeFile],
    enabled: !!activeFile && activeTab === "AST",
    queryFn: async () => {
      // This would normally fetch the parse result
      // For now, return mock data
      return {
        ast: {
          type: "Program",
          body: [
            {
              type: "ImportDeclaration",
              source: "spiral-core",
              entropy: 0.12
            },
            {
              type: "FunctionDeclaration",
              name: "calculatePhiResonance",
              phiResonance: 1.618,
              complexity: 5
            },
            {
              type: "ClassDeclaration",
              name: "SpiralParser",
              methods: ["parseQuantumLogic"],
              tuGenerated: 888
            }
          ]
        },
        entropy: 0.121,
        phiResonance: 1.618,
        tuGenerated: 888,
        parseSuccess: true
      };
    }
  });

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const renderASTNode = (node: any, depth = 0) => {
    const nodeId = `${node.type}-${depth}`;
    const isExpanded = expandedNodes.has(nodeId);
    const hasChildren = node.body || node.methods;

    return (
      <div key={nodeId} className="text-sm font-mono">
        <div 
          className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 px-1 rounded"
          style={{ marginLeft: `${depth * 16}px` }}
          onClick={() => hasChildren && toggleNode(nodeId)}
        >
          {hasChildren ? (
            <svg className={`w-3 h-3 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
                 viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
            </svg>
          ) : (
            <div className="w-3 h-3 flex items-center justify-center">
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            </div>
          )}
          
          <span className={`text-${getNodeColor(node.type)}-300`}>
            {node.type}
          </span>
          
          {node.name && (
            <span className="text-yellow-300">: {node.name}</span>
          )}
          
          {node.entropy && (
            <span className="text-xs text-gray-500">(entropy: {node.entropy})</span>
          )}
          
          {node.phiResonance && (
            <span className="text-xs text-spiral-400">(φ: {node.phiResonance})</span>
          )}
          
          {node.tuGenerated && (
            <span className="text-xs text-green-400">(TU: +{node.tuGenerated})</span>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div>
            {node.body?.map((child: any, index: number) => renderASTNode(child, depth + 1))}
            {node.methods?.map((method: string, index: number) => (
              <div key={index} style={{ marginLeft: `${(depth + 1) * 16}px` }}>
                <div className="flex items-center space-x-2 px-1">
                  <div className="w-3 h-3 flex items-center justify-center">
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  <span className="text-cyan-300">Method: {method}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const getNodeColor = (type: string) => {
    switch (type) {
      case "Program": return "blue";
      case "ImportDeclaration": return "green";
      case "FunctionDeclaration": return "purple";
      case "ClassDeclaration": return "cyan";
      default: return "gray";
    }
  };

  if (activeTab !== "AST") return null;

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">Abstract Syntax Tree</h3>
      
      {parseResult?.ast ? (
        <div className="space-y-1">
          {renderASTNode(parseResult.ast)}
        </div>
      ) : (
        <div className="text-gray-500 text-sm">
          Select a file to view its AST
        </div>
      )}

      {/* Metrics */}
      {parseResult && (
        <div className="mt-6 space-y-3">
          <h4 className="text-sm font-semibold text-gray-300">Parse Metrics</h4>
          
          <div className="bg-gray-700 rounded-lg p-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-gray-400">Entropy</span>
              <span className="text-green-400 font-mono">{parseResult.entropy}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-gray-400">φ-Resonance</span>
              <span className="text-spiral-400 font-mono">{parseResult.phiResonance} Hz</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-gray-400">Trust Score</span>
              <span className="text-blue-400 font-mono">∞</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-gray-400">TU Generated</span>
              <span className="text-yellow-400 font-mono">+{parseResult.tuGenerated} TU</span>
            </div>
          </div>

          {/* Quantum Circuit Preview */}
          <div className="bg-gray-700 rounded-lg p-3">
            <h5 className="text-xs font-semibold text-gray-300 mb-2">Quantum Circuit</h5>
            <div className="bg-gray-800 rounded p-2 font-mono text-xs">
              <div className="space-y-1">
                <div className="flex items-center space-x-1">
                  <span className="text-gray-400">|0⟩─</span>
                  <span className="bg-blue-600 px-1 rounded text-white">H</span>
                  <span className="text-gray-400">─●─</span>
                  <span className="bg-green-600 px-1 rounded text-white">M</span>
                  <span className="text-gray-400">─</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-400">|0⟩─</span>
                  <span className="text-gray-400">───</span>
                  <span className="bg-red-600 px-1 rounded text-white">X</span>
                  <span className="text-gray-400">─</span>
                  <span className="bg-green-600 px-1 rounded text-white">M</span>
                  <span className="text-gray-400">─</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="border-t border-gray-700 pt-4 mt-6 space-y-2">
        <button className="w-full py-2 bg-spiral-600 hover:bg-spiral-700 text-gray-900 rounded font-medium">
          Export AST & Circuit
        </button>
        <button className="w-full py-2 bg-quantum-600 hover:bg-quantum-700 text-white rounded">
          Run Quantum Simulation
        </button>
        <button className="w-full py-2 bg-gray-600 hover:bg-gray-500 text-gray-100 rounded">
          Generate Proof PDF
        </button>
      </div>
    </div>
  );
}
