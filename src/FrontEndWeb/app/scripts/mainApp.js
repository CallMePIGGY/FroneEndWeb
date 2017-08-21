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
        
            // 扫地雷游戏
            {
                name: 'main.GameMinesweeper',
                url: 'Game/Minesweeper',
                templateUrl: "partials/Minesweeper/index.html",
                controller: 'GameMinesweeperController'
            }
        ];

        angular.forEach(route, function (obj) {
            $stateProvider.state(obj);
        });

        $locationProvider.html5Mode(true);
    }]
);