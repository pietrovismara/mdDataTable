(function(){
    'use strict';

    function mdtGeneratedHeaderCellContentDirective(ColumnFilterFeature){
        return {
            restrict: 'E',
            templateUrl: '/main/templates/mdtGeneratedHeaderCellContent.html',
            replace: true,
            scope: false,
            require: '^mdtTable',
            link: function($scope, element, attrs, ctrl){
                ColumnFilterFeature.initGeneratedHeaderCellContent($scope, $scope.headerRowData, ctrl);

                if ($scope.headerRowData.customClickHandler) {
                    $scope.columnClickHandler = function($event) {
                        let params = $scope.headerRowData.customClickParams.slice();
                        params.unshift($event);
                        $scope.headerRowData.customClickHandler.apply(null, params);
                    }
                } else {
                    $scope.columnClickHandler = function(){
                        ColumnFilterFeature.generatedHeaderCellClickHandler($scope, $scope.headerRowData, element);
                    };
                }
            }
        };
    }

    angular
    .module('mdDataTable')
        .directive('mdtGeneratedHeaderCellContent', mdtGeneratedHeaderCellContentDirective);
}());
