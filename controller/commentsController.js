let fs = require("fs");

let location = fs.readFileSync(`${__dirname}/../dev-data/data/location.json`);
let locationObjects = JSON.parse(location);

exports.getAllLocation = function (req, res, next) {
  res.json({
    status: "sucess",
    response: locationObjects.length,
    data: {
      locationObjects,
    },
  });
};

exports.add = function (req, res) {
  let data = req.body;
  let id = { id: Math.random() };
  let newObject = Object.assign(id, data);
  locationObjects.push(newObject);

  fs.writeFile(
    `${__dirname}/../dev-data/data/location.json`,
    JSON.stringify(locationObjects),
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
            newObject,
          },
        });
      }
    }
  );
};

exports.getOne = function name(req, res, next) {
  let parameter = req.params;
  let data = locationObjects.find(function (element) {
    return element.id == parameter.id;
  });
  res.json({
    status: "success",
    data,
  });
};

exports.delete = function (req, res, next) {
  let id = req.params.id;

  let data = locationObjects.filter(function (element) {
    return element.id != id;
  });

  fs.writeFile(
    `${__dirname}/../dev-data/data/location.json`,
    JSON.stringify(data),
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
