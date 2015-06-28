'use strict';

angular.module('nifflertestApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
  

    $scope.recipes=[];

    $scope.getUrl=function(title){
      if(title!==undefined){
        return '/recipe/'+title.replace(/ /g,'+');
      }
    };

    

    $http.get('/api/recipes')
      .success(function(data,status,config,headers){
        _.forEach(data,function(recipe){
          $http.get('/api/files/'+recipe.title)
            .success(function(data,status,config,headers){
              recipe.src = data.name;
            })
          $scope.recipes.push(recipe);
        });
      });




  });
