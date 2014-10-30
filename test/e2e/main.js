'use strict';

describe('durfee homepage', function() {
  it('should have the header Perfect Durfee Swipe', function() {
    browser.get('/');
    var header = element(by.tagName('h2'));
    expect(header.getText()).toEqual('Perfect Durfee Swipe');
  });
});
