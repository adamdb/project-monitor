var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var model = require('./model.js')();
var path = require('path');
var bodyParser = require('body-parser');

function server(dir) {
  var sockets = [];
  
  model.APP_DIR = dir;

  app.use(express.static(model.APP_DIR + '/' + model.PUBLIC_HTML_DIR));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.get('/', function(req, res){
    res.sendfile(model.INDEX_HTML);
  });

  app.post('/update', function(req, res) {
    var json = JSON.stringify(req.body);

    io.emit(req.body.build.phase, json);
  });

  app.post('/projects', function(req, res) {
    console.log(req.body);
    req.send('OK');
  });

  io.on('connection', function(socket) {
    console.log('a client connected');
  });

  http.listen(model.LISTEN_PORT, function(){
    console.log('listening on *:' + model.LISTEN_PORT);
  });
}

module.exports = server;
