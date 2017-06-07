'use strict';

describe('Service: ordermanager', function () {

  // load the service's module
  beforeEach(module('routingQuizApp'));

  // instantiate service
  var ordermanager;
  beforeEach(inject(function (_ordermanager_) {
    ordermanager = _ordermanager_;
  }));

  it('should do something', function () {
    expect(!!ordermanager).toBe(true);
  });

});
