'use strict';

/**
 * @ngdoc function
 * @name durfeeswipeApp.controller:CreditLimitModalCtrl
 * @description
 * # CreditLimitModalCtrl
 * Controller of the durfeeswipeApp
 */
angular.module('durfeeswipeApp')
  .controller('CreditLimitModalCtrl', ['$scope', '$modalInstance', 
  	function ($scope, $modalInstance) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.newCreditLimit = 7.00;

    $scope.updateCreditLimit = function () {
    	$modalInstance.close($scope.newCreditLimit);
    };

    $scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
    };
}]);