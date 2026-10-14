const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({status: 'ok', fn: 'fresh-test', ts: Date.now()}));
});
server.listen(8080, '0.0.0.0', () => console.log('fresh test function listening'));
