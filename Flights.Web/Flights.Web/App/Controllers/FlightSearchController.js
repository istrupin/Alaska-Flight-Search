app.controller('FlightSearchController', ['$scope', '$http', '$rootScope', '$attrs', function ($scope, $http, toastr, $uibModal, $rootScope, $attrs) {

    $scope.test = 'test';
    $scope.flights = [];

    $scope.getFlights = function () {
        dataService.getPositionStatistics.query({ fromDate: $scope.fromDate.toLocaleDateString(), toDate: $scope.toDate.toLocaleDateString() }, function (response) {
            $scope.flights = response;
        });
    };

}]);