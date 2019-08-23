const mainController = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write('<h1>Hello from main route<h1>');
  response.end();
};

module.exports = mainController;
