'use strict';

var lastBuilt = function() {
  return function(input) {
    var oneDay = 24 * 60 * 60 * 1000;
    var now = new Date();
    var buildDate = new Date(input);
    var days = Math.round(Math.abs((now.getTime() - buildDate.getTime()) / (oneDay)));

    return days + 'd';
  };
};

module.exports = lastBuilt;
