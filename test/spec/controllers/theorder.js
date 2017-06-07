'use strict';

describe('Controller: TheorderCtrl', function () {

  // load the controller's module
  beforeEach(module('routingQuizApp'));

  var TheorderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheorderCtrl = $controller('TheorderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TheorderCtrl.awesomeThings.length).toBe(3);
  });
});
