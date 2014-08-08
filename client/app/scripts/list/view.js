'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!list/template.html',
  '../EventListener'
], function($, _, Backbone, template, EventListener) {
  var View = Backbone.View.extend({
    el: $('#project-list'),
    $newProjectButton: $('#new-project-btn'),
    $newProjectModal: $('#new-project-modal'),
    $addProjectButton: $('#add-project-btn'),
    $projectNameInput: $('#project-name-input'),

    initialize: function() {
      var that = this,
          listener = new EventListener();
      
      this.collection = monitor.collections.projectCollection;
      this.listenTo(this.collection, 'add remove change', this.render);
      
      this.$newProjectButton.click(function() {
        that.displayModal();
      });

      this.$addProjectButton.click(function() {
        var $projectNameInput = $('#project-name-input');
        
        that.addProject($projectNameInput.val());
      });

      listener.dispatcher.on(listener.BUILD_STARTED, function(project) {
        var id = project.name.replace('.', '\\.').replace('#', '\\#'); 
        
        $(('#' + id)).addClass('animate-flicker');
      });

      listener.dispatcher.on(listener.BUILD_COMPLETED, function(project) {
        var id = project.name.replace('.', '\\.').replace('#', '\\#');

        $(('#' + id)).removeClass('animate-flicker');
      });

      listener.dispatcher.on(listener.BUILD_FINALIZED, function(project) {
        var id = project.name.replace('.', '\\.').replace('#', '\\#');
      });
    },

    displayModal: function() {
      this.$newProjectModal.modal('show');
    },

    addProject: function(name) {
      this.collection.create({name: name});
      this.$newProjectModal.modal('hide');
    },

    updateProject: function() {
    },

    render: function() {
      var compiledTemplate = _.template(template, {projects: this.collection.models});
      this.$el.html(compiledTemplate);
    }
  });

  return View;
});
