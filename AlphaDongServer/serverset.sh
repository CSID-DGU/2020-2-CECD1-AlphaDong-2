cd ../

git pull origin master

cd AlphaDongServer

if [ "d" == "$1" ]; then
    bash docker.sh d
else
    bash docker.sh
fi