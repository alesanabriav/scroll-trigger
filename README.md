# Scroll Trigger

## Usage

    var scrollTrigger = require('scroll-trigger');

    /** wait 1000 milliseconds to execute next scroll action */
    scrollTrigger(1000, 200, function() {
      console.log('user scroll');
    });