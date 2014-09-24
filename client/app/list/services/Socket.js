'use strict';

var io = require('socket.io-client');

var Socket = function() {
  function connect() {

    var JENKINS_STARTED = 'STARTED';
    var JENKINS_COMPLETED = 'COMPLETED';
    var JENKINS_FINALIZED = 'FINALIZED';

    var socket = io('http://54.165.205.58:3000');

    socket.on('connect', function() {
      socket.on(JENKINS_STARTED, function(data) {
        console.log(data);
      });

      socket.on(JENKINS_COMPLETED, function(data) {
        console.log(data);
      });

      socket.on(JENKINS_FINALIZED, function(data) {
        console.log(data);
      });
    });
  }

  return {
    connect: connect
  };
};

module.exports = Socket;
