/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  test("defaults", function() {
    ok($.fn.pullQuote.options, "options set up correctly");
    equal($.fn.pullQuote.options.insertAfter, "elem", "default global options are set");
    $.fn.pullQuote.options.insertAfter = "test";
    equal($.fn.pullQuote.options.insertAfter, "test", "can change the defaults globally");
  });

  test("chainable", function() {
    ok($("p span").pullQuote().addClass("testing"), "can be chained");
    equal($("p span").attr("class"), "testing", "class was added correctly from chaining");
  });

  test("functionality", function() {
    $("p span").pullQuote({
      insertAfter: "div h2"
    });
    ok($("div blockquote"), "the blockquote has been created");
    equal($("div blockquote").text(), "with a totally awesome quote", "it gets the right text");
    ok($("div blockquote").hasClass("pullquote"), "applies class correctly");

  });

  test("changing defaults", function() {
    $("p span").pullQuote({
      insertAfter: "div h2",
      outputClass: "testQuote",
      outputElem: "p"
    });
    ok($("div p.testQuote"), "the blockquote has been created");
    equal($("div p.testQuote").text(), "with a totally awesome quote", "it gets the right text");
  });




}(jQuery));
