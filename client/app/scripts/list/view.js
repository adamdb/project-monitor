'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'collections/projects',
  'text!list/template.html'
], function($, _, Backbone, ProjectCollection, template) {
  var View = Backbone.View.extend({
    el: $('#project-list'),
    button: $('#add-project'), 

    initialize: function() {
      var that = this;
      
      this.collection = new ProjectCollection();
      this.listenTo(this.collection, 'add remove', this.render);
      
      this.button.click(function() {
        that.addProject();
      });
    },

    addProject: function() {
      this.collection.add({title: 'Project!'});
    },

    render: function() {
      var compiledTemplate = _.template(template, {projects: this.collection.models});
      this.$el.html(compiledTemplate);
    }
  });

  return View;
});
