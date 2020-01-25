# Environments

After cloning this repository, run:

````bash
cp -v .env.example .env
````

Define the env MONGO_URI in .env file. It's possible to use any MongoDB server (localhost, local server, [a Docker container](https://hub.docker.com/_/mongo) or in cloud - [Try Free MongoDB Cloud](https://www.mongodb.com/cloud))

Define the env JWT_SECRET. This is a private security string to generate JSON Web Tokens in the application.