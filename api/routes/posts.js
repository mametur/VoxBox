const express = require("express");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const app = express();

// Responds with all the posts topic(title),help description, help needed city
//and filter it with created date
app.get("/posts", (req, res) => {
  Post.findAll({
    attributes: ["topic", "description", "post_city", "createdAt"],
    include: [
      {
        model: User,
        as: "user",
        attributes: ["firstName", "email"],
      },
    ],
    order: [["createdAt", "DESC"]],
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

// Responds with one post topic(title),help description,
//help needed city with its comments and includes user's name and email
app.get("/posts/:id", (req, res) => {
  const post = req.params;

  Post.findOne({
    where: { post_id: post.id },
    attributes: ["topic", "description", "city"],
    include: [
      {
        model: User,
        as: "user",
        attributes: ["firstName", "email"],
      },
      {
        model: Comment,
        attributes: ["comment_content"],
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

//responds with posts that are  filltered with a city name

app.get("/posts/:city", (req, res) => {
  const city = req.params;

  Post.findAll({
    where: { city: city.city },
    attributes: ["topic", "discription", "city"],
    include: [
      {
        model: User,
        as: "user",
        attributes: ["name", "email"],
      },
    ],
  })
    .then((data) => {
      console.log(data);
      res.status(200).send("data");
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
    });
});

///Creates a new post for a user
app.post("/posts/:id", (req, res) => {
  const user = req.params;
  if (!req.body.topic) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const post = {
    topic: req.body.topic,
    post_city: req.body.post_city,
    discription: req.body.discription,
    published: req.body.published ? req.body.published : false,
    user_id: user.id,
  };
  Post.create(post)
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Post.",
      });
    });
});
// Deletes a post
app.delete("/posts/:id", (req, res) => {
  const user = req.params.id;
  //console.log(user);
  Post.destroy({
    where: {
      id: user,
    },
  })
    .then((data) => {
      console.log(data);
      res.status(200).send("Post is deleted!");
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
    });
});

module.exports = app;
