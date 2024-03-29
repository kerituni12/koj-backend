###################
# BUILD FOR DEVELOPMENT
###################

FROM node:16 as build

WORKDIR /app

RUN npm i -g pnpm@7

COPY .npmrc pnpm-lock.yaml package.json ./

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store\
    pnpm install --frozen-lockfile

COPY . .

RUN pnpm nx build comment --prod

# ###################
# # BUILD FOR PRODUCTION
# ###################

FROM node:16-alpine as production

WORKDIR /app

RUN npm i -g pnpm@7

ENV NODE_ENV production

COPY  .npmrc pnpm-lock.yaml ./
COPY --from=build /app/dist/apps/comment/package.json ./
COPY --from=build /app/dist/apps/comment ./dist

RUN  --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store\ 
    pnpm install --prod


CMD [ "node", "dist/main.js" ]