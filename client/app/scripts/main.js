'use strict';

require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    text: '../bower_components/text/text',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery']
    }
  }
});

require(['monitor', 'bootstrap'], function(m) {
  m.initialize();
});
