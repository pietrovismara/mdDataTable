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
                $scope.editSelectedRow = editSelectedRow;
                $scope.getNumberOfSelectedRows = _.bind(ctrl.dataStorage.getNumberOfSelectedRows, ctrl.dataStorage);

                function editSelectedRow() {
                    var rows = ctrl.dataStorage.getSelectedRows();
                    console.log(ctrl.dataStorage, rows);
                    $scope.editRowCallback(rows[0]);
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
