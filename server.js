const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({status: 'ok', timestamp: Date.now(), path: req.url}));
});
server.listen(8080, '0.0.0.0', () => console.log('listening on 8080'));
