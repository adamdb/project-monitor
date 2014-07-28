'use strict';

require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone' 
  }
});

require(['monitor'], function(m) {
  m.initialize();
});
