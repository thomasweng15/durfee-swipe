'use strict';

/**
 * @ngdoc function
 * @name durfeeswipeApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the durfeeswipeApp
 */
angular.module('durfeeswipeApp')
  .controller('ProductsCtrl', ['$scope', 'productsSrvc', function ($scope, productsSrvc) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.productsSrvc = productsSrvc;
  }]);
