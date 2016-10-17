(function(){
    'use strict';

    function mdtAlternateHeadersDirective(_){
        return {
            restrict: 'E',
            templateUrl: '/main/templates/mdtAlternateHeaders.html',
            transclude: true,
            replace: true,
            scope: true,
            require: '^mdtTable',
            link: function($scope, element, attrs, ctrl){
                $scope.deleteSelectedRows = deleteSelectedRows;
                $scope.getNumberOfSelectedRows = _.bind(ctrl.dataStorage.getNumberOfSelectedRows, ctrl.dataStorage);

                function editSelectedRow() {
                    var row = ctrl.dataStorage.getRowData(0);
                    console.log(ctrl.dataStorage, row);
                    $scope.editRowCallback(row);
                }

                function deleteSelectedRows(){
                    var deletedRows = ctrl.dataStorage.deleteSelectedRows();

                    $scope.deleteRowCallback({rows: deletedRows});
                }
            }
        };
    }

    angular
        .module('mdDataTable')
        .directive('mdtAlternateHeaders', mdtAlternateHeadersDirective);
}());
