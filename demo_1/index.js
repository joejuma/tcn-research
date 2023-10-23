// Human
const RESTServer = require("./REST_Server_CHUNK"); // Generated file
const HealthCheckEndpoint = require("./Health_Check_Endpoint_CHUNK"); // Generated file
const TimeEndpoint = require("./Time_Endpoint_CHUNK"); // Generated file

// Generated
const server = new RESTServer();
const timeEndpoint = new TimeEndpoint();
const healthCheckEndpoint = new HealthCheckEndpoint();

// Generated
server.get('/hello', (request, response) => {
  server.sendResponse(response, 200, { message: 'Hello, world!' });
});

// Generated
server.get('/health', (request, response) => {
  healthCheckEndpoint.handleRequest(request, response);
});

// Generated
server.get('/time', (request, response) => {
  timeEndpoint.getTime(request, response);
});

// Generated
server.start(3000);