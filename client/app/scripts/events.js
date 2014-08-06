'use strict';

define(['backbone', 'underscore'], function(Backbone, _) {
  var events = function events() {
    this.listener = {};
    _.extend(this.listener, Backbone.Events);
  }();

  return events;
});
