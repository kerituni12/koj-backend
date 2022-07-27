FROM python:3.8-slim
RUN apt-get update \
    && apt-get install parallel jq time -y \
    && apt-get clean
COPY start.sh start.sh
WORKDIR /app