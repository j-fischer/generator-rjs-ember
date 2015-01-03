require(['scripts/require-config'], function(){
  
  require([
    'log4javascript',
    'bootstrap',
    'ember',
    'app-store',
    'app-registration',
    'application',
    'applicationRoute'], 
    
    /**
     * This is the application initializer.
     * @module main
     */
    function () {
      console.log("MAIN ready!");    
    }
  );  
});