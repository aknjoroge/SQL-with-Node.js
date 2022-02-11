exports.createUserTable = `CREATE TABLE users(
    id INT AUTO_INCREMENT,
       first_name VARCHAR(100),
       last_name VARCHAR(100),
       email VARCHAR(50),
       password VARCHAR(20),
       location VARCHAR(100),
       dept VARCHAR(100),
       is_admin TINYINT(1),
       register_date DATETIME,
       PRIMARY KEY(id)
    );`;
exports.createPostTable = `CREATE TABLE posts(
   id INT AUTO_INCREMENT,
      user_id INT,
      title VARCHAR(100),
      body TEXT,
      publish_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY(id),
      FOREIGN KEY (user_id) REFERENCES users(id)
   );`;
exports.createCommentsTable = `CREATE TABLE comments(
	id INT AUTO_INCREMENT,
    post_id INT,
    user_id INT,
    body TEXT,
    publish_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) references users(id),
    FOREIGN KEY(post_id) references posts(id)
);`;

exports.initializeUser = `
INSERT INTO users (first_name, last_name, email, password, location, dept, is_admin, register_date) values 
('Alex', 'Karanja', 'alex@techkey.co.ke', '123456','Kenya', 'development', 1, now()),
 ('Brad', 'Traversy', 'brad@gmail.com', '123456','Massachusetts', 'development', 0, now()),
 ('john', 'Doe', 'john@example.com.com', '123456','Earth', 'startegy', 0, now()),
 ('mary', 'Doe', 'mary@example.com.com', '123456','Pluto', 'marketting', 0, now()),
 ('Brian', 'who', 'brian@example.com.com', '123456','Tanzania', 'design', 0, now())
 ;`;
exports.initializePost = `
 INSERT INTO posts(user_id, title, body) VALUES (1, 'Post One', 'This is post one'),(3, 'Post Two', 'This is post two'),(1, 'Post Three', 'This is post three'),(2, 'Post Four', 'This is post four'),(5, 'Post Five', 'This is post five'),(4, 'Post Six', 'This is post six'),(2, 'Post Seven', 'This is post seven'),(1, 'Post Eight', 'This is post eight'),(3, 'Post Nine', 'This is post none'),(4, 'Post Ten', 'This is post ten');
 `;
exports.initializeComments = `
 INSERT INTO comments(post_id, user_id, body) VALUES (1, 3, 'This is comment one'),(2, 1, 'This is comment two'),(5, 3, 'This is comment three'),(2, 4, 'This is comment four'),(1, 2, 'This is comment five'),(3, 1, 'This is comment six'),(3, 2, 'This is comment six'),(5, 4, 'This is comment seven'),(2, 3, 'This is comment seven');
`;
