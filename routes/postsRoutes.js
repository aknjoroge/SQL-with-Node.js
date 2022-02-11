let express = require("express");
let controller = require("../controller/postsController");
let databaseController = require("../controller/databaseController");

let routes = express.Router();
/*
=============================================
CRUD OPERATIONS
=============================================
*/
//Create
routes.post("/", databaseController.conn, controller.add);
//Read
routes.get("/", databaseController.conn, controller.getAll);
routes.get("/:id", databaseController.conn, controller.getOne);
//Update
routes.patch("/:id", databaseController.conn, controller.update);
//Delete
routes.delete("/:id", databaseController.conn, controller.delete);

module.exports = routes;
