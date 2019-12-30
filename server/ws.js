var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510})

wss.on('connection', function connection (ws) {
    console.log('received: %s', "hello from websocket")
    ws.on('message', function incoming(message) {
      console.log('received message: %s', message);
    });
    
    ws.send(`${new Date()}`)
})


