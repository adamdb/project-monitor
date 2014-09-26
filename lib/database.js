var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var jenkins = require('./jenkins.js')();

function database() {
  var mongoClient = new MongoClient();
  var database = null;

  mongoClient.connect('mongodb://127.0.0.1:27017/projectmonitor', function(err, db) {
    if (err) {
      throw err;
    }
    else {
      database = db;
    }
  });

  function add(project, res) {
    jenkins.buildData(project, function(err, data) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        //XXX data is an instance of Project
        insert(data, res);
      }
    });
  }

  function insert(project, res) {
    var collection = database.collection('projects');

    collection.insert(project.toJSON(), function(err, docs) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.status(200).send('Success');
      }
    });
  }

  function remove(project, res) {
  }

  function update(project, data) {
    var collection = database.collection('projects');

    if (data.build.phase === 'STARTED') {
      collection.update(
        {name: project.name},
        {
          $set: {isBuilding: 'true'}
        },
        function(err, object) {
          if (err) {
            console.log(err);
          }
          else {
            console.log('Updated ' + project.name);
          }
        }
      );
    }

    if (data.build.phase === 'FINALIZED') {
      var d = new Date();
      var lastBuilt = d.getTime();
      var status = data.build.status;

      var builds = project.builds.slice(0, project.builds.length - 1);
      builds.unshift(status);

      collection.update(
        {name: project.name},
        {
          $set: {
            isBuilding: 'false',
            lastBuilt: lastBuilt,
            builds: builds,
            lastBuildStatus: status
          },
          $inc: {
            totalBuilds: 1
          }
        },
        function(err, object) {
          if (err) {
            console.log(err);
          }
          else {
            console.log('Updated ' + project.name);
          }
        }
      );
    }
  }

  function list(res) {
    var collection = database.collection('projects');

    collection.find({}, function(err, docs) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        docs.toArray(function(err, items) {
          if (err) {
            res.status(500).send(err);
          }
          else {
            res.status(200).send(items);
          }
        });
      }
    });
  }

  function has(projectName, callback) {
    var collection = database.collection('projects');

    collection.find({name: projectName}, function(err, docs) {
      if (err) {
        callback(null);
      }
      else {
        docs.toArray(function(err, items) {
          if (items.length > 0) {
            callback(items);
          }
        });
      }
    });
  }

  return {
    add: add,
    remove: remove,
    update: update,
    list: list,
    has: has
  };
}

module.exports = database;
