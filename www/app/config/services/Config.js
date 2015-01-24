'use strict';

var Config = function($http, $q) {
  function load(file) {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: file
    })
    .success(function (data) {
      deferred.resolve(data);
    })
    .error(function () {
      deferred.reject('Could not add to the project list!');
    });

    return deferred.promise;
  }
};

module.exports = Config;