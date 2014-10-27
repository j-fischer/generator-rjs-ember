//Karma configuration
//Generated on Fri Feb 21 2014 14:16:24 GMT-0700 (MST)

module.exports = function (config) {
  'use strict';

  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '.',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'app/bower_components/**/*.js', included: false},
      {pattern: 'app/lib/**/*.js', included: false},
      {pattern: 'app/scripts/**/*.js', included: false},
      {pattern: 'test/spec/**/*.spec.js', included: false},
      {pattern: 'test/lib/**/*.js', included: false},
      {pattern: 'test/mock/*.js', included: false},

      'karma.main.js'
    ],


    // list of files to exclude
    exclude: [
      'app/main.js'
    ],

    // For code coverage reporting
    preprocessors: {
      'app/scripts/**/*.js': 'coverage'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],
    
    coverageReporter: {
      reporters: [
        {
          type : 'html',
          dir:'coverage/unit/html'
        },
        {
          type: 'text-summary'
        },
        {
          type : 'cobertura',
          dir : 'coverage/unit/xml',
          file: 'cobertura-coverage.xml'
        }
      ]
    },

    // web server port
    port: 9876,


    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: false,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    // setting this to true will include files with no tests in the coverate stats
    includeBaseline : true,

    plugins: [
      'karma-jasmine',
      'karma-requirejs',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher'
    ]
  });
};
