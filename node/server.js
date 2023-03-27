
// Websocket ip === wss://daffy-nervous-chatter.glitch.me/
const Websocket = require('ws');

const Port = 4000;


const ws = new Websocket.Server({
  port : Port
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

