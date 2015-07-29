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
        templateUrl: '/page/home',
        controller: 'mainController'
      }).
      when('/posts', {
        templateUrl: '/page/posts',
        controller: 'postsController'
      }).
      when('/members', {
        templateUrl: '/page/members',
        controller: 'usersController'
      }).
      when('/login', {
        templateUrl: '/page/login',
        controller: 'loginController'
      }).
      when('/register/1', {
        templateUrl: '/register/1',
        controller: 'register1Controller'
      }).
      when('/register/2', {
        templateUrl: '/register/2',
        controller: 'register2Controller'
      }).
      when('/register/3', {
        templateUrl: '/register/3',
        controller: 'register3Controller'
      }).
      when('/register/success', {
        templateUrl: '/register/success',
        controller: 'registerSuccessController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);