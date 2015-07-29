app.controller('register1Controller', ['$scope', '$http', 'NewCustomer', '$location',
	function($scope, $http, NewCustomer, $location){

		$scope.submitForm = function(isValid) {

	    // check to make sure the form is completely valid
	    if (isValid) {
	    	//TODO refactor this to use a setter instead of accessing directly
	      NewCustomer.addInfo($scope.customer);
	      
	      var res = NewCustomer.submit();

	      var data = res.then(function (response) {
					// console.log('NewCustomer Submit results: ', response.data);
				
					if (response.data === 'No Email') {
						$location.path('/register/2');
					}

				});

	    }

  	};

	}]);