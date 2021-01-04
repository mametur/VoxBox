const express = require('express');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const authenticated = require('../middleware/withAuth');

const app = express();

//Create a new comment on a post 
app.post("/post/comment", authenticated, (req, res) => {
	const commentContent = req.body.comment;

	if (!commentContent) {
		res.status(400).send({
		  message: "You should write a comment!",
		});
		return;
	  }
	//The postId and the userId will be already available on the front-end in the form for before a user wants to create a comment
	//The need to be send in the body, but we are not going to show them on the page.
	const postId = req.body.postId;
	const userId = req.body.userId;
	
	//Comment object
    const comment = {
        comment_content: commentContent,
		post_id: postId,
		user_id: userId
    };
	//Creating the comment and saving to the database
    Comment.create(comment)
		.then((data) => {
			console.log(data);
			res.status(201).send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating the Comment.',
			});
		});

});

//Update a comment
app.put("/post/comment/:id", authenticated, (req, res) => {
	let commentId = req.params.id;
	//console.log(commentId);
	const userId = req.body.userId
	if(!commentId) {
	 res.status(400).send({
		 message: 'No comment id provided in the params'
	 });
	 return;
	}
	//The idea here is to show update/delete small buttons only on the owner's comment/comments.
	//There won't be an option for a user to click update/delete on the comments from other users.
	
	const newComment = req.body.comment;
	const where = { where: {comment_id: Number(commentId), user_id: userId} };
	   //console.log(newComment);
	   //console.log(where);

	//Updating the comment in the database
	Comment.update(
		{comment_content: newComment},
		 where
	)
		.then((data) => {
			res.json(data).status(200);
		})
		.catch((err) => {
			res.status(500).send({
				message: 
				err.message ||
          		"Some error occurred while updating a comment"
			})
		})
});

//Delete a comment
app.delete("/post/comment/:id", authenticated, (req, res) => {
	const commentId = Number(req.params.id);

	if(!commentId) {
	 res.status(400).send({
		 message: 'No comment id provided in the params'
	 });
	 return;
	}

	//Same as with the updating, the idea here is to show update/delete small buttons only on the owner's comment/comments.
	//There won't be an option for a user to click update/delete on the comments from other users.

	//Deleting a comment from the database
	Comment.destroy({
		where: {
		  comment_id: commentId,
		},
	  })
		.then((data) => {
		  console.log(data);
		  res.status(200).send("A comment is deleted!");
		})
		.catch((err) => {
		  console.log(err);
		  res.status(400).send({
			message: 'Some error occurred while deleting a comment'
		});
		});
});

module.exports = app;