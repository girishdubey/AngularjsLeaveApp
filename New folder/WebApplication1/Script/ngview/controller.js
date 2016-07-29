app.controller('custViewController', function ($scope) {
    
});
app.controller('page1Controller', function ($scope) {
    $scope.panes = [];
    $scope.panes.push({ name: 'a' });
    $scope.panes.push({ name: 'b' });
    $scope.panes.push({ name: 'c' });

});
app.controller('page2Controller', function ($scope) {
    $scope.heading = {
        title: 'welcome '
    };
});
