const express = require('express');
const server = express();
// const actionsRouter = require('./actions/actions-router');
// const projectsRouter = require('./projects/projects-router'); // --> commented out til Claire builds it!

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

server.use(express.json());
// server.use('/api/actions',actionsRouter);
// server.use('/api/projects',projectsRouter); //// -->  commented out til Claire builds it !

server.get('/', (req, res) => {
    res.send(`<h2>Let's crush this sprint challenge woo!</h2>`);
  });
//not really needed, but makes things look a little prettier.

module.exports = server;
