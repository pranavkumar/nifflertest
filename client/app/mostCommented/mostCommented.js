'use strict';

angular.module('nifflertestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mostCommented', {
        templateUrl: 'app/mostCommented/mostCommented.html',
        controller: 'MostCommentedCtrl'
      });
  });
