//express import
const express = require('express');
const postsRoutes = require('./posts/postRoutes.js');

const server = express();
const port = 8000;

server.use(express.json());
server.use('/api/posts', postsRoutes);

server.listen(8000, () => {
	console.log('API running on port 8000');
});
