// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-10-27 using
// generator-karma 0.8.3

var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  'use strict';

  var conf = sharedConfig();

  conf.files = conf.files.concat([
    './test/unit/**/*.js'
  ]);

  conf.logLevel = config.LOG_INFO;

  config.set(conf);
};
