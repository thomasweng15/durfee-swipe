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

    $scope.newCreditLimit = 8.00;

    $scope.updateCreditLimit = function (newCreditLimit) {
    	$modalInstance.close(newCreditLimit);
    };

    $scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
    };
}]);