'use strict';

define([
  'underscore',
  'backbone',
  'models/project'
], function(_, Backbone, ProjectModel) {
  var Collection = Backbone.Collection.extend({
    model: ProjectModel
  });

  return Collection;
});
