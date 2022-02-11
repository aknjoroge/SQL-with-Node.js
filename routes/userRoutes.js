let express = require("express");

let controller = require("../controller/usersController");
let databaseController = require("../controller/databaseController");

let routes = express.Router();

/*
=============================================
CRUD OPERATIONS
=============================================
*/
//Create
routes.post("/", databaseController.conn, controller.addUser);
//Read
routes.get("/", databaseController.conn, controller.getUsers);
routes.get("/:id", controller.getOneUser);
//Update
routes.patch("/:id", controller.updateUser);
//Delete
routes.delete("/:id", controller.deletUser);

module.exports = routes;
