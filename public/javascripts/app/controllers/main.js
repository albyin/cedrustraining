var app = angular.module('ngMyApp', []);

app.controller('mainController', ['$scope', 'Posts', 'Comments', function($scope, Posts, Comments){
		//define title
		$scope.title = 'Title comes from the controller';

		//immediately get all posts, put onto scope for display
		Posts.get()
			.then(function (data) {
				$scope.posts = data;
			});

		//toggle comments function, recieves a post object
		$scope.toggleComments = function (post) {
			//if post object already contains comments property, clear it
			if (post.comments) {
				post.comments = undefined;
			}
			//if post object does not have comments property, get comments and add it
			else {
				Comments.getAllByPostId(post.id)
				.then(function (data) {
					post.comments = data;
				});
			}
		};

	}]);