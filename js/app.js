'use strict';

/* App Module */

define([ 'angular', 'angular-route', 'controllers/index', 'directives/index',
		'services/index', 'filters/index' ], function(angular) {
	var App = angular.module("AppName", [ 'ngRoute', 'app.controllers', 'app.directives', 'app.services',
			'app.filters']);
	App.config(function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl : 'partials/home.html',
			controller : 'appControl'
		}).otherwise({
			redirectTo : '/home'
		});
	});
});
