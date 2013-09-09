/* 'use strict';  */

var ima = angular.module('ima', ['ui.router']);

ima.config([$stateProvider, $urlRouterProvider, function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise({
            templateUrl: '404.html'
	});


	$stateProvider
		.state('index', {
			url: "",
   		        template: "<p>Hello, World! 0</p>"

/*
//	                controller: 'MainCtrl',
			views: {
				"viewA": {
//					templateUrl: "views/page01.html"
				    template: "<p>Hello, World!</p>"
				},
				'viewB': {
					templateUrl: 'views/page02.html'
				},
				"viewC": {
					templateUrl: "views/page03.html"
				}
			}   */
		})
		.state('/1', {
			url: "/1",
   		        template: "<p>Hello, World! 1</p>"

//			controller: 'MainCtrl',
/*			views: {
				"viewA": {
					templateUrl: 'views/page11.html'
				},
				"viewB": {
					templateUrl: "page12.html"
				},
				'viewC': {
					templateUrl: '/views/page13.html'
				}				
			}   */
		})
		.state('/2', {
			url: "/2",
   		        template: "<p>Hello, World! 2</p>"
//			controller: 'MainCtrl',
/*			views: {
				"viewA": {
					templateUrl: "page21.html"
				},
				"viewB": {
					templateUrl: "page22.html"
				},
				"viewC": {
					templateUrl: "page23.html"
				}				
			}  */
		})
}])


/*
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

*/