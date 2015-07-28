app.controller('register2Controller', ['$scope', '$rootScope',
	function($scope, $rootScope){

		$scope.validate = function(){
			console.log("scope customer", $scope.customer);
			$rootScope.customer = $scope.customer;
		};

	}]);