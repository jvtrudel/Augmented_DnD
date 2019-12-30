var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510})

wss.on('connection', function connection (ws) {
    console.log('received: %s', message)
    ws.send(`${new Date()}`)
})
