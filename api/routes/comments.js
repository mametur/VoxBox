const express = require('express');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const authenticated = require('../middleware/withAuth');

const app = express();

//Create a new comment on a post 
app.post("/post/comment", authenticated, (req, res) => {
	const commentContent = req.body.comment;

	if (!commentContent || commentContent === " ") {
		res.status(400).send({
		  status: 400,
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
			res.status(201).send(data);
		})
		.catch((err) => {
			res.status(500).send({
				status: 500,
				message: err.message || 'Some error occurred while creating the Comment.',
			});
		});

});

//Update a comment
app.put("/post/comment/:id", authenticated, (req, res) => {
	let commentId = Number(req.params.id);
	const userId = req.body.userId;
	const postId = req.body.postId;
	if(!commentId) {
	 res.status(400).send({
		 status: 400,
		 message: 'No comment id provided in the params'
	 });
	 return;
	}
	if(!userId || !postId) {
		res.status(400).send({
			status: 400,
			message: 'User id and/or Post id are not provided'
		});
		return;
	   }
	//The idea here is to show update/delete small buttons only on the owner's comment/comments.
	//There won't be an option for a user to click update/delete on the comments from other users.
	
	const newComment = req.body.comment;
	const where = { where: {comment_id: commentId, user_id: userId, post_id: postId} };
	console.log(where);

	//Updating the comment in the database
	Comment.update(
		{comment_content: newComment},
		 where
	)
		.then((data) => {
			console.log(Boolean(data));
			if (Boolean(data[0]) === false) {
				res.status(401).send({
				status: 401,
				message: 'Unauthorized! You cannot change this comment!',
				});
				return;
				}
			res.json(data).status(200);
		})
		.catch((err) => {
			res.status(501).send({
				status: 501,
				message: err.message || "Some error occurred while updating a comment"
			})
		})
});

//Delete a comment
app.delete("/post/comment/:id", authenticated, (req, res) => {
	const commentId = Number(req.params.id);
	const userId = req.body.userId;
	const postId = req.body.postId;

	if(!commentId) {
	 res.status(400).send({
		 status: 400,
		 message: 'No comment id provided in the params'
	 });
	 return;
	}
	if(!userId || !postId) {
		res.status(400).send({
			status: 400,
			message: 'User id and/or Post id are not provided'
		});
		return;
	   }
	//Same as with the updating, the idea here is to show update/delete small buttons only on the owner's comment/comments.
	//There won't be an option for a user to click update/delete on the comments from other users.

	//Deleting a comment from the database
	Comment.destroy({
		where: {
		  comment_id: commentId, user_id: userId, post_id: postId
		},
	  })
		.then((data) => {
		  console.log(data);
		  if (Boolean(data) === false) {
			res.status(400).send({
				status: 400,
				message: 'Something went wrong',
			});
			return;
		}
		  res.status(200).send("A comment is deleted!");
		})
		.catch((err) => {
		  console.log(err);
		  res.status(501).send({
			status: 501,
			message: 'Some error occurred while deleting a comment'
		});
		});
});

module.exports = app;