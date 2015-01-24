'use strict';

var angular = require('angular');
var app = angular.module('project-monitor', []);

//Filters
var toDays = require('./list/filters/toDays.js');
app.filter('toDays', toDays);

//Controllers
var ListCtrl = require('./list/controllers/ListCtrl');
app.controller('ListCtrl', ['$scope', 'Projects', 'Socket', ListCtrl]);

//Directives
var projectSummary = require('./list/directives/projectSummary');
app.directive('projectSummary', projectSummary);

//Services
var Projects = require('./list/services/Projects');
var Socket = require('./list/services/Socket');
var Config = require('./config/services/Config');
app.service('Projects', ['$http', '$q', Projects]);
app.service('Socket', ['$rootScope', Socket]);
app.service('Config', ['$http', '$q', Config]);