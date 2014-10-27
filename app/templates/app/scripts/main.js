require(['require-config'], function(){

  require([
    'bootstrap',
    'store',
    'applicationRoute',
    "application",
    "applicationRegistration"], function(){

      //TODO: Replace with logger
    console.log('MAIN READY');
  });
});