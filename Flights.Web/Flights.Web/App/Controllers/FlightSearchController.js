app.controller('FlightSearchController', ['$scope', '$http', '$rootScope', '$attrs', function ($scope, $http, toastr, $uibModal, $rootScope, $attrs) {

    $scope.test = 'test';
    $scope.flights = [];
    $scope.from;
    $scope.to;

    $scope.getFlights = function () {
        dataService.getPositionStatistics.query({ from: $scope.from, to: $scope.to }, function (response) {
            $scope.flights = response;
        });
    };

    //this goes in what consumed service
    // option 2 - promises (kind of) 
    //var res = validationResultService.getValidationResults();
    //console.log("promised result is:", res) // res is the promise and "thenable"
    //res.then(function (data) {
    //    $scope.validationResults = data;
    //});
    //this goes in service
    // options 2 promises
    //var getValidationResults = function () {
    //    var def = $q.defer()
    //    dataService.getValidationResults.query({}, function (res) {
    //        def.resolve(res);
    //        console.log("res is", res);
    //    });
    //    return def.promise;
    //}


}]);