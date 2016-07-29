app.controller('custViewController',['$scope', function ($scope) {
    $scope.sign = " + ";
}]);
app.controller('page1Controller', function ($scope, $routeParams) {
    $scope.panes = [];
    var id = $routeParams.id;
    if (typeof id == 'undefined')
        id = '0';
    $scope.panes.push({ name: 'a ' + id });
    $scope.panes.push({ name: 'b ' + id });
    $scope.panes.push({ name: 'c ' + id });
});
app.controller('page2Controller', function ($scope, $routeParams) {
    var name = $routeParams.name;
    if (typeof name == 'undefined')
        name = '';
    $scope.heading = {
        title: 'welcome ' + name
    };
});
