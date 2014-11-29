'use strict';

var ptor = protractor.getInstance();

function submitSearch (query) {
	element(by.id('product-search-box')).sendKeys(query);
 	element(by.id('product-search-submit')).click();
};

beforeEach(function () {
	browser.get('/');
});

describe('Homepage', function () {

	it('should have a title', function () {
		expect(browser.getTitle()).toEqual('Durfee Swipe');
	});
});

describe('Product Search', function () {
	
	it('should have a searchbox and submit button', function () {
		expect(element(by.id('product-search-box')).isDisplayed()).toBe(true);
		expect(element(by.id('product-search-submit')).isDisplayed()).toBe(true);
	});

	it('should not add an invalid product to the shopping bag', function () {
		// hardcoded invalid product
		submitSearch('invalid product');
		expect(element(by.id('shopping-bag-list')).isDisplayed()).toBe(false);
		// TODO test that alert shows up
	});

	it('should add a valid product to the shopping bag', function () {
		// hardcoded valid product
		submitSearch('Jalapeno Chips');
		expect(element(by.id('shopping-bag-list')).isDisplayed()).toBe(true);
	});

	it('should have typeahead', function () {
		// hardcoded valid product
		element(by.id('product-search-box')).sendKeys('Jalapeno Ch');
		var typeaheadText = element(by.css('.dropdown-menu li a span')).getText();
		expect(typeaheadText).toEqual('Jalapeno Chips');
	});
});

describe('Shopping Bag', function () {

	it('should display total price when not empty', function () {
		expect(element(by.id('bag-total-price')).isDisplayed()).toBe(false);
		submitSearch('Jalapeno Chips');
		expect(element(by.id('bag-total-price')).isDisplayed()).toBe(true);
	});

	it('should display the added item', function () {
		submitSearch('Jalapeno Chips');
		var items = element.all(by.repeater('item in srvc.model.shoppingBag.items'));
		expect(items.count()).toBe(1);
		expect(items.first().getText()).toContain('Jalapeno Chips');
		// TODO test for item price, item count
	});

	it('should be able to remove items', function () {
		submitSearch('Jalapeno Chips');
		submitSearch('Jalapeno Chips');
		var items = element.all(by.repeater('item in srvc.model.shoppingBag.items'));
		items.first().element(by.css('.bag-remove-item')).click();
		// TODO expect count to decrease
		items.first().element(by.css('.bag-remove-item')).click();
		expect(element(by.id('bag-total-price')).isDisplayed()).toBe(false);
	});
});