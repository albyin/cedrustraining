var app = angular.module('ngMyApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

    $routeProvider.
    	when('/', {
        templateUrl: 'page/home',
        controller: 'mainController'
      }).
      when('/posts', {
        templateUrl: 'page/posts',
        controller: 'postController'
      }).
      when('/members', {
        templateUrl: 'page/members',
        controller: 'userController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

app.controller('mainController', ['$rootScope', '$scope', 'Posts', 'Users', 'Comments', 
	function($rootScope, $scope, Posts, Users, Comments){
		//define title
		$scope.title = 'Title comes from the controller';

		//expose function to access rootScope to change views
		$scope.goView = function (view_name) {
			$rootScope.curr_view = view_name;
		};

		//set initial view
		$scope.goView('home');

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