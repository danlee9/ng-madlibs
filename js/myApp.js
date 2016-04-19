angular.module('myApp', ['ngAnimate'])
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
		$scope.article1 = 'a';
		$scope.article2 = 'a';
		$scope.vowelCheck = function(word) {
			var vowels = ['a', 'e', 'i', 'o', 'u'];
			for (var i=0; i<5; i++) {
				if (word[0] == vowels[i]) {
					return true;
				}
			}
			return false;
		};
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
		$scope.clicked = false;
		$scope.validated = false;
		$scope.submit = function() {
			$scope.clicked = true;
			if ($scope.myForm.$valid) {
				if ($scope.vowelCheck($scope.job_title)) {$scope.article1 = 'an'};
				if ($scope.vowelCheck($scope.adjective)) {$scope.article2 = 'an'};
				$scope.validated = true;
			};
		};
		$scope.reset = function() {
			$scope.clicked = false;
			$scope.validated = false;
			$scope.name = "";
			$scope.job_title = "";
			$scope.tedious_task = "";
			$scope.dirty_task = "";
			$scope.celebrity = "";
			$scope.useless_skill = "";
			$scope.obnoxious_celebrity = "";
			$scope.huge_number = "";
			$scope.adjective = "";
			$scope.article1 = 'a';
			$scope.article2 = 'a';
		};
	});