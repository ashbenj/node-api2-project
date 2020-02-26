const express = require('express');
const posts = require('./posts/postRoutes');

const router = express.Router();

//This handles the routes /api/hubs
router.get('/', (req, res) => {
	const opts = {
		sortBy: req.query.sortBy,
		limit: req.query.limit
	};

	hubs
		.find(opts)
		.then(posts => {
			res.status(200).json(posts);
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({
				error: 'The posts information could not be retrieved.'
			});
		});
});

//This handldes the route /api/posts/:id
router.get('/:id', (req, res) => {
	posts
		.findById(req.params.id)
		.then(posts => {
			if (posts) {
				res.status(200).json(posts);
			} else {
				res.status(404).json({
					message: 'The post with the specified ID does not exist.'
				});
			}
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({
				error: 'The posts information could not be retrieved.'
			});
		});
});

//This handles POST /api/hubs
router.post('/', (req, res) => {
	if (!req.body.name) {
		return res.status(400).json({
			errorMessage: 'Please provide title and contents for the post.'
		});
	}

	posts
		.add(req.body)
		.then(posts => {
			res.status(201).json(posts);
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({
				error: 'There was an error while saving the post to the database.'
			});
		});
});

//This handles PUT /api/posts/:id
router.put('/:id', (req, res) => {
	if (!req.body.name) {
		return res.status(400).json({
			errorMessage: 'Please provide title and contents for the post.'
		});
	}

	posts
		.update(req.params.id, req.body)
		.then(posts => {
			if (posts) {
				res.status(200).json(posts);
			} else {
				res.status(404).json({
					message: 'The post with the specified ID does not exist.'
				});
			}
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({
				error: 'The post information could not be motified.'
			});
		});
});

//This handles DELETE /api/posts/:id
router.delete('/:id', (req, res) => {
	posts
		.remove(req.params.id)
		.then(count => {
			if (count > 0) {
				res.status(200).json(posts);
			} else {
				res.status(500).json({
					error: 'The post could not be removed.'
				});
			}
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({
				error: 'The posts information could not be retrieved.'
			});
		});
});

//A route for listing out a hub's messages
//What should the endpoint be?

module.exports = router;
