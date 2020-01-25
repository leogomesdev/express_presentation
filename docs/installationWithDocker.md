# Installation with Docker

Please, check [docs/environments.md](docs/environments.md)

## Local environment

### Requirements

- [Docker Engine](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/)

### Running

- Just copy the file below (change ports option if wanted)

  ````bash
  cp -v docker-compose.example.yml docker-compose.yml
  ````

- Building the application

  ````bash
  docker-compose up --build
  ````
