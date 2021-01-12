const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config.js');

/**
 *
 * @author Mamé Azad <https://github.com/mametur>
 *
 * JWT authentication middleware
 * @param {function}(req,res,next)  callback function get JWT from client, validation jwt
 * @return {object}  error Unauthorized or after validation go to next callback function
 */

const withAuth = function (req, res, next) {
	const token = req.cookies.token || req.headers['x-access-token'];

	if (!token) {
		return res.status(401).send({
			message: 'Unauthorized: No token provided',
			auth: false,
		});
	} else {
		jwt.verify(token, JWT_SECRET, function (err, decoded) {
			if (err) {
				return res.status(401).send({
					message: 'Unauthorized: Invalid token ' + err,
					auth: false,
				});
			} else {
				req.email = decoded.email;
				next();
			}
		});
	}
};

module.exports = withAuth;
