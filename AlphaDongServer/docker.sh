sudo docker kill flaskhello

sudo docker build . -t python:flaskapp

sudo docker run -it -p 5001:5001 python:flaskapp --name flaskhello

sudo docker ps