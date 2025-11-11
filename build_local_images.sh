#!/bin/sh

# Build Next.js app image
docker buildx build --no-cache -t sanjalica-web:latest ./app_web --load 

docker stack rm sanjalica && sleep 5

docker stack deploy -c docker-stack.yml sanjalica
