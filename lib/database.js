var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;

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
    var collection = database.collection('projects');
    
    collection.insert({name: project.name}, function(err, docs) {
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

  function update(project, res) { 
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

  function has(projectName) {
    var collection = database.collection('projects');
    var found = false;

    collection.find({name: projectName}, function(err, docs) {
      var that = this;

      if (err) {
        found = false;
      }
      else {
        docs.toArray(function(err, items) {
          if (items.length > 0) {
            that.found = true;
          }
        });
      }
    });
  
    return found;
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
