'use strict';

angular.module('durfeeswipeApp')
	.controller('HeaderCtrl', ['$scope', '$location', function ($scope, $location) { 
	    $scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
	}]);