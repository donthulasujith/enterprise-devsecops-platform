# Base image
FROM node:22-bookworm

# Working directory inside the container
WORKDIR /app

# Copy entire Application
COPY . .

# Install dependencies
RUN npm install

#Adding non-root user
USER node


# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
