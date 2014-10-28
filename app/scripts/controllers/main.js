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

    $scope.searchItem = "";

    $scope.lookupItem = function (searchItem) {
    	// TODO Find matches for item
    	$scope.searchItem = "";
    };
  });
