let express = require("express");

let controller = require("../controller/usersController");

let routes = express.Router();

/*
=============================================
CRUD OPERATIONS
=============================================
*/
//Create
routes.post("/", controller.addUser);
//Read
routes.get("/", controller.getUsers);
routes.get("/:id", controller.getOneUser);
//Update
routes.patch("/:id", controller.updateUser);
//Delete
routes.delete("/:id", controller.deletUser);

module.exports = routes;
