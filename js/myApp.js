angular.module('myApp', [])
	.constant('VERSION', 1.0)
	.controller('MyCtrl', function(VERSION, $scope) {
		$scope.version = VERSION;
	});