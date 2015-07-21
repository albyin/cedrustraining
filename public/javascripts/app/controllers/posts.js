app.controller('postsController', ['$scope', 'Posts', 'Comments', 
	function($scope, Posts, Comments){

		//immediately get all posts, put onto scope
		Posts.get()
			.then(function (data) {
				$scope.posts = data;
			});

		//toggle comments function, recieves a post object and attaches comments or removes
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