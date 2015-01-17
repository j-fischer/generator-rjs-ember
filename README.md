# Web app generator [![Build Status](https://api.travis-ci.org/j-fischer/generator-rjs-ember.svg?branch=master)](https://travis-ci.org/j-fischer/generator-rjs-ember)

[Yeoman](http://yeoman.io) generator that scaffolds out a front-end web app using Ember and RequireJS.

## Features

* CSS Autoprefixing
* Built-in preview server with LiveReload
* Automatically compile Sass
* Automatically lint your scripts
* Unit Testing with Karma and PhantomJS
* Bootstrap for Sass
* Dependency management with Bower

For more information on what `generator-rjs-ember` can do for you, take a look at the Gruntfile.js. 


## Getting Started

- Install: `npm install -g generator-rjs-ember`
- Run: `yo rjs-ember`
- Run `grunt` for building and `grunt serve` to preview. You can use the `--allow-remote` option for remote access.


#### Third-Party Dependencies

*(HTML/CSS/JS/Images/etc)*

All app dependencies are managed by Bower, any dependencies related to grunt and the build tools are managed through NPM. Grunt will automatically update the Bower components on every build.

There are two non-managed libraries by Matt Mastracci part of this solution:

[requirejs-ember-handlebars](https://github.com/mmastrac/requirejs-ember-handlebars)
and
requirejs-handlebars


## Options

* `--skip-install`

  Skips the automatic execution of `bower` after scaffolding has finished.

## Application Overview

This is a standalone application. The 'index.html' file is the container of the application and not meant to be changed other than adding more tags to the head element. Please note that the 
build script will replace some paths references in the file when creating the final distribution. 'main.js' is the entry point of the application. It will load the 'reuqire-config.js' file 
and set up the initial dependencies. From there, the application route will be the entry point for the actual application. There is a folder called 'services', which is currently empty. The 
intention with this folder is to separate the business logic from the controllers. Services should extend from Ember.Object and be registered and injected through the 
applicationRegistration.js file. 

The advantage that I see in this architecture is cleaner organization of dependencies. Controllers should only depend on services, not other controllers. And services should only be 
loosly coupled by passing another service to a method as an argument. 

Another advantage with RequireJS and Ember is that RequireJS allows for encapsulation where one can define "private static" helper functions outside of the Ember object declaration. 

I hope this setup will allow for a better organization of the code. 

## Contribute

Feel free to contact me if you like to contribute.

If not, `generator-rjs-ember` is fork-friendly and you can always maintain a custom version which you `npm install && npm link` to continue using via `yo rjs-ember` or a name of your choosing.


## License

[MIT](http://opensource.org/licenses/MIT)