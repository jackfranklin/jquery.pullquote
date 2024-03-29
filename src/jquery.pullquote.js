/*
 * jquery.pullquote
 * https://github.com/jackfranklin/jquery.pullquote
 *
 * Copyright (c) 2012 Jack Franklin
 * Licensed under the MIT, GPL licenses.
 */

;(function($) {
  $.fn.pullQuote = function(opts) {
    opts = $.extend({}, $.fn.pullQuote.options, opts);

    return this.each(function() {
      var elem = $(this),
          text = elem.text(),
          newElem = $("<" + opts.outputElem + "/>", {
            "class": opts.outputClass,
            text: text
          }).insertAfter(opts.insertAfter);
    });
  };

  $.fn.pullQuote.options = {
    outputClass: "pullquote",
    outputElem: "blockquote",
    insertAfter: "elem"
  };


}(jQuery));
