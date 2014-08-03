define(['socketioclient'], function(io) { 
  var Socket = function(server) {
    var socket = io(server);

    socket.on('connect', function() {
      console.log('connected');
    
      socket.on('event', function(data) {
        console.log(data); 
      });
    });
  }

  return Socket;
});
