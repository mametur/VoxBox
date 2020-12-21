const express = require('express');
const connectDd = require('../db/db.js');

const app = express();

/**
 * Just a simple test endpoint to demo how to test with Jest
 **/
app.get('/home', function (req, res) {
	res.send('Welcome!');
});

module.exports = app;
