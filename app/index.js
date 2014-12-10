'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var RjsEmberGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
    
    this.option('skip-install', {
      desc: 'Prevent yeoman from installing the bower components',
      type: 'Boolean',
      defaults: false,
      hide: false
    });
  },    

  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Rjs-Ember generator!'
    ));
  },

  writing: {
    app: function () {
      this.src.copy('package.json', 'package.json');
      this.src.copy('bower.json', 'bower.json');
      this.src.copy('Gruntfile.js', 'Gruntfile.js');
      this.src.copy('karma.conf.js', 'karma.conf.js');
      
      this.directory('app', 'app');
      this.directory('test', 'test');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('bowerrc', '.bowerrc');
      this.src.copy('gitignore', '.gitignore');
      this.src.copy('hgignore', '.hgignore');
    }
  },

  end: function () {
    var generator = this;    
    generator.installDependencies({
      skipInstall: generator.options['skip-install'],
      callback: function () {
        if (generator.options['skip-install']) {
          generator.log("All done. The installation of the dependencies has been skipped. You need to run 'npm install' before you can run 'grunt serve' to see the application in action. If karma cannot find PhantomJS, run 'npm install karma-phantomjs-launcher' to install its missing dependencies. Cheers");
        } else {
          /* The following installation will install the missing dependencies for the karma-phantomjs-launcher. Those dependencies won't be installed
           * when running 'npm install' as this only installs top-level modules listed in package.json (see https://github.com/npm/npm/issues/1341). 
           */
          generator.log("Running 'npm install karma-phantomjs-launcher' to ensure its dependencies will be installed. This will avoid issues with PhantomJS when running grunt.");
          generator.npmInstall(['karma-phantomjs-launcher']);

          generator.log("All done. You can run 'grunt serve' to see the application in action. Cheers");
        }
      }
    });
  }
});

module.exports = RjsEmberGenerator;
