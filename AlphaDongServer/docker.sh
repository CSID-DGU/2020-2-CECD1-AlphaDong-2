sudo docker kill flaskhello

sudo docker rm flaskhello

sudo docker build . -t python:flaskapp

if ["d" == "$1"]; then
    sudo docker run -d --name flaskhello -p 5001:5001 python:flaskapp
else
    sudo docker run --name flaskhello -p 5001:5001 python:flaskapp
fi

sudo docker ps -a