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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should attach user search input to the scope', function () {
    expect(scope.searchInput).not.toEqual(null);
  });

  it('should attach credit limit to the scope', function () {
    expect(scope.creditLimit).not.toEqual(null);
  });

  describe('Shopping Bag Initialization', function () {
    it('should attach a shopping bag to the scope', function() {
      expect(scope.shoppingBag).not.toEqual(null);
    });

    it('should initialize total price in bag to zero', function () {
      expect(scope.shoppingBag.totalPrice).toEqual(0);
    });

    it('should initialize remaining credit to credit limit', function () {
      expect(scope.shoppingBag.remainingCredit).toEqual(scope.creditLimit);
    });

    it('should initialize an empty list of bag items', function () {
      expect(scope.shoppingBag.items).toEqual([]);
    });
  });
});
