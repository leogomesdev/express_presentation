# Routes

## Register and Authentication

### POST /auth/register

Register a new user.

- Request body:

    ````json
    {
      "name": "Leonardo Gomes da Silva",
      "email": "leonardo.delfica@gmail.com",
      "password": "123456"
    }
    ````

- Response sample:

  ````json
  {
    "user": {
        "_id": "5e2b78b270ffb82d61c6d2df",
        "name": "Leonardo Gomes da Silva",
        "email": "leonardo.delfica@gmail.com",
        "createdAt": "2020-01-24T23:07:30.261Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMmI3OGIyNzBmZmI4MmQ2MWM2ZDJkZiIsImlhdCI6MTU3OTkwNzI1MCwiZXhwIjoxNTc5OTkzNjUwfQ.iKePXoQTONMIhm8r7qn-n3FgSeGI5mOaLZei9-CyBoI"
  }
  ````

  ````bash
  HTTP Code: 200 OK
  ````

### POST /auth/authenticate

Create a valid token for the user (by providing correct user and password).

- Request body:

    ````json
    {
      "email": "leonardo.delfica@gmail.com",
      "password": "123456"
    }
    ````

- Response sample:

  ````json
  {
    "user": {
        "_id": "5e2b78b270ffb82d61c6d2df",
        "name": "Leonardo Gomes da Silva",
        "email": "leonardo.delfica@gmail.com",
        "createdAt": "2020-01-24T23:07:30.261Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMmI3OGIyNzBmZmI4MmQ2MWM2ZDJkZiIsImlhdCI6MTU3OTkwNzc0NSwiZXhwIjoxNTc5OTk0MTQ1fQ.Yp5i5W7NqG3r4fUMguZZbHqZLXD26CVrn4BhFcszHOI"
  }
  ````

  ````bash
  HTTP Code: 200 OK
  ````

## Skills CRUD Operations

To use this endpoint (/skills) is necessary to:

1) Copy a token [#Register and Authentication](See Register and Authentication section)
2) Add a new HTTP Header, with Key: Authorization and Value: Bearer my_sample_token

### POST /api/skills

Create a new skill

- Request body:

 ````json
  {
    "name": "test",
    "level": "JUNIOR"
  }
 ````

- Response sample:

 ````json
  {
      "skill": {
          "_id": "5e2b7f5cdf729a46a1e28358",
          "name": "test",
          "level": "JUNIOR",
          "createdAt": "2020-01-24T23:35:56.136Z",
          "updatedAt": "2020-01-24T23:35:56.136Z",
          "__v": 0
      }
  }
 ````

 ````bash
 HTTP Code: 201 Created
 ````

### GET /api/skills

Get all skills

- Request body:

  ````json
  {}
  ````

- Response sample:

  ````json
  {
    "skills": [
        {
            "_id": "5e2b7c6ae85a0e3b66793797",
            "name": "New task name",
            "level": "JUNIOR",
            "createdAt": "2020-01-24T23:23:22.284Z",
            "updatedAt": "2020-01-24T23:35:06.501Z",
            "__v": 0
        },
        {
            "_id": "5e2b7f5cdf729a46a1e28358",
            "name": "test",
            "level": "JUNIOR",
            "createdAt": "2020-01-24T23:35:56.136Z",
            "updatedAt": "2020-01-24T23:35:56.136Z",
            "__v": 0
        }
    ]
  }
  ````

  ````bash
  HTTP Code: 200 OK
  ````

### GET /api/skills/**skillId**

Get a skill

- Request body:

  ````json
  {}
  ````

- Response sample:

  ````json
  {
    "skill": {
        "_id": "5e2b7c6ae85a0e3b66793797",
        "name": "New task name",
        "level": "JUNIOR",
        "createdAt": "2020-01-24T23:23:22.284Z",
        "updatedAt": "2020-01-24T23:35:06.501Z",
        "__v": 0
    }
  }
  ````

  ````bash
  HTTP Code: 200 OK
  ````

### PUT /api/skills/**skillId**

Update a skill

- Request body:

  ````json
  {
    "name": "New skill name",
    "level": "EXPERT"
  }
  ````

- Response sample:

  ````json
  {
    "skill": {
        "_id": "5e2b7c6ae85a0e3b66793797",
        "name": "New skill name",
        "level": "EXPERT",
        "createdAt": "2020-01-24T23:23:22.284Z",
        "updatedAt": "2020-01-24T23:40:59.277Z",
        "__v": 0
    }
  }
  ````

  ````bash
  HTTP Code: 200 OK
  ````

### DELETE /api/skills/**skillId**

Delete a skill

- Request body:

  ````json
  {}
  ````

- Response sample:

  ````bash
  HTTP Code: 204 No Content
  ````
