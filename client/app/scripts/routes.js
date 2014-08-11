'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'list/view'
], function($, _, Backbone, ProjectList) {
  
  var projectList;

  function initialize() {
    var Router = Backbone.Router.extend({
      routes: {
        '': 'list',
        'edit/:name': 'edit'
      }
    });

    var router = new Router();
    
    router.on('route:list', function(actions) {
      displayList();
    });

    router.on('route:edit', function(name) {
      displayList();
        
      var that = this;

      //Wait until we have data before editing a project's information      
      this.listenTo(projectList.collection, 'sync', function() {
        console.log(name);
        that.stopListening(projectList.collection);
      });
    });
  }

  function displayList() {
    if (projectList === undefined) {
      projectList = new ProjectList();
    }
  }

  return {
    initialize: initialize
  };
});
