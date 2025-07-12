FROM node:20-alpine

WORKDIR /app

# Only copy package files first for cache efficiency
COPY package*.json ./

RUN npm install

# Copy the rest of the client app
COPY . .