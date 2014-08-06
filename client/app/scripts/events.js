'use strict';

define(['backbone', 'underscore'], function(Backbone, _) {
  var events = function events() {
    _.extend(this, Backbone.Events);
  }();

  return events;
});
