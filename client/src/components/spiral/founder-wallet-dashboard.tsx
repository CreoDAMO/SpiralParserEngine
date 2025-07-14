// Founder Wallet Dashboard - Management interface for HYBRID blockchain governance

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { founderWallet, VestingPeriod, FounderTransaction, GovernanceProposal } from '@/lib/founder-wallet';
import { useToast } from '@/hooks/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Crown, Shield, Users, Clock, Vote, Coins, AlertTriangle, CheckCircle } from 'lucide-react';

interface FounderWalletDashboardProps {
  className?: string;
}

const FounderWalletDashboard: React.FC<FounderWalletDashboardProps> = ({ className }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [walletState, setWalletState] = useState(founderWallet.getWalletState());
  const [vestingSchedule, setVestingSchedule] = useState<VestingPeriod[]>([]);
  const [pendingTransactions, setPendingTransactions] = useState<FounderTransaction[]>([]);
  const [governanceProposals, setGovernanceProposals] = useState<GovernanceProposal[]>([]);
  const [activeTab, setActiveTab] = useState('overview');

  // Form states
  const [newProposal, setNewProposal] = useState({
    title: '',
    description: '',
    type: 'text_proposal' as const,
    deposit: 10000
  });

  const [newTransaction, setNewTransaction] = useState({
    type: 'distribution' as const,
    amount: 0,
    recipient: '',
    purpose: ''
  });

  useEffect(() => {
    updateDashboardData();
  }, []);

  const updateDashboardData = () => {
    setWalletState(founderWallet.getWalletState());
    setVestingSchedule(founderWallet.getVestingSchedule());
    setPendingTransactions(founderWallet.getPendingTransactions());
    setGovernanceProposals(founderWallet.getGovernanceProposals());
  };

  // Create multisig transaction
  const createTransactionMutation = useMutation({
    mutationFn: async (params: typeof newTransaction) => {
      return founderWallet.createMultiSigTransaction(
        params.type,
        params.amount,
        params.recipient,
        params.purpose
      );
    },
    onSuccess: (transaction) => {
      toast({
        title: "Transaction Created",
        description: `Multi-sig transaction ${transaction.id} created and awaiting signatures`,
      });
      updateDashboardData();
      setNewTransaction({ type: 'distribution', amount: 0, recipient: '', purpose: '' });
    }
  });

  // Create governance proposal
  const createProposalMutation = useMutation({
    mutationFn: async (params: typeof newProposal) => {
      return founderWallet.createGovernanceProposal(
        params.title,
        params.description,
        params.type,
        params.deposit
      );
    },
    onSuccess: (proposal) => {
      toast({
        title: "Proposal Created",
        description: `Governance proposal ${proposal.id} submitted`,
      });
      updateDashboardData();
      setNewProposal({ title: '', description: '', type: 'text_proposal', deposit: 10000 });
    }
  });

  // Sign transaction
  const signTransactionMutation = useMutation({
    mutationFn: async (transactionId: string) => {
      return founderWallet.signTransaction(transactionId, walletState.address);
    },
    onSuccess: (success) => {
      if (success) {
        toast({
          title: "Transaction Signed",
          description: "Your signature has been added to the transaction",
        });
        updateDashboardData();
      }
    }
  });

  // Check vesting eligibility
  const checkVestingMutation = useMutation({
    mutationFn: async () => {
      return founderWallet.checkVestingEligibility();
    },
    onSuccess: (releasableVesting) => {
      if (releasableVesting.length > 0) {
        toast({
          title: "Vesting Available",
          description: `${releasableVesting.length} vesting periods are now releasable`,
        });
        updateDashboardData();
      } else {
        toast({
          title: "No Vesting Due",
          description: "No vesting periods are currently releasable",
        });
      }
    }
  });

  const formatAmount = (amount: number) => {
    return `${(amount / 1_000_000_000).toFixed(2)}B HYBRID`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'passed':
      case 'executed':
      case 'releasable': return 'bg-green-500';
      case 'pending':
      case 'voting_period':
      case 'approved': return 'bg-yellow-500';
      case 'locked':
      case 'deposit_period': return 'bg-blue-500';
      case 'rejected':
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTotalLocked = () => {
    return vestingSchedule
      .filter(v => v.status === 'locked')
      .reduce((sum, v) => sum + v.amount, 0);
  };

  const getTotalReleasable = () => {
    return vestingSchedule
      .filter(v => v.status === 'releasable')
      .reduce((sum, v) => sum + v.amount, 0);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <Card className="bg-gradient-to-r from-purple-900/80 via-indigo-900/60 to-blue-900/80 border border-purple-500/40 shadow-2xl shadow-purple-500/20 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 rounded-t-lg">
          <CardTitle className="text-white flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-lg">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                HYBRID Founder Wallet
              </div>
              <div className="text-xs text-purple-300">Genesis Authority • Multi-Sig Governance</div>
            </div>
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg">
              🛡️ Secured
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border-blue-500/30 p-4">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {formatAmount(walletState.hybridBalance)}
                </div>
                <div className="text-xs text-blue-300 font-medium">Available Balance</div>
                <div className="w-full bg-blue-900/20 rounded-full h-1.5 mt-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border-yellow-500/30 p-4">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {formatAmount(getTotalLocked())}
                </div>
                <div className="text-xs text-yellow-300 font-medium">Locked (Vesting)</div>
                <div className="w-full bg-yellow-900/20 rounded-full h-1.5 mt-2">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-1.5 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-green-500/30 p-4">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {formatAmount(getTotalReleasable())}
                </div>
                <div className="text-xs text-green-300 font-medium">Releasable</div>
                <div className="w-full bg-green-900/20 rounded-full h-1.5 mt-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 rounded-full" style={{width: '25%'}}></div>
                </div>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/30 p-4">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {walletState.governanceVotingPower.toLocaleString()}
                </div>
                <div className="text-xs text-purple-300 font-medium">Voting Power</div>
                <div className="w-full bg-purple-900/20 rounded-full h-1.5 mt-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="vesting">Vesting</TabsTrigger>
          <TabsTrigger value="multisig">Multi-Sig</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
          <TabsTrigger value="emergency">Emergency</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Wallet Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Multi-Sig Threshold</span>
                  <span className="text-white">3 of 5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Emergency Powers</span>
                  <Badge className="bg-green-500">Enabled</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">φ-Resonance</span>
                  <span className="text-quantum-400">{walletState.phiResonance.toFixed(3)} Hz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">SRI Score</span>
                  <span className="text-green-400">{walletState.sriScore.toFixed(3)}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={() => checkVestingMutation.mutate()}
                  disabled={checkVestingMutation.isPending}
                  className="w-full bg-spiral-600 hover:bg-spiral-700"
                >
                  Check Vesting Eligibility
                </Button>
                <Button
                  onClick={() => founderWallet.initializeFounderStaking()}
                  className="w-full"
                  variant="outline"
                >
                  Initialize Founder Staking
                </Button>
                <Button
                  onClick={() => founderWallet.distributeEcosystemTokens()}
                  className="w-full"
                  variant="outline"
                >
                  Distribute Ecosystem Tokens
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64">
                <div className="space-y-2">
                  {pendingTransactions.slice(0, 5).map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-2 bg-gray-800 rounded">
                      <div>
                        <p className="text-sm font-medium text-white">{tx.type.toUpperCase()}</p>
                        <p className="text-xs text-gray-400">{tx.purpose}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-white">{formatAmount(tx.amount)}</p>
                        <Badge className={getStatusColor(tx.status)}>
                          {tx.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vesting" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Vesting Schedule</h3>
            <Button
              onClick={() => checkVestingMutation.mutate()}
              disabled={checkVestingMutation.isPending}
              className="bg-spiral-600 hover:bg-spiral-700"
            >
              Check Eligibility
            </Button>
          </div>

          <div className="space-y-3">
            {vestingSchedule.map((vesting) => (
              <Card key={vesting.id} className="bg-gray-900 border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">
                        {formatAmount(vesting.amount)} - {vesting.purpose}
                      </p>
                      <p className="text-sm text-gray-400">
                        Release Date: {vesting.releaseDate.toLocaleDateString()}
                      </p>
                      {vesting.conditions && (
                        <p className="text-xs text-purple-400">
                          Conditions: {vesting.conditions.join(', ')}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(vesting.status)}>
                        {vesting.status}
                      </Badge>
                      {vesting.status === 'releasable' && (
                        <Button
                          size="sm"
                          className="mt-2 bg-green-600 hover:bg-green-700"
                          onClick={() => createTransactionMutation.mutate({
                            type: 'vesting',
                            amount: vesting.amount,
                            recipient: walletState.address,
                            purpose: `Release ${vesting.purpose} vesting`
                          })}
                        >
                          Release
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="multisig" className="space-y-4">
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Create Multi-Sig Transaction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tx-type">Transaction Type</Label>
                  <select
                    id="tx-type"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                    value={newTransaction.type}
                    onChange={(e) => setNewTransaction(prev => ({ 
                      ...prev, 
                      type: e.target.value as typeof prev.type 
                    }))}
                  >
                    <option value="distribution">Distribution</option>
                    <option value="governance">Governance</option>
                    <option value="emergency">Emergency</option>
                    <option value="burn">Burn</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="tx-amount">Amount (HYBRID)</Label>
                  <Input
                    id="tx-amount"
                    type="number"
                    value={newTransaction.amount || ''}
                    onChange={(e) => setNewTransaction(prev => ({ 
                      ...prev, 
                      amount: parseFloat(e.target.value) || 0 
                    }))}
                    className="bg-gray-800 border-gray-600"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="tx-recipient">Recipient Address</Label>
                <Input
                  id="tx-recipient"
                  value={newTransaction.recipient}
                  onChange={(e) => setNewTransaction(prev => ({ 
                    ...prev, 
                    recipient: e.target.value 
                  }))}
                  className="bg-gray-800 border-gray-600"
                />
              </div>
              <div>
                <Label htmlFor="tx-purpose">Purpose</Label>
                <Textarea
                  id="tx-purpose"
                  value={newTransaction.purpose}
                  onChange={(e) => setNewTransaction(prev => ({ 
                    ...prev, 
                    purpose: e.target.value 
                  }))}
                  className="bg-gray-800 border-gray-600"
                />
              </div>
              <Button
                onClick={() => createTransactionMutation.mutate(newTransaction)}
                disabled={createTransactionMutation.isPending}
                className="w-full bg-spiral-600 hover:bg-spiral-700"
              >
                Create Transaction
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Pending Transactions</h4>
            {pendingTransactions.map((tx) => (
              <Card key={tx.id} className="bg-gray-900 border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">
                        {tx.type.toUpperCase()} - {formatAmount(tx.amount)}
                      </p>
                      <p className="text-sm text-gray-400">{tx.purpose}</p>
                      <p className="text-xs text-purple-400">
                        Signatures: {tx.currentSignatures.length}/{tx.requiredSignatures}
                      </p>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge className={getStatusColor(tx.status)}>
                        {tx.status}
                      </Badge>
                      {tx.status === 'pending' && (
                        <Button
                          size="sm"
                          onClick={() => signTransactionMutation.mutate(tx.id)}
                          disabled={signTransactionMutation.isPending}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Sign
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="governance" className="space-y-4">
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Create Governance Proposal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="prop-title">Title</Label>
                <Input
                  id="prop-title"
                  value={newProposal.title}
                  onChange={(e) => setNewProposal(prev => ({ 
                    ...prev, 
                    title: e.target.value 
                  }))}
                  className="bg-gray-800 border-gray-600"
                />
              </div>
              <div>
                <Label htmlFor="prop-description">Description</Label>
                <Textarea
                  id="prop-description"
                  value={newProposal.description}
                  onChange={(e) => setNewProposal(prev => ({ 
                    ...prev, 
                    description: e.target.value 
                  }))}
                  className="bg-gray-800 border-gray-600"
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="prop-type">Type</Label>
                  <select
                    id="prop-type"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                    value={newProposal.type}
                    onChange={(e) => setNewProposal(prev => ({ 
                      ...prev, 
                      type: e.target.value as typeof prev.type 
                    }))}
                  >
                    <option value="text_proposal">Text Proposal</option>
                    <option value="parameter_change">Parameter Change</option>
                    <option value="software_upgrade">Software Upgrade</option>
                    <option value="community_pool_spend">Community Pool Spend</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="prop-deposit">Deposit (HYBRID)</Label>
                  <Input
                    id="prop-deposit"
                    type="number"
                    value={newProposal.deposit}
                    onChange={(e) => setNewProposal(prev => ({ 
                      ...prev, 
                      deposit: parseInt(e.target.value) || 10000 
                    }))}
                    className="bg-gray-800 border-gray-600"
                  />
                </div>
              </div>
              <Button
                onClick={() => createProposalMutation.mutate(newProposal)}
                disabled={createProposalMutation.isPending}
                className="w-full bg-spiral-600 hover:bg-spiral-700"
              >
                Submit Proposal
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Active Proposals</h4>
            {governanceProposals.map((proposal) => (
              <Card key={proposal.id} className="bg-gray-900 border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-white">{proposal.title}</p>
                      <p className="text-sm text-gray-400">{proposal.description}</p>
                      <div className="flex space-x-4 mt-2 text-xs">
                        <span className="text-green-400">Yes: {proposal.votes.yes}</span>
                        <span className="text-red-400">No: {proposal.votes.no}</span>
                        <span className="text-gray-400">Abstain: {proposal.votes.abstain}</span>
                        <span className="text-yellow-400">NoWithVeto: {proposal.votes.noWithVeto}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(proposal.status)}>
                        {proposal.status}
                      </Badge>
                      <p className="text-xs text-gray-400 mt-1">
                        Turnout: {proposal.turnout.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="emergency" className="space-y-4">
          <Alert className="border-red-500 bg-red-900/20">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-red-300">
              Emergency powers should only be used in critical situations that threaten the network.
            </AlertDescription>
          </Alert>

          <Card className="bg-gray-900 border-red-700">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5" />
                <span>Emergency Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={() => founderWallet.emergencyPause('Manual emergency pause initiated')}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                Emergency Pause Network
              </Button>
              <Button
                onClick={() => createTransactionMutation.mutate({
                  type: 'emergency',
                  amount: 1000000,
                  recipient: 'hybrid1emergency1fund',
                  purpose: 'Emergency fund activation'
                })}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                Activate Emergency Fund
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default FounderWalletDashboard;