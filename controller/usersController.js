let fs = require("fs");

exports.getUsers = function name(req, res, next) {
  let query = `
  SELECT * FROM users
  `;
  let connection = req.SQLCONNECTION;
  connection.query(query, function (error, results, fields) {
    connection.release();
    if (error) {
      return res.json({
        status: "failed",
        message: "Unable to run query",
        error: error.sqlMessage,
      });
    }

    if (results.length > 0) {
      return res.json({
        status: "success",
        total: results.length,
        results,
      });
    }
    return res.json({
      status: "failed",
      message: "No record in table",
    });
  });
};

exports.addUser = function (req, res) {
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let password = req.body.password;
  let location = req.body.location;
  let dept = req.body.dept;
  let is_admin = req.body.is_admin;

  let query = `
  INSERT INTO users (first_name, last_name, email, password, location, dept, is_admin, register_date) values 
('${first_name}', '${last_name}', '${email}', '${password}','${location}', '${dept}', ${is_admin}, now());
  `;

  let connection = req.SQLCONNECTION;
  connection.query(query, function (error, results, fields) {
    connection.release();
    if (error) {
      return res.json({
        status: "failed",
        message: "Unable to run query",
        error: error.sqlMessage,
      });
    }

    if (results.affectedRows > 0) {
      return res.json({
        status: "success",
        message: "data added",
      });
    }

    return res.json({
      status: "failed",
      message: "Data not inserted",
      results,
    });
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
