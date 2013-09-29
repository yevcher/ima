var allValues = [];

angular.module('allStates', ['ui.router'])
  .constant('listOfAllStates', [   
  {
    name: 'index',
    options: {
      url: "/",
      views: {
        "viewA": {
          templateUrl: "views/menu.html"
        },
        "viewB": {
          templateUrl: "views/home.html"
        }
      },
      title: "Home"
    }
  },
  {
    name: 'route1',
    options: {
      url: "/route1",
      views: {
        "viewA": {
          templateUrl: "views/menu.html"
        },
        "viewB": {
          templateUrl: "views/service.html"
        }
      },
      title: "Service"
    }
  },
  {
    name: 'route2',
    options: {
      url: "/route2",
      views: {
        "viewA": {
          templateUrl: "views/menu.html"
        },
        "viewB": {
          templateUrl: "views/projects.html"
        }
      },
      title: "Projects"
    }
  },
  {
    name: 'route3',
    options: {
      url: "/route3",
      views: {
        "viewA": {
          templateUrl: "views/menu.html"
        },
        "viewB": {
          templateUrl: "views/blog.html"
        }
      },
      title: "Blog"
    }
  },
  {
    name: 'route4',
    options: {
      url: "/route4",
      views: {
        "viewA": {
          templateUrl: "views/menu.html"
        },
        "viewB": {
          templateUrl: "views/contacts.html"
        }
      },
      title: "Contacts"
    }
  }
]);


var app = angular.module('ima', ['ui.router', 'allStates']);


app.config(function($stateProvider, $urlRouterProvider, listOfAllStates){
  
  $urlRouterProvider.otherwise('/404'); // 404 for bad URLs
  $urlRouterProvider.when('', '/'); //Redirect  

  angular.forEach(listOfAllStates, function(value, key) {
    $stateProvider.state(value.name, value.options);
    allValues.push(value);
  });      
});


app.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $state.values = allValues;

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $state.event = event;
      $state.toState = toState;
      $state.toParams = toParams;
      $state.fromState = fromState;
      $state.fromParams = fromParams;
      $state.isActive = toState.name;
    });
});


/*
app.controller('MainCtrl', function($scope, $rootScope) {
  $scope.name = 'World';
  $scope.items = allValues; 
});

*/




