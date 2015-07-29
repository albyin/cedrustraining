app.controller('register2Controller', ['$scope', 'NewCustomer', '$location',
	function($scope, NewCustomer, $location){

		$scope.customer = {};

		//restore data if it has previously been entered
		if (NewCustomer.info.email){
			$scope.customer.email = NewCustomer.info.email;
		}

		if (NewCustomer.info.income){
			$scope.customer.income = NewCustomer.info.income;
		}

		//save scope form info to Factory
		$scope.saveNow = function(){
			NewCustomer.addInfo($scope.customer);
		};

		//back button will save work and go back one page
		$scope.backButton = function(){
			$scope.saveNow();
			$location.path('/register/1');
		};

		$scope.submitForm = function(isValid) {
	    // check to make sure the form is completely valid
	    if (isValid) {
	    	$scope.saveNow();
	    	$location.path('/register/3');
	    }

  	};

	}]);