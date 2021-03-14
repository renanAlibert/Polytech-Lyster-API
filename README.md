# API-Lyster-Polytech
 
## Introduction
API Lyster permettant d'administrer les articles, leurs rédacteurs et les voyages.
Développement démarré au cours d'un projet Polytech.

## Dev
Il y a plusieur facon d'utiliser l'API, avec Sqlite en lancant directement l'API en local ou avec Postgray en utilisant Docker.

### Project setup en local
Initialisation du projet
```
$ npm i
```
Initialisation de la base de donnée Sqlite
```
$ npm run migrate
```
Lancement de l'API
```
$ npm run start
```

### Project setup pour docker
Initialisation du projet
```
$ npm i
```
Initialisation de la base de donnée Sqlite
```
$ docker container run --name lyster/back/postgrey -v db_backing:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mysecretpassword -d postgres:9
$ docker image build -t lyster-polytech .
$ docker-compose up
$ docker container run --name lyster/back/postgrey -v db_backing:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mysecretpassword -d postgres:9
$ docker container run -p 3000:3000 -it lyster-polytech
$ docker container inspect some-postgres
$ docker container exec -it some-postgres psql -U postgres
$ kubectl apply -f .\replica
```
Lancement de l'API
```
$ npm run start
```


