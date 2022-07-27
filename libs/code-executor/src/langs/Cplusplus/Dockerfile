FROM alpine:latest

RUN adduser --disabled-password --gecos "" runner
RUN apk update && \
    apk upgrade && \
    apk --update add \
    gcc \
    g++ \
    jq \
    parallel \
    coreutils \
    build-base \
    cmake \
    bash \
    libstdc++ \
    cppcheck && \
    rm -rf /var/cache/apk/*

USER runner
RUN /bin/bash -c "echo 'will cite' | parallel --citation || true"

COPY start.sh start.sh
WORKDIR /app

# date in alpine missing %N => need update coreutils  

# FROM gcc:4.9
# RUN curl -L -o /usr/bin/jq https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 && chmod +x "/usr/bin/jq"
# RUN apt-get update \
#     && apt-get install parallel time -y \
#     && apt-get clean
# COPY start.sh start.sh
# WORKDIR /app
