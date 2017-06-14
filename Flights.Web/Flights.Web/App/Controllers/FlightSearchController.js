app.controller('FlightSearchController', ['$scope', '$http', '$rootScope', '$attrs', 'dataService',  function ($scope, $http,   $rootScope, $attrs, dataService) {

    $scope.test = 'test';
    $scope.flights = [];
    $scope.from;
    $scope.to;

    $scope.getFlights = function () {
        dataService.flights.query({ from: $scope.from, to: $scope.to }, function (response) {
            $scope.flights = response;
            console.log('sending', response);
            $rootScope.$broadcast('searchResultsReady', response);
        });
    };


}]);