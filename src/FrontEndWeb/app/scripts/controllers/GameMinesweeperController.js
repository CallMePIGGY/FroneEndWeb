(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('GameMinesweeperController', GameMinesweeperController);

    GameMinesweeperController.$inject = ['$scope', 'mineFieldService'];

    function GameMinesweeperController($scope, mineFieldService) {

        $scope.MainContentInit("扫地雷");

        $scope.minefield = mineFieldService.createMinefield();

        $scope.uncoverSpot = function (spot) {
            spot.isCovered = false;
        }

        $scope.setFlag = function (spot) {
            if (spot.flag == "none") {
                spot.flag = "mine";
            } else if (spot.flag == "mine") {
                spot.flag = "suspect";
            } else {
                spot.flag = "none";
            }
        }
    }
})();