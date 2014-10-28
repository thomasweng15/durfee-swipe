'use strict';

/**
 * @ngdoc function
 * @name durfeeswipeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the durfeeswipeApp
 */
angular.module('durfeeswipeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.shoppingBag = {
        totalPrice: 0.00,
        items: []
    };
    $scope.searchItem = "";
    $scope.products = [
      {
        name: "chips",
        price: 3.00
      },
      {
        name: "soda",
        price: 2.00
      }
    ];

    $scope.lookUpItem = function (searchItem) {
      // TODO validation
      for (var p in $scope.products) {
        if ($scope.searchItem === $scope.products[p].name) {
          $scope.addItemToBag($scope.products[p]);
        }
      }
    	$scope.searchItem = "";
    };

    $scope.addItemToBag = function (item) {
      // TODO search through bag and +1 to item if it exists.
      $scope.shoppingBag.items.push(item);
      $scope.shoppingBag.totalPrice += item.price;
    };
  });
