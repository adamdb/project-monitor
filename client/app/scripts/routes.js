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
        'new': 'new',
        'edit/:name': 'edit'
      }
    });

    var router = new Router();
    
    router.on('route:list', function(actions) {
      displayList();
    });

    router.on('route:new', function(actions) {
      //TODO Show the modal
    });

    router.on('route:edit', function(name) {
      displayList();
        
      //Wait until we have data before editing a project's information
      var that = this;

      this.listenTo(projectList.collection, 'sync', function() {
        //var project = monitor.collections.projectCollection.findWhere({'name': name});
        //console.log(project.get('name'));
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
