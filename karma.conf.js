module.exports = function(config) {
  config.set({
    basePath: '',
    files: [{ pattern: 'spec.bundle.js', watched: false }],
    frameworks: ['jasmine'],
    preprocessors: { 'spec.bundle.js': ['webpack'] },
    webpack: {
      module: {
        loaders: [
          { test: /\.js/, exclude: /node_modules/, loader: 'babel' }
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // if true, Karma runs tests once and exits
    singleRun: true
  });
};