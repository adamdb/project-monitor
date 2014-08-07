'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'collections/projects',
  'text!list/template.html',
  '../EventListener',
  '../events'
], function($, _, Backbone, ProjectCollection, template, EventListener, events) {
  var View = Backbone.View.extend({
    el: $('#project-list'),
    $newProjectButton: $('#new-project-btn'),
    $newProjectModal: $('#new-project-modal'),
    $addProjectButton: $('#add-project-btn'),
    $projectNameInput: $('#project-name-input'),

    initialize: function() {
      var that = this,
          listener = new EventListener();
      
      this.collection = new ProjectCollection();
      this.listenTo(this.collection, 'add remove', this.render);
      
      this.$newProjectButton.click(function() {
        that.displayModal();
      });

      this.$addProjectButton.click(function() {
        var $projectNameInput = $('#project-name-input');
        that.addProject($projectNameInput.val());
      });

      listener.dispatcher.on(listener.BUILD_STARTED, function(msg) {
        console.log('build started');
        //TODO Animate the card
      });

      listener.dispatcher.on(listener.BUILD_COMPLETED, function(msg) {
        console.log('build completed');
      });

      listener.dispatcher.on(listener.BUILD_FINALIZED, function(msg) {
        console.log('build finalized');
        //TODO Stop animating the card
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
