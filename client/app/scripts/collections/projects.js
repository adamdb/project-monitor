'use strict';

define([
  'underscore',
  'backbone',
  'models/project',
  'models/model'
], function(_, Backbone, ProjectModel) {
  var Collection = Backbone.Collection.extend({
    url: '/projects',
    model: ProjectModel
  });

  return Collection;
});
