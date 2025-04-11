#!/bin/bash
PLAYWRIGHT_VERSION=$(node -e "console.log(require('./package-lock.json').packages['node_modules/@playwright/test'].version)")
SUBDIR=$1 || ""
docker run --mount type=bind,source=$PWD,target=/app --user "$(id -u):$(id -g)" -w /app/$SUBDIR \
--add-host=host.docker.internal:host-gateway -e DOCKER=1 \
mcr.microsoft.com/playwright:v$PLAYWRIGHT_VERSION \
npx playwright test