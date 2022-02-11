let fs = require("fs");

let tableName = "posts";

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

exports.add = function (req, res) {
  let user_id = req.body.user_id;
  let title = req.body.title;
  let body = req.body.body;

  let query = `
  INSERT INTO ${tableName} (user_id ,title, body,publish_date) values 
(${user_id}, '${title}', '${body}',  now());
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

exports.getOne = function name(req, res, next) {
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

exports.delete = function (req, res, next) {
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

exports.update = function (req, res, next) {
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
