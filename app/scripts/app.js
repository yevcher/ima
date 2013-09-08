'use strict';

var ima = angular.module('ima', ['ima.services', 'ima.directives']);

ima.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        title: 'Main Page',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        sec1: 'page01.html',
	sec2: 'page02.html',
	sec3: 'page03.html'
      })
      .when('/1', {
        title: 'Page One',
        templateUrl: 'views/1.html',
        controller: 'MainCtrl',
        sec1: 'page11.html',
        sec2: 'page12.html',
	sec3: 'page13.html'
      })
      .when('/2', {
        title: 'Page Two',
        templateUrl: 'views/2.html',
        controller: 'MainCtrl',
        sec1: 'page21.html',
        sec2: 'page22.html',
	sec3: 'page23.html'
      })
      .otherwise({
//        redirectTo: '/'
        templateUrl: '404.html',
      });
  }]);

ima.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, currentRoute, previousRoute){
	$rootScope.title = currentRoute.title;
	$rootScope.sect1 = currentRoute.sec1;
	$rootScope.sect2 = currentRoute.sec2;
	$rootScope.sect3 = currentRoute.sec3;
    });
}]);