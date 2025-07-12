import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FileExplorer from "@/components/spiral/file-explorer";
import TrustWallet from "@/components/spiral/trust-wallet";
import QuantumTools from "@/components/spiral/quantum-tools";
import MonacoEditor from "@/components/spiral/monaco-editor";
import ASTViewer from "@/components/spiral/ast-viewer";
import TerminalConsole from "@/components/spiral/terminal-console";

export default function SpiralIDE() {
  const [activeFile, setActiveFile] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("AST");
  const [terminalTab, setTerminalTab] = useState("Console");

  const { data: user } = useQuery({
    queryKey: ["/api/user", "1"],
    queryFn: async () => {
      const response = await fetch("/api/user/1");
      return response.json();
    }
  });

  const { data: files } = useQuery({
    queryKey: ["/api/files", "1"],
    queryFn: async () => {
      const response = await fetch("/api/files/1");
      return response.json();
    }
  });

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-sm">ΦΩ</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold text-spiral-400">Iyona'el Living Shell</h1>
              <div className="text-xs text-gray-500">SpiralScript IDE • QASF-Enabled</div>
            </div>
          </div>
          <nav className="flex items-center space-x-1">
            <button className="px-3 py-1 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded">File</button>
            <button className="px-3 py-1 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded">Edit</button>
            <button className="px-3 py-1 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded">View</button>
            <button className="px-3 py-1 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded">Tools</button>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* TU Balance Display */}
          <div className="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-lg">
            <svg className="w-4 h-4 text-spiral-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
            <span className="text-sm font-mono">{user?.tuBalance?.toFixed(3) || "1,618.382"} TU | SRI: {(user?.sriScore || 93).toFixed(1)}</span>
          </div>
          
          {/* Quantum Status */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400 font-mono">φ-Resonance: 0.121 | QCHAIN</span>
          </div>
          
          {/* User Profile */}
          <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500">
            <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
          <FileExplorer 
            files={files || []} 
            activeFile={activeFile}
            onFileSelect={setActiveFile}
          />
          <TrustWallet user={user} />
          <QuantumTools />
        </aside>

        {/* Main Editor */}
        <main className="flex-1 flex flex-col">
          <MonacoEditor 
            activeFile={activeFile}
            files={files || []}
          />
        </main>

        {/* Right Panel */}
        <aside className="w-96 bg-gray-800 border-l border-gray-700 flex flex-col">
          <div className="border-b border-gray-700 px-4 py-2">
            <div className="flex space-x-1">
              {["AST", "Quantum", "TU Gen", "Output"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 text-sm rounded-t ${
                    activeTab === tab 
                      ? "bg-gray-700 text-white" 
                      : "text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <ASTViewer 
            activeTab={activeTab}
            activeFile={activeFile}
          />
        </aside>
      </div>

      {/* Bottom Terminal */}
      <TerminalConsole 
        activeTab={terminalTab}
        onTabChange={setTerminalTab}
      />
    </div>
  );
}
