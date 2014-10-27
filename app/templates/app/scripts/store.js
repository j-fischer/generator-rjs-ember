define([
  'application',
  'ember'
],
  function(App, Ember ){
    App.ApplicationAdapter = DS.FixtureAdapter;
    return App.ApplicationAdapter;
  });
