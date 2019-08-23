const http = require('http');
const path = require('path');
const fs = require('fs');

const router = require('./router');

const port = '8080';

const requestHendler = (request, response) => {
    const url = request.url;

    const products = /^\/products/;
    const signup = /^\/signup/;

    switch (true) {
        case products.test(url):
            router.products(request, response);
            break;
        case signup.test(url):
            router.signup(request, response);
            break;
        default:
            router.default(request, response);
    }
};

const server = http.createServer().listen(port);
server.on('request', requestHendler);

module.exports = server;
