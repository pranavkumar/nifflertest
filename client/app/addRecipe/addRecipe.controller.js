'use strict';

angular.module('nifflertestApp')
  .controller('AddRecipeCtrl', function ($scope,$http,$rootScope) {
    $scope.recipe = {};

    $scope.details_uploaded=false;
    $scope.pic_uploaded=false;



    $scope.submit=function(form){
    	

    	$http.post('/api/recipes',$scope.recipe)
    		.success(function(data,status,config,headers){
                console.log(data);
    			$scope.recipe=_.extend($scope.recipe,data);
                $scope.details_uploaded=true;
                
 
    		});
    };





  });
