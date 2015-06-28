'use strict';

angular.module('nifflertestApp')
  .controller('HighestRatedCtrl', function ($scope,$http) {
 
  	$scope.recipes=[];

  	$scope.getUrl=function(title){
  	  if(title!==undefined){
  	    return '/recipe/'+title.replace(/ /g,'+');
  	  }
  	};

  	

  	$http.get('/api/recipes')
  	  .success(function(data,status,config,headers){
  	  	  var temp=[];	
  	    _.forEach(data,function(recipe){
  	      $http.get('/api/files/'+recipe.title)
  	        .success(function(data,status,config,headers){
  	          recipe.src = data.name;
  	        })
  	      temp.push(recipe);

  	    });
  	    $scope.recipes=_.sortBy(temp,'upvotes').reverse();


  	  });


  	  
  	  
  });
