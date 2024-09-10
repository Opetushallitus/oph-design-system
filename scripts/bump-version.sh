#!/bin/bash
PARAM="${1:-patch}"
npm ci
npm version $PARAM
NEW_VERSION=$(node -p -e "require('./package.json').version")
npm run pack
cd example
npm i ../pkg/opetushallitus-oph-design-system-$NEW_VERSION.tgz