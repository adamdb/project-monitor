'use strict';

define(['backbone', 'underscore'], function(Backbone, _) {
  var Events = _.once(function() {
    var listener = {};
    
    _.extend(listener, Backbone.Events);

    return {
      listener: listener
    };
  });
  
  return Events;
});
