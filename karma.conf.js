// Karma configuration
// Generated on Sun May 08 2016 10:03:21 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    //plugins: [
    //  'karma-browserify',
    //  'karma-mocha',
    //  'karma-mocha-reporter',
    //  'karma-coverage',
    //  'karma-chrome-launcher',
    //],

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'test/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/*.js': ['browserify', 'coverage'],
      'test/*.js': [ 'browserify' ]
    },

    // browserify configuration
    browserify: {
      debug: true,
      transform: [
        ['babelify', {
          "presets": ["es2015"],
          "plugins": [
            ["fast-async", {
              "env":{
                "augmentObject":false,
                "dontMapStackTraces":false,
                "asyncStackTrace":false,
                "dontInstallRequireHook":false
              },
              "compiler":{
                "promises":true,
                "generators":false
              },
              "runtimePattern":"directive"
            }]
          ]
        }],
        'browserify-istanbul'
      ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage', 'mocha'],

    coverageReporter: {
      includeAllSources: true,
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
          excludes: []
        },
        each: {
          statements: 0,
          branches: 0,
          functions: 0,
          lines: 0,
          excludes: [],
          overrides: {}
        }
      }
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
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
