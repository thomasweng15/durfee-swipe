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
      name: 'Coke',
      price: 2.00
    },
    {
      name: 'Diet Coke',
      price: 2.00
    },
    {
      name: 'Pepsi',
      price: 2.00
    },
    {
      name: 'Diet Pepsi',
      price: 2.00
    }
  ];
  return products;
});

app.factory('myService', function($http) {
  var myService = {
    
    data: '',

    async: function() {
      var sheetUrl = 'https://spreadsheets.google.com/feeds/list/0AiyPGkqVtM-pdHkwZlV3NFVDRGdsVmRUeGRyN0pPbFE/od6/public/basic';
      var promise = $http.get(sheetUrl).
        success(function(data, status, headers, config) {
          // TODO parse xml
          myService.data = data;
          console.log('success');
        }).
        error(function(data, status, headers, config) {
          console.log('error');
        });
      // Return the promise to the controller
      return myService;
    }
  };
  return myService;
});