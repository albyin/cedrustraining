var app = angular.module("ngMyApp", []);

app.controller("mainController", ["$scope",function($scope){
		$scope.title = "This is a controller";
		$scope.x = 12345;
	}]);