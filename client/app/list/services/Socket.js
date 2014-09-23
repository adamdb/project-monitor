'use strict';

var io = require('socket.io-client');

var Socket = function() {
  function connect() {

    var socket = io('http://localhost');

    socket.on('connect', function() {
      socket.on('test', function(data) {
        console.log(data);
      });

    });
  }

  return {
    connect: connect
  };
};

module.exports = Socket;
