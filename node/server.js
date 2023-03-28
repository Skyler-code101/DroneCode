var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});
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

