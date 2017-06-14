app.controller('GridController', ['$scope', '$http', '$rootScope', '$attrs', 'uiGridConstants', function ($scope, $http, $rootScope, $attrs, uiGridConstants) {

    $scope.test = 'test';
    $scope.flights = [{
        From: 'SFO',
        To: 'SEA',
        FlightNumber: '15',
        MainCabinPrice: '100.00',
        FirstClassPrice: '200.00'
    }];

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
        gridFooterTemplate: '<div class="grid-footer">Total items: {{grid.appScope.flights.length}}</div>',
        columnDefs: [
            { field: 'From', displayName: 'From', visible: true, width: 70},
            { field: 'To', displayName: 'To', visible: true, width: 70 },
            { field: 'FlighNumber', displayName: 'FlightNumber', sort: { direction: 'asc', priority: 0 }, width: 150 },
            { field: 'Departs', displayName: 'Departs', visible: true },
            { field: 'Arrives', displayName: 'Arrives', visible: true },
            { field: 'MainCabinPrice', displayName: 'MainCabinPrice', visible: true },
            { field: 'FirstClassPrice', displayName: 'FirstClassPrice', visible: true, width: 150 },

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