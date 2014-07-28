'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'list/router',
  'list/view'
], function($, _, Backbone, router, view) {
  
  function initialize() {
    router.initialize();
  }

  return {
    initialize: initialize
  };
});
