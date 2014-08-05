define(['socketioclient', './models/model'], function(io, model) { 
  var Socket = function(server) {
    var socket = io(server);

    socket.on('connect', function() {
      console.log('connected');
    
      socket.on(model.BUILD_STARTED, function(data) {
        console.log(data);
      });

      socket.on(model.BUILD_COMPLETED, function(data) {
        console.log(data);
      });

      socket.on(model.BUILD_FINALIZED, function(data) {
        console.log(data);
      });
    });
  }

  return Socket;
});
