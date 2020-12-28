const Sequelize = require("sequelize");
const sequelize = require("../db/db.js");
const User = require("./User.js");
const Post = require("./Post.js")
const bodyParser = require('body-parser');


//Comment model
const Comment = sequelize.define('thread', {
    comment_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    comment_content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    post_id:  {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    //Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

});

//RELATIONS
//One to one relations between User and Comment
User.hasOne(Comment, {
    foreignKey: "user_id",
  });
Comment.belongsTo(User, {
    foreignKey: "user_id",
  });

//One to many relations between Post and Comment
Post.hasMany(Comment, {
    foreignKey: "post_id",
})
Comment.belongsTo(Post, {
    foreignKey: "post_id",
})

    
module.exports = Comment;