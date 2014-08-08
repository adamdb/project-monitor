'use strict';

define([
  'underscore',
  'backbone',
  'models/project',
  'models/model'
], function(_, Backbone, ProjectModel) {
  var Collection = Backbone.Collection.extend({
    url: monitor.model.SERVER + ':' + monitor.model.SERVER_PORT + '/projects',
    model: ProjectModel,
    
    initialize: function initialize() {
      this.fetch();
    },

    parse: function parse(res) {
      return res;
    }
  });

  return Collection;
});
