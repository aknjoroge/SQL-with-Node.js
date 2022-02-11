exports.runQuery = function name(req, res, next) {
  let query = req.body.query;
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

    return res.json({
      status: "success",
      results,
    });
  });
};
