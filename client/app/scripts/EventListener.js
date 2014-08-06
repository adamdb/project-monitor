'use strict';

define(['backbone', 'underscore'], function(Backbone, _) {
  var EventListener = _.once(function() {
    _.extend(this, Backbone.Events);
  });
  
  return EventListener;
});
