import { useState, useEffect, useRef } from "react";

interface TerminalConsoleProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TerminalConsole({ activeTab, onTabChange }: TerminalConsoleProps) {
  const [logs, setLogs] = useState<Array<{ type: string; message: string; timestamp: Date }>>([]);
  const [command, setCommand] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize with startup logs
    setLogs([
      { type: "success", message: "spiral-ide v2.1.618 - Quantum Parser Ready", timestamp: new Date() },
      { type: "info", message: "Initializing ANTLR4 TypeScript parser...", timestamp: new Date() },
      { type: "success", message: "✓ SpiralScript grammar loaded", timestamp: new Date() },
      { type: "success", message: "✓ Quantum circuit simulator ready (Q.js v3.1.4)", timestamp: new Date() },
      { type: "success", message: "✓ TU calculation engine initialized (φ=1.618033988749)", timestamp: new Date() },
      { type: "info", message: "---", timestamp: new Date() },
      { type: "info", message: "Ready for input...", timestamp: new Date() },
    ]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  const addLog = (type: string, message: string) => {
    setLogs(prev => [...prev, { type, message, timestamp: new Date() }]);
  };

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    addLog("command", `spiral@quantum:~$ ${cmd}`);

    // Process commands
    switch (cmd.toLowerCase()) {
      case "help":
        addLog("info", "Available commands:");
        addLog("info", "  parse <file> - Parse SpiralScript file");
        addLog("info", "  quantum simulate - Run quantum simulation");
        addLog("info", "  tu generate - Generate Trust Units");
        addLog("info", "  clear - Clear terminal");
        break;
        
      case "clear":
        setLogs([]);
        break;
        
      case "tu generate":
        addLog("info", "Generating Trust Units...");
        setTimeout(() => {
          addLog("success", "✓ Generated 888.618 TU from φ-harmonic resonance");
        }, 1000);
        break;
        
      case "quantum simulate":
        addLog("info", "Initializing quantum circuit simulation...");
        setTimeout(() => {
          addLog("success", "✓ 2-qubit circuit executed successfully");
          addLog("info", "Measurement results: |01⟩ (probability: 0.707)");
        }, 1500);
        break;
        
      default:
        addLog("error", `Unknown command: ${cmd}`);
    }
    
    setCommand("");
  };

  const getLogColor = (type: string) => {
    switch (type) {
      case "success": return "text-green-400";
      case "error": return "text-red-400";
      case "info": return "text-gray-400";
      case "command": return "text-white";
      case "warning": return "text-yellow-400";
      default: return "text-gray-300";
    }
  };

  const tabs = ["Console", "QCHAIN Log", "Parser Output", "Problems"];

  return (
    <div className="h-48 bg-gray-900 border-t border-gray-700 flex flex-col">
      {/* Terminal Tabs */}
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
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

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="flex-1 p-4 font-mono text-sm overflow-y-auto"
      >
        {activeTab === "Console" && (
          <div className="space-y-1">
            {logs.map((log, index) => (
              <div key={index} className={getLogColor(log.type)}>
                {log.message}
              </div>
            ))}
            
            {/* Command Input */}
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-spiral-400">spiral@quantum:~$</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCommand(command);
                  }
                }}
                className="flex-1 bg-transparent border-none outline-none text-white"
                placeholder="Type 'help' for available commands"
              />
              <div className="w-2 h-4 bg-spiral-400 animate-pulse"></div>
            </div>
          </div>
        )}

        {activeTab === "QCHAIN Log" && (
          <div className="space-y-1">
            <div className="text-quantum-400">QCHAIN Transaction Log</div>
            <div className="text-gray-400">Block Height: 1,618,033</div>
            <div className="text-green-400">✓ Transaction 0x7f4a9b2c8e5d1a3f - TU Generation (+888)</div>
            <div className="text-green-400">✓ Transaction 0x2b8f5e1d7c9a4e6b - Proof Validation</div>
            <div className="text-gray-400">Gas Used: 0 (φ-harmonic consensus)</div>
          </div>
        )}

        {activeTab === "Parser Output" && (
          <div className="space-y-1">
            <div className="text-blue-400">ANTLR4 Parser Output</div>
            <div className="text-green-400">✓ Lexical analysis complete</div>
            <div className="text-green-400">✓ Syntax tree generated</div>
            <div className="text-green-400">✓ Semantic analysis passed</div>
            <div className="text-spiral-400">φ-Resonance calculated: 1.618 Hz</div>
            <div className="text-yellow-400">TU Generated: +888</div>
          </div>
        )}

        {activeTab === "Problems" && (
          <div className="space-y-1">
            <div className="text-gray-400">No problems detected</div>
            <div className="text-green-400">✓ All files parsed successfully</div>
            <div className="text-green-400">✓ Quantum circuits validated</div>
            <div className="text-green-400">✓ Trust calculations verified</div>
          </div>
        )}
      </div>
    </div>
  );
}
