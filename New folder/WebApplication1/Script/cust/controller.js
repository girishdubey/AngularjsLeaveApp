app.controller('custController', function ($scope) {
    $scope.CustmorDetails = [];
    $scope.NewCustmorDetail = { Name: '', Amount: 0.0 };
    $scope.TotalAmount = 0.0;

    $scope.CustmorDetails[0] = { Name: 'Rahul', Amount: 500 };
    $scope.TotalAmount = 500;
    $scope.Msg = '';

    $scope.AddAmount = function () {
        if (parseInt($scope.NewCustmorDetail.Amount) > 100 && $scope.NewCustmorDetail.Name.length > 3) {
            $scope.CustmorDetails.push($scope.NewCustmorDetail);
            $scope.TotalAmount = 0.0;
            for (var i = 0; i < $scope.CustmorDetails.length; i++) {
                $scope.TotalAmount = (parseInt($scope.TotalAmount) + parseInt($scope.CustmorDetails[i].Amount));

            }

            $scope.NewCustmorDetail = { Name: '', Amount: 0.0 };
        } else {

        }
        if (parseInt($scope.NewCustmorDetail.Amount) <= 100) {
            $scope.Msg = 'Amount must be greater than 100';
        }
        if ($scope.NewCustmorDetail.Name.length <= 3) {
            $scope.Msg = 'Name must be greater than 3 character';
        }
    };


    UpdateAmount = function () {
        $scope.CustmorDetails.push($scope.NewCustmorDetail);
        $scope.TotalAmount = 0.0;
        for (var i = 0; i < $scope.CustmorDetails.length; i++) {
            $scope.TotalAmount = (parseInt($scope.TotalAmount) + parseInt($scope.CustmorDetails[i].Amount));
        }
    };

});
