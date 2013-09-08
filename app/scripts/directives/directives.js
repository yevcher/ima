'use strict';


var directives = angular.module('ima.directives', ['ima.services']);


directives.directive('sectionInsert', function (templ) {
    return {
	restrict: 'E',
	template: templ,
	replace: true
    };
});