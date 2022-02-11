let fs = require("fs");

exports.getUsers = function name(req, res, next) {
  res.json({
    status: "success",
  });
};

exports.addUser = function (req, res) {
  res.json({
    status: "success",
  });
};

exports.getOneUser = function name(req, res, next) {
  res.json({
    status: "success",
  });
};

exports.deletUser = function (req, res, next) {
  res.json({
    status: "success",
  });
};

exports.updateUser = function (req, res, next) {
  res.json({
    status: "success",
    details: "Not yet implemented",
  });
};
