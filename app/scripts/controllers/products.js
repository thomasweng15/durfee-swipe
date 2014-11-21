'use strict';

/**
 * @ngdoc function
 * @name durfeeswipeApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the durfeeswipeApp
 */
angular.module('durfeeswipeApp')
  .controller('ProductsCtrl', ['$scope', 'productsFactory', function ($scope, productsFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.products = productsFactory;
  }]);
