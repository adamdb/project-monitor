'use strict';

var ListCtrl = function($scope, Projects) {
  Projects.list().then(function(response) {
    $scope.projects = response;
  });
};

module.exports = ListCtrl;
