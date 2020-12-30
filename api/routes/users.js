const express = require("express");
const User = require("../models/User");
const Post = require("../models/Post");

const app = express();

// Responds with all  users firstName lastName and email
app.get("/users", (req, res) => {
  User.findAll({
    attributes: ["firstName", "lastName", "email"],
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

//  Responds with  one person and their posts
app.get("/users/:id", (req, res) => {
  const user = req.params;

  User.findOne({
    where: { user_id: user.id },
    include: [
      {
        model: Post,
        as: "post",
        attributes: ["topic", "description", "post_city"],
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

//Updates (adds) user's aboutme, Language preference and current city

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
