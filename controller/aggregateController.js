exports.getAll = function name(req, res, next) {
  let aggregateTable = req.params.id;
  let type = req.body.type;
  let field = req.body.field;

  let query = `
  SELECT ${type}(${field}) FROM ${aggregateTable};
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
