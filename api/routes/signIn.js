const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const withAuth = require('../middleware/withAuth.js');
const User = require('../models/User');

const { JWT_SECRET } = require('../../config/config.js');

const app = express();

app.post('/signin', async (req, res) => {
	const { email, password } = req.body;

	User.findOne({
		where: {
			email: email,
		},
	})
		.then((user) => {
			if (!user) {
				return res.status(404).send({ message: 'User Not found.' });
			}

			const passwordIsValid = bcrypt.compareSync(password, user.password);
			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: 'Invalid Password!',
				});
			}

			const payload = { email };
			const token = jwt.sign(payload, JWT_SECRET, {
				expiresIn: '1h',
			});

			res.cookie('token', token, { httpOnly: true }).sendStatus(200);
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
