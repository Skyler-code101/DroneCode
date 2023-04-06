var ws
var Username
function load()
{
  let person = prompt("Please enter your name", "");
let text;
if (person == null || person == "") {
  alert("No user Entered Returning")
  window.location.href='https://skyler-drone-sys.glitch.me/index.html';
} else {
  Username = person
  Link(person)
}
}

function Link(perm) {
            
            if ("WebSocket" in window) {
              ws = new WebSocket("wss://skyler-drone-sys.glitch.me/");
				
               ws.onopen = function() {
                ws.send("Web Client Entered -- User:" + perm)
               }; 
				
               ws.onclose = function() { 
              ws = new WebSocket("wss://skyler-drone-sys.glitch.me/");
               };
            } else {
              
               // The browser doesn't support WebSocket
               alert("WebSocket NOT supported by your Browser!");
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
                ws.send("/message#" +Username + "#" + message)
                
              }
}
}
