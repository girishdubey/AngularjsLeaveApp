app.controller('testController', function ($scope, testService) {
    $scope.Data = testService.getCurrData();
    $scope.NewData = 0;
    $scope.UpdateData = function () {
        testService.setCurrData($scope.NewData);
    };
    $scope.GetUpdateData = function () {
        $scope.Data = testService.getCurrData();
    };
});
//mathapp.controller('mathController', function ($scope, testController) {
//    $scope.Date = 5 + 6;
//    $scope.Name = "Math";
//});