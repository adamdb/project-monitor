'use strict';

var angular = require('angular');

var ListController = require('./list/ListController');

var app = angular.module('project-monitor', []);
app.controller('ListController', ['$scope', ListController]);
