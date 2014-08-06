'use strict';

define([
  'underscore',
  'backbone',
  'models/project',
  'models/model'
], function(_, Backbone, ProjectModel) {
  var Collection = Backbone.Collection.extend({
    url: '/projects',
    model: ProjectModel,
    
    initialize: function initialize() {
      this.fetch();
    },

    parse: function parse(res) {
      console.log('have data=' + res.data);
      return res.data;
    }
  });

  return Collection;
});
