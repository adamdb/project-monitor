var db = require('./database.js')();
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var model = require('./model.js')();
var path = require('path');
var bodyParser = require('body-parser');
var Project = require('./Project.js');
var cors = require('cors');

function server(dir) {
  var sockets = [];

  model.APP_DIR = dir;

  app.use(cors());
  app.use(express.static(model.APP_DIR + '/' + model.PUBLIC_HTML_DIR));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.get('/', function(req, res){
    res.sendfile(model.INDEX_HTML);
  });

  app.post('/api/update', function(req, res) {
    var json = JSON.stringify(req.body);

    db.has(req.body.name, function(found) {
      if (found) {
        res.status(200).send('OK');
        io.emit(req.body.build.phase, json);
      }
      else {
        //Do nothing
        res.status(200).send('OK');
      }
    });
  });

  app.put('/api/projects', function(req, res) {
    //db.update(project, res);

    res.status(200).send('Success');
  });

  app.get('/api/projects', function(req, res) {
    db.list(res);
  });

  app.post('/api/projects', function(req, res) {
    var project = new Project(req.body.url, req.body.code);
    db.add(project, res);
  });

  io.on('connection', function(socket) {
    //console.log('a client connected');
  });

  http.listen(model.LISTEN_PORT, function() {
    console.log('listening on *:' + model.LISTEN_PORT);
  });
}

module.exports = server;
