const express = require('express')
const app = express()
const fs = require('fs');
app.get('/', function (req, res) {
  fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();
  })
})

const lisenter = app.listen(3000)
const Websocket = require('ws');


const ws = new Websocket.Server({
  server : lisenter
});
let message;
ws.on("connection", function (socket){
  console.log("A Client Entered")
  socket.on('message', function message(data, isBinary) {
  const message = isBinary ? data : data.toString();
    ws.clients.forEach(function (client){
      client.send("/" + message)
    })
});
})
    