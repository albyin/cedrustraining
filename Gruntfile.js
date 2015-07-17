// /creating a min file by concat specified files
 module.exports = function(grunt){
	grunt.initConfig({
		conf:{
			srcFiles:'public/javascripts/app/**/*.js'
		},
		uglify:{
			build:{
				src:'<%= conf.srcFiles %>',
				dest:'public/javascripts/app.min.js'
			}
		},
		concat:{
			options:{
				separator: '\n\n'
			},
			dist:{
				src: '<%= conf.srcFiles %>',
				dest: 'public/javascripts/app.min.js'
			}
		},
		watch:{
	    files:'<%= conf.srcFiles %>',
	    tasks: ['uglify']
    }
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//concat added to build code to test not minified
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['uglify', 'watch']);
};