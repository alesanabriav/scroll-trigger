# Scroll Trigger

## Usage

    var scrollTrigger = require('scroll-trigger');

    /**
     * 1000 milliseconds wait for execute next scroll action
     * 200 tolerance for execute function
     */
    scrollTrigger(1000, 200, function() {
      console.log('user scroll');
    });