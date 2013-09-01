'use strict';

var ima = angular.module('ima', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/1', {
        templateUrl: 'views/1.html',
        controller: 'MainCtrl'
      })
      .when('/2', {
        templateUrl: 'views/2.html',
        controller: 'MainCtrl'
      })
      .otherwise({
//        redirectTo: '/'
        templateUrl: '404.html',
      });
  }]);
