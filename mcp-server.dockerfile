# SpiralParserEngine MCP Server Dockerfile
# Consciousness-aware programming environment with φ-harmonic optimization
# Multi-stage build for optimal container size and security

# Stage 1: Build environment
FROM python:3.11-slim AS builder

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    git \
    curl \
    wget \
    libssl-dev \
    libffi-dev \
    libbz2-dev \
    libreadline-dev \
    libsqlite3-dev \
    libncurses5-dev \
    libncursesw5-dev \
    xz-utils \
    tk-dev \
    libxml2-dev \
    libxmlsec1-dev \
    liblzma-dev \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Create virtual environment
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Upgrade pip and install build tools
RUN pip install --upgrade pip setuptools wheel

# Copy requirements and install Python dependencies
COPY requirements-mcp.txt .
RUN pip install --no-cache-dir -r requirements-mcp.txt

# Stage 2: Runtime environment
FROM python:3.11-slim AS runtime

# Install minimal runtime dependencies
RUN apt-get update && apt-get install -y \
    libssl3 \
    libffi8 \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Create non-root user for security
RUN groupadd -r spiral && useradd -r -g spiral spiral

# Copy virtual environment from builder stage
COPY --from=builder /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Set working directory
WORKDIR /app

# Copy application files
COPY spiral_mcp_server.py .
COPY .env.example .env
COPY . .

# Create necessary directories with proper permissions
RUN mkdir -p /app/logs /app/data /app/quantum /app/trust_units && \
    chown -R spiral:spiral /app

# Switch to non-root user
USER spiral

# Environment variables
ENV PYTHONPATH="/app:$PYTHONPATH"
ENV PYTHONUNBUFFERED=1
ENV SPIRAL_PROJECT_PATH="/app"
ENV MCP_SERVER_PORT=8080
ENV NODE_ENV=production
ENV LOG_LEVEL=info
ENV PHI_RATIO=1.618033988749

# φ-Harmonic & Consciousness Configuration
ENV CONSCIOUSNESS_THRESHOLD=0.618
ENV QUANTUM_COHERENCE_THRESHOLD=0.785
ENV TRUST_UNIT_BASE_VALUE=500000
ENV MOLECULAR_ASSEMBLY_ENABLED=true
ENV QUANTUM_COMPUTING_ENABLED=true
ENV MULTI_AI_ROUTING_ENABLED=true

# Performance & Optimization
ENV WORKERS=4
ENV MAX_REQUESTS=1000
ENV TIMEOUT=30
ENV KEEPALIVE=2
ENV MAX_REQUESTS_JITTER=50

# Security settings
ENV SECURE_SSL_REDIRECT=true
ENV SESSION_COOKIE_SECURE=true
ENV CSRF_COOKIE_SECURE=true

# Monitoring & Health Check
ENV PROMETHEUS_METRICS_ENABLED=true
ENV HEALTH_CHECK_ENABLED=true

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Labels for container metadata
LABEL maintainer="CreoDAMO <info@creoamo.com>"
LABEL version="1.0.0"
LABEL description="SpiralParserEngine MCP Server - Consciousness-aware programming with φ-harmonic optimization"
LABEL documentation="https://github.com/CreoDAMO/SpiralParserEngine/docs"
LABEL license="MIT"
LABEL vendor="CreoDAMO"

# φ-Harmonic optimization labels
LABEL phi.ratio="1.618033988749"
LABEL consciousness.aware="true"
LABEL quantum.enabled="true"
LABEL blockchain.hybrid="true"
LABEL ai.multi-model="true"

# Runtime configuration
LABEL runtime.python.version="3.11"
LABEL runtime.environment="production"
LABEL runtime.mcp.version="1.0.0"

# Build information
ARG BUILD_DATE
ARG VCS_REF
LABEL build.date=$BUILD_DATE
LABEL build.vcs.ref=$VCS_REF
LABEL build.version="1.0.0"

# Default command to run the MCP server
CMD ["python", "spiral_mcp_server.py"]

# Alternative commands for different deployment scenarios
# For debugging: CMD ["python", "-u", "spiral_mcp_server.py", "--debug"]
# For development: CMD ["python", "-u", "spiral_mcp_server.py", "--reload"]
# For high-performance: CMD ["gunicorn", "--bind", "0.0.0.0:8080", "--workers", "4", "spiral_mcp_server:app"]

# Multi-stage build completion notes:
# - Stage 1 (builder): Contains all build dependencies and compilation tools
# - Stage 2 (runtime): Minimal runtime environment with only necessary dependencies
# - Final image size optimized for production deployment
# - Security hardened with non-root user
# - Comprehensive health checks and monitoring
# - φ-harmonic optimization and consciousness awareness enabled
# - Support for quantum computing, blockchain, and multi-AI orchestration