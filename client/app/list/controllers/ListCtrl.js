'use strict';

var ListCtrl = function($scope, Projects, Socket) {
  Projects.list().then(function(response) {
    console.log(response);

    $scope.projects = response;
  });

  Socket.connect();
};

module.exports = ListCtrl;
