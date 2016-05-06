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
        },
        copy: {
            libs: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/angular/',
                        src: ['angular.js'],
                        dest: 'public/js/libs/angular'
                    }, {
                        expand: true,
                        cwd: 'node_modules/angular-sanitize/',
                        src: ['angular-sanitize.js'],
                        dest: 'public/js/libs/angular'
                    }, {
                        expand: true,
                        cwd: 'node_modules/requirejs/',
                        src: ['require.js'],
                        dest: 'public/js/libs/require'
                    }, {
                        expand: true,
                        cwd: 'resource/ace-master/lib/ace/',
                        src: ['**'],
                        dest: 'public/js/libs/ace'
                    }, {
                        expand: true,
                        cwd: 'node_modules/angular-ui-bootstrap/dist/',
                        src: ['ui-bootstrap-csp.css'],
                        dest: 'public/css/libs/angular-ui-bootstrap'
                    }, {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist/css/',
                        src: ['bootstrap.css'],
                        dest: 'public/css/libs/bootstrap'
                    }
                ]
            }
        }
    });

	//load plugins
	grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    //create css style sheet
    grunt.registerTask('default', 'create env for deploy web', function() {
        grunt.task.run(['sass:pub', 'copy:libs']);
    });

};
