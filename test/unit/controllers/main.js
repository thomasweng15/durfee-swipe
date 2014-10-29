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

    it('should attach user search input to the scope', function () {
      expect(scope.searchInput).not.toEqual(null);
    });

    it('should attach credit limit to the scope', function () {
      expect(scope.creditLimit).not.toEqual(null);
    });

    it('should attach a shopping bag to the scope', function () {
      expect(scope.shoppingBag).not.toEqual(null);
      expect(scope.shoppingBag.totalPrice).toEqual(0);
      expect(scope.shoppingBag.remainingCredit).toEqual(scope.creditLimit);
      expect(scope.shoppingBag.items).toEqual([]);
    });
  });

  describe('Shopping bag functions', function () {
    var bag = [
      {
        name: 'a',
        price: 3.00
      },
      {
        name: 'b',
        price: 2.39
      }
    ];
    var itemName = 'b';
    var invalidItemName = 'c';
    
    it('should find items in lists', function () {
      expect(scope.findItem(itemName, bag)).toEqual(1);
      expect(scope.findItem(invalidItemName, bag)).toEqual(-1);
    });

    it('should add item(s) to the bag', function () {
      var newItem = {
        name: 'd',
        price: 4.00
      };
      
      scope.addItemToBag(newItem);
      var newItemIndex = scope.findItem(newItem.name, scope.shoppingBag.items);
      expect(newItemIndex).not.toEqual(-1);
      expect(scope.shoppingBag.items[newItemIndex].count).toEqual(1);

      scope.addItemToBag(newItem);
      expect(scope.shoppingBag.items[newItemIndex].count).toEqual(2);
    });

    xit('should look up products by search input', function() {

    });
  });
});
