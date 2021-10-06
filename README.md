# Boston Mutual Aid Site

## Team Mejia Development Team

* Aira Cosino
* Jared Min
* Jeffrey Jin
* Johanne Antoine
* Suhail Singh

## Build Some Understanding:

- Why use Prisma:
  - Database: work with MySQL, PostgreSQL, SQLite, Microsoft SQL Server 
  - Work inside with any JavaScript or TypeScript environment.

- What is Prisma Studio: 

It's a libraryan admin UI to view and edit the data inside your database


## Technologies Used  
For the backend we used Prisma as our ORM, Express.js for the backend server, and React for the frontend.

## Requirements
### Frontend
For dev on the frontend you'll need to install:
- React (instructions to install can be found [here](https://reactjs.org/docs/create-a-new-react-app.html))

### Backend
For dev on the backend you'll need to install: 
- Express (instructions to install can be found [here](https://expressjs.com/en/starter/installing.html))
- Prisma (instructions to install can be found [here](https://www.prisma.io/docs/getting-started/quickstart-typescript))

## Quickstart

### Frontend
1. Go into frontend folder
```bash
$ cd frontend
```
2. Install the node packages
```bash
$ npm install
```
3. Create a file called .env.development inside the frontend folder. Add your MapBox Access Token (You can create a Mapbox account [here](https://account.mapbox.com))) as a variable named GATSBY_MAPBOX_ACCESS_TOKEN to the. Then run: 
```bash
$ npm run develop
```
The site should be running on [http://0.0.0.0:8000](http://0.0.0.0:8000)\
Make sure to have backend running before running the frontend.

### Backend

1. Go into backend folder
```bash
$ cd backend
```
2. Create a .env file in the backend folder and add your database url as a environment variable called DATABASE_URL (Please contact the dev team if you would like to use the original database url).
   
3. Set up the database for prisma and import the mutual aid data (not necessary if using original database).
```bash
# [Option]If you have problem running npx prisma introspect , it’s probably because you have an empty database with no table created. In this case, run npx prisma migrate dev --name init instead; this will create the tables in your database according to the prisma schema. 
$ npx prisma migrate dev --name init

# prisma:warn The prisma introspect command is deprecated. Please use prisma db pull instead.
$ npx prisma db pull    # This will generate the schema by introspecting an existing database ==> When you need to talk to your database, use Prisma Client -- an auto-generated, type-sage query builder. ==> Which means you don't need to remember those SQL query syntax.

# Let's Prisma Migrate to update prisma schama
$ npx prisma migrate dev    # This will generate all the data table based on data obejct schema defined in ./schema.prisma

$ npx prisma generate

$ npx ts-node ./src/scripts.ts
```





4. Start the server
```bash
$ npm install
$ npm start
```
The server should be running on [http://0.0.0.0:5000](http://0.0.0.0:5000)


## Debug/Troubleshotting

### Problem 1: 
If you have problem running npx prisma introspect , it’s probably because you have an empty database with no table created. In this case, run npx prisma migrate dev --name init instead; this will create the tables in your database according to the prisma schema. 

```bash
$ npx prisma migrate dev --name init
```


## Reference:
- What is your "DATABASE_URL"? ==> [Database connectors PostgreSQL](https://www.prisma.io/docs/concepts/database-connectors/postgresql)
- Getting start with Prisma? ==> https://www.prisma.io/docs/concepts/overview/what-is-prisma
- 