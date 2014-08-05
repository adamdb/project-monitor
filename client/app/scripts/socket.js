define(['socketioclient'], function(io) { 
  var Socket = function(server) {
    var socket = io(server);

    socket.on('connect', function() {
      console.log('connected');
    
      socket.on('STARTED', function(data) {
        console.log(data); 
      });

      socket.on('COMPLETED', function(data) {
        console.log(data);
      });

      socket.on('FINALIZED', function(data) {
        console.log(data)
      });
    });
  }

  return Socket;
});
