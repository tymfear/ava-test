# docker build -t myjenk:latest .

docker run --privileged -d -v /var/run/docker.sock:/var/run/docker.sock \
                -v $(which docker):/usr/bin/docker -p 8080:8080 jen
