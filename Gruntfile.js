module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			js: {
				files: ['lib/src/js/*'],
				tasks: ['uglify', 'concat']
			},
			sass: {
				files: ['lib/src/sass/*'],
				tasks: ['compass', 'cssmin']
			}
		},

		compass: {
			dist: {
				options: {
					sassDir: 'lib/src/sass/',
					specify: 'lib/src/sass/init.scss',
					cssDir: 'lib/src/sass/build/',
					environment: 'production'
				}
			}
		},

		cssmin: {
			combine: {
				files: {
					'lib/assets/css/theme.min.css': ['lib/src/sass/build/*.css', 'lib/src/js/plugins/monokai_sublime.css']
				}
			}
		},

		uglify: {
			js: {
				files: {
					'lib/src/js/build/theme.js': ['lib/src/js/lib/*.js', 'lib/src/js/plugins/*.js', 'lib/src/js/base.js']
				}
			}
		},

		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['lib/src/js/config.js', 'lib/src/js/build/theme.js'],
				dest: 'lib/assets/js/theme.min.js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');


	grunt.registerTask('default', ['compass', 'cssmin', 'uglify', 'concat']);
	grunt.registerTask('dev', ['compass', 'cssmin', 'uglify', 'concat', 'watch']);

};
