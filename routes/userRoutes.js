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
routes.get("/", databaseController.conn, controller.getAll);
routes.get("/:id", databaseController.conn, controller.getOneUser);
//Update
routes.patch("/:id", databaseController.conn, controller.updateUser);
//Delete
routes.delete("/:id", databaseController.conn, controller.deleteUser);

module.exports = routes;
