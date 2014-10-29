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

    $scope.creditLimit = 8.00;
    $scope.searchInput = "";
    $scope.shoppingBag = {
        totalPrice: 0.00,
        remainingCredit: $scope.creditLimit,
        items: []
    };

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

    var findItem = function (itemName, list) {
      for (var x in list) {
        if (itemName === list[x].name) {
          return x;
        }
      }
      return -1;
    };

    var addItemToBag = function (item) {
      var i = findItem(item.name, $scope.shoppingBag.items);
      if (i !== -1) {
        $scope.shoppingBag.items[i].count += 1;
      } else {
        item.count = 1;
        $scope.shoppingBag.items.push(item);
      }
      $scope.shoppingBag.totalPrice += item.price;
      $scope.shoppingBag.remainingCredit -= item.price;
    };

    $scope.lookUpItem = function (searchInput) {
      // TODO validation
      var i = findItem(searchInput, $scope.products);
      if (i !== -1) {
        addItemToBag($scope.products[i]);
      }
      $scope.searchInput = "";
    };
  });
