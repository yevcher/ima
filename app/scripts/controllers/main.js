//ima.controller ('HeaderCtrl', [$scope, $location, PageTitles, function ($scope, $location, PageTitles) {
//	$scope.curr-page-title = PageTitles[$location.path()].ima-page-title;
//    var title = "Hey there!";
//    $scope.getTitle = function () {
//	return title; 
//    }
//    $scope.curr-page-title = 'Hi there!';

//}]);

//ima.controller('HeaderCtrl', [$scope, Page, function ($scope, Page) {
  //  $scope.Page = Page;

//}]);


ima.controller ('MainCtrl', function ($scope) {
    $scope.greeting = {text: 'Hello'};
    $scope.title = {page: 'MyPage'};

});

/*

ima.controller ('HelloController', [$scope, function ($scope) {
    $scope.greeting = {text: 'Hello There'};
}]); */


