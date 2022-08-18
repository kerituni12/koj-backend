
# BUILD FOR DEVELOPMENT

FROM node:16 as build

WORKDIR /app

RUN npm i -g pnpm@7

COPY .npmrc pnpm-lock.yaml package.json ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm nx build code-generator --prod

# PRODUCTION

FROM node:16-slim as production

WORKDIR /app

RUN apt-get update
RUN apt-get install -y openssl

RUN npm i -g pnpm@7

ENV NODE_ENV production

COPY  .npmrc pnpm-lock.yaml ./
COPY --from=build /app/dist/apps/code-generator/package.json ./
COPY --from=build /app/dist/apps/code-generator ./dist

RUN  pnpm install --prod

CMD [ "node", "dist/main.js" ]