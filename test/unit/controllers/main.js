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

    it('should add items to the bag', function () {
      var newItem = {
        name: 'd',
        price: 4.00
      };
      
      scope.addItemToBag(newItem);
      var newItemIndex = scope.findItem(newItem.name, scope.srvc.model.shoppingBag.items);
      expect(newItemIndex).not.toEqual(-1);
      expect(scope.srvc.model.shoppingBag.items[newItemIndex].count).toEqual(1);

      scope.addItemToBag(newItem);
      expect(scope.srvc.model.shoppingBag.items[newItemIndex].count).toEqual(2);
    });

    xit('should remove items from the bag', function (){

    });

    xit('should look up products by search input', function () {

    });
  });

  xdescribe('Suggestions', function () {
    xit('should have a show/hide Suggestions button', function () {

    });

    xit('should display items with prices below remaining credit', function () {

    });

    xit('should toggle upon first search input submit', function () {

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
