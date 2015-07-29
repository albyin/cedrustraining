app.controller('register3Controller', ['$scope', 'NewCustomer', '$location', 'Geography',
	function($scope, NewCustomer, $location, Geography){

		$scope.customer = {};

		//restore data if it has previously been entered
		if (NewCustomer.info.street){
			$scope.customer.street = NewCustomer.info.street;
		}

		if (NewCustomer.info.state){
			$scope.customer.state = NewCustomer.info.state;
		}

		if (NewCustomer.info.city){
			$scope.customer.city = NewCustomer.info.city;
		}

		$scope.states = Geography.states;
		$scope.cities = [];

		$scope.getCities = function() {
			$scope.cities = Geography.cities[$scope.customer.state];
		};

		//save scope form info to Factory
		$scope.saveNow = function(){
			NewCustomer.addInfo($scope.customer);
		};

		$scope.backButton = function(){
			$location.path('/register/1');
		};

		//back button will save work and go back one page
		$scope.backButton = function(){
			$scope.saveNow();
			$location.path('/register/2');
		};

		$scope.submitForm = function(isValid) {

	    // check to make sure the form is completely valid
	    if (isValid) {
	    	$scope.saveNow();

	    	var res = NewCustomer.submit();

	      var data = res.then(function (response) {
					// console.log('NewCustomer Submit results: ', response.data);
					
					if(	response.data === 'No First Name' ||
							response.data === 'No Last Name' ||
							response.data === 'No Age' ||
							response.data === 'Age must be over 18'
							) {
						$location.path('/register/1');
					}
					else if (	response.data === 'No Email' ||
										response.data === 'No Income' ||
										response.data === 'Income must be greater than 50,000'
										) {
						$location.path('/register/2');
					}
					else if (response.data === 'Success!') {
						$location.path('/register/success');
					}

				});
	    }

  	};

	}]);