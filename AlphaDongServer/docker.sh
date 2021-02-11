sudo docker kill flaskhello

sudo docker rm flaskhello

sudo docker build . -t python:flaskapp

sudo docker run -d --name flaskhello -p 5001:5001 python:flaskapp

sudo docker ps -a