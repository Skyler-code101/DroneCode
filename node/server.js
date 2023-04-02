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

app.get('/js/sone.js',function(req,res){
    res.sendFile('/app/js/sone.js'); 
});

app.get('/js/stwo.js',function(req,res){
    res.sendFile('/app/js/stwo.js'); 
});

app.get('/', function(req, res) {
    res.redirect('index.html');
});


const lisenter = app.listen(3000)
const Websocket = require('ws');

var fs = require('fs')

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
    fs.appendFile('node/log.txt',"Client Has Sent : " + message, function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
})
});
})

const Neos = require('@bombitmanbomb/neosjs')
const neos = new Neos()
neos.on("login",(obj)=>{
    console.log("Neos Bot Online")
})
neos.on("friendAdded",(friend)=>{
    if (friend.FriendStatus == "Requested") {
        neos.AddFriend(friend)
    }
})
neos.on("messageReceived",(message)=>{
  if (message.Content == "/statuefy")
    {
      ws.clients.forEach(function (client){
      client.send("/control.statue")
    })
      neos.SendTextMessage(message.SenderId,"Command Sent") 
    }else if (message.Content == "/restrictContext")
      {
        
      ws.clients.forEach(function (client){
      client.send("/control.context")
    })
      neos.SendTextMessage(message.SenderId,"Command Sent") 
      }else if (message.Content == "/blind")
      {
        
      ws.clients.forEach(function (client){
      client.send("/control.blind")
    })
      neos.SendTextMessage(message.SenderId,"Command Sent") 
      }else if (message.Content == "/speech")
      {
        
      ws.clients.forEach(function (client){
      client.send("/control.speach")
    })
      neos.SendTextMessage(message.SenderId,"Command Sent") 
      }
})

neos.Login("SkylerDroneAPI", "Muffin1010#")
