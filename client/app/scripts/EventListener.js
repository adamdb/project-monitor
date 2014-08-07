'use strict';

define(['backbone', 'underscore'], function(Backbone, _) {
  var EventListener = _.once(function() {
    var dispatcher = {};
    
    _.extend(dispatcher, Backbone.Events);

    return {
      dispatcher: dispatcher,
      BUILD_STARTED: 'build-started',
      BUILD_COMPLETED: 'build-completed',
      BUILD_FINALIZED: 'build-finalized'
    };
  });
  
  return EventListener;
});
