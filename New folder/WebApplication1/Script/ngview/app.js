//Define an angular module for our app
var app = angular.module('custViewApp', ['ngRoute', 'ngResource']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/page1', {
            templateUrl: 'Partial/page1.html',
            controller: 'page1Controller'
        })
        .when('/page1/:id', {
            templateUrl: 'Partial/page1.html',
            controller: 'page1Controller'
        })
        .when('/page2/:name', {
            templateUrl: 'Partial/page2.html',
            controller: 'page2Controller'
        })
        .otherwise({
            redirectTo: '/'
        })
});


