app.factory('NewCustomer', ['$http', 
	function($http) {
	return {
		info: {},
		addInfo : function(data) {
			//add additional information to info object
			var prop;
			for (prop in data){
				this.info[prop] = data[prop];
			}
		},
		getInfo : function () {
			return this.info;
		},
		submit: function() {
			return $http.post('/register', this.info);
		}
	};
}]);