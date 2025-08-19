# Use the official Playwright image as the base image
FROM mcr.microsoft.com/playwright:v1.54.0-jammy

# Set the working directory inside the container
WORKDIR /app

# Copy package files (package.json and package-lock.json if present)
COPY package*.json ./

# Install project dependencies including Playwright
RUN npm install

# Copy the rest of your project files (tests, configs, etc.)
COPY . .

# Define the default command to run Playwright tests
CMD
#["npx", "playwright", "test"]
