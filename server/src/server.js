const Server = require('ws').Server;

const port = 5001;

const server = new Server({port:port});

server.on('connection', (ws) => {
  
  ws.on('message', (mes) => {

    server.clients.forEach( (client) => {
      client.send(mes);
    });
  });

  ws.on('close', () => {
    console.log('I lost a client');
  });
});

console.log('server is running on ' + port);