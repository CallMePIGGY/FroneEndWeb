(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {
        $scope.MainPageInit = function () {
            $.getScript("scripts/js/init.js");
        }

        $scope.MainContentInit=function(pageTitle) {
            $scope.MainTitle = pageTitle;
        }
    }
})();