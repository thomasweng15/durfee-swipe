'use strict';

/**
 * @ngdoc function
 * @name durfeeswipeApp.controller:InventoryCtrl
 * @description
 * # InventoryCtrl
 * Controller of the durfeeswipeApp
 */
angular.module('durfeeswipeApp')
  .controller('InventoryCtrl', ['$scope', 'productsFactory', function ($scope, productsFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.products = productsFactory;
  }]);
