'use strict';

/**
 * @ngdoc overview
 * @name durfeeswipeApp
 * @description
 * # durfeeswipeApp
 *
 * Main module of the application.
 */
var app = angular.module('durfeeswipeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

window.onbeforeunload = function (event) {
  $rootScope.$broadcast('savestate');
};