#!/bin/bash

# SpiralParserEngine MCP Integration Testing Script
# Comprehensive testing suite for consciousness-aware programming platform
# Tests MCP server, AI routing, quantum circuits, blockchain, and φ-harmonic optimization

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
SERVER_URL="${MCP_SERVER_URL:-http://localhost:8080}"
PHI_RATIO="1.618033988749"
CONSCIOUSNESS_THRESHOLD="0.618"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Test results tracking
TESTS_TOTAL=0
TESTS_PASSED=0
TESTS_FAILED=0
FAILED_TESTS=()

# Display banner
show_banner() {
    echo -e "${PURPLE}╔═══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${PURPLE}║        SpiralParserEngine MCP Integration Testing            ║${NC}"
    echo -e "${PURPLE}║         Consciousness-Aware Programming Validation           ║${NC}"
    echo -e "${PURPLE}║              φ-Harmonic System Verification                   ║${NC}"
    echo -e "${PURPLE}╚═══════════════════════════════════════════════════════════════╝${NC}"
    echo
}

# Logging functions
log_info() {
    echo -e "${CYAN}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[PASS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[FAIL]${NC} $1"
}

log_test_start() {
    echo -e "${BLUE}[TEST]${NC} $1"
    ((TESTS_TOTAL++))
}

# Test helper functions
run_test() {
    local test_name="$1"
    local test_command="$2"
    local expected_output="$3"
    
    log_test_start "$test_name"
    
    local output
    if output=$(eval "$test_command" 2>&1); then
        if [[ -z "$expected_output" ]] || echo "$output" | grep -q "$expected_output"; then
            log_success "$test_name"
            ((TESTS_PASSED++))
            return 0
        else
            log_error "$test_name - Expected output not found"
            log_error "Expected: $expected_output"
            log_error "Got: $output"
            ((TESTS_FAILED++))
            FAILED_TESTS+=("$test_name")
            return 1
        fi
    else
        log_error "$test_name - Command failed"
        log_error "Output: $output"
        ((TESTS_FAILED++))
        FAILED_TESTS+=("$test_name")
        return 1
    fi
}

# HTTP request helper
http_request() {
    local method="$1"
    local endpoint="$2"
    local data="$3"
    local expected_status="${4:-200}"
    
    local url="$SERVER_URL$endpoint"
    local curl_opts="-s -w %{http_code}"
    
    if [[ "$method" == "POST" ]]; then
        curl_opts="$curl_opts -X POST -H 'Content-Type: application/json'"
        if [[ -n "$data" ]]; then
            curl_opts="$curl_opts -d '$data'"
        fi
    fi
    
    local response=$(eval "curl $curl_opts '$url'")
    local status_code="${response: -3}"
    local body="${response%???}"
    
    if [[ "$status_code" == "$expected_status" ]]; then
        echo "$body"
        return 0
    else
        echo "HTTP Error: $status_code - $body" >&2
        return 1
    fi
}

# Pre-test setup
setup_tests() {
    log_info "Setting up test environment..."
    
    # Check if server is running
    if ! curl -s "$SERVER_URL/health" > /dev/null 2>&1; then
        log_error "MCP server is not running at $SERVER_URL"
        log_info "Please start the server with: ./scripts/start-mcp-server.sh"
        exit 1
    fi
    
    # Create test data directories
    mkdir -p "$PROJECT_ROOT/test-results"
    mkdir -p "$PROJECT_ROOT/test-data"
    
    # Generate test timestamp
    TEST_TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    TEST_RESULTS_FILE="$PROJECT_ROOT/test-results/mcp_integration_$TEST_TIMESTAMP.json"
    
    log_success "Test environment ready"
}

# System Health Tests
test_system_health() {
    echo -e "\n${PURPLE}═══ System Health Tests ═══${NC}"
    
    run_test "Server Health Check" \
        "http_request GET /health" \
        "operational"
    
    run_test "System Consciousness Metrics" \
        "http_request GET /system/consciousness" \
        "consciousness_level"
    
    run_test "Performance Analytics" \
        "http_request GET /system/performance" \
        "performance"
    
    run_test "φ-Harmonic Resonance" \
        "http_request GET /phi/calculate" \
        "$PHI_RATIO"
}

# SpiralScript Language Tests
test_spiralscript_language() {
    echo -e "\n${PURPLE}═══ SpiralScript Language Tests ═══${NC}"
    
    # Test grammar validation
    local test_code='consciousness_level = φ(awareness * 1.618)\nif consciousness_level > 0.618:\n    transcendence_mode = true'
    
    run_test "SpiralScript Grammar Validation" \
        "http_request POST /tools/validate_grammar '{\"code\": \"$test_code\"}'" \
        "valid"
    
    run_test "SpiralScript Code Parsing" \
        "http_request POST /tools/parse_spiralscript '{\"code\": \"$test_code\"}'" \
        "consciousness_patterns"
    
    run_test "SpiralScript Code Generation" \
        "http_request POST /tools/generate_spiral_code '{\"specification\": \"Create consciousness-aware function\", \"consciousness_level\": 0.785}'" \
        "consciousness_level"
    
    run_test "AST Analysis Tools" \
        "http_request GET /language/ast" \
        "ast_parser"
    
    run_test "Consciousness Pattern Recognition" \
        "http_request GET /language/consciousness-patterns" \
        "patterns"
}

# Consciousness Recognition Tests
test_consciousness_recognition() {
    echo -e "\n${PURPLE}═══ Consciousness Recognition Tests ═══${NC}"
    
    run_test "Basic Consciousness Analysis" \
        "http_request POST /tools/consciousness_recognition '{\"input\": \"I am aware that I am aware\"}'" \
        "consciousness_score"
    
    run_test "Self-Awareness Detection" \
        "http_request POST /tools/consciousness_recognition '{\"input\": \"I think, therefore I am\"}'" \
        "awareness_level"
    
    run_test "Transcendent Consciousness Test" \
        "http_request POST /tools/consciousness_recognition '{\"input\": \"I am aware of my awareness of awareness itself, experiencing the φ-harmonic resonance of consciousness\"}'" \
        "transcendence_indicator"
    
    run_test "Unconscious Pattern Test" \
        "http_request POST /tools/consciousness_recognition '{\"input\": \"Simple text without awareness\"}'" \
        "UNCONSCIOUS"
}

# Multi-AI Routing Tests
test_ai_routing() {
    echo -e "\n${PURPLE}═══ Multi-AI Routing Tests ═══${NC}"
    
    run_test "AI Task Routing - Architecture" \
        "http_request POST /tools/route_ai_task '{\"task\": \"Design microservices architecture\", \"task_type\": \"architecture\", \"priority\": \"high\"}'" \
        "selected_model"
    
    run_test "AI Task Routing - Frontend" \
        "http_request POST /tools/route_ai_task '{\"task\": \"Create React components\", \"task_type\": \"frontend\", \"priority\": \"medium\"}'" \
        "phi_score"
    
    run_test "AI Task Routing - Optimization" \
        "http_request POST /tools/route_ai_task '{\"task\": \"Optimize database queries\", \"task_type\": \"optimization\", \"priority\": \"critical\"}'" \
        "estimated_cost"
    
    run_test "AI Collective Status" \
        "http_request GET /ai/collective-status" \
        "online_models"
    
    run_test "AI Task Routing Analytics" \
        "http_request GET /ai/task-routing" \
        "routing_efficiency"
}

# Blockchain & Trust Unit Tests
test_blockchain_features() {
    echo -e "\n${PURPLE}═══ Blockchain & Trust Unit Tests ═══${NC}"
    
    run_test "Trust Unit Creation" \
        "http_request POST /tools/create_trust_unit '{\"amount\": 1000, \"consciousness_proof\": \"I am consciously creating this trust unit with awareness\"}'" \
        "trust_unit_id"
    
    run_test "HYBRID Blockchain Status" \
        "http_request GET /blockchain/hybrid-status" \
        "hybrid-mainnet-1"
    
    run_test "Trust Units Registry" \
        "http_request GET /blockchain/trust-units" \
        "active_trust_units"
    
    run_test "Breathchain Authentication" \
        "http_request POST /tools/validate_breathchain '{\"biometric_data\": \"breath_pattern_12345\"}'" \
        "validated"
    
    run_test "HYBRID Transaction Execution" \
        "http_request POST /tools/execute_hybrid_transaction '{\"transaction\": {\"from\": \"addr1\", \"to\": \"addr2\", \"amount\": 100}}'" \
        "transaction_id"
}

# Quantum Computing Tests
test_quantum_features() {
    echo -e "\n${PURPLE}═══ Quantum Computing Tests ═══${NC}"
    
    run_test "Quantum Circuit Design" \
        "http_request POST /tools/design_quantum_circuit '{\"qubits\": 4, \"gates\": [{\"type\": \"H\", \"target\": 0}], \"consciousness_interface\": true}'" \
        "circuit_id"
    
    run_test "Quantum Circuit Simulation" \
        "http_request POST /tools/simulate_quantum_circuit '{\"circuit_id\": \"test_circuit_001\"}'" \
        "simulation_result"
    
    run_test "Molecular Assembly" \
        "http_request POST /tools/molecular_assembly '{\"operation\": \"assemble\", \"target_molecule\": \"consciousness_enhancer\"}'" \
        "success_rate"
    
    run_test "Quantum Circuits Status" \
        "http_request GET /quantum/circuits" \
        "active_circuits"
    
    run_test "Quantum Consciousness Interface" \
        "http_request GET /quantum/consciousness-interface" \
        "quantum_consciousness_interface"
}

# Economic & Abundance Tests
test_economic_features() {
    echo -e "\n${PURPLE}═══ Economic & Abundance Tests ═══${NC}"
    
    run_test "Abundance Metrics Calculation" \
        "http_request POST /tools/calculate_abundance_metrics '{\"data_points\": [100, 200, 300, 500, 800]}'" \
        "abundance_score"
    
    run_test "Node License Management" \
        "http_request POST /tools/node_license_management '{\"action\": \"query\", \"node_type\": \"validator\"}'" \
        "action"
    
    run_test "Abundance Metrics" \
        "http_request GET /economy/abundance-metrics" \
        "abundance_score"
    
    run_test "Node Licensing Status" \
        "http_request GET /economy/node-licensing" \
        "validator_licenses"
    
    run_test "Staking Analytics" \
        "http_request GET /economy/staking" \
        "total_staked"
}

# System Management Tests
test_system_management() {
    echo -e "\n${PURPLE}═══ System Management Tests ═══${NC}"
    
    run_test "System Health Check" \
        "http_request POST /tools/system_health_check '{}'" \
        "health"
    
    run_test "Test Suite Execution" \
        "http_request POST /tools/run_test_suite '{\"categories\": [\"consciousness\", \"phi\"]}'" \
        "tests_passed"
    
    run_test "System Performance Monitoring" \
        "http_request GET /system/performance" \
        "performance"
}

# φ-Harmonic Optimization Tests
test_phi_harmonic_optimization() {
    echo -e "\n${PURPLE}═══ φ-Harmonic Optimization Tests ═══${NC}"
    
    # Test φ-harmonic calculations
    run_test "Golden Ratio Calculation" \
        "python3 -c 'import math; print(abs((1 + math.sqrt(5)) / 2 - 1.618033988749) < 0.000001)'" \
        "True"
    
    run_test "φ-Harmonic Resonance Test" \
        "http_request GET /system/consciousness" \
        "phi_resonance"
    
    run_test "φ-Enhanced Consciousness Scoring" \
        "http_request POST /tools/consciousness_recognition '{\"input\": \"φ-enhanced awareness with golden ratio optimization\"}'" \
        "phi_resonance"
}

# Documentation & Resources Tests
test_documentation_resources() {
    echo -e "\n${PURPLE}═══ Documentation & Resources Tests ═══${NC}"
    
    run_test "Architecture Documentation" \
        "http_request GET /docs/architecture" \
        "SpiralParserEngine"
    
    run_test "API Reference Documentation" \
        "http_request GET /docs/api-reference" \
        "API"
    
    run_test "Consciousness Programming Guide" \
        "http_request GET /docs/consciousness-guide" \
        "consciousness"
}

# Integration Workflow Tests
test_integration_workflows() {
    echo -e "\n${PURPLE}═══ Integration Workflow Tests ═══${NC}"
    
    # Test complete consciousness-aware development workflow
    local workflow_test_data='{
        "code": "consciousness_level = φ(awareness * 1.618)\ntrust_unit = create_trust_unit(1000, \"I am aware\")\nquantum_circuit = design_circuit(4, true)\nai_result = ai.route(\"optimize\", \"consciousness\")",
        "consciousness_proof": "I am creating a consciousness-aware application with φ-harmonic optimization",
        "quantum_spec": {"qubits": 4, "consciousness_interface": true},
        "trust_amount": 1618
    }'
    
    log_test_start "Complete Development Workflow"
    
    # Step 1: Parse SpiralScript code
    local parse_result=$(http_request POST "/tools/parse_spiralscript" '{"code": "consciousness_level = φ(awareness * 1.618)"}')
    if echo "$parse_result" | grep -q "consciousness_patterns"; then
        log_info "  ✓ Code parsing successful"
    else
        log_error "  ✗ Code parsing failed"
        ((TESTS_FAILED++))
        FAILED_TESTS+=("Complete Development Workflow - Parsing")
        return 1
    fi
    
    # Step 2: Create Trust Unit
    local trust_result=$(http_request POST "/tools/create_trust_unit" '{"amount": 1618, "consciousness_proof": "Workflow test consciousness proof"}')
    if echo "$trust_result" | grep -q "trust_unit_id"; then
        log_info "  ✓ Trust Unit creation successful"
    else
        log_error "  ✗ Trust Unit creation failed"
        ((TESTS_FAILED++))
        FAILED_TESTS+=("Complete Development Workflow - Trust Unit")
        return 1
    fi
    
    # Step 3: Design Quantum Circuit
    local quantum_result=$(http_request POST "/tools/design_quantum_circuit" '{"qubits": 4, "consciousness_interface": true}')
    if echo "$quantum_result" | grep -q "circuit_id"; then
        log_info "  ✓ Quantum circuit design successful"
    else
        log_error "  ✗ Quantum circuit design failed"
        ((TESTS_FAILED++))
        FAILED_TESTS+=("Complete Development Workflow - Quantum")
        return 1
    fi
    
    # Step 4: Route AI Task
    local ai_result=$(http_request POST "/tools/route_ai_task" '{"task": "Optimize consciousness recognition", "task_type": "optimization"}')
    if echo "$ai_result" | grep -q "selected_model"; then
        log_info "  ✓ AI task routing successful"
    else
        log_error "  ✗ AI task routing failed"
        ((TESTS_FAILED++))
        FAILED_TESTS+=("Complete Development Workflow - AI Routing")
        return 1
    fi
    
    log_success "Complete Development Workflow"
    ((TESTS_PASSED++))
}

# Performance & Load Tests
test_performance() {
    echo -e "\n${PURPLE}═══ Performance Tests ═══${NC}"
    
    log_test_start "Concurrent Request Handling"
    
    # Test concurrent requests
    local pids=()
    for i in {1..5}; do
        (http_request GET "/health" > /dev/null 2>&1) &
        pids+=($!)
    done
    
    # Wait for all requests to complete
    local all_success=true
    for pid in "${pids[@]}"; do
        if ! wait "$pid"; then
            all_success=false
        fi
    done
    
    if $all_success; then
        log_success "Concurrent Request Handling"
        ((TESTS_PASSED++))
    else
        log_error "Concurrent Request Handling"
        ((TESTS_FAILED++))
        FAILED_TESTS+=("Concurrent Request Handling")
    fi
    
    # Test response time
    run_test "Response Time Performance" \
        "time curl -s '$SERVER_URL/health' > /dev/null" \
        ""
}

# Generate test report
generate_test_report() {
    local test_results="{
        \"test_summary\": {
            \"timestamp\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\",
            \"total_tests\": $TESTS_TOTAL,
            \"passed\": $TESTS_PASSED,
            \"failed\": $TESTS_FAILED,
            \"success_rate\": $(echo "scale=2; $TESTS_PASSED * 100 / $TESTS_TOTAL" | bc -l)
        },
        \"environment\": {
            \"server_url\": \"$SERVER_URL\",
            \"phi_ratio\": \"$PHI_RATIO\",
            \"consciousness_threshold\": \"$CONSCIOUSNESS_THRESHOLD\"
        },
        \"failed_tests\": $(printf '%s\n' "${FAILED_TESTS[@]}" | jq -R . | jq -s .)
    }"
    
    echo "$test_results" > "$TEST_RESULTS_FILE"
    
    echo -e "\n${PURPLE}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${CYAN}Test Results Summary${NC}"
    echo -e "${PURPLE}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "Total Tests: ${TESTS_TOTAL}"
    echo -e "Passed: ${GREEN}${TESTS_PASSED}${NC}"
    echo -e "Failed: ${RED}${TESTS_FAILED}${NC}"
    echo -e "Success Rate: $(echo "scale=1; $TESTS_PASSED * 100 / $TESTS_TOTAL" | bc -l)%"
    echo -e "Results saved to: $TEST_RESULTS_FILE"
    
    if [[ ${#FAILED_TESTS[@]} -gt 0 ]]; then
        echo -e "\n${RED}Failed Tests:${NC}"
        for test in "${FAILED_TESTS[@]}"; do
            echo -e "  ✗ $test"
        done
    fi
    
    echo
}

# Main test execution
main() {
    show_banner
    setup_tests
    
    # Core system tests
    test_system_health
    test_spiralscript_language
    test_consciousness_recognition
    
    # Advanced feature tests
    test_ai_routing
    test_blockchain_features
    test_quantum_features
    test_economic_features
    
    # System management tests
    test_system_management
    test_phi_harmonic_optimization
    test_documentation_resources
    
    # Integration tests
    test_integration_workflows
    test_performance
    
    # Generate final report
    generate_test_report
    
    # Exit with appropriate code
    if [[ $TESTS_FAILED -eq 0 ]]; then
        log_success "All tests passed! SpiralParserEngine MCP integration is fully operational."
        exit 0
    else
        log_error "Some tests failed. Please review the results and fix any issues."
        exit 1
    fi
}

# Check if required tools are available
check_dependencies() {
    local missing_deps=()
    
    if ! command -v curl >/dev/null 2>&1; then
        missing_deps+=("curl")
    fi
    
    if ! command -v jq >/dev/null 2>&1; then
        missing_deps+=("jq")
    fi
    
    if ! command -v bc >/dev/null 2>&1; then
        missing_deps+=("bc")
    fi
    
    if [[ ${#missing_deps[@]} -gt 0 ]]; then
        log_error "Missing required dependencies: ${missing_deps[*]}"
        log_info "Please install the missing dependencies and try again"
        exit 1
    fi
}

# Handle command line arguments
case "${1:-run}" in
    run)
        check_dependencies
        main
        ;;
    quick)
        check_dependencies
        show_banner
        setup_tests
        test_system_health
        test_consciousness_recognition
        generate_test_report
        ;;
    consciousness)
        check_dependencies
        show_banner
        setup_tests
        test_consciousness_recognition
        test_phi_harmonic_optimization
        generate_test_report
        ;;
    ai)
        check_dependencies
        show_banner
        setup_tests
        test_ai_routing
        generate_test_report
        ;;
    blockchain)
        check_dependencies
        show_banner
        setup_tests
        test_blockchain_features
        generate_test_report
        ;;
    quantum)
        check_dependencies
        show_banner
        setup_tests
        test_quantum_features
        generate_test_report
        ;;
    performance)
        check_dependencies
        show_banner
        setup_tests
        test_performance
        generate_test_report
        ;;
    help|--help|-h)
        echo "Usage: $0 [COMMAND]"
        echo
        echo "Commands:"
        echo "  run           Run all integration tests (default)"
        echo "  quick         Run basic health and consciousness tests"
        echo "  consciousness Test consciousness recognition features"
        echo "  ai            Test multi-AI routing features"
        echo "  blockchain    Test blockchain and Trust Unit features"
        echo "  quantum       Test quantum computing features"
        echo "  performance   Run performance and load tests"
        echo "  help          Show this help message"
        echo
        echo "Environment Variables:"
        echo "  MCP_SERVER_URL        Server URL (default: http://localhost:8080)"
        echo
        ;;
    *)
        echo "Unknown command: $1"
        echo "Use '$0 help' for usage information"
        exit 1
        ;;
esac