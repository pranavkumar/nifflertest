'use strict';

angular.module('nifflertestApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    
  });