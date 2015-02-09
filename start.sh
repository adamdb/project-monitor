#!/bin/bash
mongod --dbpath /src/data/db/ &
node /src/index.js &
wait