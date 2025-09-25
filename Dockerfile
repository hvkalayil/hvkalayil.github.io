# Stage 1: Build
FROM oven/bun:1.1.26 AS builder

WORKDIR /app

# Copy lock + package first for caching
COPY bun.lock package.json ./
RUN bun install --frozen-lock

# Copy everything else
COPY . .

# Build the static site
RUN bun run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy build output to nginx's default serve dir
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Nginx runs by default with CMD ["nginx", "-g", "daemon off;"]