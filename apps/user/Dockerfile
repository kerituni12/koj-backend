###################
# BUILD FOR DEVELOPMENT
###################

FROM node:16 as build

WORKDIR /app

RUN npm i -g pnpm@7

COPY .npmrc pnpm-lock.yaml package.json ./

RUN --mount=type=cache,mode=0777,id=pnpm-store,target=target=/root/.local/share/pnpm/store/v3 \
    pnpm install --frozen-lockfile

COPY . .

RUN cd apps/user/prisma && npx prismerge -i prismerge.json && npx prisma generate --schema _schema.prisma
RUN pnpm nx build user --prod

# ###################
# # BUILD FOR PRODUCTION
# ###################

FROM node:16-alpine as production

WORKDIR /app

RUN npm i -g pnpm@7

ENV NODE_ENV production

COPY  .npmrc pnpm-lock.yaml ./
COPY --from=build /app/dist/apps/user/package.json ./
COPY --from=build /app/dist/apps/user ./dist

RUN  --mount=type=cache,id=pnpm-store,target=target=/root/.local/share/pnpm/store/v3 \ 
    pnpm install --prod


CMD [ "node", "dist/main.js" ]