angular.module("ngMyApp", [])
	.controller("mainController", ["$scope", function($scope){
		$scope.title = "This is a controller";
	}]);