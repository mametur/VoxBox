const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const sequelize = require("./db/db.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
sequelize
  .sync()
  .then(() =>
    console.log("tables has been successfully created, if one doesn't exist")
  )
  .catch((error) => console.log("This error occurred", error));

app.use("/", require("./routes/signup.js"));
app.use("/", require("./routes/posts.js"));
app.use("/", require("./routes/signin.js"));
app.use("/", require("./routes/users.js"));
app.use("/", require("./routes/comments.js"));

module.exports = app;
