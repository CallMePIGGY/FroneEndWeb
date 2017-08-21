(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('GameMinesweeperController', GameMinesweeperController);

    GameMinesweeperController.$inject = ['$scope', 'mineFieldService'];

    function GameMinesweeperController($scope, mineFieldService) {

        $scope.MainContentInit ("扫地雷");

        $scope.minefield = mineFieldService.createMinefield();

        $scope.uncoverSpot = function (spot) {
            spot.isCovered = false;
        }
    }
})();