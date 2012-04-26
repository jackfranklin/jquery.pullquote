/*! jQuery Pullquote - v0.1.0 - 2012-04-26
* https://github.com/jackfranklin/jquery.pullquote
* Copyright (c) 2012 Jack Franklin; Licensed MIT, GPL */

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
