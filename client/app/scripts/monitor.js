'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  './routes',
  './socket',
  './models/model',
  './collections/projects',
  './util/namespace'
], function($, _, Backbone, routes, Socket, appModel, ProjectCollection, namespace) {

  function initialize() {
    monitor.namespace('collections.projectCollection'); 
    monitor.collections.projectCollection = new ProjectCollection();
    
    routes.initialize(); 
    Backbone.history.start();

    var socket = new Socket(monitor.model.SERVER + ':' + monitor.model.SERVER_PORT);
  }

  return {
    initialize: initialize
  };
});
