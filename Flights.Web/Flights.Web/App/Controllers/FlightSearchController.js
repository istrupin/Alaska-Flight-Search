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

}]);