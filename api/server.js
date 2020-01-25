const express = require('express');
const server = express();
const projectsRouter = require('../projects/router');
//middleware
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({msg: 'API server'});
});

server.use('/api/projects', projectsRouter );

module.exports = server;
