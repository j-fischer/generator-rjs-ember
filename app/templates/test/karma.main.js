var tests = [], file;
for (file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/\.spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

var unitLib = "../test/lib";
var mockFolder = "shared/amp-ember-shared/tests/mock";

//YOU ABSOLUTELY NEED THE SLASH IN FRONT OF BASE OR ELSE YOU WILL GET TIMESTAMP ISSUES
var bUrl = '/base/app';

require.config({
  baseUrl: bUrl,
});

require([ 'scripts/require-config' ], function() {
  // ... then the karma-specific stuff
  require({
    baseUrl: bUrl,
    paths: {
      'jasmine-async': unitLib + '/jasmine-async-0.1.0/jasmine.async',
      'smart_session': mockFolder + '/session.js?#smartsession-sdk',
      'gapi': mockFolder + '/googleDrive',
      'jsapi': mockFolder + '/jsapi',
      'amp-shared/utils/log.util': 'shared/amp-ember-shared/tests/unit/fixtures/mock.log.util'
    },
    shim: {
      'jasmine-async':{
        deps:[],
        exports:'jasmine'
      }
    }
  });
  
  require([
          "ember"
        ], function(Ember) {
          
    // Some setup here so translation library is properly initialized
    Ember.FEATURES.I18N_TRANSLATE_HELPER_SPAN = false;
    Ember.ENV.I18N_COMPILE_WITHOUT_HANDLEBARS = false;  

    require([
             'lodash',
             'cldr',
             'ember-i18n',
             'jasmine-async'
             ], function(_, CLDR) {
      CLDR.defaultLanguage = 'en-us';
      require(tests, function() {
        __karma__.start()
      });
    });
  });
});