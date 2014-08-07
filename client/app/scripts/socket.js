define(['socketioclient', './models/model', './EventListener'], function(io, model, EventListener) { 
  var Socket = function(server) {
    var socket = io(server),
        listener = new EventListener();

    socket.on('connect', function() {
      socket.on(model.SOCKET_BUILD_STARTED, function(data) {
        var obj = JSON.parse(data);
        
        listener.dispatcher.trigger(listener.BUILD_STARTED, obj);
      });

      socket.on(model.SOCKET_BUILD_COMPLETED, function(data) {
        var obj = JSON.parse(data);
        
        listener.dispatcher.trigger(listener.BUILD_COMPLETED, obj);
      });

      socket.on(model.SOCKET_BUILD_FINALIZED, function(data) {
        var obj = JSON.parse(data);
        
        listener.dispatcher.trigger(listener.BUILD_FINALIZED, obj);
      });
    });
  }

  return Socket;
});
