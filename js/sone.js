
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