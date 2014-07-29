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
        'list': 'list'
      }
    });

    var router = new Router();
    
    router.on('route:list', function(actions) {
      var projectList = new ProjectList();
      projectList.render();  
    });
  }

  return {
    initialize: initialize
  };
});
