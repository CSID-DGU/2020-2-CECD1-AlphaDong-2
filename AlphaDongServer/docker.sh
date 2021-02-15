sudo docker kill flaskhello

sudo docker rm flaskhello

sudo docker build . -t python:flaskapp

echo "############################"

echo $1

echo "############################"

if [ "d" == "$1" ]; then
    sudo docker run -d --name flaskhello -p 5001:5001 python:flaskapp
else
    sudo docker run -it --name flaskhello -p 5001:5001 python:flaskapp
fi

sudo docker ps -a