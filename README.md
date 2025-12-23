# docker-testapp

To start the app run this command: docker compose -f mongodb.yaml up -d


to access the frontend: localhost:5050
to access the mongo-express: localhost:8081

monogo-express admin default username and password:
username: admin
password: pass


more docker commands:

to stop all containers:
docker compose -f mongodb.yaml stop

to start again:
docker compose -f mongodb.yaml start

to restart
docker compose -f mongodb.yaml restart