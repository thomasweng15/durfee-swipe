'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('durfeeswipeApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  describe('Initialization', function () {
    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });

    it('should attach a data persistence service to the scope', function () {
      expect(scope.srvc).not.toEqual(null);
      expect(scope.srvc.model).not.toEqual(null);
    });

    it('should attach user search input to the scope', function () {
      expect(scope.srvc.model.searchInput).not.toEqual(null);
    });

    it('should attach a shopping bag to the scope', function () {
      expect(scope.srvc.model.shoppingBag).not.toEqual(null);
      expect(scope.srvc.model.shoppingBag.totalPrice).toEqual(0);
      expect(scope.srvc.model.shoppingBag.remainingCredit(scope.srvc.model)).toEqual(8.00);
      expect(scope.srvc.model.shoppingBag.items).toEqual([]);
    });
  });

  describe('Shopping Bag functions', function () {
    var newItem = { name: 'd', price: 4.00 };
    
    it('should find items in lists', function () {
      var bag = [
        { name: 'a', price: 3.00 },
        { name: 'b', price: 2.39 }
      ];
      var itemName = 'b';
      var invalidItemName = 'c';
      expect(scope.findItem(itemName, bag)).toEqual(1);
      expect(scope.findItem(invalidItemName, bag)).toEqual(-1);
    });

    it('should add items to the bag', function () {
      scope.addItemToBag(newItem);
      var newItemIndex = scope.findItem(newItem.name, scope.srvc.model.shoppingBag.items);
      expect(newItemIndex).not.toEqual(-1);
      expect(scope.srvc.model.shoppingBag.items[newItemIndex].count).toEqual(1);

      scope.addItemToBag(newItem);
      expect(scope.srvc.model.shoppingBag.items[newItemIndex].count).toEqual(2);
    });

    it('should remove items from the bag', function () {
      scope.addItemToBag(newItem);
      var newItemIndex = scope.findItem(newItem.name, scope.srvc.model.shoppingBag.items);
      expect(newItemIndex).not.toEqual(-1);
      expect(scope.srvc.model.shoppingBag.items[newItemIndex].count).toEqual(1);

      scope.removeItemFromBag(newItem);
      var newItemIndex = scope.findItem(newItem.name, scope.srvc.model.shoppingBag.items);
      expect(newItemIndex).toEqual(-1);
    });

    it('should update total price of bag when items are added / removed', function () {
      expect(scope.srvc.model.shoppingBag.totalPrice).toEqual(0);
      scope.addItemToBag(newItem);
      expect(scope.srvc.model.shoppingBag.totalPrice).toEqual(4.00);
      scope.removeItemFromBag(newItem);
      expect(scope.srvc.model.shoppingBag.totalPrice).toEqual(0);
    });
  });

  describe('Suggestions', function () {
    it('should be toggle-able', function () {
      expect(scope.srvc.model.suggestionsLabel).toEqual('Show Suggestions');
      scope.toggleSuggestions();
      expect(scope.srvc.model.suggestionsLabel).toEqual('Hide Suggestions');
      expect(scope.displaySuggestions()).toBe(true);
    });

    it('should suggest items priced under remaining credit', function () {
      var aboveCreditItem = { name: 'aboveCredit', price: 10.00 };
      var underCreditItem1 = { name: 'underCredit1', price: 4.00 };
      var underCreditItem2 = { name: 'underCredit2', price: 2.00 };
      scope.products.push(aboveCreditItem);
      scope.products.push(underCreditItem1);
      scope.products.push(underCreditItem2);
      var productsSuggested = scope.productsUnderLimit();
      expect(scope.findItem('aboveCredit', productsSuggested)).toEqual(-1);
      expect(scope.findItem('underCredit1', productsSuggested)).not.toEqual(-1);
      expect(scope.findItem('underCredit2', productsSuggested)).not.toEqual(-1);
    });
  });

  describe('Item Lookup', function () {
    
    beforeEach(function () {
      var itemInProducts = { name: 'itemInProducts', price: 10.00 };
      var itemNotInProducts = { name: 'itemNotInProducts', price: 10.00 };
      scope.products.push(itemInProducts);
    });

    it('should add item to bag if found in products', function () {
      scope.srvc.model.searchInput = 'itemInProducts';
      scope.lookUpItem();
      expect(scope.findItem('itemInProducts', scope.srvc.model.shoppingBag.items)).not.toEqual(-1);
      expect(scope.findItem('itemNotInProducts', scope.srvc.model.shoppingBag.items)).toEqual(-1);
    });

    it('should add an alert if item not found in products', function () {
      scope.srvc.model.searchInput = 'itemNotInProducts';
      scope.lookUpItem();
      expect(scope.alerts.length).toEqual(1);
    });

    it('should show suggestions if item added to bag for the first time', function () {
      expect(scope.srvc.model.suggestionsLabel).toEqual('Show Suggestions');
      scope.srvc.model.searchInput = 'itemInProducts';
      scope.lookUpItem();
      expect(scope.srvc.model.suggestionsLabel).toEqual('Hide Suggestions');
    });

    it('should not show suggestions if suggestions toggled before item added for the first time', function () {
      scope.toggleSuggestions();
      scope.toggleSuggestions();
      scope.srvc.model.searchInput = 'itemInProducts';
      scope.lookUpItem();
      expect(scope.srvc.model.suggestionsLabel).toEqual('Show Suggestions');
    });

    it('should clear the search input box', function () {
      scope.srvc.model.searchInput = 'dummy text';
      scope.lookUpItem();
      expect(scope.srvc.model.searchInput).toEqual('');
    });
  });

  xdescribe('Alerts', function () {
    xit('should appear on the page by calling addAlert()', function () {

    });

    xit('should time out after a few seconds', function () {

    });
  });

  xdescribe('Credit Limit', function () {
    xit('should be adjustable', function () {

    });
  });
});
