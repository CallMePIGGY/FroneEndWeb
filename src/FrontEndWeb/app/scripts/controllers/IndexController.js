(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope'];

    function IndexController($scope) {
        $scope.MainContentInit ("首页");
    }
})();