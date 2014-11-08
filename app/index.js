'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var RjsEmberGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fantastic Rjs-Ember generator!'
    ));

    done();
  },

  writing: {
    app: function () {
      this.src.copy('package.json', 'package.json');
      this.src.copy('bower.json', 'bower.json');
      this.src.copy('Gruntfile.js', 'Gruntfile.js');
      this.src.copy('karma.conf.js', 'karma.conf.js');
      this.src.copy('README.md', 'README.md');
      
      this.directory('app', 'app');
      this.directory('test', 'test');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('bowerrc', '.bowerrc');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = RjsEmberGenerator;
