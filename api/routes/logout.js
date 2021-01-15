const express = require('express');

const app = express();
/**
 * @method app.get()
 * @async
 * @author Mamé Azad <https://github.com/mametur>
 *
 * Clean cookies from browser
 * @param {string} '/user/logout'  router
 * @param {function} (req,res) clear cookies and send message
 *
 */

app.get('/user/logout', (req, res) => {
	res.clearCookie('token');
	res.status(200).send({
		status: 200,
		message: 'User logout successfully',
	});
});
module.exports = app;
