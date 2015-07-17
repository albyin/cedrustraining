var app = angular.module('ngMyApp', []);

app.controller('mainController', ['$rootScope','$scope', 'Posts', 'Comments', 'Users', function($rootScope, $scope, Posts, Comments, Users){
		//define title
		$scope.title = 'Title comes from the controller';

		//set initial view
		$rootScope.curr_view = 'home';

		//expose function to access rootScope to change views
		$scope.goView = function (view_name) {
			$rootScope.curr_view = view_name;
		};

		//immediately get all posts, put onto scope
		Posts.get()
			.then(function (data) {
				$scope.posts = data;
			});

		//immediately get all users, put onto scope
		Users.get()
			.then(function (users) {
				$scope.users = users;
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