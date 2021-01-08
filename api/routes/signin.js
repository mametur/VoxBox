const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const { JWT_SECRET } = require("../config.js");

const app = express();
/**
 * @method app.post()
 * @async
 * @author Mamé Azad <https://github.com/mametur>
 *
 * User signin router
 * @param {string} '/user/signin'  router
 * @param {function} (req,res)  callback function get user data from client, validation and authentication with jwt
 * @return {object}  set jwt on client site  or error message invalid email or password
 */

app.post("/user/signin", async (req, res) => {
  const { email, password } = req.body;
  // console.log("password:", password);
  User.findOne({
    where: {
      email: email,
    },
  })

    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "invalid email or password!" });
      }
      // console.log("no user", user);

      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "invalid email or password!",
        });
      }
      console.log("password problem:", user.password);

      const payload = { email };
      const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: "1h",
      });
      const userInfo = {
        user_id: user.user_id,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
      };
      res.cookie("token", token, { httpOnly: true }).status(200).json(userInfo);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});
module.exports = app;

/*
Find User record in database by email
If email is existed, check password is Valid or NOT
      -> If password is valid, create JWT then return JWT token back to client
  -> Other case, Error code will be returned

*/
