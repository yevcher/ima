var services = angular.module('ima.services', []);


services.factory("PageTitles", function () {
    var PageTitles = {};
    PageTitles['/'] = {ima-page-title: 'Main Page - Yes!'};
    PageTitles['/1'] = {ima-page-title: 'Page One - Yes!'};
    PageTitles['/2'] = {ima-page-title: 'Page Two - Yes!'};
    return PageTitles;
});

//
//services.factory('Page', function() {
  //  var title = 'default';
    //return {
//	title: function() {return title;},
//	setTitle: function(newTitle) { title = newTitle;}
//
  //  };
//});