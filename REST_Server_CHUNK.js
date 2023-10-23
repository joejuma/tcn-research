const http = require('http');
const url = require('url');

class RESTServer {
  constructor() {
    this.routes = {};
  }

  get(path, handler) {
    this.routes[`GET:${path}`] = handler;
  }

  post(path, handler) {
    this.routes[`POST:${path}`] = handler;
  }

  put(path, handler) {
    this.routes[`PUT:${path}`] = handler;
  }

  delete(path, handler) {
    this.routes[`DELETE:${path}`] = handler;
  }

  handleRequest(request, response) {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;
    const method = request.method.toUpperCase();
    const handler = this.routes[`${method}:${path}`];

    if (handler) {
      try {
        handler(request, response);
      } catch (error) {
        this.sendResponse(response, 500, { error: 'Internal server error' });
      }
    } else {
      this.sendResponse(response, 404, { error: 'Route not found' });
    }
  }

  sendResponse(response, statusCode, data) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = statusCode;
    response.end(JSON.stringify(data));
  }

  start(port) {
    const server = http.createServer((request, response) => {
      this.handleRequest(request, response);
    });

    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
};

module.exports = RESTServer;

/*
// Example usage
const server = new RESTServer();

server.get('/hello', (request, response) => {
  server.sendResponse(response, 200, { message: 'Hello, world!' });
});

server.post('/api/user', (request, response) => {
  // Handle user creation logic here
  server.sendResponse(response, 201, { message: 'User created' });
});

server.start(3000);
*/