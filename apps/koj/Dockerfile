
# BUILD FOR DEVELOPMENT

FROM node:16 as build

WORKDIR /app

RUN npm i -g pnpm@7

COPY .npmrc pnpm-lock.yaml package.json ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN cd apps/koj/prisma && npx prismerge -i prismerge.json && npx prisma generate --schema _schema.prisma
RUN pnpm nx build koj --prod

# PRODUCTION

FROM node:16-slim as production

WORKDIR /app

RUN apt-get update
RUN apt-get install -y openssl

RUN npm i -g pnpm@7

ENV NODE_ENV production

COPY  .npmrc pnpm-lock.yaml ./
COPY --from=build /app/apps/koj/package.json ./
COPY --from=build /app/dist/apps/koj ./dist

RUN  pnpm install --prod
RUN pnpm add graphql-type-json@^0.3.2

COPY --from=build /app/apps/koj/prisma/_schema.prisma ./_schema.prisma 
RUN npx prisma generate --schema _schema.prisma

CMD [ "node", "dist/main.js" ]