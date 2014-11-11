(function(){

'use strict';

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var config = {
      app: 'app',
      build: 'build',
      dist: 'dist'
  };

  grunt.registerMultiTask('echo', 'Echo back input', function(){    
    if (typeof (this.data) === 'string') {
      if (grunt.file.exists(this.data)) {
        grunt.log.writeln(grunt.file.read(this.data));
      } else {
        grunt.log.writeln(this.data);
      }
    }
  
    var key;
    if (typeof (this.data) === 'object') {
      for (key in this.data) {
        if (this.data.hasOwnProperty(key)) {
          grunt.log.writeln(this.data[key]);
        }
      }
    }
  });

  grunt.initConfig({
      config: config,
      pkg: grunt.file.readJSON('package.json'), // Remove this if your package.json is marked as a private package. Don't forget to replace usages.
    
      echo: {
        help: 'README.md'        
      },

      clean: {
        options: {
          force: true
        },
        build: [config.build, config.dist],
        coverage: ["coverage"],
        bower: ["<%= config.app %>/bower_components"],
        all: [config.build, config.dist, "coverage", "<%= config.app %>/bower_components"]
      },
    
      "bower-install-simple": {
        main: {
          options: {
            color: true,
            directory: "app/bower_components"
          }
        }
      },

      requirejs: {
        main: {
          options: {
            baseUrl: 'app',
            mainConfigFile: 'app/scripts/require-config.js',
            paths: {
              'handlebars': 'bower_components/handlebars/handlebars.runtime',
              'ember': 'bower_components/ember/ember.prod',
              'ember-data-lib': 'bower_components/ember-data/ember-data.prod'
            },             
          
            name: 'main',
            out: '<%= config.build %>/scripts/main.js',
            wrap: false,
            optimizeAllPluginResources : true,
            findNestedDependencies : true,
            preserveLicenseComments : true,
            skipModuleInsertion: false,
            //optimize: 'uglify2',
            stubModules : ['text', 'ember-hbs'],
            uglify2: {
              output: {
                semicolons: false
              }
            },
            onBuildWrite: function (moduleName, path, contents) {
              // Not pretty, but Handlebars is pretty unhappy living in a function()-wrapped script and is not AMD-compatible
              if (path.match(/handlebars/)) {
                return contents.replace(/var Handlebars =/g, 'window.Handlebars =');
              }
            
              if (path.match(/ember/)) {
                return contents.replace(/var Ember =/g, 'window.Ember =');
              }

              return contents;
            }
          }
        }
      },

      jshint: {
          options: {
              jshintrc: '.jshintrc',
              reporter: require('jshint-stylish'),
              newline: true,
              trailingspaces: true,
              indentation: 'spaces',
              spaces: 2,
              ignores: []
          },
          all: [
              'Gruntfile.js',
              '<%= config.app %>/scripts/**/*.js',
              'test/spec/{,*/}*.js'
          ]
      },

      csslint: {
        all: {
          options: {
            import: false,
            ids: false,
            'universal-selector': false
          },
          src: [
            'app/styles/**/*.css',
            'app/styles/**/*.scss'
          ]
        }
      },

      copy: {
        dist: {
          files: [
            {
              expand: true,
              cwd: '<%= config.build %>',
              src: '**',
              dest: '<%= config.dist %>',
              flatten: false
            },
            {
              expand: false,
              src: '<%= config.app %>/styles/style.css',
              dest: '<%= config.dist %>/styles/style.css',
              flatten: false
            },
            {
              expand: false,
              src: '<%= config.app %>/bower_components/requirejs/require.js',
              dest: '<%= config.dist %>/scripts/require.js',
              flatten: false
            }
          ]
        },
        index: {
          src: '<%= config.app %>/index.html',
          dest: '<%= config.dist %>/index.html',
          options: {
            process: function (content, srcpath) {
              return content
                .replace('data-main="main"','data-main="scripts/main"')
                .replace('src="bower_components/requirejs/require.js"','src="scripts/require.js"');
            },
          }
        }
      },

      sass: {
        dist: {
          options: {
            loadPath: [
            "app/bower_components/bootstrap-sass-official/assets/stylesheets",
            "app/styles"
            ],
            style: 'compressed'
          },
          files: {
            '<%= config.app %>/styles/style.css': 'app/styles/style.scss'
          }
        }
      },

      karma: {
        unit: {
          configFile: 'karma.conf.js',
          singleRun: true,
          autoWatch: false,
          keepalive: true,
          colors: false,
          browsers: ['PhantomJS'],
          reporters: ['progress', 'coverage']
        },
        watch: {
          options: {
            configFile: 'karma.conf.js',
            browsers: ['Chrome'], // For debugging of the tests, switch browser if Chrome is not available
          }
        }
      },
    
      connect: {
        options: {
          port: 9000,
          open: true,
          livereload: true,
          // change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
        },
        livereload: {
          options: {
            base: '<%= config.app %>'
          }
        },
        dist: {
          options: {
            base: '<%= config.dist %>',
            livereload: false
          }
        } 
      },
    
      watch : {
        css : {
          files : ['<%= config.app %>/**/*.css', '<%= config.app %>/**/*.scss'],
          tasks : ['sass']
        },
      
        js : {
          options: {
            livereload: true
          },
          files: ['Gruntfile.js', '<%= config.app %>/**/*.js'],
          tasks: ['jshint']
        },
      
        livereload: {
          options: {
              livereload: '<%= connect.options.livereload %>'
          },
          files: [
              '<%= config.app %>/*.html',
              '<%= config.app %>/**/*.hbs',
              '<%= config.app %>/**/*.css',
              '<%= config.app %>/images/{,*/}*'
          ]
        }
      },
      
      concurrent: {
        server: [
          'sass'
        ]
      }
    });

    // Print help
    grunt.registerTask('help', ['echo:help']);
  
    // Install Bower components
    grunt.registerTask("bower-install", [ "bower-install-simple" ]);

    // Build 
    grunt.registerTask('build', [
      'clean:build',
      'requirejs:main',
      'sass',
      'copy:dist'
    ]);
  
    // Code Verification
    grunt.registerTask('lint', ['jshint']);

    // CSS Packaging
    grunt.registerTask('css', ['sass']);

    // Unit testing
    grunt.registerTask('test', ['clean:coverage', 'karma:unit']);

    // Setup default task that runs when you just run 'grunt'
    grunt.registerTask('default', ['bower-install', 'lint', 'test', 'build']);
  
    grunt.registerTask('serve', [
      'concurrent:server',
      'connect:livereload',
      'watch'
    ]);
  };
}());
