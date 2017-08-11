(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('BaseController', BaseController);

    BaseController.$inject = ['$scope'];

    function BaseController($scope) {

    }
})();
