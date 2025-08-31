# Use Jenkins inbound agent with JDK 17 as base
FROM jenkins/inbound-agent:latest-jdk17

USER root

# Install system dependencies safely
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    ca-certificates \
    git \
    unzip \
    wget \
    software-properties-common \
 && rm -rf /var/lib/apt/lists/*

# Install Node.js (using NodeSource setup script)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
 && apt-get install -y nodejs \
 && rm -rf /var/lib/apt/lists/*

# Set working dir
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy rest of your project
COPY . .

# Default command (optional)
CMD ["npx", "playwright", "test"]
