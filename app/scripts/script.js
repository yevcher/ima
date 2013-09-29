// App module
angular
    .module('app',['ui.state','authorizedModule','loginModule','logoutModule','errorModule'])
    .controller('appController',function($rootScope){
        $rootScope.authorized = false;
    })
    .config(function($stateProvider,$urlRouterProvider){
        // 404 for bad URLs
        $urlRouterProvider
            .otherwise('/404');
        $urlRouterProvider.when('', '/');
    })
    .run(function($rootScope,$state){
        $rootScope.$state = $state;
        // Redirect from root to proper state
//        if($state.current.url === '^'){
//            $state.transitionTo($rootScope.authorized ? 'authorized' : 'login');
//        }
        // Protect "secure pages"
        $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
            if( !toState.authNotRequired && !$rootScope.authorized ){
                evt.preventDefault();
                $state.transitionTo('login');
            }
        });
    });
// Login module
angular
    .module('loginModule',['ui.state']).config(function($stateProvider){
        $stateProvider
            .state('login',{
                url:'/login',
                authNotRequired:true,
                templateUrl:'views/login.html',
                controller:function($rootScope,$scope,$state){
                    $scope.login = function(){
                        $rootScope.authorized = true;
                        $state.transitionTo('authorized');
                    };
                }
            });  
    });
// Logout module
angular
    .module('logoutModule',['ui.state']).config(function($stateProvider){
        $stateProvider
            .state('logout',{
                url:'/logout',
                authNotRequired:true,
                controller:function($rootScope,$scope,$state){
                    $rootScope.authorized = false;
                    $state.transitionTo('login');
                }
            });
    });
// Authorized module
angular
    .module('authorizedModule',['ui.state']).config(function($stateProvider){
        $stateProvider
            .state('authorized',{
                url:'/',
                templateUrl:'views/dashboard.html'
            });
    });
// Error module
angular
    .module('errorModule',['ui.state']).config(function($stateProvider){
        $stateProvider
            .state('error',{
                url:'/404',
                authNotRequired:true,
                templateUrl:'views/broken.html'
            });
    });