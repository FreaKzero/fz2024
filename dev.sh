#!/bin/bash

CHECK=$(docker ps | grep fz2024-php)

if [ -z "$CHECK" ]; then
    docker compose up -d
else
    echo "[DEVSCRIPT] Docker Compose already running - skipping startup"
fi

npm run dev --prefix ./www