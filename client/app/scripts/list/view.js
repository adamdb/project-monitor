'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'collections/projects',
  'text!list/template.html',
  './events'
], function($, _, Backbone, ProjectCollection, template, events) {
  var View = Backbone.View.extend({
    el: $('#project-list'),
    $newProjectButton: $('#new-project-btn'),
    $newProjectModal: $('#new-project-modal'),
    $addProjectButton: $('#add-project-btn'),
    $projectNameInput: $('#project-name-input'),

    initialize: function() {
      var that = this;
      
      this.collection = new ProjectCollection();
      this.listenTo(this.collection, 'add remove', this.render);
      
      this.$newProjectButton.click(function() {
        that.displayModal();
      });

      this.$addProjectButton.click(function() {
        var $projectNameInput = $('#project-name-input');
        that.addProject($projectNameInput.val());
      });

      events.on('build-started', function(msg) {
        console.log('BUILD STARTED: ' + msg);
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
