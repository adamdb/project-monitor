'use strict';

var ListCtrl = function($scope, Projects, Socket) {
  Projects.list().then(function(response) {
    $scope.projects = response;
  });

  Socket.connect();

  $scope.$on('STARTED', function(event, data) {
    var projects = $scope.projects;
    var json = JSON.parse(data);

    for (var project in projects) {
      if (projects[project].name === json.name) {
        $scope.$apply(function () {
          $scope.projects[project].isBuilding = 'true';
        });
      }
    }
  });

  $scope.$on('FINALIZED', function(event, data) {
    var projects = $scope.projects;
    var json = JSON.parse(data);

    for (var project in projects) {
      if (projects[project].name === json.name) {
        $scope.$apply(function() {
          $scope.projects[project].isBuilding = 'false';
        });
      }
    }
  });
};

module.exports = ListCtrl;
