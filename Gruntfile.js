module.exports = function(grunt) {

	// CONFIGURE TASKS
	grunt.initConfig({

		clean: {
			build: {
				src:[ 'dist' ]
			}
		},

		copy: {
			build: {
				cwd: './',
				src: [
					'assets/{css,js,fonts}/*.*',
					'*.hbs',
					'README.md'
				],
				dest: 'dist',
				expand: true
			 },
		},

		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},

		watch:{
			all:{
				options:{
					livereload: true
				},
				files: [
					'assets/{css,js,fonts}/*.*',
					'*.hbs'
				]
			},
			css:{
				files:['assets/sass/**/*.scss'],
				tasks:['compass']
			}
		}

	});

	// LOAD TASKS
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');


	// DEFINE TASKS
	grunt.registerTask('build',[
		'clean',
		'copy'
	]);

};