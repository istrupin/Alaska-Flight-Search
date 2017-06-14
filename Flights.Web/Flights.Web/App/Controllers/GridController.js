app.controller('GridController', ['$scope', '$http', '$rootScope', '$attrs', 'uiGridConstants', function ($scope, $http, $rootScope, $attrs, uiGridConstants) {

    $scope.test = 'test';
    $scope.flights = [];

    $scope.$on('searchResultsReady', function (event, data) {
        console.log('receiving',data);
        $scope.flights = data;
    })

    $scope.gridOptions = {
        enableRowSelection: true,
        multiSelect: false,
        noUnselect: true,
        enableRowHeaderSelection: false,
        headerRowHeight: 30,
        data: 'flights',
        enableFiltering: true,
        enableGridMenu: true,
        showGroupPanel: true,
        showGridFooter: true,
        gridFooterTemplate: '<div class="grid-footer">Number of flights: {{grid.appScope.flights.length}}</div>',
        columnDefs: [
            { field: 'From', displayName: 'From', visible: true, minWidth: 65},
            { field: 'To', displayName: 'To', visible: true, width: 70 },
            { field: 'FlightNumber', displayName: 'FlightNumber', width: 150 },
            { field: 'Departs', displayName: 'Departs', visible: true, type: 'date', sort: { direction: 'asc', priority: 0 }, cellFilter: 'date:\'h:mm a\'' },
            { field: 'Arrives', displayName: 'Arrives', visible: true, type: 'date', cellFilter: 'date:\'h:mm a\'' },
            { field: 'MainCabinPrice', displayName: 'Main Cabin Price', visible: true, type:'number', minWisth: 220 },
            { field: 'FirstClassPrice', displayName: 'First Class Price', visible: true, type: 'number', minWidth: 170 },

        ],
        showFooter: true,
        footerRowHeight: 40,
        rowHeight: 26
    };

    $scope.gridOptions.onRegisterApi = function (gridApi) {
        $scope.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope, function (row) {
            $scope.selectedItem = gridApi.selection.getSelectedRows();
            $rootScope.$broadcast('flight', $scope.selectedItem[0]);
        });
    };

}]);