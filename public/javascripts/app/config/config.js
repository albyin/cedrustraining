var app = angular.module('ngMyApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {

		//this locationProvider setting removes need for '#/' in URLs
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});

		//configure routes
    $routeProvider.
    	when('/', {
        templateUrl: 'page/home',
        controller: 'mainController'
      }).
      when('/posts', {
        templateUrl: 'page/posts',
        controller: 'postsController'
      }).
      when('/members', {
        templateUrl: 'page/members',
        controller: 'usersController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);