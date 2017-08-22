'use strict';
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$urlMatcherFactoryProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$compileProvider',
    function ($urlMatcherFactoryProvider, $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $compileProvider) {
        $httpProvider.defaults.withCredentials = true;
        $urlRouterProvider.otherwise("/");
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|data):/);

        var route = [
            // 登入页
            {
                name: 'login',
                url: "/",
                templateUrl: "layouts/login.html",
                controller: 'LoginController'
            },

            // 导航栏
            {
                name: 'main',
                url: "/Main/",
                abstract: true,
                templateUrl: "layouts/main.html",
                controller: 'MainController'
            },

            // 主页
            {
                name: 'main.index',
                url: '',
                templateUrl: "partials/index.html",
                controller: 'IndexController'
            },
        
            // 游戏-扫地雷
            {
                name: 'main.gameMinesweeper',
                url: 'Game/Minesweeper',
                templateUrl: "partials/game/minesweeper/minesweeper.html",
                controller: 'GameMinesweeperController'
            },

            // 客户管理系统-新增客户
            {
                name: 'main.addCustomer',
                url: 'CMS/AddCustomer',
                templateUrl: "partials/cms/customers/addCustomer.html",
                controller: 'CMSAddCustomerController'
            },

            // 客户管理系统-客户列表
            {
                name: 'main.customers',
                url: 'CMS/Customers',
                templateUrl: "partials/cms/customers/customers.html",
                controller: 'CMSCustomersController'
            }
        ];

        angular.forEach(route, function (obj) {
            $stateProvider.state(obj);
        });

        $locationProvider.html5Mode(true);
    }]
);