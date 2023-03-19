
const Websocket = require('ws');

const Port = 4000;


const ws = new Websocket.Server({
  port : Port
});

ws.on("connection", function (socket){
  console.log("A Client Entered")
  
  socket.on("message",function(msg)
           {
    console.log("Message From a Client:" + msg)
    ws.clients.forEach(client => {
      client.send(msg);
    });
  })
})



