// Karma configuration
// Generated on Wed May 13 2015 17:38:34 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    basePath: '',

    browsers: ['Firefox', 'PhantomJS'],

    frameworks: ['mocha', 'requirejs'],

    files: [
      'node_modules/mocha/mocha.js',
      'node_modules/mocha/mocha.css',

      'node_modules/chai/chai.js',

      {pattern: 'bower_components/**/*.js', included: false},
      {pattern: 'bower_components/**/*.css', included: false},
      {pattern: 'lib/**/*.js', included: false},
      {pattern: 'lib/**/*.spec.js', included: false},

      'test-main.js',
      'test/app.js'
    ],

    exclude: [],

    preprocessors: {},

    reporters: ['progress'],

    client: {
      mocha: {
        reporter: 'html'
      }
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: true

  });
};
