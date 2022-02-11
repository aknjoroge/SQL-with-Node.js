//requiring express node js module
let express = require("express");
let userRoutes = require("./routes/userRoutes");
let postRoutes = require("./routes/postsRoutes");
let commentRoutes = require("./routes/commentsRoutes");
let databaseRoutes = require("./routes/databaseRoute");
//initialize express
let app = express();

//limiting request json to 10kb
app.use(express.json());
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/database", databaseRoutes);

app.get("/", function (req, res) {
  res.json({
    application: "UniHome",
    apiUrl: "/api/v1/",
    url: "unihome.techkey.co.ke",
  });
});

app.post("/", function (req, res) {
  res.json({
    application: "UniHome",
    apiUrl: "/api/v1/",
    url: "unihome.techkey.co.ke",
    method: "POST",
  });
});

app.use("*", function (req, res, next) {
  res.json({
    status: "failled",
    message: "Route not set",
  });
});

module.exports = app;
