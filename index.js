'use strict';
var $ = require('jquery');
var _ = require('underscore');

/**
 * Trigger function after scroll
 * @param  {Number}   waitParam - for execute again
 * @param  {Number}   toleranceParam - for execute callback
 * @param  {Function} cb - callback
 * @return {Function} cb - callback
 */
module.exports = function(waitParam, toleranceParam, cb) {
  var wait = waitParam || 1000;
  var tolerance = toleranceParam || 200;

  $(window).scroll(_.throttle(function() {
    var body = document.body;
    var threshold = body.scrollHeight - window.innerHeight - tolerance;

    if($(window).scrollTop() > threshold) {
      return cb();
    }

  }, wait));

};
