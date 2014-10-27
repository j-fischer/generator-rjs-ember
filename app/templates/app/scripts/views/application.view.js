/**
 * @author Richard Bezemer
 */
define([
  'application',
  'ember',
  'ember-hbs!templates/application'
  ],
  function (App, Ember, Template) {
    App.ApplicationView = Ember.View.extend({
      templateName:"application",
      template: Template,
      didInsertElement: function() {
        //TODO: Replace with logger
        console.log('application view loaded');
      }
    });
    
    return App.ApplicationView;
  });
