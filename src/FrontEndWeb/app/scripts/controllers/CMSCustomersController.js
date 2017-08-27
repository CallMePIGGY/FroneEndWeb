(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('CMSCustomersController', CMSCustomersController);

    CMSCustomersController.$inject = ['$scope'];

    function CMSCustomersController($scope) {
        
        $scope.MainContentInit ("客户信息");

    }
})();


