const Sequelize = require("sequelize");
const sequelize = require("../db/db.js");
const User = require("./User.js");

const Post = sequelize.define("posts", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  topic: Sequelize.STRING(250),
  discription: Sequelize.STRING(400),
  city: Sequelize.STRING(255),
  user_id: Sequelize.INTEGER(11),
  published: Sequelize.BOOLEAN,
  // Timestamps
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

// create one-to-many relation

User.hasMany(Post, {
  as: "posts",
  foreignKey: "user_id",
});
Post.belongsTo(User, {
  as: "user",
  foreignKey: "user_id",
});

module.exports = Post;
