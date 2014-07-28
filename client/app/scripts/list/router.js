'use strict';

define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  
  function initialize() {
    var Router = Backbone.Router.extend({
      routes: {
        'list': 'list'
      }
    });

    var router = new Router();
    
    router.on('route:list', function(actions) {
    });
  }

  return {
    initialize: initialize
  };
});
