const { DB_HOST_DEV, DB_NAME_DEV, DB_USER_DEV, DB_PASSWORD_DEV } = require('./config');
module.exports = {
	MODE: 'development',
	DB_HOST: DB_HOST_DEV,
	DB_NAME: DB_NAME_DEV,
	DB_USER: DB_USER_DEV,
	DB_PASSWORD: DB_PASSWORD_DEV,
};
