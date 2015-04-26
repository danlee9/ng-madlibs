angular.module('myApp', [])
	.constant('VERSION', 1.0)
	.controller('MyCtrl', function(VERSION, $scope) {
		$scope.version = VERSION;
		var male = {
			subjectPronoun: 'he',
			objectPronoun: 'him',
			possessivePronoun: 'his'
		};
		var female = {
			subjectPronoun: 'she',
			objectPronoun: 'her',
			possessivePronoun: 'her'
		};
		$scope.gender = female;
		$scope.change = function() {
			if ($scope.gender == female) {
				document.getElementById("name").setAttribute("placeholder",
				"Male Name");
				$scope.gender = male;
			} else {
				document.getElementById("name").setAttribute("placeholder",
				"Female Name");
				$scope.gender = female;
			}
		};
	});