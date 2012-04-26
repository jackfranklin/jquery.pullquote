_this plugin is being developed as part of some articles I'm writing on [JavaScriptPlayground](http://www.javascriptplayground.com). It's not finished yet_


---
# jQuery Pullquote

A jQuery plugin to pull out quotes into new elements for styling on the page.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/jackfranklin/jquery.pullquote/master/dist/jquery.pullquote.min.js
[max]: https://raw.github.com/jackfranklin/jquery.pullquote/master/dist/jquery.pullquote.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.pullquote.min.js"></script>
<script>
jQuery(function($) {
  $("p span").pullQuote({
    outputClass: "pullquote",
    outputElem: "blockquote",
    insertAfter: "elem"
  });
});
</script>
```

Changing those options as needed. PullQuote will then take the text within the selector, and create a new element after `insertAfter` with that text within. 

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt). Make sure all tests pass before making a pull request.

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History
27th April: 0.1.0

## License
Copyright (c) 2012 Jack Franklin
Licensed under the MIT, GPL licenses.
