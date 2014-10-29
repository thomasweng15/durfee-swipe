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

    $scope.findItem = function (itemName, list) {
      for (var x in list) {
        if (itemName === list[x].name) {
          return x;
        }
      }
      return -1;
    };

    $scope.lookUpItem = function (searchTerm) {
      // TODO validation
      var i = $scope.findItem(searchTerm, $scope.products);
      if (i !== -1) {
        $scope.addItemToBag($scope.products[i]);
      }
      $scope.searchItem = "";
    };

    $scope.addItemToBag = function (item) {
      var i = $scope.findItem(item.name, $scope.shoppingBag.items);
      if (i !== -1) {
        $scope.shoppingBag.items[i].count += 1;
      } else {
        item.count = 1;
        $scope.shoppingBag.items.push(item);
      }
      $scope.shoppingBag.totalPrice += item.price;
    };
  });
