const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const withAuth = require('../middleware/withAuth.js');
const User = require('../models/User');
const verifyEmail = require('../middleware/verifySignUp.js');

const { JWT_SECRET } = require('../../config/config.js');

const app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/home', function (req, res) {
	res.send('Welcome!');
});

app.get('/secret', withAuth, function (req, res) {
	res.send('You are visiting a protected page.');
});

app.post('/register', verifyEmail, async (req, res) => {
	const { name, email, password } = req.body;

	try {
		await User.create({
			name: name,
			password: password,
			email: email,
		});
		res.status(200).send({
			status: 200,
			message: 'Data Save Successfully',
		});
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
		return;
	}
});

app.post('/authenticate', async (req, res) => {
	const { email, password } = req.body;

	let user = null;

	try {
		user = await User.findOne({ where: { email } });
	} catch (e) {
		res.sendStatus(401);
		return;
	}

	if (!user) {
		res.sendStatus(401);
		return;
	}

	if (user.validPassword(password)) {
		// Issue token
		const payload = { email };
		const token = jwt.sign(payload, JWT_SECRET, {
			expiresIn: '1h',
		});

		res.cookie('token', token, { httpOnly: true }).sendStatus(200);
	}
});

app.get('/checkToken', withAuth, function (req, res) {
	res.sendStatus(200);
});

module.exports = app;

/*
-> Verify  Email
    -> If NOT Duplicate ( Email)
    ->  save User Info to database by Sequlieze ORM
  -> Othercase, Eror code will be returned
*/
