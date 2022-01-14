//... as always, DATA section
const express = require('express');
const server = express();
const actionsRouter = require('./actions/actions-router');
const projectsRouter = require('./projects/projects-router');

//LOGIC section
server.use(express.json());
server.use('/api/actions',actionsRouter);
server.use('/api/projects',projectsRouter); 

server.get('/', (req, res) => {
    res.send(`<h2>Let's crush this sprint challenge woo!</h2>`);
  });
//not really needed, but makes things look a little prettier.

module.exports = server;
