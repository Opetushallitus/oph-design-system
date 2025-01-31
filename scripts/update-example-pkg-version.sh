#!/bin/bash

NEW_VERSION=$(node -p -e "require('./package.json').version")
npm run build
npm run pack
cd example
npm i ../pkg/opetushallitus-oph-design-system-$NEW_VERSION.tgz