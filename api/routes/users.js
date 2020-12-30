const express = require("express");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const app = express();
// to get all the users
app.get("/users", (req, res) => {
  User.findAll({
    attributes: ["first_name", "last_name", "email"],
  })
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

// // to get one person and their posts
app.get("/users/:id", (req, res) => {
  const user = req.params;

  User.findOne({
    where: { user_id: user.id },
    include: [
      {
        model: Post,
        as: "post",
        attributes: ["topic", "discription", "post_city"],
      },
    ],
  })
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

///to update the users'information

app.put("/users/:id", (req, res) => {
  const user = req.params;
  const value = {
    introduction: req.body.introduction,
    language: req.body.language,
    user_city: req.body.user_city,
  };
  const where = { where: { user_id: user.id } };

  User.update(value, where)
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while updating user informaition.",
      });
    });
});

module.exports = app;
