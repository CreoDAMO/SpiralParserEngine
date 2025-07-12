import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { SpiralFile } from "@shared/schema";

interface FileExplorerProps {
  files: SpiralFile[];
  activeFile: number | null;
  onFileSelect: (fileId: number) => void;
}

export default function FileExplorer({ files, activeFile, onFileSelect }: FileExplorerProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const queryClient = useQueryClient();

  const createFileMutation = useMutation({
    mutationFn: async (fileData: any) => {
      return apiRequest("POST", "/api/files", fileData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/files"] });
      setIsCreating(false);
      setNewFileName("");
    }
  });

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "spiral":
        return <svg className="w-4 h-4 text-spiral-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
        </svg>;
      case "htsx":
        return <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2Z"/>
        </svg>;
      case "pdf":
        return <svg className="w-4 h-4 text-red-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2Z"/>
        </svg>;
      case "json":
        return <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3Z"/>
        </svg>;
      default:
        return <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2Z"/>
        </svg>;
    }
  };

  const createNewFile = () => {
    if (!newFileName.trim()) return;

    const fileType = newFileName.endsWith('.spiral') ? 'spiral' :
                    newFileName.endsWith('.htsx') ? 'htsx' :
                    newFileName.endsWith('.pdf') ? 'pdf' :
                    newFileName.endsWith('.json') ? 'json' : 'spiral';

    createFileMutation.mutate({
      userId: 1,
      name: newFileName,
      content: fileType === 'spiral' ? '// New SpiralScript file\n' : '',
      fileType
    });
  };

  return (
    <div className="p-4 border-b border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-300 flex items-center">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-2l-2-2H8L6 6H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
          </svg>
          Project Explorer
        </h3>
        <button 
          onClick={() => setIsCreating(true)}
          className="text-gray-400 hover:text-white"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </button>
      </div>
      
      <div className="space-y-1 text-sm">
        {files.map(file => (
          <div
            key={file.id}
            onClick={() => onFileSelect(file.id)}
            className={`flex items-center space-x-2 py-1 px-2 rounded cursor-pointer ${
              activeFile === file.id ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            {getFileIcon(file.fileType)}
            <span>{file.name}</span>
          </div>
        ))}
        
        {isCreating && (
          <div className="flex items-center space-x-2 py-1 px-2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2Z"/>
            </svg>
            <input
              type="text"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") createNewFile();
                if (e.key === "Escape") setIsCreating(false);
              }}
              onBlur={() => setIsCreating(false)}
              className="bg-gray-600 text-white text-sm px-1 py-0 border-none outline-none flex-1"
              placeholder="filename.spiral"
              autoFocus
            />
          </div>
        )}
      </div>
    </div>
  );
}
