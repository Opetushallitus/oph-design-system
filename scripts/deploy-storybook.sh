#!/bin/bash

set -e pipefail

echo "Copying Storybook files to AWS S3 buildnumber (ga-$GITHUB_RUN_NUMBER) directory"
aws s3 sync storybook-static s3://dev-files.ops.opintopolku.fi/storybooks/oph-design-system/builds/ga-$GITHUB_RUN_NUMBER --delete --cache-control max-age=600 --acl public-read
echo "Storybook link (temporary for build): https://dev-files.ops.opintopolku.fi/storybooks/oph-design-system/builds/ci-$GITHUB_RUN_NUMBER/index.html"

echo "Copying Storybook files to AWS S3 branch ($GITHUB_REF_NAME) directory"
aws s3 sync storybook-static s3://dev-files.ops.opintopolku.fi/storybooks/oph-design-system/$GITHUB_REF_NAME --delete --cache-control max-age=600 --acl public-read
echo "Storybook link (permanent for branch): https://dev-files.ops.opintopolku.fi/storybooks/oph-design-system/$GITHUB_REF_NAME/index.html"