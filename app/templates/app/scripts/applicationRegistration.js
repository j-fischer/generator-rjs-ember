define([
  "application",
  "ember"
  ], function(App, Ember, DS) {
  Ember.onLoad('Ember.Application', function(EmberApplication) {
    EmberApplication.initializer({
      name: "registration",
      initialize: function(container, application) {
        //application.register(..); here
      }
    });
    
    EmberApplication.initializer({
      name: "serviceInjection",
      after: "registration",
      initialize: function(container, application) {
        // application.inject(...); here
      }
    });
  });
});
