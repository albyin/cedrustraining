//API configuration factory
app.factory('APIConfig', [function (){
	return {
		//root api url for dev environment
		devRoot : 'http://jsonplaceholder.typicode.com/',
		//root api url for prod environment
		prodRoot: '',
		//current env
		env : 'dev',
		//set env function
		setEnv : function () {
		},
		//will return correct root URL based on current env
		getRoot : function () {
			//if env is dev, return devRoot, else return prodRoot
			if (this.env === 'dev') {
				return this.devRoot;
			}
			else if (this.env ==='prod') {
				return this.prodRoot;
			}

			//somehow neither of conditions above were satisfied, return null as error
			return null;
		}
	};
}]);

//factory to access posts
app.factory('Posts', ['$http', 'APIConfig', function($http, APIConfig){
  return {
  	//get all posts
    get : function() {
      return $http.get(APIConfig.getRoot() + 'posts/')
      	.then(function(res){
      		return res.data;
      	});
    },
    getAllByUserId : function(userId) {
    	return $http.get(APIConfig.getRoot() + 'posts?userId=' + userId)
      	.then(function(res){
      		return res.data;
      	});
    }
  };
}]);

//factory to access comments
app.factory('Comments', ['$http', 'APIConfig', function($http, APIConfig){
	return {
		//get all comments
		get : function (){
			return $http.get(APIConfig.getRoot() + 'comments/')
      	.then(function(res){
      		return res.data;
      	});
		},
		//get all comments for a given postId
		getAllByPostId : function (postId){
			return $http.get(APIConfig.getRoot() + 'comments?postId=' + postId)
      	.then(function(res){
      		return res.data;
      	});
		}
	};
}]);

//factory to access users
app.factory('Users', ['$http', 'APIConfig', function($http, APIConfig){
	return {
		//get all users
		get : function (){
			return $http.get(APIConfig.getRoot() + 'users/')
      	.then(function(res){
      		return res.data;
      	});
		}
	};
}]);

app.factory('Auth', ['$http', function($http) {
	return {
		getUserInfo: function() {
			return $http.get('/authUserInfo')
				.then(function (res) {
					return res.data;
				});
		}
	};
}]);