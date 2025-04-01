FROM node:23-bullseye

# Install additional tools you need
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare pnpm@latest --activate

# Create non-root user (node user already exists in official image)
USER node
WORKDIR /workspace/app

# This will be overwritten by the mount
COPY --chown=node:node package*.json ./

# install pnpm with wget

RUN pnpm install