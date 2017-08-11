(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope','$state'];

    function LoginController($scope,$state) {

        $scope.Login = function () {
            $state.go('main.index');
        }
    }
})();