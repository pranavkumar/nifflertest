'use strict';

angular.module('nifflertestApp')
  .controller('MostCommentedCtrl', function ($scope,$http) {
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
  	    $scope.recipes=temp;

  	    
  	    var hashindex=[];

  	    for(var i=0;i<$scope.recipes.length;i++){
  	    	hashindex[i]=$scope.recipes[i].comments.length;
  	    };

  	    var sorted=_.sortBy(hashindex);

  	    for(var j=0;j<sorted.length;j++){
  	    	console.log(hashindex.indexOf(sorted[j]));
  	    };

  	    console.log(sorted);

  	  });
  });
