// /creating a min file by concat specified files
 module.exports = function(grunt){
	grunt.initConfig({
		conf:{
			srcFiles:"public/javascripts/app/**/*.js"
		},
		uglify:{
			build:{
				src:"<%= conf.srcFiles %>",
				dest:"public/javascripts/app.min.js"
			}
		},
		watch:{
	    files:"<%= conf.srcFiles %>",
	    tasks: ["uglify"]
    }
	});
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["uglify", "watch"]);
};