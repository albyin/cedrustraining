var app = angular.module("ngMyApp", []);

app.controller("mainController", ["$scope", "Posts", "Comments", function($scope, Posts, Comments){
		$scope.title = "This is a controller";

		Posts.get()
			.then(function (data){
				$scope.posts = data;
			});

		$scope.toggleComments = function (post){
			if (post.comments){
				post.comments = undefined;
			}
			else {
				Comments.getAllByPostId(post.id)
				.then(function (data){
					post.comments = data;
				});
			}
		};

	}]);