
cd /Users/xiaokangy/work/tyy-ai-h5/
git checkout -f
git checkout -f
git pull
#setx NODE_ENV prod11
#rm -rf unpackage
cat common/1.js>common/config.js
cli publish --platform h5 --project tyy-ai-h5
cd /Users/xiaokangy/work/tyy-ai-h5/unpackage/dist/build/
f=97465e7b
cd h5
sed 's/${f}//g' index.${f}.css > index.css
cd ..
tar czvf  h5.tar.gz ./h5
ssh root@49.0.201.46 "rm -rf /www/wwwroot/www\.aigptstar\.com/h5*"
scp h5.tar.gz root@49.0.201.46:/www/wwwroot/www\.aigptstar\.com/
ssh root@49.0.201.46 "cd /www/wwwroot/www\.aigptstar\.com/ && tar -zxvf h5\.tar\.gz"
cd /Users/xiaokangy/work/tyy-ai-h5/
git checkout -f
