
// Websocket ip === wss://daffy-nervous-chatter.glitch.me/



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
    console.log(msg);
    ws.clients.forEach(function each(client) {
      client.send("/" + msg)
    });
})})

