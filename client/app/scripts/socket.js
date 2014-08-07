define(['socketioclient', './models/model', './EventListener'], function(io, model, EventListener) { 
  var Socket = function(server) {
    var socket = io(server),
        listener = new EventListener();

    socket.on('connect', function() {
      socket.on(model.SOCKET_BUILD_STARTED, function(data) {
        listener.dispatcher.trigger(listener.BUILD_STARTED, data);
      });

      socket.on(model.SOCKET_BUILD_COMPLETED, function(data) {
        listener.dispatcher.trigger(listener.BUILD_COMPLETED, data);
      });

      socket.on(model.SOCKET_BUILD_FINALIZED, function(data) {
        listener.dispatcher.trigger(listener.BUILD_FINALIZED, data);
      });
    });
  }

  return Socket;
});
