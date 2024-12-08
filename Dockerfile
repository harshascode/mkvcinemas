# Build stage
FROM node:19.7-alpine AS sk-build
WORKDIR /usr/src/app

ARG TZ=Europe/Stockholm
ARG PUBLIC_HELLO

# Install dependencies and timezone configuration
RUN apk --no-cache add curl tzdata python3 make g++

# Copy application files and install dependencies
COPY . /usr/src/app
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm install
RUN npm run build

# Production stage
FROM node:19.7-alpine
WORKDIR /usr/src/app

ARG TZ=Europe/Stockholm

# Install only production dependencies and set timezone
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Copy only the necessary files from the build stage
COPY --from=sk-build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=sk-build /usr/src/app/package-lock.json /usr/src/app/package-lock.json
RUN npm install --only=production

# Copy built files
COPY --from=sk-build /usr/src/app/build /usr/src/app/build

EXPOSE 3000
CMD ["node", "build/index.js"]
