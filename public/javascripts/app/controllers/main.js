var app = angular.module("ngMyApp", []);

app.controller("mainController", ["$scope", "Posts", "Comments", function($scope, Posts, Comments){
		$scope.title = "This is a controller";

		Posts.get()
			.then(function (data){
				$scope.posts = data;
			});

		Comments.get()
			.then(function (data){
				$scope.comments = data;
			});


	}]);