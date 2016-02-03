'use strict';

var render = require('posthtml-render');
var parser = require('posthtml-parser');
var minify = require('html-minifier').minify;

var packageName = require('../package.json').name;
var debug = require('debug')(packageName);

module.exports = function(options) {
  return function posthtmlMinifier(tree) {
    var rendered = render(tree);
    debug('render', rendered);

    var minified = minify(rendered, options);
    debug('minify', minified);

    var reparsed = parser(minified);
    debug('parser', reparsed);

    return reparsed;
  };
};
