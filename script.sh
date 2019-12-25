#!/bin/sh
yarn build
sed -i 's/React App/Solus Dashboard/g' build/index.html
cp favicon.ico build
