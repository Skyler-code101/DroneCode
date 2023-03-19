
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
    if (msg = "blind"){ 
      ws.clients.forEach(function each(client) {
        client.send("/control.blind");

    });}else
    if (msg = "speach"){ 
      ws.clients.forEach(function each(client) {
        client.send("/control.speach");

    });}else
    if (msg = "context"){ 
      ws.clients.forEach(function each(client) {
        client.send("/control.context");

    });}
    console.log("client sent this : " + message);
    
    });
  })



