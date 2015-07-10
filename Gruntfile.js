// /creating a min file by concat specified files
 module.exports = function(grunt){
	grunt.initConfig({
		uglify:{
			build:{
				src:"public/javascripts/app/**/*.js",
				dest:"public/javascripts/app.min.js"
			}
		},
		watch:{
	    files:"public/javascripts/app/**/*.js",
	    tasks: ["uglify"]
    }
	});
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["uglify", "watch"]);
};