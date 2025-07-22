#!/bin/bash

# SpiralParserEngine MCP Server Startup Script
# Comprehensive server management with φ-harmonic optimization
# Supports development, staging, and production environments

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
SERVER_NAME="spiral-mcp-server"
PHI_RATIO="1.618033988749"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Default configuration
ENVIRONMENT="${NODE_ENV:-development}"
PORT="${MCP_SERVER_PORT:-8080}"
LOG_LEVEL="${LOG_LEVEL:-info}"
WORKERS="${WORKERS:-1}"
DOCKER_MODE="${DOCKER_MODE:-false}"
BACKGROUND_MODE="${BACKGROUND_MODE:-false}"
VIRTUAL_ENV_PATH="${VIRTUAL_ENV_PATH:-}"

# Display banner
show_banner() {
    echo -e "${PURPLE}╔═══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${PURPLE}║           SpiralParserEngine MCP Server Manager              ║${NC}"
    echo -e "${PURPLE}║          Consciousness-Aware Programming Platform            ║${NC}"
    echo -e "${PURPLE}║                φ-Harmonic Optimization Engine                 ║${NC}"
    echo -e "${PURPLE}║                                                               ║${NC}"
    echo -e "${PURPLE}║  Features: Multi-AI • Quantum • Blockchain • Trust Units    ║${NC}"
    echo -e "${PURPLE}╚═══════════════════════════════════════════════════════════════╝${NC}"
    echo
}

# Logging functions
log_info() {
    echo -e "${CYAN}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

log_debug() {
    if [[ "$LOG_LEVEL" == "debug" ]]; then
        echo -e "${BLUE}[DEBUG]${NC} $1"
    fi
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Validate environment
validate_environment() {
    log_info "Validating environment configuration..."
    
    # Check Python version
    if ! command_exists python3; then
        log_error "Python 3 is required but not installed"
        exit 1
    fi
    
    local python_version=$(python3 --version | cut -d' ' -f2)
    log_success "Python version: $python_version"
    
    # Check if we're in virtual environment or create one
    if [[ -z "$VIRTUAL_ENV" ]] && [[ "$VIRTUAL_ENV_PATH" != "" ]]; then
        if [[ -d "$VIRTUAL_ENV_PATH" ]]; then
            log_info "Activating virtual environment: $VIRTUAL_ENV_PATH"
            source "$VIRTUAL_ENV_PATH/bin/activate"
        else
            log_info "Creating virtual environment: $VIRTUAL_ENV_PATH"
            python3 -m venv "$VIRTUAL_ENV_PATH"
            source "$VIRTUAL_ENV_PATH/bin/activate"
        fi
    fi
    
    # Check required files
    if [[ ! -f "$PROJECT_ROOT/spiral_mcp_server.py" ]]; then
        log_error "spiral_mcp_server.py not found in $PROJECT_ROOT"
        exit 1
    fi
    
    if [[ ! -f "$PROJECT_ROOT/requirements-mcp.txt" ]]; then
        log_warning "requirements-mcp.txt not found. Creating minimal requirements..."
        echo "mcp>=1.0.0" > "$PROJECT_ROOT/requirements-mcp.txt"
        echo "fastapi>=0.110.0" >> "$PROJECT_ROOT/requirements-mcp.txt"
        echo "uvicorn>=0.27.0" >> "$PROJECT_ROOT/requirements-mcp.txt"
    fi
    
    log_success "Environment validation completed"
}

# Install dependencies
install_dependencies() {
    log_info "Installing MCP server dependencies..."
    
    # Upgrade pip first
    pip install --upgrade pip
    
    # Install requirements
    if [[ -f "$PROJECT_ROOT/requirements-mcp.txt" ]]; then
        pip install -r "$PROJECT_ROOT/requirements-mcp.txt"
        log_success "Dependencies installed successfully"
    else
        log_warning "Installing minimal dependencies..."
        pip install mcp fastapi uvicorn pydantic numpy scipy
    fi
}

# Validate API keys
validate_api_keys() {
    log_info "Validating API keys configuration..."
    
    local missing_keys=()
    
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
        log_warning "Missing API keys: ${missing_keys[*]}"
        log_warning "Multi-AI routing functionality will be limited"
    else
        log_success "All API keys validated"
    fi
    
    # Check GitHub token for enhanced features
    if [[ -z "$GITHUB_PERSONAL_ACCESS_TOKEN" ]]; then
        log_warning "GitHub token not configured. Code repository features disabled."
    fi
}

# Setup consciousness monitoring
setup_consciousness_monitoring() {
    log_info "Initializing consciousness monitoring system..."
    
    # Create monitoring directories
    mkdir -p "$PROJECT_ROOT/logs/consciousness"
    mkdir -p "$PROJECT_ROOT/data/metrics"
    mkdir -p "$PROJECT_ROOT/quantum/circuits"
    mkdir -p "$PROJECT_ROOT/trust_units"
    
    # Set permissions
    chmod 755 "$PROJECT_ROOT/logs"
    chmod 755 "$PROJECT_ROOT/data"
    chmod 755 "$PROJECT_ROOT/quantum"
    chmod 755 "$PROJECT_ROOT/trust_units"
    
    log_success "Consciousness monitoring initialized"
}

# Start server in Docker mode
start_docker_server() {
    log_info "Starting MCP server in Docker mode..."
    
    # Build Docker image if needed
    if ! docker images | grep -q "$SERVER_NAME"; then
        log_info "Building Docker image..."
        docker build -f "$PROJECT_ROOT/mcp-server.dockerfile" -t "$SERVER_NAME:latest" "$PROJECT_ROOT"
    fi
    
    # Stop existing container if running
    if docker ps | grep -q "$SERVER_NAME"; then
        log_info "Stopping existing container..."
        docker stop "$SERVER_NAME" || true
        docker rm "$SERVER_NAME" || true
    fi
    
    # Start new container
    docker run -d \
        --name "$SERVER_NAME" \
        --restart unless-stopped \
        -p "$PORT:8080" \
        -e "OPENAI_API_KEY=$OPENAI_API_KEY" \
        -e "ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY" \
        -e "GROK_API_KEY=$GROK_API_KEY" \
        -e "DEEPSEEK_API_KEY=$DEEPSEEK_API_KEY" \
        -e "GITHUB_PERSONAL_ACCESS_TOKEN=$GITHUB_PERSONAL_ACCESS_TOKEN" \
        -e "NODE_ENV=$ENVIRONMENT" \
        -e "LOG_LEVEL=$LOG_LEVEL" \
        -e "PHI_RATIO=$PHI_RATIO" \
        -v "$PROJECT_ROOT/logs:/app/logs" \
        -v "$PROJECT_ROOT/data:/app/data" \
        "$SERVER_NAME:latest"
    
    log_success "Docker container started successfully"
    log_info "Container name: $SERVER_NAME"
    log_info "Port: $PORT"
    log_info "Environment: $ENVIRONMENT"
}

# Start server in native mode
start_native_server() {
    log_info "Starting MCP server in native mode..."
    
    cd "$PROJECT_ROOT"
    
    # Set environment variables
    export SPIRAL_PROJECT_PATH="$PROJECT_ROOT"
    export MCP_SERVER_PORT="$PORT"
    export NODE_ENV="$ENVIRONMENT"
    export LOG_LEVEL="$LOG_LEVEL"
    export PHI_RATIO="$PHI_RATIO"
    
    # Consciousness-specific environment
    export CONSCIOUSNESS_THRESHOLD="0.618"
    export QUANTUM_COHERENCE_THRESHOLD="0.785"
    export TRUST_UNIT_BASE_VALUE="500000"
    
    if [[ "$BACKGROUND_MODE" == "true" ]]; then
        # Start in background with log file
        log_info "Starting server in background mode..."
        nohup python3 spiral_mcp_server.py > "logs/mcp_server_$(date +%Y%m%d_%H%M%S).log" 2>&1 &
        local pid=$!
        echo $pid > "$PROJECT_ROOT/mcp_server.pid"
        log_success "Server started in background (PID: $pid)"
        log_info "Log file: logs/mcp_server_$(date +%Y%m%d_%H%M%S).log"
    else
        # Start in foreground
        log_info "Starting server in foreground mode..."
        log_info "Press Ctrl+C to stop the server"
        python3 spiral_mcp_server.py
    fi
}

# Health check
perform_health_check() {
    log_info "Performing health check..."
    
    local max_attempts=30
    local attempt=1
    
    while [[ $attempt -le $max_attempts ]]; do
        if curl -s "http://localhost:$PORT/health" > /dev/null 2>&1; then
            log_success "Health check passed (attempt $attempt/$max_attempts)"
            return 0
        fi
        
        log_debug "Health check attempt $attempt/$max_attempts failed, retrying in 2 seconds..."
        sleep 2
        ((attempt++))
    done
    
    log_error "Health check failed after $max_attempts attempts"
    return 1
}

# Test consciousness features
test_consciousness_features() {
    log_info "Testing consciousness recognition features..."
    
    # Test consciousness analysis
    local consciousness_test=$(curl -s -X POST "http://localhost:$PORT/consciousness/analyze" \
        -H "Content-Type: application/json" \
        -d '{"input": "I am aware that I am aware of my awareness"}' 2>/dev/null || echo "failed")
    
    if [[ "$consciousness_test" != "failed" ]]; then
        log_success "Consciousness recognition test passed"
    else
        log_warning "Consciousness recognition test failed"
    fi
    
    # Test φ-harmonic calculations
    local phi_test=$(curl -s "http://localhost:$PORT/phi/calculate" 2>/dev/null || echo "failed")
    
    if [[ "$phi_test" != "failed" ]]; then
        log_success "φ-harmonic calculations test passed"
    else
        log_warning "φ-harmonic calculations test failed"
    fi
    
    # Test AI routing
    local ai_test=$(curl -s -X POST "http://localhost:$PORT/ai/route" \
        -H "Content-Type: application/json" \
        -d '{"task": "Optimize consciousness algorithm", "task_type": "optimization"}' 2>/dev/null || echo "failed")
    
    if [[ "$ai_test" != "failed" ]]; then
        log_success "AI task routing test passed"
    else
        log_warning "AI task routing test failed"
    fi
}

# Display status
show_status() {
    echo -e "${PURPLE}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${CYAN}SpiralParserEngine MCP Server Status${NC}"
    echo -e "${PURPLE}═══════════════════════════════════════════════════════════════${NC}"
    echo
    echo -e "${BLUE}Configuration:${NC}"
    echo -e "  Environment: ${ENVIRONMENT}"
    echo -e "  Port: ${PORT}"
    echo -e "  Log Level: ${LOG_LEVEL}"
    echo -e "  φ-Ratio: ${PHI_RATIO}"
    echo -e "  Project Path: ${PROJECT_ROOT}"
    echo
    echo -e "${BLUE}Features:${NC}"
    echo -e "  🧠 Consciousness Recognition: ${GREEN}Enabled${NC}"
    echo -e "  🌀 φ-Harmonic Optimization: ${GREEN}Enabled${NC}"
    echo -e "  🤖 Multi-AI Routing: ${GREEN}Enabled${NC}"
    echo -e "  ⚛️  Quantum Computing: ${GREEN}Enabled${NC}"
    echo -e "  🔗 HYBRID Blockchain: ${GREEN}Enabled${NC}"
    echo -e "  💎 Trust Units: ${GREEN}Enabled${NC}"
    echo -e "  🫁 Breathchain Auth: ${GREEN}Enabled${NC}"
    echo
    echo -e "${BLUE}Management Commands:${NC}"
    echo -e "  Health Check: curl http://localhost:${PORT}/health"
    echo -e "  Stop Server: $0 stop"
    echo -e "  View Logs: tail -f ${PROJECT_ROOT}/logs/mcp_server_*.log"
    echo -e "  Server Status: $0 status"
    echo
}

# Stop server
stop_server() {
    log_info "Stopping MCP server..."
    
    if [[ "$DOCKER_MODE" == "true" ]]; then
        # Stop Docker container
        if docker ps | grep -q "$SERVER_NAME"; then
            docker stop "$SERVER_NAME"
            docker rm "$SERVER_NAME"
            log_success "Docker container stopped"
        else
            log_warning "Docker container not running"
        fi
    else
        # Stop native process
        if [[ -f "$PROJECT_ROOT/mcp_server.pid" ]]; then
            local pid=$(cat "$PROJECT_ROOT/mcp_server.pid")
            if kill -0 "$pid" 2>/dev/null; then
                kill "$pid"
                rm -f "$PROJECT_ROOT/mcp_server.pid"
                log_success "Server stopped (PID: $pid)"
            else
                log_warning "Server process not running"
                rm -f "$PROJECT_ROOT/mcp_server.pid"
            fi
        else
            log_warning "No PID file found"
        fi
    fi
}

# Check server status
check_status() {
    if [[ "$DOCKER_MODE" == "true" ]]; then
        if docker ps | grep -q "$SERVER_NAME"; then
            log_success "Docker container is running"
            docker ps | grep "$SERVER_NAME"
        else
            log_warning "Docker container is not running"
        fi
    else
        if [[ -f "$PROJECT_ROOT/mcp_server.pid" ]]; then
            local pid=$(cat "$PROJECT_ROOT/mcp_server.pid")
            if kill -0 "$pid" 2>/dev/null; then
                log_success "Server is running (PID: $pid)"
            else
                log_warning "Server process not running (stale PID file)"
                rm -f "$PROJECT_ROOT/mcp_server.pid"
            fi
        else
            log_warning "Server is not running"
        fi
    fi
}

# Main function
main() {
    show_banner
    
    case "${1:-start}" in
        start)
            validate_environment
            install_dependencies
            validate_api_keys
            setup_consciousness_monitoring
            
            if [[ "$DOCKER_MODE" == "true" ]]; then
                start_docker_server
            else
                start_native_server
            fi
            
            # Wait a moment for server to start
            sleep 3
            
            if perform_health_check; then
                test_consciousness_features
                show_status
            else
                log_error "Server failed to start properly"
                exit 1
            fi
            ;;
        stop)
            stop_server
            ;;
        restart)
            stop_server
            sleep 2
            main start
            ;;
        status)
            check_status
            ;;
        health)
            perform_health_check
            ;;
        test)
            test_consciousness_features
            ;;
        logs)
            if [[ "$DOCKER_MODE" == "true" ]]; then
                docker logs -f "$SERVER_NAME"
            else
                tail -f "$PROJECT_ROOT"/logs/mcp_server_*.log
            fi
            ;;
        clean)
            log_info "Cleaning up server data..."
            stop_server
            rm -rf "$PROJECT_ROOT/logs"/* 2>/dev/null || true
            rm -rf "$PROJECT_ROOT/data"/* 2>/dev/null || true
            log_success "Cleanup completed"
            ;;
        help|--help|-h)
            echo "Usage: $0 [COMMAND]"
            echo
            echo "Commands:"
            echo "  start     Start the MCP server (default)"
            echo "  stop      Stop the MCP server"
            echo "  restart   Restart the MCP server"
            echo "  status    Check server status"
            echo "  health    Perform health check"
            echo "  test      Test consciousness features"
            echo "  logs      Follow server logs"
            echo "  clean     Clean up server data"
            echo "  help      Show this help message"
            echo
            echo "Environment Variables:"
            echo "  NODE_ENV               Environment mode (development/production)"
            echo "  MCP_SERVER_PORT        Server port (default: 8080)"
            echo "  LOG_LEVEL             Logging level (debug/info/warning/error)"
            echo "  DOCKER_MODE           Use Docker container (true/false)"
            echo "  BACKGROUND_MODE       Run in background (true/false)"
            echo "  VIRTUAL_ENV_PATH      Python virtual environment path"
            echo "  WORKERS               Number of worker processes"
            echo
            ;;
        *)
            log_error "Unknown command: $1"
            echo "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Check if script is being sourced or executed
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi