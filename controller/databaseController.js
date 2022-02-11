let fs = require("fs");
let mysql = require("mysql");
const {
  createUserTable,
  createPostTable,
  createCommentsTable,
  initializeUser,
  initializePost,
  initializeComments,
} = require("../dev-data/setup/defaultTables");

//Database Connection
let databaseCreds = fs.readFileSync(
  `${__dirname}/../dev-data/setup/creds.json`,
  "utf-8"
);
let setUpObject = JSON.parse(databaseCreds);
let pool = mysql.createPool(setUpObject);

//start of controllers
//Confirm if connection is okay
exports.testConnections = function name(req, res, next) {
  try {
    pool.getConnection(function (err, connection) {
      if (err) {
        console.log("TC-2121", err);
        return res.json({
          status: "failed",
          message: "Database connection failed",
        });
      }
      connection.query(
        "SELECT * FROM sqlnode",
        function (error, results, fields) {
          // When done with the connection, DESTROY IT
          connection.destroy();
          if (error) {
            console.log("TC-2121", err);
            return res.json({
              status: "failed",
              message: "Database connection failed",
            });
          }
          if (results.length > 0) {
            let data = results[0];
            let status = data.status == 200 ? true : false;
            let message = data.message == "connection success" ? true : false;

            if (message && status) {
              return res.json({
                status: "success",
                message: "Database connection successfull",
                thread: `Connection thread acquired is ${connection.threadId}`,
              });
            }

            return res.json({
              status: "failed",
              message: "Database READ failed",
            });
          } else {
            return res.json({
              status: "failed",
              message: "No record in the database",
            });
          }
        }
      );
    });
  } catch (error) {
    console.log("TC-876", error);
    res.json({
      status: "failed",
      message: "test failed",
    });
  }
};

//RunTime Application connection
exports.conn = function name(req, res, next) {
  try {
    pool.getConnection(function (err, connection) {
      if (err) {
        console.log("TC-2121", err);
        return res.json({
          status: "failed",
          message: "Database connection failed",
        });
      }
      req.SQLCONNECTION = connection;
      next();
    });
  } catch (error) {
    console.log("TC-876", error);
    res.json({
      status: "failed",
      message: "conn error",
    });
  }
};
exports.userTable = async function name(req, res, next) {
  let connection = req.SQLCONNECTION;
  connection.query(`${createUserTable}`, function (error, results, fields) {
    if (error) {
      return res.json({
        status: "failed",
        message: "Unable to run query",
        error: error.sqlMessage,
      });
    }

    next();
  });
};
exports.postTable = async function name(req, res, next) {
  let connection = req.SQLCONNECTION;
  connection.query(createPostTable, function (error, results, fields) {
    if (error) {
      return res.json({
        status: "failed",
        message: "Unable to run query",
        error: error.sqlMessage,
      });
    }
    next();
  });
};
exports.commentsTable = async function name(req, res, next) {
  let connection = req.SQLCONNECTION;
  connection.query(createCommentsTable, function (error, results, fields) {
    if (error) {
      return res.json({
        status: "failed",
        message: "Unable to run query",
        error: error.sqlMessage,
      });
    }
    next();
  });
};

exports.populateuser = async function name(req, res, next) {
  let connection = req.SQLCONNECTION;
  connection.query(initializeUser, function (error, results, fields) {
    if (error) {
      return res.json({
        status: "failed",
        message: "Unable to run query",
        error: error.sqlMessage,
      });
    }
    next();
  });
};
exports.populatepost = async function name(req, res, next) {
  let connection = req.SQLCONNECTION;
  connection.query(initializePost, function (error, results, fields) {
    if (error) {
      return res.json({
        status: "failed",
        message: "Unable to run query",
        error: error.sqlMessage,
      });
    }
    next();
  });
};
exports.populateComments = async function name(req, res, next) {
  let connection = req.SQLCONNECTION;
  connection.query(initializeComments, function (error, results, fields) {
    if (error) {
      return res.json({
        status: "failed",
        message: "Unable to run query",
        error: error.sqlMessage,
      });
    }
    next();
  });
};

exports.end = function name(req, res, next) {
  let connection = req.SQLCONNECTION;
  connection.destroy();
  res.json({
    status: "success",
    message: "End of query",
  });
};
