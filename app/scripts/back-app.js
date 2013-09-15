'use strict';

var ima = angular.module('ima', []);

ima.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        title: 'Main Page',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/1', {
        title: 'Page One',
        templateUrl: 'views/1.html',
        controller: 'MainCtrl'
      })
      .when('/2', {
        title: 'Page Two',
        templateUrl: 'views/2.html',
        controller: 'MainCtrl'
      })
      .otherwise({
//        redirectTo: '/'
        templateUrl: 'views/404.html',
      });
  }]);

ima.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, currentRoute, previousRoute){
	$rootScope.title = currentRoute.title;
    });
}]);




/*

app.factory ('Page', function () {
    var title = 'defualt';
    return {
	title: function() {return title;},
	setTitle: function(newTitle) {title = newTitle;}
    };
});


function HeaderCtrl ($scope, Page) {
    $scope.Page = Page;
}


*/
