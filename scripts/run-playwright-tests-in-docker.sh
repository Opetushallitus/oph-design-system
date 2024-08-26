#!/bin/bash
PLAYWRIGHT_VERSION=$(node -e "console.log(require('./package-lock.json').packages['node_modules/@playwright/test'].version)")
SUBDIR=$1 || ""
docker run --mount type=bind,source=$PWD,target=/app -w /app/$SUBDIR --ipc=host --net=host mcr.microsoft.com/playwright:v$PLAYWRIGHT_VERSION npx playwright test