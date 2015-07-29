app.controller('registerSuccessController', ['$scope', 'NewCustomer', '$location',
	function($scope, NewCustomer, $location){

		//clear cached NewCustomer Info
		NewCustomer.info = {};

		//start new registration
		$scope.registerNewCustomer = function(){
			$location.path('/register/1');
		};

	}]);