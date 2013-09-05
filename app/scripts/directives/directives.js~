'use strict';

var directives = angular.module('ima.directives', ['ima.services']);


directives.directive('imapagetitle', ['$location', 'PageTitles', function ($location, PageTitles) {
    return {
	restrict: 'E',
//	template: '<title>' + PageTitles[$location.path()] + '</title>',
        template: '<title>' + PageTitles[$location.path()] + '</title>',
	replace: true
    };
}]);
