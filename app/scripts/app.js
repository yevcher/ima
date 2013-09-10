'use strict';

var ima = angular.module('ima', ['ui.router', 'ima.services', 'ima.directives']);

ima.config([$routeProvider, $stateProvider, $urlRouterProvider, function($routeProvider, $stateProvider, $urlRouterProvider){


    $stateProvider
	.state("home", {
	    url: "/",
   	    template: '<p>Hello, World! 0</p>'
	})
	.state("/1", {
	    url: "/1",
   	    template: '<p>Hello, World! 0</p>'
	})

}]);