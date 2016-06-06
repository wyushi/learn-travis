'use strict';

var expect = require('expect');

describe('test', () => {

  it('should pass', (done) => {
    expect(true).toExist();
    done();
  });

  it('let\'s me this fail', () => {
    expect(false).toExist();
    done();
  });
});
