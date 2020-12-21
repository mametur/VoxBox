const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = require('./config');
module.exports = {
	MODE: 'production',
	PORT: process.env.PORT,
	DB_HOST: DB_HOST,
	DB_NAME: DB_NAME,
	DB_USER: DB_USER,
	DB_PASSWORD: DB_PASSWORD,
};
