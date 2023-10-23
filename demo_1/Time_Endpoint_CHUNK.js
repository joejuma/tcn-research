class TimeEndpoint {
  constructor() {}

  getTime(request, response) {
    const currentTime = new Date();
    const timeResponse = {
      currentTime: currentTime.toISOString(),
    };
    this.sendResponse(response, 200, timeResponse);
  }

  sendResponse(response, statusCode, data) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = statusCode;
    response.end(JSON.stringify(data));
  }
}

module.exports = TimeEndpoint;

/*
// Example usage
const server = new RESTServer();
const timeEndpoint = new TimeEndpoint();

server.get('/time', (request, response) => {
  timeEndpoint.getTime(request, response);
});

server.start(3000);
*/