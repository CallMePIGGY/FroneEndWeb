(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('mineGrid', mineGrid);

    function mineGrid() {

        return{
            restrict:'E',
            replace:false,
            templateUrl:'../templates/mineGrid.html'
        }
    }
})();