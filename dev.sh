#!/bin/bash

yarn --cwd ./components dev &
node ./refresh/index.js &
serve .

# ps -ax | grep "@stencil" | awk '{print $1}' | xargs kill -9
