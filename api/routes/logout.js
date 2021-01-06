const express = require('express');
const authenticated = require('../middleware/withAuth');

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

app.post('/user/logout', authenticated, async (req, res) => {
	const { email, password } = req.body;

	User.findOne({
		where: {
			email: email,
		},
	})
		.then((user) => {
			if (!user) {
				return res.status(404).send({ message: 'invalid email or password!' });
			}

			const passwordIsValid = bcrypt.compareSync(password, user.password);
			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: 'invalid email or password!',
				});
			}

			const payload = { email };
			const token = jwt.sign(payload, JWT_SECRET, {
				expiresIn: '1h',
			});
			const userInfo = {
				user_id: user.user_id,
				firstName: user.firstName,
				lastName: user.lastName,
				avatar: user.avatar,
			};
			res.cookie('token', token, { httpOnly: true }).status(200).json(userInfo);
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
});
module.exports = app;
