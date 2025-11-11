#!/bin/sh

# Build Next.js app image
docker buildx build --no-cache -t pepi:latest ./app_web --load 

docker stack rm pepi

docker stack deploy -c docker-stack.yml pepi