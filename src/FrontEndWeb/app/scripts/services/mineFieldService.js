(function () {
    'use strict';

    angular
        .module('myApp')
        .service('mineFieldService', mineFieldService);

    function mineFieldService() {

        this.createMinefield = function () {
            var minefield = {};
            minefield.rows = [];
            for (var i = 0; i < 9; i++) {
                var row = {};
                row.spots = [];
                for (var j = 0; j < 9; j++) {
                    var spot = {};
                    spot.isCovered = true;
                    spot.content = "empty";
                    spot.flag = "none";
                    //记录砖块的横纵坐标
                    spot.x = i;
                    spot.y = j;
                    row.spots.push(spot);
                }
                minefield.rows.push(row);
            }
            this.placeManyRandomMines(minefield);
            return minefield;
        }

        this.placeRandomMine = function (minefield) {
            var row = Math.round(Math.random() * 8);
            var column = Math.round(Math.random() * 8);
            var spot = this.getSpot(minefield, row, column);
            spot.content = "mine";
        }

        this.getSpot = function (minefield, row, column) {
            return minefield.rows[row].spots[column];
        }

        this.placeManyRandomMines = function (minefield) {
            for (var i = 0; i < 10; i++) {
                this.placeRandomMine(minefield);
            }
        }
    }
})();