define([
  'jquery',
  'underscore',
  'backbone',
  'list/list'
], function($, _, Backbone, list) {
  
  function initialize() {
    list.initialize();

    Backbone.history.start();
  }

  return {
    initialize: initialize
  };
});
