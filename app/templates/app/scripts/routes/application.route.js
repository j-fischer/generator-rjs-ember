define([
    'application',
    'ember',
    'router',
    'scripts/views/application.view'
  ],
  function(App, Ember){
    App.ApplicationRoute = Ember.Route.extend({
      // admittedly, this should be in IndexRoute and not in the
      // top level ApplicationRoute; we're in transition... :-)
      renderTemplate:function(){
        this.render('application');
      }
    });
  }
);


