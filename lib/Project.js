'use strict';

function Project(pname) {
  this.name = pname;
  this.url = '';
  this.buildNumber = '';
  this.branch = '';
  this.phase = '';
  this.status = '';
  this.scmUrl = ''; 
}

module.exports = Project;
