# posthtml-minifier

[![Build Status](https://travis-ci.org/Rebelmail/posthtml-minifier.svg?branch=master)](https://travis-ci.org/Rebelmail/posthtml-minifier)
[![Coverage Status](https://coveralls.io/repos/github/Rebelmail/posthtml-minifier/badge.svg?branch=master)](https://coveralls.io/github/Rebelmail/posthtml-minifier?branch=master)
[![npm version](https://badge.fury.io/js/posthtml-minifier.svg)](https://badge.fury.io/js/posthtml-minifier)
[![Dependency Status](https://david-dm.org/Rebelmail/posthtml-minifier.svg)](https://david-dm.org/Rebelmail/posthtml-minifier)
[![devDependency Status](https://david-dm.org/Rebelmail/posthtml-minifier/dev-status.svg)](https://david-dm.org/Rebelmail/posthtml-minifier?type=dev)

[PostHTML][1] plugin that wraps [HTMLMinifier][2].

## Usage

```js
var posthtml = require('posthtml');
var minifier = require('posthtml-minifier');

posthtml()
  .use(minifier({ removeComments: true }))
  .process('<html><body><!-- a comment --></body></html>')
  .then(function(result) {
    console.log(result.html); //=> '<html><body></body></html>'
  });
```

[1]: https://github.com/posthtml/posthtml
[2]: https://github.com/kangax/html-minifier
