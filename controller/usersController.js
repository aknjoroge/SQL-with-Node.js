let fs = require("fs");

let tableName = "users";

exports.getAll = function name(req, res, next) {
  let query = `
  SELECT * FROM ${tableName}
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
  INSERT INTO ${tableName} (first_name, last_name, email, password, location, dept, is_admin, register_date) values 
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
  let id = req.params.id;
  let query = `
  SELECT * FROM ${tableName} WHERE id=${id}
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
      message: "No data Found",
      results,
    });
  });
};

exports.deleteUser = function (req, res, next) {
  let id = req.params.id;
  let query = `
     DELETE  FROM ${tableName} WHERE id=${id}
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
        message: "deleted",
      });
    }
    return res.json({
      status: "failed",
      message: "Data not deleted | Data does not exist",
    });
  });
};

exports.updateUser = function (req, res, next) {
  let id = req.params.id;

  let query = `
     UPDATE  ${tableName} SET ${req.body.field} = '${req.body.data}'  WHERE id=${id}
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

    console.log("TC-767", results);
    if (results.affectedRows > 0) {
      return res.json({
        status: "success",
        message: "updated",
      });
    }
    return res.json({
      status: "failed",
      message: "Data not updated",
    });
  });
};
