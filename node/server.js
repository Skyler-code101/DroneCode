var express = require('express'),
    path = require('path'),
    app = express();
app.get('/index.html',function(req,res){
   res.sendFile('/app/Pages/index.html'); 
});

app.get('/controlmenu.html',function(req,res){
   res.sendFile('/app/Pages/controlmenu.html'); 
});

app.get('/help.html',function(req,res){
   res.sendFile('/app/Pages/help.html'); 
});

app.get('/css/app.css',function(req,res){
    res.sendFile('/app/css/app.css'); 
});

app.get('/js/sc.js',function(req,res){
    res.sendFile('/app/js/script.js'); 
});


app.get('/', function(req, res) {
    res.redirect('index.html');
});


const lisenter = app.listen(3000)
const Websocket = require('ws');

var fs = require('fs')

const Neos = require('@bombitmanbomb/neosjs')
const neos = new Neos()
neos.on("login",(obj)=>{
    console.log("Neos Bot Online")
})

neos.Login("SkylerDroneAPI", "Muffin1010#")

const ws = new Websocket.Server({
  server : lisenter
});
let message;
ws.on("connection", function (socket){
  socket.on('message', function message(data, isBinary) {
  const message = isBinary ? data : data.toString();
    console.log("Client Has Sent : " + message)
    ws.clients.forEach(function (client){
      client.send("" + message)
    })
    if (message.includes("/control."))
      {
        neos.SendTextMessage("U-CinnamonRoll101", "Command Recived");
      }else if (message.includes("/message#"))
        {
          const myArray = message.split("#");
          let User = myArray[1];
          let Message = myArray[2];
          neos.SendTextMessage("U-CinnamonRoll101", "Message Recived \n User: '" + User + "'\n Message: '" + Message+ "'");
        }
    
})
});

