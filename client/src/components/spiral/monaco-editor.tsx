import { useState, useRef, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { SpiralFile } from "@shared/schema";

interface MonacoEditorProps {
  activeFile: number | null;
  files: SpiralFile[];
}

export default function MonacoEditor({ activeFile, files }: MonacoEditorProps) {
  const [openTabs, setOpenTabs] = useState<number[]>([]);
  const [currentTab, setCurrentTab] = useState<number | null>(null);
  const [editorContent, setEditorContent] = useState<string>("");
  const editorRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  const { data: fileContent } = useQuery({
    queryKey: ["/api/files/content", activeFile],
    enabled: !!activeFile,
    queryFn: async () => {
      const response = await fetch(`/api/files/content/${activeFile}`);
      return response.json();
    }
  });

  const updateFileMutation = useMutation({
    mutationFn: async ({ id, content }: { id: number; content: string }) => {
      return apiRequest("PUT", `/api/files/${id}`, { content });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/files"] });
    }
  });

  const parseMutation = useMutation({
    mutationFn: async ({ fileId, code }: { fileId: number; code: string }) => {
      return apiRequest("POST", "/api/parse", { fileId, code });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/parse"] });
    }
  });

  useEffect(() => {
    if (activeFile && !openTabs.includes(activeFile)) {
      setOpenTabs(prev => [...prev, activeFile]);
      setCurrentTab(activeFile);
    } else if (activeFile) {
      setCurrentTab(activeFile);
    }
  }, [activeFile]);

  useEffect(() => {
    if (fileContent) {
      setEditorContent(fileContent.content);
    }
  }, [fileContent]);

  const closeTab = (fileId: number) => {
    setOpenTabs(prev => prev.filter(id => id !== fileId));
    if (currentTab === fileId) {
      const remainingTabs = openTabs.filter(id => id !== fileId);
      setCurrentTab(remainingTabs.length > 0 ? remainingTabs[0] : null);
    }
  };

  const handleContentChange = (content: string) => {
    setEditorContent(content);
    
    // Auto-save after 2 seconds of inactivity
    if (currentTab) {
      setTimeout(() => {
        updateFileMutation.mutate({ id: currentTab, content });
        parseMutation.mutate({ fileId: currentTab, code: content });
      }, 2000);
    }
  };

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "spiral":
        return <svg className="w-3 h-3 text-spiral-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
        </svg>;
      case "htsx":
        return <svg className="w-3 h-3 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2Z"/>
        </svg>;
      default:
        return <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2Z"/>
        </svg>;
    }
  };

  const currentFile = files.find(f => f.id === currentTab);

  return (
    <>
      {/* Editor Tabs */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-2">
        <div className="flex items-center space-x-1">
          {openTabs.map(fileId => {
            const file = files.find(f => f.id === fileId);
            if (!file) return null;
            
            return (
              <div
                key={fileId}
                className={`flex items-center space-x-2 px-3 py-1 rounded-t-lg cursor-pointer ${
                  currentTab === fileId 
                    ? "bg-gray-700 border-b-2 border-spiral-500" 
                    : "bg-gray-600 hover:bg-gray-700"
                }`}
                onClick={() => setCurrentTab(fileId)}
              >
                {getFileIcon(file.fileType)}
                <span className="text-sm">{file.name}</span>
                <button 
                  className="text-gray-400 hover:text-white ml-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab(fileId);
                  }}
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
            );
          })}
          <button className="p-1 text-gray-400 hover:text-white">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="flex-1 relative">
        {/* Line Numbers */}
        <div className="absolute left-0 top-0 w-12 h-full bg-gray-800 border-r border-gray-700 text-right pr-2 py-4 text-xs text-gray-500 font-mono z-10">
          {editorContent.split('\n').map((_, index) => (
            <div key={index} className="leading-6">
              {index + 1}
            </div>
          ))}
        </div>
        
        {/* Monaco Editor Placeholder */}
        <div className="ml-12 h-full">
          <textarea
            ref={editorRef}
            value={editorContent}
            onChange={(e) => handleContentChange(e.target.value)}
            className="w-full h-full p-4 bg-gray-900 text-gray-100 font-mono text-sm leading-6 resize-none border-none outline-none"
            style={{ 
              fontFamily: 'JetBrains Mono, Fira Code, Monaco, Consolas, monospace',
              lineHeight: '1.5'
            }}
            placeholder={currentFile ? `Editing ${currentFile.name}...` : "Select a file to edit"}
          />
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-800 border-t border-gray-700 px-4 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">SpiralScript</span>
          <span className="text-gray-400">UTF-8</span>
          <span className="text-gray-400">LF</span>
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${
              parseMutation.isPending ? "bg-yellow-400" : 
              parseMutation.isError ? "bg-red-400" : "bg-green-400"
            }`}></div>
            <span className={
              parseMutation.isPending ? "text-yellow-400" : 
              parseMutation.isError ? "text-red-400" : "text-green-400"
            }>
              {parseMutation.isPending ? "Parsing..." : 
               parseMutation.isError ? "Parse Error" : "Parsed Successfully"}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">Line 7, Col 23</span>
          <span className="text-gray-400">Spaces: 4</span>
          <span className="text-spiral-400">φ-Resonance: 0.618</span>
        </div>
      </div>
    </>
  );
}
