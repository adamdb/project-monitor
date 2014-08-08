'use strict';

require(['./util/namespace'], function(namespace) {
  monitor.namespace('model');  

  monitor.model = (function() {
    return {
      LIST_LOADED: false,
      SERVER: 'http://54.210.140.62',
      SERVER_PORT: '3000'
    }
  }());
});
