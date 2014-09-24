'use strict';

var ListCtrl = function($scope, Projects, Socket) {
  Projects.list().then(function(response) {
    $scope.projects = response;
  });

  Socket.connect();

  //XXX This is temporary and for testing purposes only
  var url = prompt('Enter the job URL');
  var code = prompt('Enter a four character code to represent the project');

  if (url && code) {
    Projects.add(url, code).then(function(response) {
      alert('Added ' + code + ' to the project dashboard.');
    });
  }
};

module.exports = ListCtrl;
