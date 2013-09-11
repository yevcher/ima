'use strict';

var ima = angular.module('ima', [
    'ui.state',
//    'ima.services',
//    'ima.directives',
    'homeModule',
    'pageModule01',
    'errorModule'
]);

ima.config([$stateProvider, $urlRouterProvider, function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/404'); // 404 for bad URLs
    $urlRouterProvider.when('', '/'); //Redirect
}]);


ima.run([$rootScope, $state, function($rootScope, $state) {
    $rootScope.$state = $state;
//    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
//	$state.transitionTo('/1');
//    });
}]);



//Pages

angular.module('homeModule', ['ui.state'])
    .config([$stateProvider, function($stateProvider) {
	$stateProvider
	    .state('home', {
		url: '/',
   		template: '<p>Hello, World! 0</p>'
	    })
    }]);

angular.module('pageModule01', ['ui.state'])
    .config([$stateProvider, function($stateProvider) {
	$stateProvider
	    .state('/1', {
		url: '/1',
   		template: '<p>Hello, World! This is page 1</p>'
	    })
    }]);



//Error Module
angular.module('errorModule', ['ui.state'])
    .config([$stateProvider, function($stateProvider) {
	$stateProvider
	    .state('error', {
		url: '/404',
   		templateURL: 'views/404.html'
	    })
    }]);


