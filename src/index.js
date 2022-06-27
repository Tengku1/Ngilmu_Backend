const config = require('../config');
const Server = require('./server');

const server = new Server();

const { PORT, BASE_URL } = config;
let baseUrl = BASE_URL;

if (process.env.NODE_ENV === 'development') {
    baseUrl = 'localhost';
}

server.listen(baseUrl, PORT || 3000);