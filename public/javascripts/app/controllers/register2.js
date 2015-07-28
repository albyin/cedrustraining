app.controller('register2Controller', ['$scope', 'NewCustomer',
	function($scope, NewCustomer){

		$scope.submitForm = function(isValid) {

	    // check to make sure the form is completely valid
	    if (isValid) {
	    	//TODO refactor this to use a setter instead of accessing directl
	    	NewCustomer.addInfo($scope.customer);
	    }

  	};

	}]);