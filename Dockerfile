FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install --frozen-lock

RUN bun run build

EXPOSE 3000

CMD ["bun", "x", "serve", "dist"]