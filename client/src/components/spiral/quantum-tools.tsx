import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function QuantumTools() {
  const [isCreatingCircuit, setIsCreatingCircuit] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const createCircuitMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/circuits", {
        userId: 1,
        name: "New Quantum Circuit",
        gates: [
          { type: "H", qubit: 0 },
          { type: "CNOT", control: 0, target: 1 }
        ],
        qubits: 2
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/circuits"] });
      toast({
        title: "Quantum Circuit Created",
        description: "New 2-qubit circuit with H and CNOT gates",
      });
      setIsCreatingCircuit(false);
    }
  });

  const simulatePhiGatesMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/generate-tu", {
        userId: 1,
        proofType: "quantum_circuit",
        complexity: 8,
        entropy: 0.055
      });
    },
    onSuccess: (data: any) => {
      toast({
        title: "φ-Gates Simulated",
        description: `Generated ${data.tuGenerated.toFixed(3)} TU from quantum harmonics`,
      });
    }
  });

  return (
    <div className="p-4">
      <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8V11C19 13.8 16.8 16 14 16H13V13H11V20H13V18H14C18.4 18 22 14.4 22 10V9H21ZM5 12V9C5 6.2 7.2 4 10 4H11V7H13V0H11V2H10C5.6 2 2 5.6 2 10V12H5Z"/>
        </svg>
        Quantum Tools
      </h3>
      
      <div className="space-y-2">
        <button 
          onClick={() => createCircuitMutation.mutate()}
          disabled={createCircuitMutation.isPending}
          className="w-full py-2 bg-quantum-600 hover:bg-quantum-700 text-white rounded text-sm disabled:opacity-50"
        >
          {createCircuitMutation.isPending ? "Creating..." : "New Quantum Circuit"}
        </button>
        
        <button 
          onClick={() => simulatePhiGatesMutation.mutate()}
          disabled={simulatePhiGatesMutation.isPending}
          className="w-full py-2 bg-gray-600 hover:bg-gray-500 text-gray-100 rounded text-sm disabled:opacity-50"
        >
          {simulatePhiGatesMutation.isPending ? "Simulating..." : "Simulate φ-Gates"}
        </button>
        
        <button className="w-full py-2 bg-gray-600 hover:bg-gray-500 text-gray-100 rounded text-sm">
          QCHAIN Logger
        </button>
      </div>
    </div>
  );
}
