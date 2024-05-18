FROM oven/bun:1 as base
WORKDIR /usr/src/app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .

FROM base AS release

COPY --from=base /usr/src/app/node_modules ./node_modules

COPY --from=base /usr/src/app/index.ts ./
COPY --from=base /usr/src/app/package.json ./

USER bun
EXPOSE 3000/tcp
CMD ["bun", "run", "dev"]
