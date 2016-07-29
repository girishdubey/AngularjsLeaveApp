app.controller('totController', function ($scope) {
    $scope.val1=0;
    $scope.val2=0;
    
    
    $scope.UpdateData=function(){
        $scope.val1 = $scope.Newval1;
        $scope.val2 = $scope.Newval2;
        $scope.Newval1 = "";
        $scope.Newval2 = "";
    }
});