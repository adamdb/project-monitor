'use strict';

var projectSummary = function() {
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    scope: true,
    templateUrl: 'views/projectSummary.html'
  };
};

module.exports = projectSummary;
