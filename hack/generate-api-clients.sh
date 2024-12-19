#!/bin/bash
set -e

VERSION=${DAYTONA_VERSION:-"latest"}

if [ "$VERSION" = "latest" ]; then
  echo "Fetching the latest version..."
  echo "You can override this by setting the DAYTONA_VERSION environment variable"
  VERSION=$(curl -s https://api.github.com/repos/daytonaio/daytona/releases/latest | grep tag_name | cut -d '"' -f 4)
fi

URL=https://raw.githubusercontent.com/daytonaio/daytona/refs/tags/$VERSION/pkg/api/docs/swagger.json

npx openapi-generator-cli generate -i $URL -g python -o /workspaces/sdk_tmp/packages/python/src --additional-properties=packageName=api_client,pythonVersion=3.10,generateSourceCodeOnly=true
npx openapi-generator-cli generate -i $URL -g typescript-fetch -o /workspaces/sdk_tmp/packages/ts/src/client --additional-properties=typescriptThreePlus=true,supportsES6=true,enumNameSuffix= --type-mappings=DateTime=Dat
