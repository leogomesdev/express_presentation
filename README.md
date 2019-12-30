# Express presentation
Presentation about NodeJS and Express usage for all the company

## Requirements:

- MongoDB Server
- npm + Node.js

### Node + npm installation (for Linux):
````bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install nodejs
````

## Usage

Copy and define the envs (by editing the new .env file):
````bash
cp -v .env.example .env
````
Start the application:
````bash
npm start
````

Use Postman (or any REST API Client) to use the API.
If using Postman, just import [docs/skills.postman_collection.json]("docs/skills.postman_collection.json")

Routes:

- /auth/register -> register a new user. E.g.:
    ````json
    {
    	"name": "Leonardo Gomes da Sila",
    	"email": "leonardo.delfica@gmail.com",
    	"password": "123456"
    }
    ````
- 
