#!/bin/bash

API="http://localhost:4741"
URL_PATH="/patterns"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "pattern": {
      "info": "'"${INFO}"'",
      "grid": '${GRID}'
    }
  }'

echo
