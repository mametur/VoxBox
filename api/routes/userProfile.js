const express = require('express');
const User = require('../models/User');
const authenticated = require('../middleware/withAuth');

const app = express();

/**
 * @method app.get()
 * @async
 * @author Mamé Azad <https://github.com/mametur>
 *
 * Check User Profile before making a request
 * @param {string} '/user/complete/profile'  router
 * @param {function} (req,res)  callback function check user data in db
 * @return {object}  if user data is complete return a success message or vice versa
 */

app.get('/user/complete/profile/:id', authenticated, (req, res) => {
	User.findOne({
		where: { user_id: req.params.id },
		attributes: ['introduction', 'language', 'user_city', 'hobbies', 'reason'],
	})
		.then((data) => {
			console.log('test data', data.dataValues);
			for (const column in data.dataValues) {
				if (data.dataValues[column] === null || data.dataValues[column].trim() === '') {
					throw new Error('Please fill your profile');
				}
			}
			res.status(200).send({
				status: 200,
				message: 'your profile is completed',
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(400).send({
				status: 400,
				message: err.message,
			});
		});
});
module.exports = app;
