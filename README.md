## Node with SQL

#### Rest API using SQL

---

### Models

#### 1. Users

#### 2. Posts

#### 3. Comments

### Database models from [MySQL Gist](https://gist.github.com/aknjoroge/3586b8d6692d900cf7d420a159600a31)

> The gist is Forked from bradtraversy/mysql_cheat_sheet.md

---

## Rest

### \* User route

- Add user : POST `/api/v1/users`
- View all users : GET `/api/v1/users`
- Delete a user : DELETE `/api/v1/users/:id`
- Patch a user : PATCH `/api/v1/users/:id`

### \* Post route

- Add a post : POST `/api/v1/posts`
- View all posts : GET `/api/v1/posts`
- Delete a post : DELETE `/api/v1/posts/:id`
- Patch a post : PATCH `/api/v1/posts/:id`

### \* Comment route

- Add a comment : POST `/api/v1/comments`
- View all comments : GET `/api/v1/comments`
- Delete a comment : DELETE `/api/v1/comments/:id`
- Patch a comment : PATCH `/api/v1/comments/:id`

### \* Aggregate route

- To use Aggregate Functions : POST `/api/v1/aggregate/${TABLE_NAME}`
  Example to run `SELECT UCASE(first_name) FROM users;`

  Body Object

  ```json
  {
    "type": "UCASE",
    "field": "first_name"
  }
  ```

```
http://localhost:2000/api/v1/aggregate/users
```

---

## Install

1. Open Terminal
2. Clone Repo

```
git clone https://github.com/aknjoroge/SQL-with-Node.js.git
```

3. Navigate to folder

```
cd SQL-with-Node.js
```

4. Install packages

```
npm i
```

5. Create a database and Import the .sql file located in `dev-data/`

### Why?

- The .sql file contains a table called 'sqlnode' that I read from so as to confirm if there is a truthfull and working connection query.
- if you already have an existing database and you dont want to import the .sql, just run the command below to add the table in your database

```SQL
CREATE TABLE `sqlnode` (
  `id` int(11) AUTO_INCREMENT NOT NULL ,
  `status` int(100) NOT NULL,
  `message` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `sqlnode`(`status`, `message`) VALUES (200,'connection success');
```

6. Setup database connnection

- add your connection details in `dev-data\setup\creds.json`

```json
{
  "host": "localhost",
  "user": "root",
  "password": "password",
  "database": "database",
  "port": "3306", //optional
  "connectionLimit": 10
}
```

#### More configurations are available at : [https://www.npmjs.com/package/mysql#connection-options](https://www.npmjs.com/package/mysql#connection-options)

7. Run server

```
npm start
```

8. Test Database Connection
   API route

```
GET http://localhost:2000/api/v1/database
```

9. SETUP GIST Data

- This will create tables and populate them using date from this [MySQl gist](https://gist.github.com/aknjoroge/3586b8d6692d900cf7d420a159600a31), The gist is forked from bradtraversy

API end point

```
PATCH http://localhost:2000/api/v1/database/tables/init
```

---

## Examples

- After setup is completed you can access data from the following Endpoints

### USER

#### 1. Get all users

```
GET  http://localhost:2000/api/v1/users
```

---

#### 2. Add a user

Body object

```json
{
  "first_name": "Aadhya",
  "last_name": "Mistry",
  "email": "Mistry@Mistry.com",
  "password": "123456",
  "location": "kenya",
  "dept": "manage",
  "is_admin": 1
}
```

```
POST  http://localhost:2000/api/v1/users
```

---

### Comments

#### Update a comment

```
PATCH http://localhost:2000/api/v1/comments/2
```

---

### Posts

#### Delete a post

```
DELETE  http://localhost:2000/api/v1/posts/10
```

> ### All basic CRUD operations are already setup

---

### You can also post a query to run here

Body object

```json
{
  "query": "SELECT * FROM users WHERE dept NOT LIKE 'd%';"
}
```

```
http://localhost:2000/api/v1/query
```

---

### Author

#### [aknjoroge](https://github.com/aknjoroge/)
