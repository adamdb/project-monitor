'use strict';

define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var Model = Backbone.Model.extend({
    defaults: {
      title: 'Empty'
    }
  });

  return Model;
});
