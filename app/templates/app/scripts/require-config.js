require.config({  
  baseUrl: '.',
  paths: {  
    'jquery': 'bower_components/jquery/dist/jquery',
    'lodash': 'bower_components/lodash/dist/lodash',
    'log4javascript': 'bower_components/log4javascript/js/log4javascript',
    'handlebars': 'bower_components/handlebars/handlebars',
    'ember': 'bower_components/ember/ember',
    'ember-data-lib': 'bower_components/ember-data/ember-data',
    'ember-i18n': 'bower_components/ember-i18n/lib/i18n',
    'text' : 'bower_components/requirejs-text/text',
    'bootstrap': 'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
    
    //lib
    'hbs': 'lib/require.js-hbs-1.0.0/hbs',
    'hbs-optimizer': 'lib/require.js-hbs-1.0.0/hbs-optimizer',
    'ember-hbs' : 'lib/require.js-ember-hbs-1.0.0/ember-hbs',
    'ember-hbs-optimizer' : 'lib/require.js-ember-hbs-1.0.0/ember-hbs-optimizer',
    
    //application
    application: 'scripts/application',
    applicationRoute: 'scripts/routes/application.route',
    'app-registration': 'scripts/applicationRegistration',
    'app-store': 'scripts/store',
    'app-router': 'scripts/router'
  },
  shim:{  
    'lodash': {  
      deps: [],
      exports: '_'
    },
    'jquery': {
      deps: [],
      exports: 'jQuery'
    },
    'bootstrap': {
      deps:['jquery']
    },
    'handlebars': {
      deps: ['jquery'],
      exports: 'Ember'
    },
    'ember': {
        deps: ['jquery', 'handlebars' ],
        exports: 'Ember'
    },
    'ember-data-lib': {
        deps: ['jquery', 'ember'],
        exports: 'DS'
    },
    'ember-i18n': {
        deps: ['handlebars', 'jquery', 'ember'],
        exports: 'I18n'
    }
  },
  
  waitSeconds: 20
});