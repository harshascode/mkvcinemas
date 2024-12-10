# Build stage
FROM node:20-alpine AS sk-build
WORKDIR /usr/src/app

# Install build dependencies in one layer
RUN apk --no-cache add curl python3 make g++

# Copy package.json and package-lock.json first for cache efficiency
COPY package.json package-lock.json /usr/src/app/
RUN npm install

# Copy application files and build the app
COPY . /usr/src/app
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /usr/src/app

# Install only production dependencies (without build tools)
RUN apk --no-cache add curl

# Copy only the necessary files from the build stage
COPY --from=sk-build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=sk-build /usr/src/app/package-lock.json /usr/src/app/package-lock.json
RUN npm install --only=production

# Copy the built files from the build stage
COPY --from=sk-build /usr/src/app/build /usr/src/app/build

# Switch to non-root user for security (optional)
USER node

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "build/index.js"]
