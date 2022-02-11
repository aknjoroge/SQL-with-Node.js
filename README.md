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

### \* Post route

- Add a post : POST `/api/v1/posts`
- View all posts : GET `/api/v1/posts`

### \* Comment route

- Add a comment : POST `/api/v1/comment`
- View all comments : GET `/api/v1/comment`

### \* Aggregate route

- View : GET `/api/v1/aggregate/${TYPE}`
  > `/api/v1/aggregate/COUNT`

### \* Queries

- To run a custom query use the Endpoint

```
localhost/
```

---

## Install

1. Open Terminal
2. Clone Repo

```
Git clone xxxxxxxxxxxxxxx
```

3. Navigate to folder

```
cd xxxxxxx
```

4. Install packages

```
npm i
```

5. Import to your database .sql file located in `1`

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

```

```

7. Run server

```
npm start
```

8. Test Database Connection
   API route

```
localhost/
```

9. SETUP GIST Data

- This will create tables and populate them using this [MySQL Cheat Sheet gist](sss), The gist is forked from bradtraversy

API end point

```
http://localhost:2000/api/v1/database/tables/init
```

### OR

#### You can define your table structure using this endpoint

```
http://localhost:2000/api/v1/tables/create
```

Then populate it using this endoint

```
local
```

OR Write a query here

```
local
```
