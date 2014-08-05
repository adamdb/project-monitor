var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;

function middleware() {
  var mongoClient = new MongoClient();

  mongoClient.connect('mongodb://127.0.0.1:27017/projectmonitor', function(err, db) {
    if (err) {
      throw err;
    }

    var collection = db.collection('projects');
    
    collection.insert({name:2}, function(err, docs) {
      collection.count(function(err, count) {
        console.log(format("count = %s", count));
      });

      // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        //console.dir(results);
        //db.close();
      });
    });
  });
}

module.exports = middleware;
