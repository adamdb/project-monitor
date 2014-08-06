define(['socketioclient', './models/model', './events'], function(io, model, events) { 
  var Socket = function(server) {
    var socket = io(server);

    socket.on('connect', function() {
      console.log('connected');
    
      socket.on(model.BUILD_STARTED, function(data) {
        events.listener.trigger('build-started', data);
      });

      socket.on(model.BUILD_COMPLETED, function(data) {
        //console.log(data);
      });

      socket.on(model.BUILD_FINALIZED, function(data) {
        //console.log(data);
      });
    });
  }

  return Socket;
});
