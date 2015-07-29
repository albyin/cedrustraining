app.controller('register1Controller', ['$scope', '$http', 'NewCustomer', '$location',
	function($scope, $http, NewCustomer, $location){

		$scope.customer = {};

		//restore data if it has previously been entered
		if (NewCustomer.info.firstName){
			$scope.customer.firstName = NewCustomer.info.firstName;
		}

		if (NewCustomer.info.lastName){
			$scope.customer.lastName = NewCustomer.info.lastName;
		}

		if (NewCustomer.info.age){
			$scope.customer.age = NewCustomer.info.age;
		}

		//save scope form info to Factory
		$scope.saveNow = function(){
			NewCustomer.addInfo($scope.customer);
		};

		$scope.submitForm = function(isValid) {

	    // check to make sure the form is completely valid
	    if (isValid) {
	      $scope.saveNow();
	     	$location.path('/register/2');
	    }

  	};

	}]);