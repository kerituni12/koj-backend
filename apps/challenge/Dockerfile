###################
# BUILD FOR DEVELOPMENT
###################

FROM node:16 as build

WORKDIR /app

RUN npm i -g pnpm@7

COPY .npmrc pnpm-lock.yaml package.json ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN cd apps/challenge/prisma && npx prismerge -i prismerge.json && npx prisma generate --schema _schema.prisma
RUN pnpm nx build challenge --prod

# ###################
# # BUILD FOR PRODUCTION
# ###################

FROM node:16-alpine as production

WORKDIR /app

RUN npm i -g pnpm@7

ENV NODE_ENV production

COPY  .npmrc pnpm-lock.yaml ./
COPY --from=build /app/dist/apps/challenge/package.json ./
COPY --from=build /app/dist/apps/challenge ./dist

RUN  pnpm install --prod

COPY --from=build /app/apps/challenge/prisma/_schema.prisma ./_schema.prisma 
RUN npx prisma generate --schema _schema.prisma

CMD [ "node", "dist/main.js" ]