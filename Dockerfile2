# Use the official Playwright image as the base image
FROM mcr.microsoft.com/playwright:v1.54.0-jammy

# Set the working directory inside the container
WORKDIR /app

# Copy package files (package.json and package-lock.json if present)
COPY package*.json ./

# Install project dependencies including Playwright
RUN npm install

# After npm install
#RUN mkdir -p /home/jenkins/.npm && chown -R 1000:1000 /home/jenkins/.npm
# Or for your user inside container:
#RUN chown -R 1000:1000 /root/.npm || true

# Copy the rest of your project files (tests, configs, etc.)
COPY . .

# Define the default command to run Playwright tests
CMD
#["npx", "playwright", "test"]
