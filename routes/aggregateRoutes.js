let controller = require("../controller/aggregateController");
let express = require("express");
let databaseController = require("../controller/databaseController");

let routes = express.Router();

//Read
routes.post("/:id", databaseController.conn, controller.getAll);

module.exports = routes;
