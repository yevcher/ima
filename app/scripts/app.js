'use strict';


angular
   .module('ima', ['ui.router', 'homeModule', 'pageModule01', 'errorModule'])
//   .controller('appCtrl', function ($rootScope) {
//       $rootScope.greeting3 = {text: "Hey you"};
//   })
   .config([$stateProvider, $urlRouterProvider, function($stateProvider, $urlRouterProvider){
       $urlRouterProvider.otherwise('/404'); // 404 for bad URLs
       $urlRouterProvider.when('', '/'); //Redirect
    }])
   .run([$rootScope, $state, function($rootScope, $state) {
       $rootScope.$state = $state;
       $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
	   $state.transitionTo(toState);
       }
    }]);


//Pages

angular
   .module('homeModule', ['ui.router'])
   .config([$stateProvider, function($stateProvider) {
	$stateProvider
	    .state('home', {
		url: '/',
   		template: '<p>Hello, World! 0</p>',
//		controller: 'MainCtrl'
	    })
    }]);

angular
   .module('pageModule01', ['ui.router'])
   .config([$stateProvider, function($stateProvider) {
	$stateProvider
	    .state('/1', {
		url: '/1',
   		template: '<p>Hello, World! This is page 1</p>',
//		controller: 'MainCtrl'
	    })
    }]);


//Error Module
angular
    .module('errorModule', ['ui.router'])
    .config([$stateProvider, function($stateProvider) {
	$stateProvider
	    .state('error', {
		url: '/404',
   		templateURL: 'views/404.html'
	    })
    }]);


