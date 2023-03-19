
const Websocket = require('ws');

const Port = 4000;


const ws = new Websocket.Server({
  port : Port
});
let message;
ws.on("connection", function (socket){
  console.log("A Client Entered")
  
  socket.on("message",function(msg){
    message = msg; 
      ws.clients.forEach(function each(client) {
        client.send(message)
    console.log("client sent this : " + message);
  })
  })
})



