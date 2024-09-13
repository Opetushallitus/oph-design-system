#!/bin/bash
SCRIPTS_PATH=$(dirname "$0")
PARAM="${1:-patch}"
npm ci
npm version $PARAM
sh $SCRIPTS_PATH/update-example-pkg-version.sh