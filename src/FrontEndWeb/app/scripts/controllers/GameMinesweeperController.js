(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('GameMinesweeperController', GameMinesweeperController);

    GameMinesweeperController.$inject = ['$scope', 'mineFieldService'];

    function GameMinesweeperController($scope, mineFieldService) {

        $scope.MainContentInit("扫地雷");

        $scope.minefield = mineFieldService.createMinefield();
        $scope.isWinMessageVisible = false;
        $scope.isLostMessageVisible = false;

        $scope.uncoverSpot = function (spot) {
            //如果游戏胜利或失败都需要重新开始
            if ($scope.isLostMessageVisible || $scope.isWinMessageVisible) {
                return;
            }
            spot.isCovered = false;
            if (spot.content == "mine") {
                $scope.isLostMessageVisible = true;
            } else {
                if (mineFieldService.hasWon($scope.minefield)) {
                    $scope.isWinMessageVisible = true;
                }
            }
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