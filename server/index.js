var express = require('express')

var ws = require('./ws')

var app = express()

app.get('/', function (req, res) {
   res.sendfile(__dirname + '/index.html');
})

app.set('trust proxy',
function (ip) {
  if (ip === '127.0.0.1' || ip === '192.168.0.149') return true // trusted IPs
  else return false
)
app.listen(3000, function () {
   console.log('Example app listening on port 3000!')
})
