define(['squire', 'ember'], function (Squire) {
  describe("Unit Tests", function(){
    describe("application", function() {
   
      var mockDS, mockEmber, underTest;
   
      beforeEach(function (done) {
        mockDS = {
          FixtureAdapter: {
            extend: sinon.stub()
          }
        };

        mockEmber = {
          Application: {
            create: function (app) {
              app.deferReadiness = sinon.stub();
              return app;
            }
          }
        };

        var injector = new Squire();
        injector.
          mock('ember', mockEmber).
          mock('ember-data-lib', mockDS).
          require(['application'], function(theApp) {
            underTest = theApp;
            done();
          });
      });

      describe("ready", function(){
        it("should properly inject dependancies", function(){
          underTest.ready();
        });
      });
    });
  });
});
