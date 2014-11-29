'use strict';

describe('Product Search', function () {
  it('should have a searchbox and submit button', function () {
    browser.get('/');
    expect(element(by.id('product-search-box')).isPresent()).toBe(true);
    expect(element(by.id('product-search-submit')).isPresent()).toBe(true);
  });
});
