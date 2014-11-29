'use strict';

var ptor = protractor.getInstance();

describe('Product Search', function () {
	
	browser.get('/');

	it('should have a searchbox and submit button', function () {
		expect(element(by.id('product-search-box')).isPresent()).toBe(true);
		expect(element(by.id('product-search-submit')).isPresent()).toBe(true);
	});

	it('should not add an invalid product to the shopping bag', function () {
		// hardcoded invalid product
		element(by.id('product-search-box')).sendKeys('invalid product');
		element(by.id('product-search-submit')).click();
		expect(element(by.id('shopping-bag-list')).isDisplayed()).toBe(false);
		// TODO test that alert shows up
	});

	it('should add a valid product to the shopping bag', function () {
		// hardcoded valid product
		element(by.id('product-search-box')).sendKeys('Jalapeno Chips');
		element(by.id('product-search-submit')).click();
		expect(element(by.id('shopping-bag-list')).isDisplayed()).toBe(true);
	});

	it('should have typeahead', function () {
		// hardcoded valid product
		element(by.id('product-search-box')).sendKeys('Jalapeno Ch');
		var typeaheadText = element(by.css('.dropdown-menu li a span')).getText();
		expect(typeaheadText).toEqual('Jalapeno Chips');
	});
});

