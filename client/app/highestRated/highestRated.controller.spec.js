'use strict';

describe('Controller: HighestRatedCtrl', function () {

  // load the controller's module
  beforeEach(module('nifflertestApp'));

  var HighestRatedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HighestRatedCtrl = $controller('HighestRatedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
