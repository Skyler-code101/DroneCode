

  function ping() {
            
            if ("WebSocket" in window) {
               // Let us open a web socket
               var ws = new WebSocket("wss://skyler-drone-sys.glitch.me/");
				
               ws.onopen = function() {
                ws.send("/ping");

               };
				
               ws.onmessage = function (evt) { 
                  var received_msg = evt.data;
                 
                 if (received_msg == "Online")
                   {
                     alert("Drone Is Online");
                     ws.close();
                   }
               };
				
               ws.onclose = function() { 
                  
               };
            } else {
              
               // The browser doesn't support WebSocket
               alert("WebSocket NOT supported by your Browser!");
            }
         }
     function master() {
            
            if ("WebSocket" in window) {
               // Let us open a web socket
               var ws = new WebSocket("wss://skyler-drone-sys.glitch.me/");
				
               ws.onopen = function() {
                ws.send("/list.Master");
               };
				
               ws.onmessage = function (evt) { 
                  var rec_msg = evt.data;
                 
                 if (rec_msg.includes("/reply.master."))
                   {
                     alert("Drone's Controler is Currently in the Hands of " + rec_msg.replace("/reply.master.", ""));
                     ws.close();
                   }
               };
				
               ws.onclose = function() { 
                  
               };
            } else {
              
               // The browser doesn't support WebSocket
               alert("WebSocket NOT supported by your Browser!");
            }
         }
var ws
var Username
function loadcontrol()
{
  var passwords = [ "Zeoman19:canofstarworm", "5oull3s5:Codered101", "SkylerGamer:Muffin1010#", "D1A1M1:D1A1M1", "Jeff:001153311"]
  
  let person = prompt("Please enter your Username And Password In the Form Username:Password", localStorage['LoginCashe'] || '');
if (person == null || person == "") {
  alert("No Value Entered")
  window.location.href='https://www.google.com/?authuser=0';
  } else {
    if (passwords.includes(person))
      {
        Username = person.split(":")[0]
        localStorage['Essencals:UsernameToSkylerDrone'] = Username
        localStorage['LoginCashe'] = person;
      }
    else
      {
          alert("Invalid Creds")
          window.location.href='https://www.google.com/?authuser=0';
      }
  };
}

var myVar
function Link() {
          myVar = localStorage['Essencals:UsernameToSkylerDrone'] || 'null';
  
          if (myVar != "null")
            {
              if ("WebSocket" in window) {
              ws = new WebSocket("wss://skyler-drone-sys.glitch.me/");
				
               ws.onopen = function() {
                 
                ws.send("Web Client Entered -- User:" + myVar)
               }; 
				
               ws.onclose = function() { 
              ws = new WebSocket("wss://skyler-drone-sys.glitch.me/");
               };
            } else {
              
               // The browser doesn't support WebSocket
               alert("WebSocket NOT supported by your Browser!");
            }
            }else {
              alert("Login Failed Please Relogin If This Keeps Happening Contact Drone Support (aka Skyler)")
              location.href = 'https://skyler-drone-sys.glitch.me/index.html';
            }
            
         }

function statue()
{
              if ("WebSocket" in window) {
               // Let us open a web socket
                ws.send("/control.statue")
                
              }

}
function context()
{
              if ("WebSocket" in window) {
               // Let us open a web socket
                ws.send("/control.context")
                
              }

}
function speach()
{
              if ("WebSocket" in window) {
               // Let us open a web socket
                ws.send("/control.speach")
                
              }

}
function blind()
{
              if ("WebSocket" in window) {
               // Let us open a web socket
                ws.send("/control.blind")
                
              }

}
function message()
{
  let message = prompt("please Type Message", "");
let text;
if (message == null || message == "") {
  alert("No Message Enter Canceling")
} else {
  if ("WebSocket" in window) {
               // Let us open a web socket
                ws.send("/message#" + myVar + "#" + message)
                
              }
}
}