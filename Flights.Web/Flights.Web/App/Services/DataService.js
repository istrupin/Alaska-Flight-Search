﻿app.factory('dataService', ['$resource', '$location', function ($resource, $location) {
    var endPoints = {
        flights: $resource('/api/flights/?from=:from'),
    }

    return endPoints;
}]);