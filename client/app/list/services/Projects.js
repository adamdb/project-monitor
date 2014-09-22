'use strict';

var Projects = function($http, $q) {
  var projects;

  function list() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: '//localhost:3000/api/projects'
    })
    .success(function(data) {
      deferred.resolve(data);
    })
    .error(function() {
      deferred.reject('Could not retrieve the project list!');
    });

    return deferred.promise;
  }

  return {
    list: list
  };
};

module.exports = Projects;
