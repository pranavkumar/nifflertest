'use strict';

describe('Controller: AddRecipeCtrl', function () {

  // load the controller's module
  beforeEach(module('nifflertestApp'));

  var AddRecipeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddRecipeCtrl = $controller('AddRecipeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
