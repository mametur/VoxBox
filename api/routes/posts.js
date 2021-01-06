const express = require('express');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const authenticated = require('../middleware/withAuth');

const app = express();
// to get all the posts
// avatar and user id
app.get('/posts', authenticated, (req, res) => {
	Post.findAll({
		include: [
			{
				model: User,
				as: 'user',
				attributes: ['user_id', 'firstName', 'lastName', 'email', 'avatar'],
			},
		],
		order: [['post_id', 'DESC']],
	})
		.then((data) => {
			console.log(data);
			res.status(200).send(data);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(400);
		});
});

// to get one post
app.get('/posts/:id', authenticated, (req, res) => {
	const post = req.params;

	Post.findOne({
		where: { post_id: post.id },
		attributes: ['topic', 'description', 'post_city'],
		include: [
			{
				model: User,
				as: 'user',
				attributes: ['user_id', 'firstName', 'lastName', 'email', 'avatar'],
			},
			{
				model: Comment,
				include: [
					{
						model: User,
						as: 'user',
						attributes: ['user_id', 'firstName', 'lastName', 'avatar'],
					},
				],
			},
		],
	})
		.then((data) => {
			console.log(data);
			res.status(200).send(data);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(400);
		});
});

//to get postes with a city name
app.get('/posts/city/:post_city', authenticated, (req, res) => {
	const city = req.params;
	// console.log(city);
	// user id and post id avatar

	Post.findAll({
		where: { post_city: city.post_city },
		include: [
			{
				model: User,
				as: 'user',
				attributes: ['user_id', 'firstName', 'lastName', 'email', 'avatar'],
			},
		],
	})
		.then((data) => {
			console.log(data);
			res.status(200).send(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(400);
		});
});

///Creates a new post for a user
app.post('/posts/:id', authenticated, (req, res) => {
	const user = req.params;
	if (!req.body.topic) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
		return;
	}

	const post = {
		topic: req.body.topic,
		post_city: req.body.post_city,
		description: req.body.description,
		category: req.body.category,
		published: req.body.published ? req.body.published : false,
		user_id: user.id,
	};
	Post.create(post)
		.then((data) => {
			console.log(data);
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating the Post.',
			});
		});
});
// Deletes a post
app.delete('/posts/:id', authenticated, (req, res) => {
	const post = req.params.id;
	// console.log(post);
	Post.destroy({
		where: {
			post_id: post,
		},
	})
		.then((data) => {
			console.log(data);
			res.status(200).send('Post is deleted!');
		})
		.catch((err) => {
			console.log(err);
			res.status(400);
		});
});

module.exports = app;
