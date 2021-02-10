sudo docker kill flaskhello

sudo docker build . -t python:flaskapp

sudo docker run -name flaskhello -p 5001:5001 python:flaskapp

sudo docker ps