const express = require('express');
const User = require('../models/User');
const verifyEmail = require('../middleware/verifyEmail.js');

const app = express();

/**
 * @method app.post()
 * @async
 * @author Mamé Azad <https://github.com/mametur>
 *
 * User signup router
 * @param {string} /signup  router
 * @param {middleware} verifyEmail  check email is already in database
 * @param {function} (req,res)  callback function get user data from client
 * @return {object} successfully message or error message email already in database
 */

app.post('/signup', verifyEmail, async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	try {
		await User.create({
			firstName: firstName,
			lastName: lastName,
			password: password,
			email: email,
		});
		res.status(200).send({
			status: 200,
			message: 'Data Save Successfully',
		});
	} catch (e) {
		if (e.errors) {
			console.log('my errror', e);
			switch (e.errors[0].path) {
				case 'email':
					res.status(401).send({ status: 401, message: ' Your email is not valid' });
					break;
				case 'password':
					res.status(401).send({ status: 401, message: 'Password length has to be at least 5 characters' });
					break;
				case 'firstName':
					res.status(401).send({ status: 401, message: 'First name is too short' });
					break;
				case 'lastName':
					res.status(401).send({ status: 401, message: 'Last name is too short' });
					break;
			}
			return;
		}
		res.status(500).send(e);
		return;
	}
});

module.exports = app;

/*
-> Verify  Email
    -> If NOT Duplicate ( Email)
    ->  save User Info to database by Sequlieze ORM
  -> Othercase, Eror code will be returned
*/
