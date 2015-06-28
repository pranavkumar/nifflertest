'use strict';

describe('Controller: MostCommentedCtrl', function () {

  // load the controller's module
  beforeEach(module('nifflertestApp'));

  var MostCommentedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MostCommentedCtrl = $controller('MostCommentedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
