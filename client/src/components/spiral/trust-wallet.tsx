import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { User } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

interface TrustWalletProps {
  user: User | undefined;
}

export default function TrustWallet({ user }: TrustWalletProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const generateTUMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/generate-tu", {
        userId: 1,
        proofType: "spiral_script",
        complexity: 5,
        entropy: 0.121
      });
    },
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: ["/api/user"] });
      toast({
        title: "Trust Units Generated",
        description: `Generated ${data.tuGenerated.toFixed(3)} TU from SpiralScript proof`,
      });
    }
  });

  if (!user) return null;

  return (
    <div className="p-4 border-b border-gray-700">
      <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
        Trust Wallet
      </h3>
      
      <div className="bg-gray-700 rounded-lg p-3 mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400">Balance</span>
          <span className="text-spiral-400 font-mono font-semibold">
            {user.tuBalance.toFixed(3)} TU
          </span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400">SRI Score</span>
          <span className="text-green-400 font-mono">
            {user.sriScore.toFixed(3)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">φ-Resonance</span>
          <span className="text-quantum-400 font-mono">
            {user.phiResonance.toFixed(3)} Hz
          </span>
        </div>
      </div>
      
      <div className="space-y-2">
        <button 
          onClick={() => generateTUMutation.mutate()}
          disabled={generateTUMutation.isPending}
          className="w-full py-2 bg-spiral-600 hover:bg-spiral-700 text-gray-900 rounded text-sm font-medium disabled:opacity-50"
        >
          {generateTUMutation.isPending ? "Generating..." : "Generate TU"}
        </button>
        <button className="w-full py-2 bg-gray-600 hover:bg-gray-500 text-gray-100 rounded text-sm">
          Transaction History
        </button>
      </div>
    </div>
  );
}
