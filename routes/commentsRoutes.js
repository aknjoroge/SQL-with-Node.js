let controller = require("./../controller/commentsController");
let express = require("express");

let routes = express.Router();
/*
=============================================
CRUD OPERATIONS
=============================================
*/
//Create
routes.post("/", controller.add);
//Read
routes.get("/", controller.getAllLocation);
routes.get("/:id", controller.getOne);
//Update
routes.patch("/:id", controller.update);
//Delete
routes.delete("/:id", controller.delete);

module.exports = routes;
