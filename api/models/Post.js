const Sequelize = require("sequelize");
const sequelize = require("../db/db.js");
const User = require("./User.js");

const Post = sequelize.define("post", {
  post_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  topic: {
    type: Sequelize.STRING(250),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  post_city: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  user_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
  published: Sequelize.BOOLEAN,
  // Timestamps
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

// create one-to-many relation
//test
User.hasMany(Post, {
  as: "post",
  foreignKey: "user_id",
});
Post.belongsTo(User, {
  as: "user",
  foreignKey: "user_id",
});

module.exports = Post;
