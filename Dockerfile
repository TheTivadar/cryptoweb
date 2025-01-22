FROM node:20-alpine AS builder

WORKDIR /app

COPY . .
RUN npm install --frozen-lockfile

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

RUN echo "export PS1='[\033[01;32m]\u@\h:[\033[01;34m]\w[\033[00m]$ '" >> ~/.bashrc
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

COPY --from=builder /app/.next/standalone /app
COPY --from=builder /app/.next/static /app/.next/static
COPY --from=builder /app/public /app/public

CMD node ./server.js