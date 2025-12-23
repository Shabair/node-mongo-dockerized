# Use official Node image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy rest of the app
COPY . .

# Expose app port
EXPOSE 5050

# Start the app
CMD ["node", "server.js"]
