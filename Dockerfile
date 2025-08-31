# Base: Jenkins inbound agent (has agent entrypoint & JNLP/WebSocket support)
FROM jenkins/inbound-agent:latest-jdk17

USER root

# Install system deps needed for Playwright (Ubuntu Jammy base)
RUN apt-get update && \
    apt-get install -y curl gnupg ca-certificates git unzip wget && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Playwright and its browsers
RUN npm i -g npm@latest && \
    npm i -g playwright && \
    npx playwright install --with-deps

# Set workdir for Jenkins builds
WORKDIR /home/jenkins/agent

# Drop back to jenkins user (required by inbound-agent)
USER jenkins

# Copy your project (optional — if you only want agent infra, skip this and let Jenkins checkout)
# COPY . .

# The ENTRYPOINT/CMD comes from jenkins/inbound-agent base
# Do NOT override it, or the agent won't register
