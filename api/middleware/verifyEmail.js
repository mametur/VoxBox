const User = require('../models/User.js');

/**
 *
 * @author Mamé Azad <https://github.com/mametur>
 *
 * Emil validation  middleware
 * @param {function} (req,res,next)  callback function get email from client side and check in database
 * @return {object}  error Email is already in use  or after validation go to next callback function
 */

checkDuplicateEmail = (req, res, next) => {
	// Email
	User.findOne({
		where: {
			email: req.body.email,
		},
	}).then((user) => {
		if (user) {
			res.status(400).send({
				status: 400,
				message: 'Failed! Email is already in use!',
			});
			return;
		}

		next();
	});
};

module.exports = checkDuplicateEmail;
