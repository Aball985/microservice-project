# syntax=docker/dockerfile:1

# Use an official Node runtime as a parent image
FROM node:20.10.0-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli@17.0.7

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Angular app for production
RUN ng build --configuration=production

# Expose port 80
EXPOSE 8080

# Start the Angular app
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "8080"]
