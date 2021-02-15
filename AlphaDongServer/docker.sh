nl=$'\n'

sudo docker kill flaskhello

sudo docker rm flaskhello

sudo docker build . -t python:flaskapp

echo "############################${nl}${nl}"

if [ "d" == "$1" ]; then
    echo "background mode ${nl}"
    
    echo "############################${nl}${nl}"
    
    sudo docker run -d --name flaskhello -p 5001:5001 python:flaskapp
else
    echo "debug mode ${nl}"

    echo "############################${nl}${nl}"

    sudo docker run -it --name flaskhello -p 5001:5001 python:flaskapp
fi

sudo docker ps -a