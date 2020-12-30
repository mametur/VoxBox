const express = require('express');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const authenticated = require('../middleware/withAuth');

const app = express();
// to get all the posts
app.get('/posts', authenticated, (req, res) => {
	Post.findAll({
		attributes: ['topic', 'discription', 'city'],
		include: [
			{
				model: User,
				as: 'user',
				attributes: ['firstName', 'lastName', 'email'],
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

// to get one post
app.get('/posts/:id', (req, res) => {
	const post = req.params;

	Post.findOne({
		where: { post_id: post.id },
		attributes: ['topic', 'discription', 'city'],
		include: [
			{
				model: User,
				as: 'user',
				attributes: ['firstName', 'lastName', 'email'],
			},
			{
				model: Comment,
				attributes: ['comment_content'],
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
app.get('/posts/:city', (req, res) => {
	const city = req.params;

	Post.findAll({
		where: { city: city.city },
		attributes: ['topic', 'discription', 'city'],
		include: [
			{
				model: User,
				as: 'user',
				attributes: ['firstName', 'lastName', 'email'],
			},
		],
	})
		.then((data) => {
			console.log(data);
			res.status(200).send('data');
		})
		.catch((err) => {
			console.log(err);
			res.status(400);
		});
});

///to create a post
app.post('/posts/:id', (req, res) => {
	const user = req.params;
	if (!req.body.topic) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
		return;
	}

	const post = {
		topic: req.body.topic,
		city: req.body.city,
		discription: req.body.discription,
		published: req.body.published ? req.body.published : false,
		user_id: user.id,
	};
	Post.create(post)
		.then((data) => {
			console.log(data);
			res.status(201).send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating the Post.',
			});
		});
});
app.delete('/posts/:id', (req, res) => {
	const user = req.params.id;
	console.log(user);
	Post.destroy({
		where: {
			id: user,
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
