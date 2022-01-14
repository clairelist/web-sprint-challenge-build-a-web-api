const server = require('./api/server');
const process = require('dotenv').config();
const port = process.env.port || 9000;

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});