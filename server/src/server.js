const Server = require('ws').Server;

const port = 5001;

const server = new Server({port:port});

const clientMap = new Map();

server.on('connection', (ws, req) => {

  const uuid = req.headers['sec-websocket-protocol'];
  console.log(`uuid : ${uuid}`);
  if (uuid) {
    clientMap.set(uuid, ws);
  }
  
  ws.on('message', (data) => {
    const dataObj = JSON.parse(data);
    console.log(`uuid from browser : ${dataObj.uuid}`);
    const client = clientMap.get(dataObj.uuid);
    if (client) {
        client.send(dataObj.message);
    } else {
        console.warn(`I can not find client from the UUID. UUID=${dataObj.uuid}`)
    }
  });

  ws.on('close', function() {
    clientMap.forEach((value, key) => {
      if (value === this) {
        console.log('I lost a client : ' + key);
        clientMap.delete(key);
      }
    });
  });
});

console.log('server is running on ' + port);