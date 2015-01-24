'use strict';

var Projects = function($http, $q) {
  function list() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: '//localhost:8001/api/projects'
    })
    .success(function(data) {
      deferred.resolve(data);
    })
    .error(function() {
      deferred.reject('Could not retrieve the project list!');
    });

    return deferred.promise;
  }

  function add(url, code) {
    var deferred = $q.defer();

    $http({
      method: 'POST',
      url: '//localhost:8001/api/projects',
      data: {
        url: url,
        code: code
      }
    })
    .success(function(data) {
      deferred.resolve(data);
    })
    .error(function() {
      deferred.reject('Could not add to the project list!');
    });

    return deferred.promise;
  }

  return {
    list: list,
    add: add
  };
};

module.exports = Projects;
