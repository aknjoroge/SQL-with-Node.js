let express = require("express");
let controller = require("../controller/databaseController");

let routes = express.Router();

//Test Connection
routes.get("/", controller.testConnections);

//INITIALIZE database Data
routes.patch(
  "/tables/init",
  controller.conn,
  //Create user table
  controller.userTable,
  //Create post table
  controller.postTable,
  //Create comments table
  controller.commentsTable,
  //add dummy data to all the tables
  controller.populateuser,
  controller.populatepost,
  controller.populateComments,
  controller.end
);

module.exports = routes;
