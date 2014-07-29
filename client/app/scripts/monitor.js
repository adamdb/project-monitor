define([
  'jquery',
  'underscore',
  'backbone',
  './routes',
  'collections/projects'
], function($, _, Backbone, routes) {

  function initialize() {
    routes.initialize(); 
    Backbone.history.start();
  }

  return {
    initialize: initialize
  };
});
