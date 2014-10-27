define([
  'application',
  'ember'
], function(App, Ember){
  
    App.Router.map(function () {
      // Add your routes here
    });
    
    
    App.CatchAllRoute = Ember.Route.extend({
      redirect: function() {
        this.transitionTo('index');
      }
    });

    return App.Router;
});
