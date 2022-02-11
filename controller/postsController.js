let fs = require("fs");

let owners = fs.readFileSync(
  `${__dirname}/../dev-data/data/owners.json`,
  "utf-8"
);
let ownersData = JSON.parse(owners);
exports.getAll = function (req, res, next) {
  res.json({
    status: "success",
    response: ownersData.length,
    data: {
      ownersData,
    },
  });
};

exports.add = function (req, res) {
  let owner = req.body;
  let id = { id: Math.random() };
  let newOwner = Object.assign(id, owner);
  ownersData.push(newOwner);

  fs.writeFile(
    `${__dirname}/../dev-data/data/owners.json`,
    JSON.stringify(ownersData),
    function (error) {
      if (error) {
        res.json({
          status: "failed",
          error,
        });
      } else {
        res.status(201).json({
          status: "success",
          data: {
            newOwner,
          },
        });
      }
    }
  );
};

exports.getOne = function name(req, res, next) {
  let parameter = req.params;
  let owner = ownersData.find(function (element) {
    return element.id == parameter.id;
  });
  res.json({
    status: "succeszs",
    data: {
      owner,
    },
  });
};

exports.delete = function (req, res, next) {
  let id = req.params.id;

  let owners = ownersData.filter(function (element) {
    return element.id != id;
  });

  fs.writeFile(
    `${__dirname}/../dev-data/data/owners.json`,
    JSON.stringify(owners),
    function (err) {
      if (err) {
        res.json({
          status: "failed",
          error,
        });
      } else {
        res.status(204).json({
          status: "success",
        });
      }
    }
  );
};

exports.update = function (req, res, next) {
  let id = req.params.id;

  res.json({
    status: "success",
    details: "Not yet implemented",
  });
};
