app.factory("APIConfig", [function (){
	return {
		devRoot : "http://jsonplaceholder.typicode.com/",
		prodRoot: "",
		env : "dev",
		setEnv : function (){
			
		},
		getRoot : function () {
			//if env is dev, return devRoot, else return prodRoot
			if (this.env === "dev"){
				return this.devRoot;
			}
			else if (this.env ==="prod"){
				return this.prodRoot;
			}

			return null;
		}
	};
}]);

app.factory("Posts", ["$http", "APIConfig", function($http, APIConfig){
  return {
    get : function() {
      return $http.get(APIConfig.getRoot() + "posts/")
      	.then(function(res){
      		return res.data;
      	});
    }
  };
}]);

app.factory("Comments", ["$http", "APIConfig", function($http, APIConfig){
	return {
		get : function (){
			return $http.get(APIConfig.getRoot() + "comments/")
      	.then(function(res){
      		return res.data;
      	});
		},
		getAllByPostId : function (postId){
			return $http.get(APIConfig.getRoot() + "comments?postId=" + postId)
      	.then(function(res){
      		return res.data;
      	});
		}
	};
}]);