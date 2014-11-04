require(['scripts/require-config'], function(){
  require([
    'log4javascript',
    'bootstrap',
    'ember',
    'application',
    'app-store',
    'app-registration',
    'app-route'], function(){
      console.log("MAIN ready!");
    }
  );  
});