// Karma configuration
// Generated on Tue Aug 08 2017 18:35:34 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "app/bower_components/jquery/dist/jquery.js",
      "app/bower_components/angular/angular.js",
      "app/bower_components/angular-resource/angular-resource.js",
      "app/bower_components/angular-ui-router/release/angular-ui-router.js",
      "app/bower_components/angular-cookies/angular-cookies.js",
      "app/bower_components/angular-mocks/angular-mocks.js",
      "app/scripts/js/jquery-ui.min.js",
      "app/scripts/js/bootstrap.min.js",
      "app/scripts/js/libs/jquery-knob/jquery.knob.js",
      "app/scripts/js/libs/bootstrap-datepicker/js/bootstrap-datepicker.js",
      "app/scripts/js/libs/slimScroll/js/jquery.slimscroll.js",
      "app/scripts/js/libs/fastclick/js/fastclick.js",
      "app/scripts/js/libs/jquery-icheck/icheck.js",
      "app/scripts/js/app.js",
      "app/scripts/js/common.js",

      "app/scripts/mainApp.js",
      "app/scripts/controllers/*.js",
      "app/scripts/directives/*.js",
      "app/scripts/factories/*.js",
      "app/scripts/filters/*.js",
      "app/scripts/services/*.js",

      "test/controllers/*.js",
      "test/directives/*.js",
      "test/factories/*.js",
      "test/filters/*.js",
      "test/services/*.js",
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "app/scripts/mainApp.js": "coverage",
      "app/scripts/controllers/*.js": "coverage",
      "app/scripts/directives/*.js": "coverage",
      "app/scripts/factories/*.js": "coverage",
      "app/scripts/filters/*.js": "coverage",
      "app/scripts/services/*.js": "coverage"
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage', 'progress'],

    coverageReporter: {
      type: 'html',
      dir: 'test/coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
