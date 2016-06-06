'use strict';

var expect = require('expect');

describe('test', () => {

  it('should pass', (done) => {
    expect(process.env['VAR_FOO']).toBe('foo_bar');
    done();
  });
});
