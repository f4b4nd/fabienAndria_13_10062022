# Project 13


## 1. How to run Backend: 

### 1.1 Prerequisites :
- Docker
- Docker-compose

## 1.2 Installation : 

I made a custom version of [ArgentBank-api](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API) with **Docker-compose** to simplify its utilization.

My custom repo is available here : [ArgentBank-api-docker-compose](https://github.com/f4b4nd/ArgentBank_API_docker-compose)

You can clone this custom repository with the following command :

`git clone https://github.com/f4b4nd/ArgentBank_API_docker-compose.git`


### 1.3 Launch backend
- Get into the folder : `cd ./ArgentBank_API_docker-compose/`
- Run the commmand : `docker-compose up`
- Backend is now available on `port 3001`

### 1.4 Add Data to MongoDB via backend
- Exec the backend container via the following command : `docker exec -it bank-api /bin/sh`
- Inside the container, run the following command: `npm run populate-db`
---

## 2. How to run Frontend

### 2.1 Prerequisites : 
- NodeJS (16.13.1)
- npm

### 2.2 Installation and launch

1. Clone this repository : 
- `git clone https://github.com/f4b4nd/fabienAndria_13_10062022.git`

2. Install dependencies
- `npm install`

3. Launch frontend on `port 3000`
- `npm run start` 

4. If you want to use an external api, then you need to set an environnement variable called `REACT_APP_API_URL`

Example : 
- create an `.env` file at the root of the project
- insert in this file the following: `REACT_APP_API_URL=http://localhost:1234/api/v1`