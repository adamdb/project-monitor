'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  './routes',
  './socket',
  './models/model'
], function($, _, Backbone, routes, Socket, appModel, ProjectCollection) {

  function initialize() {
    routes.initialize(); 
    Backbone.history.start();

    var socket = new Socket(appModel.SERVER + ':' + appModel.SERVER_PORT);
    //var socket = new Socket('http://ci.digitaslbi.com:3000');
  }

  return {
    initialize: initialize
  };
});
