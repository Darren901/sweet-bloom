#!/usr/bin/env sh

# 確保腳本拋出遇到的錯誤
set -e

# 構建
npm run build

# 進入輸出目錄
cd dist

# 初始化 git 並提交
git init
git add -A
git commit -m 'deploy'

# 推送到 gh-pages 分支
git push -f https://github.com/darren901/sweet-bloom.git main:gh-pages

cd -