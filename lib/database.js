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
        res.status(500).send('The database is empty.');
      }
      else {
        console.log(docs);
        res.status(200).send(docs.toArray());
      }
    });
  }

  return {
    add: add,
    remove: remove,
    update: update,
    list: list
  };
}

module.exports = database;
