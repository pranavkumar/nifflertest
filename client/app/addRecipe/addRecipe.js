'use strict';

angular.module('nifflertestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addRecipe', {
        templateUrl: 'app/addRecipe/addRecipe.html',
        controller: 'AddRecipeCtrl'
      });
  });
