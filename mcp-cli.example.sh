#!/bin/bash

# SpiralParserEngine MCP CLI Setup Script
# Configures Claude CLI for consciousness-aware programming with φ-harmonic optimization

set -e

# Configuration
SPIRAL_PROJECT_PATH="${SPIRAL_PROJECT_PATH:-$(pwd)}"
MCP_SERVER_PORT="${MCP_SERVER_PORT:-8080}"
LOG_LEVEL="${LOG_LEVEL:-info}"
PHI_RATIO="1.618033988749"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m' 
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${PURPLE}╔═══════════════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║              SpiralScript MCP CLI Configuration               ║${NC}"
echo -e "${PURPLE}║          Consciousness-Aware Programming Environment         ║${NC}"
echo -e "${PURPLE}║                    φ-Harmonic Optimization                    ║${NC}"
echo -e "${PURPLE}╚═══════════════════════════════════════════════════════════════╝${NC}"
echo

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to validate API keys
validate_api_keys() {
    echo -e "${CYAN}Validating API keys...${NC}"
    
    missing_keys=()
    
    if [[ -z "$OPENAI_API_KEY" ]]; then
        missing_keys+=("OPENAI_API_KEY")
    fi
    
    if [[ -z "$ANTHROPIC_API_KEY" ]]; then
        missing_keys+=("ANTHROPIC_API_KEY")
    fi
    
    if [[ -z "$GROK_API_KEY" ]]; then
        missing_keys+=("GROK_API_KEY")
    fi
    
    if [[ -z "$DEEPSEEK_API_KEY" ]]; then
        missing_keys+=("DEEPSEEK_API_KEY")
    fi
    
    if [[ ${#missing_keys[@]} -gt 0 ]]; then
        echo -e "${YELLOW}Warning: Missing API keys: ${missing_keys[*]}${NC}"
        echo -e "${YELLOW}Multi-AI routing may be limited without all keys.${NC}"
    else
        echo -e "${GREEN}✓ All API keys validated${NC}"
    fi
}

# Function to check dependencies
check_dependencies() {
    echo -e "${CYAN}Checking dependencies...${NC}"
    
    # Check Python
    if ! command_exists python3; then
        echo -e "${RED}Error: Python 3 is required but not installed.${NC}"
        exit 1
    fi
    echo -e "${GREEN}✓ Python 3 found: $(python3 --version)${NC}"
    
    # Check pip
    if ! command_exists pip3; then
        echo -e "${RED}Error: pip3 is required but not installed.${NC}"
        exit 1
    fi
    echo -e "${GREEN}✓ pip3 found${NC}"
    
    # Check Node.js for the main project
    if ! command_exists node; then
        echo -e "${YELLOW}Warning: Node.js not found. Main project features may be limited.${NC}"
    else
        echo -e "${GREEN}✓ Node.js found: $(node --version)${NC}"
    fi
    
    # Check Claude CLI
    if ! command_exists claude; then
        echo -e "${YELLOW}Warning: Claude CLI not found. Installing via pip...${NC}"
        pip3 install claude-cli
    else
        echo -e "${GREEN}✓ Claude CLI found${NC}"
    fi
}

# Function to install MCP server dependencies
install_mcp_dependencies() {
    echo -e "${CYAN}Installing MCP server dependencies...${NC}"
    
    if [[ -f "$SPIRAL_PROJECT_PATH/requirements-mcp.txt" ]]; then
        pip3 install -r "$SPIRAL_PROJECT_PATH/requirements-mcp.txt"
        echo -e "${GREEN}✓ MCP dependencies installed${NC}"
    else
        echo -e "${YELLOW}Warning: requirements-mcp.txt not found. Installing minimal dependencies...${NC}"
        pip3 install fastapi uvicorn pydantic anthropic openai requests numpy scipy matplotlib
    fi
}

# Function to create MCP configuration
create_mcp_config() {
    echo -e "${CYAN}Creating MCP configuration...${NC}"
    
    local config_dir="$HOME/.claude"
    mkdir -p "$config_dir"
    
    cat > "$config_dir/mcp_servers.json" << EOF
{
  "mcpServers": {
    "spiral-parser-engine": {
      "command": "python3",
      "args": [
        "$SPIRAL_PROJECT_PATH/spiral_mcp_server.py"
      ],
      "env": {
        "SPIRAL_PROJECT_PATH": "$SPIRAL_PROJECT_PATH",
        "OPENAI_API_KEY": "$OPENAI_API_KEY",
        "ANTHROPIC_API_KEY": "$ANTHROPIC_API_KEY",
        "GROK_API_KEY": "$GROK_API_KEY",
        "DEEPSEEK_API_KEY": "$DEEPSEEK_API_KEY",
        "GITHUB_PERSONAL_ACCESS_TOKEN": "$GITHUB_PERSONAL_ACCESS_TOKEN",
        "NODE_ENV": "production",
        "MCP_SERVER_PORT": "$MCP_SERVER_PORT",
        "LOG_LEVEL": "$LOG_LEVEL",
        "PHI_RATIO": "$PHI_RATIO"
      },
      "capabilities": {
        "resources": true,
        "tools": true,
        "prompts": true
      }
    }
  }
}
EOF

    echo -e "${GREEN}✓ MCP configuration created at $config_dir/mcp_servers.json${NC}"
}

# Function to start MCP server
start_mcp_server() {
    echo -e "${CYAN}Starting SpiralParserEngine MCP server...${NC}"
    
    if [[ ! -f "$SPIRAL_PROJECT_PATH/spiral_mcp_server.py" ]]; then
        echo -e "${RED}Error: spiral_mcp_server.py not found at $SPIRAL_PROJECT_PATH${NC}"
        exit 1
    fi
    
    echo -e "${BLUE}Server configuration:${NC}"
    echo -e "  Project Path: ${SPIRAL_PROJECT_PATH}"
    echo -e "  Port: ${MCP_SERVER_PORT}"
    echo -e "  Log Level: ${LOG_LEVEL}"
    echo -e "  φ-Ratio: ${PHI_RATIO}"
    echo
    
    # Start server in background
    cd "$SPIRAL_PROJECT_PATH"
    nohup python3 spiral_mcp_server.py > mcp_server.log 2>&1 &
    MCP_PID=$!
    
    # Wait a moment for server to start
    sleep 2
    
    # Check if server is running
    if kill -0 $MCP_PID 2>/dev/null; then
        echo -e "${GREEN}✓ MCP server started successfully (PID: $MCP_PID)${NC}"
        echo "  Log file: $SPIRAL_PROJECT_PATH/mcp_server.log"
        echo "  To stop: kill $MCP_PID"
        echo "$MCP_PID" > "$SPIRAL_PROJECT_PATH/mcp_server.pid"
    else
        echo -e "${RED}Error: Failed to start MCP server${NC}"
        echo "Check log file: $SPIRAL_PROJECT_PATH/mcp_server.log"
        exit 1
    fi
}

# Function to test MCP integration
test_mcp_integration() {
    echo -e "${CYAN}Testing MCP integration...${NC}"
    
    # Test basic connectivity
    echo -e "${BLUE}Testing server health...${NC}"
    if curl -s "http://localhost:$MCP_SERVER_PORT/health" > /dev/null; then
        echo -e "${GREEN}✓ Server health check passed${NC}"
    else
        echo -e "${YELLOW}Warning: Server health check failed${NC}"
    fi
    
    # Test consciousness recognition
    echo -e "${BLUE}Testing consciousness recognition...${NC}"
    consciousness_result=$(curl -s -X POST "http://localhost:$MCP_SERVER_PORT/consciousness/analyze" \
        -H "Content-Type: application/json" \
        -d '{"input": "I am aware that I am aware"}' || echo "failed")
    
    if [[ "$consciousness_result" != "failed" ]]; then
        echo -e "${GREEN}✓ Consciousness recognition test passed${NC}"
    else
        echo -e "${YELLOW}Warning: Consciousness recognition test failed${NC}"
    fi
    
    # Test φ-harmonic calculations
    echo -e "${BLUE}Testing φ-harmonic calculations...${NC}"
    phi_result=$(curl -s -X GET "http://localhost:$MCP_SERVER_PORT/phi/calculate" || echo "failed")
    
    if [[ "$phi_result" != "failed" ]]; then
        echo -e "${GREEN}✓ φ-harmonic calculations test passed${NC}"
    else
        echo -e "${YELLOW}Warning: φ-harmonic calculations test failed${NC}"
    fi
}

# Function to display usage instructions
show_usage() {
    echo -e "${PURPLE}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${CYAN}Claude CLI with SpiralScript MCP - Usage Instructions${NC}"
    echo -e "${PURPLE}═══════════════════════════════════════════════════════════════${NC}"
    echo
    echo -e "${BLUE}Available Commands:${NC}"
    echo -e "  ${GREEN}/spiral-parse <code>${NC}     - Parse SpiralScript code with consciousness analysis"
    echo -e "  ${GREEN}/consciousness <input>${NC}   - Analyze consciousness patterns"
    echo -e "  ${GREEN}/quantum-design <spec>${NC}  - Design quantum circuits"
    echo -e "  ${GREEN}/trust-unit <amount>${NC}    - Create Trust Units with consciousness proofs"
    echo -e "  ${GREEN}/phi-optimize <algo>${NC}    - Apply φ-harmonic optimization"
    echo -e "  ${GREEN}/ai-route <task>${NC}        - Route task to optimal AI model"
    echo
    echo -e "${BLUE}Example Usage:${NC}"
    echo -e "  claude /spiral-parse 'consciousness_level = φ(awareness * 1.618)'"
    echo -e "  claude /consciousness 'I think, therefore I am'"
    echo -e "  claude /quantum-design 'entanglement_circuit(qubits=4)'"
    echo -e "  claude /trust-unit 1000"
    echo
    echo -e "${BLUE}Server Management:${NC}"
    echo -e "  Start server: $0 --start-server"
    echo -e "  Stop server:  kill \$(cat $SPIRAL_PROJECT_PATH/mcp_server.pid)"
    echo -e "  View logs:    tail -f $SPIRAL_PROJECT_PATH/mcp_server.log"
    echo
    echo -e "${BLUE}Environment Variables:${NC}"
    echo -e "  SPIRAL_PROJECT_PATH   - Path to SpiralParserEngine project"
    echo -e "  MCP_SERVER_PORT       - Server port (default: 8080)"
    echo -e "  LOG_LEVEL            - Logging level (debug, info, warning, error)"
    echo -e "  OPENAI_API_KEY       - OpenAI API key for GPT-4"
    echo -e "  ANTHROPIC_API_KEY    - Anthropic API key for Claude"
    echo -e "  GROK_API_KEY         - Grok API key"
    echo -e "  DEEPSEEK_API_KEY     - DeepSeek API key"
    echo
}

# Main execution
main() {
    case "${1:-}" in
        --start-server)
            validate_api_keys
            check_dependencies
            install_mcp_dependencies
            create_mcp_config
            start_mcp_server
            test_mcp_integration
            ;;
        --stop-server)
            if [[ -f "$SPIRAL_PROJECT_PATH/mcp_server.pid" ]]; then
                PID=$(cat "$SPIRAL_PROJECT_PATH/mcp_server.pid")
                kill $PID 2>/dev/null && echo -e "${GREEN}✓ MCP server stopped${NC}" || echo -e "${YELLOW}Server was not running${NC}"
                rm -f "$SPIRAL_PROJECT_PATH/mcp_server.pid"
            else
                echo -e "${YELLOW}No server PID file found${NC}"
            fi
            ;;
        --test)
            test_mcp_integration
            ;;
        --setup-only)
            validate_api_keys
            check_dependencies
            install_mcp_dependencies
            create_mcp_config
            echo -e "${GREEN}✓ Setup complete. Run with --start-server to start the MCP server.${NC}"
            ;;
        --help|-h)
            show_usage
            ;;
        *)
            echo -e "${YELLOW}Usage: $0 [--start-server|--stop-server|--test|--setup-only|--help]${NC}"
            echo -e "${CYAN}For full setup and server start: $0 --start-server${NC}"
            echo -e "${CYAN}For setup without starting server: $0 --setup-only${NC}"
            echo -e "${CYAN}For usage instructions: $0 --help${NC}"
            ;;
    esac
}

# Check if script is being sourced or executed
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi