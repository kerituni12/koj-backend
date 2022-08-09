###################
# BUILD FOR BASE
###################

FROM arm64v8/node:16-alpine As base

WORKDIR /app

RUN npm i -g pnpm@7

###################
# BUILD FOR DEVELOPMENT
###################

FROM base as build

COPY .npmrc pnpm-lock.yaml package.json ./

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store\
    pnpm install --frozen-lockfile

COPY . .

RUN pnpm nx build koj --prod

# ###################
# # BUILD FOR PRODUCTION
# ###################

FROM base as production

ENV NODE_ENV production

COPY  .npmrc pnpm-lock.yaml ./
COPY --from=build /app/dist/apps/koj/package.json ./
COPY --from=build /app/dist/apps/koj ./dist

RUN  --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store\ 
    pnpm install --prod


CMD [ "node", "dist/main.js" ]