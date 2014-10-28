'use strict';

/**
 * @ngdoc function
 * @name durfeeswipeApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the durfeeswipeApp
 */
angular.module('durfeeswipeApp')
  .controller('ContactCtrl', function ($scope) {
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
