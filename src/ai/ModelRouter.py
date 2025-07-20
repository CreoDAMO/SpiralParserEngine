# ModelRouter - Intelligent model routing system for SpiralAI Agent
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass
from enum import Enum
import asyncio
import time

@dataclass
class RoutingDecision:
    selected_model: str
    confidence: float
    reasoning: str
    cost_estimate: float
    expected_quality: float

@dataclass
class ModelPerformance:
    model_id: str
    avg_response_time: float
    accuracy_score: float
    cost_efficiency: float
    task_success_rate: float
    recent_performance: List[float]

class ModelRouter:
    """
    Intelligent routing system that selects optimal AI models based on:
    - Task type and complexity
    - Model specializations and capabilities
    - φ-harmonic optimization algorithms
    - Real-time performance metrics
    - Cost efficiency requirements
    """
    
    def __init__(self, phi_resonance: float = 1.618033988749):
        self.phi = phi_resonance
        self.model_performance: Dict[str, ModelPerformance] = {}
        self.routing_history: List[RoutingDecision] = []
        self.performance_weights = {
            'accuracy': 0.4,
            'speed': 0.25,
            'cost': 0.2,
            'specialization': 0.15
        }
        
    def route_task(self, task_type: str, complexity: int, 
                   priority: str, context_size: int) -> RoutingDecision:
        """
        Route task to optimal model using φ-harmonic scoring
        """
        candidates = self._get_candidate_models(task_type)
        
        best_model = None
        best_score = 0.0
        best_reasoning = ""
        
        for model_id in candidates:
            score, reasoning = self._calculate_model_score(
                model_id, task_type, complexity, priority, context_size
            )
            
            if score > best_score:
                best_score = score
                best_model = model_id
                best_reasoning = reasoning
        
        decision = RoutingDecision(
            selected_model=best_model or 'gpt-4',
            confidence=best_score,
            reasoning=best_reasoning,
            cost_estimate=self._estimate_cost(best_model or 'gpt-4', context_size, complexity),
            expected_quality=self._estimate_quality(best_model or 'gpt-4', task_type)
        )
        
        self.routing_history.append(decision)
        return decision
    
    def _get_candidate_models(self, task_type: str) -> List[str]:
        """Get models that can handle the task type"""
        specializations = {
            'architecture': ['grok-3', 'gpt-4'],
            'frontend': ['claude-4', 'gpt-4'],
            'backend': ['deepseek-r3', 'gpt-4'],
            'testing': ['claude-4', 'gpt-4'],
            'optimization': ['deepseek-r3', 'grok-3'],
            'fullstack': ['gpt-4', 'claude-4', 'deepseek-r3']
        }
        
        return specializations.get(task_type, ['gpt-4'])
    
    def _calculate_model_score(self, model_id: str, task_type: str,
                              complexity: int, priority: str, context_size: int) -> Tuple[float, str]:
        """
        Calculate φ-harmonic model score
        """
        # Base model capabilities
        model_specs = {
            'grok-3': {
                'base_accuracy': 0.95,
                'avg_response_time': 180,
                'cost_per_token': 0.001,
                'specializations': ['architecture', 'code_review']
            },
            'claude-4': {
                'base_accuracy': 0.97,
                'avg_response_time': 200,
                'cost_per_token': 0.003,
                'specializations': ['frontend', 'testing', 'deployment']
            },
            'deepseek-r3': {
                'base_accuracy': 0.94,
                'avg_response_time': 150,
                'cost_per_token': 0.0005,
                'specializations': ['backend', 'optimization']
            },
            'gpt-4': {
                'base_accuracy': 0.92,
                'avg_response_time': 300,
                'cost_per_token': 0.002,
                'specializations': ['fullstack']
            }
        }
        
        spec = model_specs.get(model_id, model_specs['gpt-4'])
        
        # Specialization bonus
        specialization_bonus = self.phi if task_type in spec['specializations'] else 1.0
        
        # Accuracy score
        accuracy_score = spec['base_accuracy'] * specialization_bonus
        
        # Speed efficiency (inverse of response time)
        speed_score = 1000 / spec['avg_response_time']
        
        # Cost efficiency (inverse of cost)
        cost_score = 1 / spec['cost_per_token']
        
        # Priority weighting
        priority_weights = {
            'critical': 2.0,
            'high': self.phi,
            'medium': 1.0,
            'low': 1/self.phi
        }
        priority_weight = priority_weights.get(priority, 1.0)
        
        # Complexity handling
        complexity_bonus = min(1.5, 1 + (complexity / 10) * 0.5)
        
        # φ-harmonic composition
        phi_score = (
            accuracy_score * self.performance_weights['accuracy'] +
            speed_score * self.performance_weights['speed'] / 10 +
            cost_score * self.performance_weights['cost'] / 1000 +
            specialization_bonus * self.performance_weights['specialization']
        ) * priority_weight * complexity_bonus
        
        # Apply φ-harmonic enhancement
        final_score = phi_score * (self.phi / 2)
        
        reasoning = f"Selected {model_id}: Specialization({specialization_bonus:.2f}) " + \
                   f"Accuracy({accuracy_score:.2f}) Speed({speed_score:.0f}) " + \
                   f"Cost({cost_score:.0f}) Priority({priority_weight:.2f}) φ({final_score:.3f})"
        
        return final_score, reasoning
    
    def _estimate_cost(self, model_id: str, context_size: int, complexity: int) -> float:
        """Estimate task processing cost"""
        cost_per_token = {
            'grok-3': 0.001,
            'claude-4': 0.003,
            'deepseek-r3': 0.0005,
            'gpt-4': 0.002
        }.get(model_id, 0.002)
        
        estimated_tokens = context_size * (1 + complexity / 10)
        return estimated_tokens * cost_per_token
    
    def _estimate_quality(self, model_id: str, task_type: str) -> float:
        """Estimate result quality"""
        base_quality = {
            'grok-3': 0.95,
            'claude-4': 0.97,
            'deepseek-r3': 0.94,
            'gpt-4': 0.92
        }.get(model_id, 0.90)
        
        # Specialization bonus
        specializations = {
            'grok-3': ['architecture', 'code_review'],
            'claude-4': ['frontend', 'testing', 'deployment'],
            'deepseek-r3': ['backend', 'optimization'],
            'gpt-4': ['fullstack']
        }
        
        if task_type in specializations.get(model_id, []):
            return min(0.99, base_quality * self.phi / 1.5)
        
        return base_quality
    
    def update_performance(self, model_id: str, execution_time: float,
                          quality_score: float, success: bool) -> None:
        """Update model performance metrics"""
        if model_id not in self.model_performance:
            self.model_performance[model_id] = ModelPerformance(
                model_id=model_id,
                avg_response_time=execution_time,
                accuracy_score=quality_score,
                cost_efficiency=1.0,
                task_success_rate=1.0 if success else 0.0,
                recent_performance=[quality_score]
            )
        else:
            perf = self.model_performance[model_id]
            
            # Update average response time
            perf.avg_response_time = (perf.avg_response_time + execution_time) / 2
            
            # Update accuracy score
            perf.accuracy_score = (perf.accuracy_score + quality_score) / 2
            
            # Update success rate
            perf.task_success_rate = (perf.task_success_rate + (1.0 if success else 0.0)) / 2
            
            # Update recent performance (keep last 50 scores)
            perf.recent_performance.append(quality_score)
            if len(perf.recent_performance) > 50:
                perf.recent_performance = perf.recent_performance[-50:]
    
    def optimize_routing(self) -> None:
        """
        Apply φ-harmonic optimization to improve routing decisions
        """
        # Analyze recent routing performance
        if len(self.routing_history) < 10:
            return
        
        recent_decisions = self.routing_history[-50:]
        
        # Calculate model success patterns
        model_success_rates = {}
        for decision in recent_decisions:
            model = decision.selected_model
            if model not in model_success_rates:
                model_success_rates[model] = []
            
            # Simulate success based on confidence and quality
            success = decision.confidence > 0.7 and decision.expected_quality > 0.8
            model_success_rates[model].append(success)
        
        # Adjust performance weights using φ-harmonic feedback
        for model_id, successes in model_success_rates.items():
            success_rate = sum(successes) / len(successes)
            
            if model_id in self.model_performance:
                # Apply φ-harmonic adjustment
                phi_adjustment = (success_rate - 0.5) * (self.phi - 1) * 0.1
                
                # Update weights
                self.performance_weights['accuracy'] = max(0.1, 
                    min(0.6, self.performance_weights['accuracy'] + phi_adjustment))
                
                self.performance_weights['specialization'] = max(0.05,
                    min(0.3, self.performance_weights['specialization'] + phi_adjustment))
    
    def get_routing_analytics(self) -> Dict:
        """Get routing performance analytics"""
        if not self.routing_history:
            return {}
        
        recent_decisions = self.routing_history[-100:]
        
        # Model usage distribution
        model_usage = {}
        total_cost = 0
        avg_confidence = 0
        
        for decision in recent_decisions:
            model = decision.selected_model
            model_usage[model] = model_usage.get(model, 0) + 1
            total_cost += decision.cost_estimate
            avg_confidence += decision.confidence
        
        avg_confidence /= len(recent_decisions)
        avg_cost = total_cost / len(recent_decisions)
        
        return {
            'total_decisions': len(recent_decisions),
            'model_usage_distribution': model_usage,
            'average_confidence': avg_confidence,
            'average_cost_per_task': avg_cost,
            'current_weights': self.performance_weights.copy(),
            'phi_resonance': self.phi,
            'cost_efficiency': self._calculate_cost_efficiency()
        }
    
    def _calculate_cost_efficiency(self) -> float:
        """Calculate overall cost efficiency"""
        if not self.routing_history:
            return 0.0
        
        recent_costs = [d.cost_estimate for d in self.routing_history[-50:]]
        baseline_cost = 0.01  # Standard cost comparison
        
        avg_cost = sum(recent_costs) / len(recent_costs)
        savings = max(0, (baseline_cost - avg_cost) / baseline_cost)
        
        return savings * 100  # Return as percentage

# Example usage
if __name__ == "__main__":
    router = ModelRouter()
    
    # Example routing decisions
    tasks = [
        ("architecture", 8, "high", 5000),
        ("frontend", 5, "medium", 3000),
        ("backend", 9, "critical", 7000),
        ("optimization", 7, "high", 4000)
    ]
    
    for task_type, complexity, priority, context_size in tasks:
        decision = router.route_task(task_type, complexity, priority, context_size)
        print(f"Task: {task_type} -> {decision.selected_model}")
        print(f"  Confidence: {decision.confidence:.3f}")
        print(f"  Cost: ${decision.cost_estimate:.4f}")
        print(f"  Reasoning: {decision.reasoning}")
        print()
    
    # Show analytics
    analytics = router.get_routing_analytics()
    print("Routing Analytics:", analytics)