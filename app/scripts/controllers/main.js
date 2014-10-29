'use strict';

/**
 * @ngdoc function
 * @name durfeeswipeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the durfeeswipeApp
 */
angular.module('durfeeswipeApp')
  .controller('MainCtrl', function ($scope, productsFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.creditLimit = 8.00;
    $scope.searchInput = '';
    $scope.shoppingBag = {
        totalPrice: 0.00,
        remainingCredit: $scope.creditLimit,
        items: []
    };
    $scope.products = productsFactory;

    $scope.findItem = function (itemName, list) {
      for (var x = 0; x < list.length; x++) {
        if (itemName === list[x].name) {
          return x;
        }
      }
      return -1;
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
      $scope.shoppingBag.remainingCredit -= item.price;
    };

    $scope.lookUpItem = function (searchInput) {
      // TODO validation
      var i = $scope.findItem(searchInput, $scope.products);
      if (i !== -1) {
        $scope.addItemToBag($scope.products[i]);
      }
      $scope.searchInput = '';
    };
  });
