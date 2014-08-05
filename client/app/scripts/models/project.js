'use strict';

define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var Model = Backbone.Model.extend({
    defaults: {
      name: 'Empty'
    }
  });

  return Model;
});
