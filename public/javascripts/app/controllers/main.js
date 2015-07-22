app.controller('mainController', ['$scope', 'Auth',
	function($scope, Auth){
		//define title
		$scope.title = 'Title comes from the controller';

		Auth.getUserInfo()
			.then(function (data){
				$scope.user = data;
			});

	}]);