class HealthCheckEndpoint {
  constructor() {}

  handleRequest(request, response) {
    const healthStatus = { status: 'OK' };
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.end(JSON.stringify(healthStatus));
  }
}

/* Example usage
const server = new RESTServer();
const healthCheckEndpoint = new HealthCheckEndpoint();

server.get('/health', (request, response) => {
  healthCheckEndpoint.handleRequest(request, response);
});

server.start(3000);
*/

module.exports = HealthCheckEndpoint;