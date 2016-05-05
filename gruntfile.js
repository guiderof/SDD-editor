module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false,
                outputStyle: 'compressed'
            },
            pub: {
                files: {
                    'public/css/index.css': 'resource/scss/index.scss'
                }
            }
        }
    });

	//load plugins
	grunt.loadNpmTasks('grunt-sass');

    //create css style sheet
    grunt.registerTask('default', 'run application on android with source', function() {
        grunt.task.run(['sass:pub']);
    });

};
