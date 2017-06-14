app.controller('FlightSearchController', ['$scope', '$http', '$rootScope', '$attrs', 'dataService',  function ($scope, $http,   $rootScope, $attrs, dataService) {

    $scope.test = 'test';
    $scope.flights = [];
    $scope.from;
    $scope.to;
    $scope.airportCodes = [];


    var airports = [];

    $scope.getAirports = function () {
        dataService.airports.query({}, function (response) {
            airports = response;

            $scope.airportCodes = response.map(function (o) {
                return o.Code;
            })

            console.log('airports', $scope.airportCodes);
        })
    }


    $scope.getFlights = function () {
        dataService.flights.query({ from: $scope.from, to: $scope.to }, function (response) {
            $scope.flights = response;
            console.log('sending', response);
            $rootScope.$broadcast('searchResultsReady', response);
        });
    };

    $scope.getAirports();

}]);