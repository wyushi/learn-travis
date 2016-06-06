'use strict';

var expect = require('expect');

describe('test', () => {
  it('let\'s me this fail', () => {
    expect(false).toExist();
    done();
  });
});
