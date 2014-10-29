describe("E2E: Testing Routes", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should have a working /inventory route', function() {
    browser().navigateTo('#/inventory');
    expect(browser().location().path()).toBe("/inventory");
  });

  // it('should have a working /about route', function() {
  //   browser().navigateTo('#/about');
  //   expect(browser().location().path()).toBe("/about");
  // });
});