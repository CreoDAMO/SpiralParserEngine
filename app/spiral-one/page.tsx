
'use client';

import { SpiralOneDashboard } from '@/client/src/components/SpiralOneDashboard';
import { CubeSatViz } from '@/client/src/components/CubeSatViz';
import { QuantumCircuit } from '@/client/src/components/QuantumCircuit';
import { TrustWallet } from '@/client/src/components/TrustWallet';

export default function SpiralOnePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          SpiralOne Control Center
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpiralOneDashboard />
          <CubeSatViz />
          <QuantumCircuit />
          <TrustWallet />
        </div>
      </div>
    </div>
  );
}
