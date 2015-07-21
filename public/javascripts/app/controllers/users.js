app.controller('usersController', ['$scope', 'Posts', 'Users', 
	function($scope, Posts, Users){

		//immediately get all users, put onto scope
		Users.get()
			.then(function (users) {
				$scope.users = users;
			});

		//toggle posts function, recieves a user object and attaches posts or removes
		$scope.togglePosts = function (user) {
			//if user object already contains posts property, clear it
			if (user.posts) {
				user.posts = undefined;
			}
			//if user object does not have posts property, get posts and add it
			else {
				Posts.getAllByUserId(user.id)
				.then(function (data) {
					user.posts = data;
				});
			}
		};

	}]);