# BUILD FOR DEVELOPMENT

FROM node:16 as build

WORKDIR /app

RUN npm i -g pnpm@7

COPY .npmrc pnpm-lock.yaml package.json ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN cd apps/user/prisma && npx prismerge -i prismerge.json && npx prisma generate --schema _schema.prisma
RUN pnpm nx build user --prod

# PRODUCTION

FROM node:16-slim as production

WORKDIR /app

RUN apt-get update
RUN apt-get install -y openssl
RUN apt-get install -y libpq-dev g++ make
RUN apt-get update && \
    apt-get install -y python3 && \
    rm -rf /var/lib/apt/lists/*

RUN npm i -g pnpm@7

ENV NODE_ENV production

COPY  .npmrc pnpm-lock.yaml ./
COPY --from=build /app/dist/apps/user/package.json ./
COPY --from=build /app/dist/apps/user ./dist

RUN  pnpm install --prod

COPY --from=build /app/apps/user/prisma/_schema.prisma ./_schema.prisma 
RUN npx prisma generate --schema _schema.prisma

CMD [ "node", "dist/main.js" ]