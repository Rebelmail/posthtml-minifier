'use strict';

var posthtml = require('posthtml');
var expect = require('chai').expect;

var minifier = require('..');

describe('posthtml-minifier', function() {
  it('minifies HTML', function(done) {
    var value = '<html><body><!-- a comment --></body></html>';
    var expected = '<html><body></body></html>';
    var options = { removeComments: true };

    posthtml()
      .use(minifier(options))
      .process(value)
      .then(function(result) {
        expect(result).to.exist;
        expect(result.html).to.equal(expected);
        done();
      }).catch(function(err) {
        done(err);
      });
  });
});
