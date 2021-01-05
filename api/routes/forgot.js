const express = require("express");
const validator = require("validator");
const sendEmail = require("../utils/sendEmail");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config.js");
const { cryptPassword } = require("../utils/encryption");

//
//
const app = express();

app.post("/forgot", async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(email);
    const user = await User.findOne({ where: { email } });
    if (!email) {
      return res.status(400).send({ error: "Email is required" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).send({ error: "Invalid email" });
    }
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const payload = { email };
    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: "1h",
    });
    const link = `${req.protocol}://localhost:5000/api/reset/${token}`;

    // console.log(req.protocol); // "https"
    // console.log(req.hostname); // "example.com"
    await sendEmail(
      email,
      "info.voxbox@gmail.com",
      "Reset Password",
      `
        <div>Click the link below to reset your password</div><br/>
        <div>${link}</div>
        `
    );
    return res.status(200).send({
      message: "Password reset link has been successfully sent to your inbox",
    });
  } catch (e) {
    return next(new Error(e));
  }
});

app.post("/reset/:token", async (req, res, next) => {
  try {
    const { password, email } = req.body;
    // console.log(email);

    const { token } = req.params;
    const hash = cryptPassword(password);
    await User.update(
      { password: `${hash}` },
      {
        where: { email: email },
      }
    );

    return res.status(200).send({
      token,
      user: { email },
      message: "Password is changed!",
    });
  } catch (e) {
    return next(new Error(e));
  }
});

module.exports = app;
