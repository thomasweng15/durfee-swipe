'use strict';

/**
 * @ngdoc function
 * @name durfeeswipeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the durfeeswipeApp
 */
angular.module('durfeeswipeApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
