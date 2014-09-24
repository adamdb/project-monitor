'use strict';

function Project(url, code) {
  this.code = code;
  this.url = url;
  this.builds = [];
  this.totalBuilds = '';
  this.lastBuilt = '';
  this.lastBuildStatus = '';

  //TODO should provide this as a utility method on all objects

  this.toJSON = function() {
    return {
      code: this.code,
      url: this.url,
      builds: this.builds,
      totalBuilds: this.totalBuilds,
      lastBuilt: this.lastBuilt,
      lastBuildStatus: this.lastBuildStatus,
    };
  };
}

module.exports = Project;
