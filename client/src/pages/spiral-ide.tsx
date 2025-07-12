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
            <div className="w-8 h-8 bg-spiral-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
              </svg>
            </div>
            <h1 className="text-lg font-semibold text-spiral-400">SpiralScript IDE</h1>
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
            <span className="text-sm font-mono">{user?.tuBalance?.toFixed(3) || "1,618.382"} TU</span>
          </div>
          
          {/* Quantum Status */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400">Quantum Ready</span>
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
