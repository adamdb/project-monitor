var db = require('./database.js')();
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var model = require('./model.js')();
var path = require('path');
var bodyParser = require('body-parser');
var Project = require('./Project.js');

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

    console.log(json);
    /*
    if (db.has(req.body.name) === true) {
      io.emit(req.body.build.phase, json); 
    }
    */
  });

  app.put('/projects', function(req, res) {
    var project = new Project();
    db.update(project, res);
  });

  app.get('/projects', function(req, res) {
    db.list(res);
  });

  app.post('/projects', function(req, res) {
    var project = new Project(req.body.name);
    db.add(project, res);
  });

  io.on('connection', function(socket) {
    console.log('a client connected');
  });

  http.listen(model.LISTEN_PORT, function(){
    console.log('listening on *:' + model.LISTEN_PORT);
  });
}

module.exports = server;
