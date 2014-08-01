var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var model = require('./model.js')();
var path = require('path');

function server(dir) {
  model.APP_DIR = dir;

  app.use(express.static(model.APP_DIR + '/' + model.PUBLIC_HTML_DIR));

  app.get('/', function(req, res){
    res.sendfile(model.INDEX_HTML);
  });

  io.on('connection', function(socket){
    console.log('a user connected');
  });

  http.listen(3000, function(){
    console.log('listening on *:' + model.LISTEN_PORT);
  });
}

module.exports = server;
