# TaskOptimizer - Task optimization and performance monitoring for SpiralAI
import asyncio
import time
from typing import Dict, List, Optional, Any
from dataclasses import dataclass, field
from enum import Enum
import json

@dataclass
class OptimizationMetrics:
    response_time: float
    cost_efficiency: float
    quality_score: float
    resource_utilization: float
    phi_resonance: float

@dataclass
class TaskOptimization:
    task_id: str
    original_complexity: int
    optimized_complexity: int
    optimization_strategy: str
    performance_gain: float
    cost_reduction: float
    quality_improvement: float

class OptimizationStrategy(Enum):
    PHI_HARMONIC = "phi_harmonic"
    PARALLEL_PROCESSING = "parallel_processing"
    CONTEXT_REDUCTION = "context_reduction"
    MODEL_SPECIALIZATION = "model_specialization"
    CACHING = "caching"

class TaskOptimizer:
    """
    Advanced task optimization system for SpiralAI that:
    - Optimizes task execution using φ-harmonic algorithms
    - Monitors performance metrics in real-time
    - Applies intelligent caching and batching
    - Reduces costs through optimization strategies
    - Maintains quality while improving efficiency
    """
    
    def __init__(self, phi_resonance: float = 1.618033988749):
        self.phi = phi_resonance
        self.optimization_history: List[TaskOptimization] = []
        self.performance_cache: Dict[str, Any] = {}
        self.metrics_history: List[OptimizationMetrics] = []
        self.active_optimizations: Dict[str, OptimizationStrategy] = {}
        
        # Performance targets
        self.targets = {
            'response_time': 250,  # ms
            'cost_reduction': 85,  # %
            'quality_threshold': 0.90,
            'uptime': 99.9  # %
        }
        
    async def optimize_task(self, task_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Optimize a task before execution using φ-harmonic algorithms
        """
        start_time = time.time()
        task_id = task_data.get('id', f"task_{int(time.time())}")
        
        # Analyze task characteristics
        complexity = self._analyze_complexity(task_data)
        optimization_potential = self._assess_optimization_potential(task_data)
        
        # Select optimization strategy
        strategy = self._select_optimization_strategy(task_data, complexity)
        
        # Apply optimizations
        optimized_task = await self._apply_optimization(task_data, strategy)
        
        # Calculate optimization metrics
        optimization = TaskOptimization(
            task_id=task_id,
            original_complexity=complexity,
            optimized_complexity=self._analyze_complexity(optimized_task),
            optimization_strategy=strategy.value,
            performance_gain=self._calculate_performance_gain(task_data, optimized_task),
            cost_reduction=self._calculate_cost_reduction(task_data, optimized_task),
            quality_improvement=self._estimate_quality_change(task_data, optimized_task)
        )
        
        self.optimization_history.append(optimization)
        self.active_optimizations[task_id] = strategy
        
        optimization_time = (time.time() - start_time) * 1000
        
        return {
            'optimized_task': optimized_task,
            'optimization': optimization,
            'optimization_time_ms': optimization_time,
            'strategy_used': strategy.value
        }
    
    def monitor_performance(self, task_id: str, execution_result: Dict[str, Any]) -> OptimizationMetrics:
        """
        Monitor and record performance metrics for completed tasks
        """
        response_time = execution_result.get('execution_time', 0)
        cost = execution_result.get('cost', 0)
        quality = execution_result.get('quality_score', 0)
        
        # Calculate φ-harmonic resonance based on performance
        phi_resonance = self._calculate_phi_resonance(response_time, cost, quality)
        
        # Calculate resource utilization efficiency
        resource_utilization = self._calculate_resource_utilization(execution_result)
        
        # Calculate cost efficiency vs baseline
        baseline_cost = 0.01  # Standard baseline
        cost_efficiency = max(0, (baseline_cost - cost) / baseline_cost * 100)
        
        metrics = OptimizationMetrics(
            response_time=response_time,
            cost_efficiency=cost_efficiency,
            quality_score=quality,
            resource_utilization=resource_utilization,
            phi_resonance=phi_resonance
        )
        
        self.metrics_history.append(metrics)
        
        # Update performance cache for future optimizations
        self._update_performance_cache(task_id, metrics)
        
        return metrics
    
    def _analyze_complexity(self, task_data: Dict[str, Any]) -> int:
        """Analyze task complexity using φ-harmonic scoring"""
        context_length = len(task_data.get('context', ''))
        requirements_count = len(task_data.get('requirements', []))
        task_type_complexity = {
            'architecture': 8,
            'backend': 7,
            'optimization': 9,
            'frontend': 5,
            'testing': 4,
            'fullstack': 10
        }
        
        base_complexity = task_type_complexity.get(
            task_data.get('task_type', 'fullstack'), 5
        )
        
        # Apply φ-harmonic scaling
        context_factor = min(5, context_length / 1000)
        requirements_factor = min(3, requirements_count * 0.5)
        
        total_complexity = int(
            (base_complexity + context_factor + requirements_factor) * self.phi / 2
        )
        
        return min(10, max(1, total_complexity))
    
    def _assess_optimization_potential(self, task_data: Dict[str, Any]) -> float:
        """Assess how much a task can be optimized"""
        complexity = self._analyze_complexity(task_data)
        context_size = len(task_data.get('context', ''))
        
        # Higher complexity and context = more optimization potential
        potential = (complexity / 10) * 0.6 + min(1, context_size / 5000) * 0.4
        
        return potential
    
    def _select_optimization_strategy(self, task_data: Dict[str, Any], 
                                     complexity: int) -> OptimizationStrategy:
        """Select optimal optimization strategy using φ-harmonic decision making"""
        
        context_size = len(task_data.get('context', ''))
        task_type = task_data.get('task_type', 'fullstack')
        priority = task_data.get('priority', 'medium')
        
        # φ-harmonic strategy scoring
        strategy_scores = {}
        
        # PHI_HARMONIC: Always beneficial, scales with complexity
        strategy_scores[OptimizationStrategy.PHI_HARMONIC] = complexity * self.phi / 10
        
        # PARALLEL_PROCESSING: Good for complex tasks
        if complexity > 6:
            strategy_scores[OptimizationStrategy.PARALLEL_PROCESSING] = complexity * 0.8
        
        # CONTEXT_REDUCTION: Good for large contexts
        if context_size > 3000:
            strategy_scores[OptimizationStrategy.CONTEXT_REDUCTION] = min(1, context_size / 5000)
        
        # MODEL_SPECIALIZATION: Good for specialized tasks
        specialized_tasks = ['architecture', 'backend', 'frontend', 'optimization']
        if task_type in specialized_tasks:
            strategy_scores[OptimizationStrategy.MODEL_SPECIALIZATION] = 0.9
        
        # CACHING: Good for repeated patterns
        cache_key = f"{task_type}_{complexity}"
        if cache_key in self.performance_cache:
            strategy_scores[OptimizationStrategy.CACHING] = 0.7
        
        # Select strategy with highest φ-harmonic score
        if not strategy_scores:
            return OptimizationStrategy.PHI_HARMONIC
        
        best_strategy = max(strategy_scores.items(), key=lambda x: x[1])[0]
        return best_strategy
    
    async def _apply_optimization(self, task_data: Dict[str, Any], 
                                 strategy: OptimizationStrategy) -> Dict[str, Any]:
        """Apply selected optimization strategy"""
        optimized_task = task_data.copy()
        
        if strategy == OptimizationStrategy.PHI_HARMONIC:
            optimized_task = self._apply_phi_harmonic_optimization(optimized_task)
        
        elif strategy == OptimizationStrategy.PARALLEL_PROCESSING:
            optimized_task = self._apply_parallel_optimization(optimized_task)
        
        elif strategy == OptimizationStrategy.CONTEXT_REDUCTION:
            optimized_task = self._apply_context_reduction(optimized_task)
        
        elif strategy == OptimizationStrategy.MODEL_SPECIALIZATION:
            optimized_task = self._apply_model_specialization(optimized_task)
        
        elif strategy == OptimizationStrategy.CACHING:
            optimized_task = self._apply_caching_optimization(optimized_task)
        
        return optimized_task
    
    def _apply_phi_harmonic_optimization(self, task_data: Dict[str, Any]) -> Dict[str, Any]:
        """Apply φ-harmonic optimization to task parameters"""
        optimized = task_data.copy()
        
        # Optimize complexity using φ ratio
        if 'complexity' in optimized:
            original_complexity = optimized['complexity']
            optimized['complexity'] = max(1, int(original_complexity / self.phi))
        
        # Optimize context length using φ ratio
        if 'context' in optimized and len(optimized['context']) > 2000:
            context = optimized['context']
            target_length = int(len(context) / self.phi)
            optimized['context'] = context[:target_length] + "..." if target_length < len(context) else context
        
        # Add φ-harmonic metadata
        optimized['phi_optimization'] = {
            'applied': True,
            'phi_ratio': self.phi,
            'optimization_level': 'harmonic'
        }
        
        return optimized
    
    def _apply_parallel_optimization(self, task_data: Dict[str, Any]) -> Dict[str, Any]:
        """Break task into parallel subtasks"""
        optimized = task_data.copy()
        
        requirements = optimized.get('requirements', [])
        if len(requirements) > 2:
            # Split requirements into parallel chunks
            chunk_size = max(1, len(requirements) // 2)
            optimized['parallel_chunks'] = [
                requirements[i:i + chunk_size] 
                for i in range(0, len(requirements), chunk_size)
            ]
            optimized['parallel_processing'] = True
        
        return optimized
    
    def _apply_context_reduction(self, task_data: Dict[str, Any]) -> Dict[str, Any]:
        """Intelligently reduce context size while preserving key information"""
        optimized = task_data.copy()
        context = optimized.get('context', '')
        
        if len(context) > 3000:
            # Extract key sentences (simplified approach)
            sentences = context.split('. ')
            key_sentences = sentences[:5] + sentences[-3:]  # Keep beginning and end
            optimized['context'] = '. '.join(key_sentences)
            optimized['context_reduced'] = True
            optimized['original_context_length'] = len(context)
        
        return optimized
    
    def _apply_model_specialization(self, task_data: Dict[str, Any]) -> Dict[str, Any]:
        """Optimize for model specialization"""
        optimized = task_data.copy()
        task_type = optimized.get('task_type', 'fullstack')
        
        # Add specialization hints
        specialization_prompts = {
            'architecture': 'Focus on system design and architectural patterns.',
            'backend': 'Emphasize server-side logic and database optimization.',
            'frontend': 'Prioritize user interface and user experience.',
            'optimization': 'Focus on performance improvements and efficiency.',
            'testing': 'Emphasize test coverage and quality assurance.'
        }
        
        if task_type in specialization_prompts:
            context = optimized.get('context', '')
            optimized['context'] = f"{specialization_prompts[task_type]} {context}"
            optimized['specialized_for'] = task_type
        
        return optimized
    
    def _apply_caching_optimization(self, task_data: Dict[str, Any]) -> Dict[str, Any]:
        """Apply caching-based optimizations"""
        optimized = task_data.copy()
        
        cache_key = f"{task_data.get('task_type')}_{self._analyze_complexity(task_data)}"
        
        if cache_key in self.performance_cache:
            cached_data = self.performance_cache[cache_key]
            optimized['cached_optimization'] = True
            optimized['expected_performance'] = cached_data
        
        return optimized
    
    def _calculate_performance_gain(self, original: Dict[str, Any], 
                                   optimized: Dict[str, Any]) -> float:
        """Calculate expected performance gain from optimization"""
        original_complexity = self._analyze_complexity(original)
        optimized_complexity = self._analyze_complexity(optimized)
        
        complexity_reduction = (original_complexity - optimized_complexity) / original_complexity
        
        # Apply φ-harmonic enhancement to performance gain calculation
        performance_gain = complexity_reduction * self.phi * 50  # Scale to percentage
        
        return min(90, max(0, performance_gain))  # Cap at 90% gain
    
    def _calculate_cost_reduction(self, original: Dict[str, Any], 
                                 optimized: Dict[str, Any]) -> float:
        """Calculate expected cost reduction"""
        original_context_size = len(original.get('context', ''))
        optimized_context_size = len(optimized.get('context', ''))
        
        context_reduction = (original_context_size - optimized_context_size) / max(1, original_context_size)
        
        # Base cost reduction from context reduction
        base_reduction = context_reduction * 40  # Up to 40% from context reduction
        
        # Additional reduction from other optimizations
        if optimized.get('parallel_processing'):
            base_reduction += 15
        
        if optimized.get('specialized_for'):
            base_reduction += 10
        
        if optimized.get('cached_optimization'):
            base_reduction += 20
        
        # Apply φ-harmonic enhancement
        total_reduction = base_reduction * self.phi / 2
        
        return min(85, max(0, total_reduction))  # Cap at 85% (target)
    
    def _estimate_quality_change(self, original: Dict[str, Any], 
                                optimized: Dict[str, Any]) -> float:
        """Estimate quality change from optimization"""
        # Most optimizations should maintain or slightly improve quality
        quality_change = 0
        
        if optimized.get('specialized_for'):
            quality_change += 5  # Specialization improves quality
        
        if optimized.get('context_reduced'):
            quality_change -= 2  # Context reduction might slightly reduce quality
        
        if optimized.get('phi_optimization'):
            quality_change += 3  # φ-harmonic optimization improves coherence
        
        return quality_change
    
    def _calculate_phi_resonance(self, response_time: float, cost: float, quality: float) -> float:
        """Calculate φ-harmonic resonance based on performance metrics"""
        # Normalize metrics to 0-1 range
        time_factor = max(0, min(1, (500 - response_time) / 500))  # Better if < 500ms
        cost_factor = max(0, min(1, (0.01 - cost) / 0.01))  # Better if < $0.01
        quality_factor = quality  # Already 0-1
        
        # Apply φ-harmonic weighting
        resonance = (
            time_factor * self.phi +
            cost_factor * self.phi +
            quality_factor * self.phi
        ) / 3
        
        return resonance
    
    def _calculate_resource_utilization(self, execution_result: Dict[str, Any]) -> float:
        """Calculate resource utilization efficiency"""
        # Simplified calculation based on execution time and quality
        execution_time = execution_result.get('execution_time', 1000)
        quality = execution_result.get('quality_score', 0.5)
        
        # Efficiency = Quality / (Time/1000) - higher quality per unit time is better
        efficiency = quality / (execution_time / 1000)
        
        # Normalize to 0-1 range
        return min(1, efficiency / 2)
    
    def _update_performance_cache(self, task_id: str, metrics: OptimizationMetrics) -> None:
        """Update performance cache for future optimizations"""
        # Create cache key based on task characteristics
        if task_id in self.active_optimizations:
            strategy = self.active_optimizations[task_id]
            cache_key = f"strategy_{strategy.value}"
            
            if cache_key not in self.performance_cache:
                self.performance_cache[cache_key] = []
            
            self.performance_cache[cache_key].append({
                'metrics': metrics,
                'timestamp': time.time()
            })
            
            # Keep only last 50 entries per strategy
            if len(self.performance_cache[cache_key]) > 50:
                self.performance_cache[cache_key] = self.performance_cache[cache_key][-50:]
    
    def get_optimization_analytics(self) -> Dict[str, Any]:
        """Get comprehensive optimization analytics"""
        if not self.metrics_history:
            return {}
        
        recent_metrics = self.metrics_history[-100:]
        
        avg_response_time = sum(m.response_time for m in recent_metrics) / len(recent_metrics)
        avg_cost_efficiency = sum(m.cost_efficiency for m in recent_metrics) / len(recent_metrics)
        avg_quality = sum(m.quality_score for m in recent_metrics) / len(recent_metrics)
        avg_phi_resonance = sum(m.phi_resonance for m in recent_metrics) / len(recent_metrics)
        
        # Strategy effectiveness
        strategy_performance = {}
        for optimization in self.optimization_history[-50:]:
            strategy = optimization.optimization_strategy
            if strategy not in strategy_performance:
                strategy_performance[strategy] = {
                    'count': 0,
                    'avg_performance_gain': 0,
                    'avg_cost_reduction': 0
                }
            
            perf = strategy_performance[strategy]
            perf['count'] += 1
            perf['avg_performance_gain'] = (
                perf['avg_performance_gain'] + optimization.performance_gain
            ) / 2
            perf['avg_cost_reduction'] = (
                perf['avg_cost_reduction'] + optimization.cost_reduction
            ) / 2
        
        return {
            'total_optimizations': len(self.optimization_history),
            'average_metrics': {
                'response_time_ms': avg_response_time,
                'cost_efficiency_percent': avg_cost_efficiency,
                'quality_score': avg_quality,
                'phi_resonance': avg_phi_resonance
            },
            'target_performance': {
                'response_time_target': self.targets['response_time'],
                'cost_reduction_target': self.targets['cost_reduction'],
                'quality_target': self.targets['quality_threshold']
            },
            'strategy_effectiveness': strategy_performance,
            'phi_optimization_level': self.phi,
            'cache_efficiency': len(self.performance_cache)
        }

# Example usage
if __name__ == "__main__":
    import asyncio
    
    async def main():
        optimizer = TaskOptimizer()
        
        # Example task optimization
        sample_task = {
            'id': 'test_001',
            'task_type': 'backend',
            'context': 'Create a high-performance API endpoint for user authentication ' * 100,
            'requirements': ['security', 'performance', 'scalability', 'monitoring'],
            'complexity': 8,
            'priority': 'high'
        }
        
        # Optimize task
        result = await optimizer.optimize_task(sample_task)
        print("Optimization Result:")
        print(f"Strategy: {result['strategy_used']}")
        print(f"Performance Gain: {result['optimization'].performance_gain:.1f}%")
        print(f"Cost Reduction: {result['optimization'].cost_reduction:.1f}%")
        print()
        
        # Simulate execution and monitoring
        execution_result = {
            'execution_time': 180,
            'cost': 0.002,
            'quality_score': 0.94
        }
        
        metrics = optimizer.monitor_performance('test_001', execution_result)
        print("Performance Metrics:")
        print(f"Response Time: {metrics.response_time}ms")
        print(f"Cost Efficiency: {metrics.cost_efficiency:.1f}%")
        print(f"Quality Score: {metrics.quality_score}")
        print(f"φ-Resonance: {metrics.phi_resonance:.3f}")
        print()
        
        # Show analytics
        analytics = optimizer.get_optimization_analytics()
        print("Optimization Analytics:", json.dumps(analytics, indent=2))
    
    asyncio.run(main())