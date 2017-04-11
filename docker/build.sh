#! /bin/bash

COMMAND="npm i && \
npm rebuild node-sass && \
npm run build -- --prod --aot"
docker run -v $(pwd):/workspace -w /workspace node /bin/bash -ce "$COMMAND"
docker build -t zolotyx-blog .
