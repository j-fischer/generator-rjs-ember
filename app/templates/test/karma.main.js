var tests = [], file;
for (file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/\.spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

//YOU ABSOLUTELY NEED THE SLASH IN FRONT OF BASE OR ELSE YOU WILL GET TIMESTAMP ISSUES
var baseUrl = '/base/app';

require.config({
  baseUrl: baseUrl,
});

require([ 'scripts/require-config' ], function() {

  // ... then the karma-specific stuff
  require({
    baseUrl: baseUrl,
    paths: {
      'sinon': 'bower_components/sinonjs/sinon',
      'squire': 'bower_components/squire/src/Squire',
      'jasmine-async': 'bower_components/jasmine.async/src/jasmine.async',
      'jasmine-sinon': 'bower_components/jasmine-sinon/lib/jasmine-sinon'
    },
    shim: {
      'sinon': {
        deps: [],
        exports: 'sinon'
      },
      'jasmine-sinon': {
        deps: ['jquery', 'sinon'],
        exports: 'jasmine'
      },
      'jasmine-async': {
        deps: [],
        exports: 'jasmine'
      },
      'squire': {
        deps: ['sinon', 'jasmine-sinon'],
        exports: 'Squire'
      }
    }
  });
  
  require([
          'ember'
        ], function(Ember) {

    require([
             'lodash',
             'jasmine-async'
             ], function(_) {

      require(tests, function() {
        __karma__.start()
      });
    });
  });
});