app.controller('FlightSearchController', ['$scope', '$http', '$rootScope', '$attrs', 'dataService',  function ($scope, $http,   $rootScope, $attrs, dataService) {

    $scope.test = 'test';
    $scope.flights = [];
    $scope.from;
    $scope.to;
    $scope.airports = [];


    $scope.getAirports = function () {
        dataService.airports.query({}, function (response) {
            $scope.airports = response;
        })
    }


    $scope.getFlights = function () {
        dataService.flights.query({ from: $scope.from, to: $scope.to }, function (response) {
            $scope.flights = [];
            $scope.flights = response;
            console.log('sending', response);
            $rootScope.$broadcast('searchResultsReady', response);
        });
    };

    $scope.getAirports();

}]);