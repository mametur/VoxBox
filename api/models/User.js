const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const sequelize = require("../db/db.js");

const User = sequelize.define('user', {
	user_id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [2, 50],
		},
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [2, 50],
		},
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
		},
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [5, 1500],
		},
	},
	introduction: {
		type: Sequelize.STRING,
	},
	language: {
		type: Sequelize.STRING,
	},
	user_city: {
		type: Sequelize.STRING,
	},
	hobbies: {
		type: Sequelize.STRING,
	},
	reason: {
		type: Sequelize.STRING,
	},
	avatar: {
		type: Sequelize.STRING,
		defaultValue: 'user',
	},
	// created user about, user city  and user languages
	// Timestamps
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
});

User.beforeCreate((user, options) => {
  return bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      user.password = hash;
    })
    .catch((err) => {
      throw new Error(err);
    });
});
// User.beforeUpdate((user, options) => {
//   return bcrypt
//     .hash(user.password, 10)
//     .then((hash) => {
//       user.password = hash;
//     })
//     .catch((err) => {
//       throw new Error(err);
//     });
// });

module.exports = User;
