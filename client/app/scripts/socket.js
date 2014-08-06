define(['socketioclient', './models/model', './EventListener', './events'], function(io, model, EventListener, events) { 
  var Socket = function(server) {
    var socket = io(server),
        listener = new EventListener();

    socket.on('connect', function() {
      console.log('connected');
    
      socket.on(model.SOCKET_BUILD_STARTED, function(data) {
        console.log('STARTED');
        listener.trigger(events.BUILD_STARTED, data);
      });

      socket.on(model.SOCKET_BUILD_COMPLETED, function(data) {
        listener.trigger(events.BUILD_COMPLETED, data);
      });

      socket.on(model.SOCKET_BUILD_FINALIZED, function(data) {
        listener.trigger(events.BUILD_FINALIZED, data);
      });
    });
  }

  return Socket;
});
