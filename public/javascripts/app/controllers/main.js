var app = angular.module('ngMyApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {

		//this locationProvider setting removes need for '#/' in URLs
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});

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

app.controller('mainController', ['$scope', 
	function($scope){
		//define title
		$scope.title = 'Title comes from the controller';
	}]);