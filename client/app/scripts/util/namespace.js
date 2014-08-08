'use strict';

var monitor = monitor || {};

(function() {
  monitor.namespace = function(nsString) {
    var parts = nsString.split('.'),
        parent = monitor,
        i;
    if (parts[0] === 'monitor') {
      parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
      if (typeof parent[parts[i]] === 'undefined') {
        parent[parts[i]] = {};
      }
      parent = parent[parts[i]];
    }
    return parent;
  };
}());
