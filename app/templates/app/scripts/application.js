define(['jquery',
  'ember',
  'ember-data-lib',
  'handlebars'
],
  /**
   * This is the entry point of the application.
   * @module application
   */
  function($, Ember){

    var App = window.App = Ember.Application.create({
      LOG_TRANSITIONS: true,
      LOG_TRANSITIONS_INTERNAL: true,
      LOG_ACTIVE_GENERATION: true,
      LOG_VIEW_LOOKUPS: true,
      ready: function() { }
    });

    //TODO: Replace with logger
    console.log("APPLICATION completed");
    
    return App;
  }
);