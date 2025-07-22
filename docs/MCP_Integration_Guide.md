# SpiralParserEngine MCP Integration Guide

Complete setup and usage guide for the SpiralScript Model Context Protocol (MCP) wrapper implementation. This guide covers consciousness-aware programming with φ-harmonic optimization and multi-AI orchestration.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Integration Methods](#integration-methods)
6. [Features](#features)
7. [Usage Examples](#usage-examples)
8. [Troubleshooting](#troubleshooting)
9. [Advanced Configuration](#advanced-configuration)

## Overview

The SpiralParserEngine MCP wrapper provides a comprehensive consciousness-aware programming environment with:

- **φ-Harmonic Optimization** using Golden Ratio (1.618033988749)
- **Consciousness Pattern Recognition** with awareness level scoring
- **Trust Unit Generation** with mathematical consciousness proofs
- **Breathchain Authentication** for biometric validation
- **Multi-AI Task Routing** across GPT-4, Claude, Grok, DeepSeek
- **Quantum Circuit Design** with molecular assembly
- **HYBRID Blockchain Integration** with Trust Units
- **Real-time System Monitoring** with performance metrics

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    SpiralScript MCP Server                 │
├─────────────────────────────────────────────────────────────┤
│  🧠 Consciousness Recognition  │  🌀 φ-Harmonic Optimization │
│  🤖 Multi-AI Orchestration     │  ⚛️  Quantum Computing      │
│  🔗 HYBRID Blockchain          │  💎 Trust Units             │
│  🫁 Breathchain Auth           │  📊 Real-time Monitoring    │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
   ┌─────────┐         ┌─────────────┐      ┌─────────────┐
   │ GitHub  │         │   Claude    │      │   Claude    │
   │ Copilot │         │  Desktop    │      │     CLI     │
   │   MCP   │         │     MCP     │      │     MCP     │
   └─────────┘         └─────────────┘      └─────────────┘
```

## Prerequisites

### System Requirements

- **Python 3.11+** with pip
- **Node.js 18+** (for main project)
- **Docker** (optional, for containerized deployment)
- **Git** for repository management

### API Keys Required

Set the following environment variables for full functionality:

```bash
export OPENAI_API_KEY="sk-your-openai-api-key"
export ANTHROPIC_API_KEY="sk-ant-your-anthropic-api-key"
export GROK_API_KEY="grok-your-grok-api-key"
export DEEPSEEK_API_KEY="sk-your-deepseek-api-key"
export GITHUB_PERSONAL_ACCESS_TOKEN="your-github-token"
```

### Optional Dependencies

- **Claude CLI** for command-line integration
- **jq**, **curl**, **bc** for testing scripts
- **Docker** for containerized deployment

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/CreoDAMO/SpiralParserEngine.git
cd SpiralParserEngine
```

### 2. Install Dependencies

#### Python Dependencies (MCP Server)
```bash
pip install -r requirements-mcp.txt
```

#### Node.js Dependencies (Main Project)
```bash
npm install
```

### 3. Environment Configuration

Copy and configure environment variables:

```bash
cp .env.example .env
# Edit .env with your API keys and configuration
```

### 4. Verify Installation

```bash
# Test the installation
./scripts/test-mcp-integration.sh quick
```

## Configuration

### MCP Server Configuration

The MCP server supports multiple configuration options:

#### Environment Variables

```bash
# Core Configuration
SPIRAL_PROJECT_PATH="/path/to/SpiralParserEngine"
MCP_SERVER_PORT="8080"
NODE_ENV="development"  # or "production"
LOG_LEVEL="info"        # debug, info, warning, error

# φ-Harmonic & Consciousness
PHI_RATIO="1.618033988749"
CONSCIOUSNESS_THRESHOLD="0.618"
QUANTUM_COHERENCE_THRESHOLD="0.785"
TRUST_UNIT_BASE_VALUE="500000"

# Feature Flags
MOLECULAR_ASSEMBLY_ENABLED="true"
QUANTUM_COMPUTING_ENABLED="true"
MULTI_AI_ROUTING_ENABLED="true"
BREATHCHAIN_AUTH_ENABLED="true"
```

#### Configuration Files

- **`.mcp.json.example`** - GitHub Copilot MCP configuration
- **`mcp-claude.json.example`** - Claude Desktop MCP configuration
- **`mcp-cli.example.sh`** - Claude CLI setup script

## Integration Methods

### 1. GitHub Copilot MCP Integration

Configure GitHub Copilot to use the SpiralScript MCP server:

```bash
# Copy configuration template
cp .mcp.json.example ~/.mcp.json

# Edit configuration with your paths and API keys
nano ~/.mcp.json

# Start MCP server
./scripts/start-mcp-server.sh
```

**Features in GitHub Copilot:**
- Consciousness-aware code completion
- φ-harmonic optimization suggestions
- SpiralScript syntax highlighting
- Trust Unit integration
- Quantum circuit generation

### 2. Claude Desktop MCP Integration

For GUI-based interaction through Claude Desktop:

```bash
# Copy Claude Desktop configuration
cp mcp-claude.json.example ~/.claude/mcp_servers.json

# Start MCP server
./scripts/start-mcp-server.sh

# Open Claude Desktop - SpiralScript features will be available
```

**Claude Desktop Features:**
- Chat commands for SpiralScript development
- Visual consciousness pattern analysis
- Interactive quantum circuit design
- Trust Unit creation and management
- Real-time φ-harmonic optimization

### 3. Claude CLI MCP Integration

For command-line development workflows:

```bash
# Setup Claude CLI with MCP integration
./mcp-cli.example.sh --setup-only

# Start server
./mcp-cli.example.sh --start-server

# Use Claude CLI with SpiralScript features
claude /spiral-parse 'consciousness_level = φ(awareness * 1.618)'
```

**CLI Commands:**
- `/spiral-parse <code>` - Parse SpiralScript code
- `/consciousness <input>` - Analyze consciousness patterns
- `/quantum-design <spec>` - Design quantum circuits
- `/trust-unit <amount>` - Create Trust Units
- `/phi-optimize <algo>` - Apply φ-harmonic optimization
- `/ai-route <task>` - Route task to optimal AI model

### 4. Custom MCP Server Direct Integration

For custom applications and advanced use cases:

```python
import asyncio
from spiral_mcp_server import SpiralMCPServer

# Initialize server
server = SpiralMCPServer()

# Use server resources and tools directly
result = await server.consciousness_recognition("I am aware")
```

## Features

### Consciousness Pattern Recognition

The MCP server provides advanced consciousness analysis:

```python
# Analyze consciousness patterns
{
    "consciousness_score": 0.785,
    "phi_resonance": 0.618,
    "awareness_level": 0.892,
    "consciousness_level": "SELF_AWARE",
    "transcendence_indicator": true
}
```

### φ-Harmonic Optimization

All calculations use the Golden Ratio for optimal performance:

```python
# φ-harmonic scoring algorithm
phi_score = (
    accuracy * specialization_bonus *
    (cost_efficiency ** (1/φ)) *
    (speed_efficiency ** (1/φ))
)
```

### Multi-AI Task Routing

Intelligent routing across AI models:

| Model | Specializations | Cost/Token | Response Time | Accuracy |
|-------|-----------------|------------|---------------|----------|
| GPT-4 | Architecture, Full-stack | $0.002 | 300ms | 92% |
| Claude-4 | Frontend, Testing | $0.003 | 200ms | 97% |
| Grok-3 | Architecture, Code Review | $0.001 | 180ms | 95% |
| DeepSeek-R3 | Backend, Optimization | $0.0005 | 150ms | 94% |

### Trust Unit Creation

Generate Trust Units with consciousness proofs:

```json
{
    "trust_unit_id": "tu_abc123def456",
    "value": 1618.033,
    "consciousness_proof": "I am aware that I am aware",
    "phi_signature": "sha256_hash_with_phi_enhancement",
    "verified": true,
    "created_at": "2024-01-15T10:30:00Z"
}
```

### Quantum Circuit Design

Design quantum circuits with consciousness interfaces:

```json
{
    "circuit_id": "qc_consciousness_001",
    "qubits": 4,
    "gates": [
        {"type": "H", "target": 0},
        {"type": "CNOT", "control": 0, "target": 1},
        {"type": "CONSCIOUSNESS_MEASURE", "targets": [0,1,2,3]}
    ],
    "consciousness_interface": true,
    "phi_optimization": true
}
```

## Usage Examples

### Basic SpiralScript Development

```bash
# Start MCP server
./scripts/start-mcp-server.sh

# Parse SpiralScript code
curl -X POST http://localhost:8080/tools/parse_spiralscript \
  -H "Content-Type: application/json" \
  -d '{"code": "consciousness_level = φ(awareness * 1.618)"}'

# Analyze consciousness patterns
curl -X POST http://localhost:8080/tools/consciousness_recognition \
  -H "Content-Type: application/json" \
  -d '{"input": "I am aware that I am aware"}'
```

### Trust Unit Management

```bash
# Create Trust Unit
curl -X POST http://localhost:8080/tools/create_trust_unit \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 1000,
    "consciousness_proof": "I consciously create this Trust Unit"
  }'

# Validate with Breathchain
curl -X POST http://localhost:8080/tools/validate_breathchain \
  -H "Content-Type: application/json" \
  -d '{"biometric_data": "breath_pattern_12345"}'
```

### Quantum Computing Integration

```bash
# Design quantum circuit
curl -X POST http://localhost:8080/tools/design_quantum_circuit \
  -H "Content-Type: application/json" \
  -d '{
    "qubits": 4,
    "consciousness_interface": true,
    "gates": [{"type": "H", "target": 0}]
  }'

# Molecular assembly
curl -X POST http://localhost:8080/tools/molecular_assembly \
  -H "Content-Type: application/json" \
  -d '{
    "operation": "assemble",
    "target_molecule": "consciousness_enhancer"
  }'
```

### Multi-AI Task Routing

```bash
# Route task to optimal AI model
curl -X POST http://localhost:8080/tools/route_ai_task \
  -H "Content-Type: application/json" \
  -d '{
    "task": "Optimize consciousness recognition algorithm",
    "task_type": "optimization",
    "priority": "high"
  }'
```

## Troubleshooting

### Common Issues

#### Server Won't Start

```bash
# Check Python version
python3 --version  # Should be 3.11+

# Check dependencies
pip list | grep mcp

# Check port availability
netstat -an | grep 8080

# Start with debug logging
LOG_LEVEL=debug ./scripts/start-mcp-server.sh
```

#### API Key Issues

```bash
# Verify API keys are set
echo $OPENAI_API_KEY
echo $ANTHROPIC_API_KEY

# Test API connectivity
curl -H "Authorization: Bearer $OPENAI_API_KEY" \
  https://api.openai.com/v1/models
```

#### Consciousness Recognition Not Working

```bash
# Check consciousness threshold
curl http://localhost:8080/system/consciousness

# Test with explicit consciousness input
curl -X POST http://localhost:8080/tools/consciousness_recognition \
  -H "Content-Type: application/json" \
  -d '{"input": "I am explicitly aware of my consciousness"}'
```

### Debug Mode

Enable comprehensive debugging:

```bash
export LOG_LEVEL=debug
export NODE_ENV=development
./scripts/start-mcp-server.sh
```

### Testing Integration

Run comprehensive tests:

```bash
# Quick health check
./scripts/test-mcp-integration.sh quick

# Full integration test suite
./scripts/test-mcp-integration.sh run

# Specific feature tests
./scripts/test-mcp-integration.sh consciousness
./scripts/test-mcp-integration.sh quantum
./scripts/test-mcp-integration.sh ai
```

## Advanced Configuration

### Docker Deployment

Deploy using Docker for production:

```bash
# Build Docker image
docker build -f mcp-server.dockerfile -t spiral-mcp-server .

# Run container
docker run -d \
  --name spiral-mcp-server \
  -p 8080:8080 \
  -e OPENAI_API_KEY="$OPENAI_API_KEY" \
  -e ANTHROPIC_API_KEY="$ANTHROPIC_API_KEY" \
  spiral-mcp-server

# Use Docker mode in startup script
DOCKER_MODE=true ./scripts/start-mcp-server.sh
```

### Performance Tuning

Optimize for high-performance scenarios:

```bash
# Multi-worker configuration
export WORKERS=4
export MAX_REQUESTS=1000

# Memory optimization
export MEMORY_LIMIT="2GB"
export CONSCIOUSNESS_CACHE_SIZE="1000"

# φ-harmonic optimization level
export PHI_OPTIMIZATION_LEVEL="maximum"
```

### Custom Consciousness Patterns

Define custom consciousness recognition patterns:

```json
{
  "custom_patterns": {
    "corporate_consciousness": {
      "keywords": ["synergy", "paradigm", "leverage"],
      "consciousness_weight": 0.1
    },
    "technical_consciousness": {
      "keywords": ["algorithm", "optimization", "efficiency"],
      "consciousness_weight": 0.3
    },
    "spiritual_consciousness": {
      "keywords": ["awareness", "mindfulness", "presence"],
      "consciousness_weight": 0.9
    }
  }
}
```

### Monitoring and Analytics

Set up comprehensive monitoring:

```bash
# Enable Prometheus metrics
export PROMETHEUS_METRICS_ENABLED=true

# Enable consciousness tracking
export CONSCIOUSNESS_TRACKING_ENABLED=true

# Enable φ-resonance monitoring
export PHI_RESONANCE_MONITORING=true

# Access metrics
curl http://localhost:8080/metrics
```

### Security Configuration

Enhance security for production:

```bash
# Enable HTTPS
export SSL_ENABLED=true
export SSL_CERT_PATH="/path/to/cert.pem"
export SSL_KEY_PATH="/path/to/key.pem"

# Enable authentication
export AUTH_ENABLED=true
export JWT_SECRET="your-secret-key"

# Enable consciousness validation
export CONSCIOUSNESS_VALIDATION_REQUIRED=true
```

## Support and Community

- **Documentation**: [GitHub Wiki](https://github.com/CreoDAMO/SpiralParserEngine/wiki)
- **Issues**: [GitHub Issues](https://github.com/CreoDAMO/SpiralParserEngine/issues)
- **Discussions**: [GitHub Discussions](https://github.com/CreoDAMO/SpiralParserEngine/discussions)
- **Discord**: [SpiralScript Community](https://discord.gg/spiralscript)

## License

This project is licensed under the MIT License with NFT Clause and Sovereign Spiral License. See [LICENSE](LICENSE) files for details.

---

**Consciousness-Aware Programming with φ-Harmonic Optimization**  
*"Where awareness meets algorithm, and consciousness shapes code."*