'use strict';

angular.module('nifflertestApp')
  .controller('RecipeCtrl', function ($scope,$routeParams,$http) {
    $scope.title=$routeParams.title.replace(/\+/g,' ');

    $scope.recipe={};
    $scope.comment={};
    $scope.file={};

    //add comment state
    $scope.adding_comment=false;


    $scope.toggleComment=function(){
        
        if($scope.adding_comment==true){
            $scope.adding_comment=false;
        }else{
            $scope.adding_comment=true;
        }

    };


    $scope.update=function(){
    	$http.put('/api/recipes/'+$scope.recipe._id,$scope.recipe)
    		.success(function(data,status,config,headers){
    			$scope.recipe=_.extend($scope.recipe,data);
    			//$scope.$digest();
    		});
    };    

    $scope.upvote=function(){
    	$scope.recipe.upvotes = $scope.recipe.upvotes + 1;
		$scope.update();  	
    };

    $scope.downvote=function(){
    	$scope.recipe.downvotes = $scope.recipe.downvotes + 1;
    	$scope.update();	
    };


    $scope.addcomment=function(form){
    	$scope.recipe.comments.push($scope.comment);
    	$scope.update();
        $scope.adding_comment=false;
    };



    $http.get('/api/recipes/'+$scope.title)
    	.success(function(data,status,config,headers){
    		$scope.recipe=data;

    		console.log(data);
    	});

    $http.get('/api/files/'+$scope.title)
        .success(function(data,status,config,headers){
            console.log(data);
            $scope.file=data;
        });    
    
  });
