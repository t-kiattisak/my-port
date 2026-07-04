# Multi-stage Dockerfile for production-ready Express TypeScript app

# --- STAGE 1: Build stage ---
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY src ./src

RUN npm run build

# --- STAGE 2: Run stage ---
FROM node:20-alpine AS runner

WORKDIR /usr/src/app

COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

COPY --from=builder /usr/src/app/dist ./dist

ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "dist/index.js"]
