'use strict';

var io = require('socket.io-client');

var Socket = function($rootScope) {
  var JENKINS_STARTED = 'STARTED';
  var JENKINS_COMPLETED = 'COMPLETED';
  var JENKINS_FINALIZED = 'FINALIZED';

  function connect() {
    var socket = io('http://localhost:8001');

    socket.on('connect', function() {
      socket.on(JENKINS_STARTED, function(data) {
        $rootScope.$broadcast(JENKINS_STARTED, data);
      });

      socket.on(JENKINS_COMPLETED, function(data) {
        $rootScope.$broadcast(JENKINS_COMPLETED, data);
      });

      socket.on(JENKINS_FINALIZED, function(data) {
        $rootScope.$broadcast(JENKINS_FINALIZED, data);
      });
    });
  }

  return {
    connect: connect,
    JENKINS_STARTED: JENKINS_STARTED,
    JENKINS_COMPLETED: JENKINS_COMPLETED,
    JENKINS_FINALIZED: JENKINS_FINALIZED
  };
};

module.exports = Socket;
