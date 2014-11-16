'use strict';

/**
 * @ngdoc function
 * @name durfeeswipeApp.controller:CreditLimitModalCtrl
 * @description
 * # CreditLimitModalCtrl
 * Controller of the durfeeswipeApp
 */
angular.module('durfeeswipeApp')
  .controller('CreditLimitModalCtrl', ['$scope', '$modalInstance', 'existingCreditLimit',
  	function ($scope, $modalInstance, existingCreditLimit) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // TODO indicate existing value vs. new value on ui
    $scope.newCreditLimit = existingCreditLimit;

    $scope.updateCreditLimit = function (newCreditLimit) {
    	$modalInstance.close(newCreditLimit);
    };

    $scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
    };
}]);