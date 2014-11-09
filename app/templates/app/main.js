require(['scripts/require-config'], function(){
  require([
    'log4javascript',
    'bootstrap',
    'ember',
    'app-store',
    'app-registration',
    'application',
    'applicationRoute'], function(){
      console.log("MAIN ready!");
    }
  );  
});