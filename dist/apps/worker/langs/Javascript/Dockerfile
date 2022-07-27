FROM node:14.17.0-alpine

RUN adduser --disabled-password --gecos "" runner
RUN apk add --no-cache bash parallel jq --update coreutils

USER runner
RUN /bin/bash -c "echo 'will cite' | parallel --citation || true"

COPY start.sh start.sh
WORKDIR /app

# date in alpine missing %N => need update coreutils  