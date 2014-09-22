'use strict';

var angular = require('angular');

var app = angular.module('project-monitor', []);

//Controllers
var ListCtrl = require('./list/controllers/ListCtrl');

app.controller('ListCtrl', ['$scope', 'Projects', ListCtrl]);

//Directives
var projectSummary = require('./list/directives/projectSummary');

app.directive('projectSummary', projectSummary);


//Services
var Projects = require('./list/services/Projects');

app.service('Projects', ['$http', '$q', Projects]);
