define(['socketioclient', './models/model', './EventListener'], function(io, model, EventListener) { 
  var Socket = function(server) {
    var socket = io(server);
    var listener = new EventListener();
    var JENKINS_BUILD_STARTED = 'STARTED';
    var JENKINS_BUILD_COMPLETED = 'COMPLETED';
    var JENKINS_BUILD_FINALIZED = 'FINALIZED';

    socket.on('connect', function() {
      socket.on(JENKINS_BUILD_STARTED, function(data) {
        var obj = JSON.parse(data);
        updateModel(obj);
        listener.dispatcher.trigger(listener.BUILD_STARTED, obj);
      });

      socket.on(JENKINS_BUILD_COMPLETED, function(data) {
        var obj = JSON.parse(data);
        updateModel(obj);
        listener.dispatcher.trigger(listener.BUILD_COMPLETED, obj);        
      });

      socket.on(JENKINS_BUILD_FINALIZED, function(data) {
        var obj = JSON.parse(data);
        updateModel(obj);
        listener.dispatcher.trigger(listener.BUILD_FINALIZED, obj);
      });
    });
  
    function updateModel(obj) {
      var projectCollection = monitor.collections.projectCollection;
      var project = projectCollection.findWhere({'name': obj.name});
      
      project.set({'name': obj.name}, {silent: true});
      project.set({'url': obj.url}, {silent: true});
      project.set({'buildNumber': obj.build.number}, {silent: true});
      project.set({'branch': obj.build.scm.branch}, {silent: true});
      project.set({'phase': obj.build.phase}, {silent: true});
      project.set({'status': obj.build.status}, {silent: true});
      project.set({'scmUrl': obj.build.scm.url}, {silent: true});
      project.trigger('change');
    }
  }

  return Socket;
});
