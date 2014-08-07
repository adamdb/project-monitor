'use strict';

define([
  'underscore',
  'backbone',
  'models/project',
  'models/model'
], function(_, Backbone, ProjectModel, appModel) {
  var Collection = Backbone.Collection.extend({
    url: appModel.SERVER + ':' + appModel.SERVER_PORT + '/projects',
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
