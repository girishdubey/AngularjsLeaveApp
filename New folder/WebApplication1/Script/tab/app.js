var app = angular.module('docsTabsExample', []);
app.directive('myTabs', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: 'myTabsController',
        templateUrl: '/partial/page1.html'
    };
});
app.directive('myPane', function () {
    return {
        require: '^^myTabs',
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        link: function (scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        },
        templateUrl: '/partial/page2.html'
    };
});