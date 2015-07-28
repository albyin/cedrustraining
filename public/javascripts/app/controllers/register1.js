app.controller('register1Controller', ['$scope', '$rootScope',
	function($scope, $rootScope){

		$scope.validate = function(){
			console.log("scope customer", $scope.customer);
			$rootScope.customer = $scope.customer;
			console.log("scope customer", $rootScope.customer);
		};

	}]);