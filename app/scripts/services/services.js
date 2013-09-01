var services = angular.module('ima.services', []);


services.factory("PageTitles", function () {
    var PageTitles = {};
    PageTitles['/'] = {ima-page-title: 'Main Page - Yes!'};
    PageTitles['/1'] = {ima-page-title: 'Page One - Yes!'};
    PageTitles['/2'] = {ima-page-title: 'Page Two - Yes!'};
    return PageTitles;
})