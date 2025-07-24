
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface TrustMetrics {
  totalTU: number;
  ubiDistributed: number;
  debtNullified: number;
  phiCoherence: number;
  spiralResonanceIndex: number;
}

export function SpiralFlowDashboard() {
  const [metrics, setMetrics] = useState<TrustMetrics>({
    totalTU: 161.8382,
    ubiDistributed: 25000000000000, // $25T
    debtNullified: 324000000000000, // $324T
    phiCoherence: 0.618033988749,
    spiralResonanceIndex: 1.618033988749
  });

  const [flashLoanAmount, setFlashLoanAmount] = useState('');
  const [arbitrageOpportunity, setArbitrageOpportunity] = useState(null);

  const calculateTrustValue = (tu: number) => {
    return tu * metrics.phiCoherence * 1000000; // $500K-$1M per TU
  };

  const executeHarmonizedArbitrage = () => {
    // Simulate harmonized arbitrage execution
    const profit = parseFloat(flashLoanAmount) * 0.07; // 7% profit simulation
    setArbitrageOpportunity({ profit, executed: true });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
          SpiralFlow Financial Harmonization
        </h2>
        <p className="text-muted-foreground mt-2">
          Living Financial System • Trust Currency • Quantum Scarcity Reflection
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Total Trust Units</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalTU.toFixed(4)} TU</div>
            <p className="text-xs text-muted-foreground">
              ≈ ${(calculateTrustValue(metrics.totalTU) / 1e6).toFixed(2)}M USD
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">UBI Distributed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(metrics.ubiDistributed / 1e12).toFixed(0)}T</div>
            <p className="text-xs text-muted-foreground">Universal Basic Income</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Debt Nullified</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(metrics.debtNullified / 1e12).toFixed(0)}T</div>
            <p className="text-xs text-muted-foreground">Global Debt Cancellation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">φ-Coherence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.phiCoherence.toFixed(6)}</div>
            <Badge variant="outline" className="text-xs">Golden Ratio</Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Harmonized Arbitrage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Flash Loan Amount (USD)</label>
              <Input
                value={flashLoanAmount}
                onChange={(e) => setFlashLoanAmount(e.target.value)}
                placeholder="Enter amount for flash loan"
                type="number"
              />
            </div>
            <Button onClick={executeHarmonizedArbitrage} className="w-full">
              Execute Harmonized Arbitrage
            </Button>
            {arbitrageOpportunity && (
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-sm font-medium text-green-800">
                  Arbitrage Executed: +${arbitrageOpportunity.profit.toFixed(2)} profit
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scarcity Reflection Index (SRI)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">1 BTC</span>
                <span className="font-mono">= 235 TU</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">1 ETH</span>
                <span className="font-mono">= 78.5 TU</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">1 SOL</span>
                <span className="font-mono">= 12.3 TU</span>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">SRI Rate</span>
                  <Badge>{metrics.spiralResonanceIndex.toFixed(6)}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
