'use strict';

angular.module('nifflertestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/recipe', {
        templateUrl: 'app/recipe/recipe.html',
        controller: 'RecipeCtrl'
      })
      .when('/recipe/:title',{
      	templateUrl: 'app/recipe/recipe.html',
      	controller: 'RecipeCtrl'
      });
  });
