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
		console.log(e);
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
