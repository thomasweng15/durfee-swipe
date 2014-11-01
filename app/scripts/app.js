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
      .when('/inventory', {
        templateUrl: 'views/inventory.html',
        controller: 'InventoryCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

window.onbeforeunload = function (event) {
  $rootScope.$broadcast('savestate');
};

app.factory('productsFactory', function () {
  var products = [
    {
      name: 'Sweet Maui Onion chips',
      price: 3.00
    },
    {
      name: 'Jalapeno Chips',
      price: 3.00
    },
    {
      name: 'Pirate\'s Booty',
      price: 2.50
    },
    {
      name: 'soda',
      price: 2.00
    }
  ];
  return products;
});