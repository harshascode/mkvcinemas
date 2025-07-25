FROM node:20-alpine AS sk-build
WORKDIR /usr/src/app

ARG PUBLIC_HELLO

COPY . /usr/src/app
RUN npm install
RUN npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /usr/src/app

COPY --from=sk-build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=sk-build /usr/src/app/package-lock.json /usr/src/app/package-lock.json
RUN npm install --omit=dev

COPY --from=sk-build /usr/src/app/build /usr/src/app/build

# Use the default non-root user provided by the base image
USER node

EXPOSE 3000
CMD ["node", "build/index.js"]

# docker build -t my-image:latest .
# docker run <id>


# FROM node:20-alpine AS sk-build
# WORKDIR /usr/src/app

# ARG PUBLIC_HELLO

# COPY . /usr/src/app
# RUN apk --no-cache add curl
# RUN npm install
# RUN npm run build

# # Stage 2: Production
# FROM node:20-alpine
# WORKDIR /usr/src/app

# RUN apk --no-cache add curl

# COPY --from=sk-build /usr/src/app/package.json /usr/src/app/package.json
# COPY --from=sk-build /usr/src/app/package-lock.json /usr/src/app/package-lock.json
# RUN npm install --only=production

# COPY --from=sk-build /usr/src/app/build /usr/src/app/build

# USER node

# EXPOSE 3000
# CMD ["node", "build/index.js"]
