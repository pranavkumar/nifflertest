'use strict';

angular.module('nifflertestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/highestRated', {
        templateUrl: 'app/highestRated/highestRated.html',
        controller: 'HighestRatedCtrl'
      });
  });
