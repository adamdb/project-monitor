'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  './routes',
  './socket',
  './models/model'
], function($, _, Backbone, routes, Socket, model) {

  function initialize() {
    routes.initialize(); 
    Backbone.history.start();

    var socket = new Socket(model.server);
  }

  return {
    initialize: initialize
  };
});
