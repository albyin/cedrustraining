app.controller('register3Controller', ['$scope', 'NewCustomer', '$location', 'Geography',
	function($scope, NewCustomer, $location, Geography){

		$scope.states = Geography.states;
		$scope.cities = [];

		$scope.getCities = function() {
			$scope.cities = Geography.cities[$scope.customer.state];
		};

		$scope.backButton = function(){
			$location.path('/register/1');
		};

		$scope.submitForm = function(isValid) {

	    // check to make sure the form is completely valid
	    if (isValid) {
	    	//TODO refactor this to use a setter instead of accessing directl
	    	NewCustomer.addInfo($scope.customer);

	    	var res = NewCustomer.submit();

	      var data = res.then(function (response) {
					// console.log('NewCustomer Submit results: ', response.data);
				
					if (response.data === 'No Address') {
						$location.path('/register/3');
					}

				});
	    }

  	};

	}]);