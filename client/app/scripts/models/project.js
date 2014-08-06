'use strict';

define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var Model = Backbone.Model.extend({
    defaults: {
      name: 'Empty',
      url: '',
      buildNumber: 0,
      branch: '',
      phase: '',
      status: '',
      scmUrl: ''
    }
  });

  return Model;
});
