
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
      testcommand(msg,client)
    });
})})

function testcommand(msg,client){
  if (msg = "blind")
    {
      client.send("/control.blind")
    }
  if (msg = "speach")
    {
      client.send("/control.speach")
    }
  if (msg = "context")
    {
      client.send("/control.context")
    }
}