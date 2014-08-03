'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'list/view'
], function($, _, Backbone, ProjectList) {
  
  function initialize() {
    var Router = Backbone.Router.extend({
      routes: {
        'list': 'list',
        'new': 'new'
      }
    });

    var router = new Router();
    
    router.on('route:list', function(actions) {
      var projectList = new ProjectList();
      projectList.render();  
    });

    router.on('route:new', function(actions) {
    });
  }

  return {
    initialize: initialize
  };
});
