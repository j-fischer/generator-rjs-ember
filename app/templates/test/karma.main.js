var tests = [], file;
for (file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/test\/spec\/.*\.spec\.js$/.test(file)) {
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
             'lodash'
             ], function(_) {

      require(tests, function() {
        __karma__.start()
      });
    });
  });
});