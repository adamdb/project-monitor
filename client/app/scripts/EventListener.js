'use strict';

define(['backbone', 'underscore'], function(Backbone, _) {
  var Events = _.once(function() {
    _.extend(this, Backbone.Events);
  });
  
  return Events;
});
