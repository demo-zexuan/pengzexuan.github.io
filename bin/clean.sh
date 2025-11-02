#!/bin/zsh

cd ..
cd ./docs/.vitepress || exit
ls -alh
rm -rf ./dist
rm -rf ./cache