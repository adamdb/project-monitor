'use strict';

var ListCtrl = function($scope, Projects, Socket) {
  Projects.list().then(function(response) {
    $scope.projects = response;
  });

  Socket.connect();

  $scope.$on('STARTED', function(event, data) {
    var json = JSON.parse(data);

    animate('true', json);
  });

  $scope.$on('FINALIZED', function(event, data) {
    var json = JSON.parse(data);

    animate('false', json);
  });

  function animate(start, json) {
    var projects = $scope.projects;

    for (var project in projects) {
      if (projects[project].name === json.name) {
        if (projects[project].name === json.name) {
          toggleAnimation(project, start);
        }
      }
    }
  }

  function toggleAnimation(project, isBuilding) {
    $scope.$apply(function() {
      $scope.projects[project].isBuilding = isBuilding;
    });
  }
};

module.exports = ListCtrl;
