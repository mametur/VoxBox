const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const sequelize = require("./db/db.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
sequelize
	.sync()
	.then(() => console.log("tables has been successfully created, if one doesn't exist"))
	.catch((error) => console.log('This error occured', error));

app.use('/', require('./routes/home.js'));
//app.use('/', require('./routes/login.js'));

module.exports = app;
