// Make a connection with the database through sequalize

const { Sequelize } = require('sequelize');
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = require('../../config/index');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	host: DB_HOST,
	dialect: 'mysql',
});

(async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();

module.exports = sequelize;
