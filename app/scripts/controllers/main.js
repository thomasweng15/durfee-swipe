'use strict';

/**
 * @ngdoc function
 * @name durfeeswipeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the durfeeswipeApp
 */
angular.module('durfeeswipeApp')
  .controller('MainCtrl', ['$scope', 'productsFactory', 'mainService', function ($scope, productsFactory, mainService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.srvc = mainService;
    var model = $scope.srvc.model;

    $scope.products = productsFactory;

    $scope.toggleSuggestions = function () {
      if (model.suggestionsLabel === 'Show Suggestions') {
        if (model.suggestionToggled === false) {
          model.suggestionToggled = true;
        }
        model.suggestionsLabel = 'Hide Suggestions';
      } else {
        model.suggestionsLabel = 'Show Suggestions';
      }
    };

    $scope.displaySuggestions = function () {
      return model.suggestionsLabel === 'Hide Suggestions';
    };

    $scope.productsUnderLimit = function () {
      var products = [];
      for (var i = 0; i < $scope.products.length; i++) {
        if ($scope.products[i].price <= model.shoppingBag.remainingCredit) {
          products.push($scope.products[i]);
        }
      }
      return products;
    };

    $scope.findItem = function (itemName, list) {
      for (var x = 0; x < list.length; x++) {
        if (itemName === list[x].name) {
          return x;
        }
      }
      return -1;
    };

    $scope.addItemToBag = function (item) {
      var i = $scope.findItem(item.name, model.shoppingBag.items);
      if (i !== -1) {
        model.shoppingBag.items[i].count += 1;
      } else {
        item.count = 1;
        model.shoppingBag.items.push(item);
      }
      model.shoppingBag.totalPrice += item.price;
      model.shoppingBag.remainingCredit -= item.price;
    };

    $scope.lookUpItem = function () {
      // TODO validation
      var i = $scope.findItem(model.searchInput, $scope.products);
      if (i !== -1) {
        if (model.shoppingBag.items.length === 0 && model.suggestionToggled === false) {
          $scope.toggleSuggestions();
          model.suggestionToggled = true;
        }
        $scope.addItemToBag($scope.products[i]);
      }
      model.searchInput = '';
    };
  }]);
