directives.directive('sectionInsert', function (templ) {
    return {
	restrict: 'E',
    template: templ,
	replace: true
    };
}]);