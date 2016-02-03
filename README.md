# posthtml-minifier

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
