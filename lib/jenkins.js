'use strict';

var request = require('request');

function jenkins() {
  var lastBuildAPI = '/lastBuild/api/json?pretty=true';
  var buildStatusAPI = '/api/json?pretty=true';

  //TODO Need to test againt a project with 0 builds

  function buildData(project, callback) {
    lastBuild(project, callback);
  }

  function lastBuild(project, callback) {
    request(project.url + lastBuildAPI, function(err, res, data) {
      if (err || res.statusCode != 200) {
        callback('Could not connect to ' + project.url, null);
      }
      else {
        var json = JSON.parse(data);

        project.lastBuildStatus = json.result;
        project.lastBuilt = json.timestamp;
        project.totalBuilds = json.number;
        project.builds.push(json.result);

        buildStatuses(parseInt(json.number) - 1, project, callback);
      }
    });
  }

  /*
  Need to do this recursively until we have 10
  or there are no more statuses left.
  */
  function buildStatuses(buildNumber, project, callback) {
    if (buildNumber <= 0 || project.builds.length === 10) {
      callback(null, project);
    }
    else {
      var url = project.url + '/' + buildNumber + '/' + buildStatusAPI;

      request(url , function(err, res, data) {
        if (err || res.statusCode != 200) {
          callback('Could not connect to ' + project.url, null);
        }
        else {
          var json = JSON.parse(data);
          project.builds.push(json.result);
          buildStatuses(buildNumber - 1, project, callback);
        }
      });
    }
  }

  return {
    buildData: buildData
  };
}

module.exports = jenkins;
