#!/usr/bin/env sh
# time=$(date "+%Y-%m-%d %H:%M:%S")
# echo $time
# 首先检测并且修复eslint语法的错误
npm run lint


# 生成静态文件
npm run build:dev


# 切换到dis目录
cd dist/


# git部分

git init
git add -A
time=$(date "+%Y-%m-%d %H:%M:%S")
git commit -m $time

# 发布到分支
git push -f git@github.com:Wa-Fe/vue3vue3template.git main:public


cd ..



