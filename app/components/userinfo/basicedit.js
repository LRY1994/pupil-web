'use strict';

angular.module('com.pupil.app')
.controller('BasiceditController',['$scope','$http','HOST','$window',
function ($scope,$http,HOST,$window) {
	$scope.save = function(){
		$http({
			method:'POST',
			data:{
				
			}
		}).success(function(data,status,headers,config) {
				if(data.status==0){					
					$scope.user=data.user;	
					console.log(data);
				}else {
					console.log("验证错误");
				}								
			}).error(function(data,status,headers,config) {							
				console.log("error");				
			});	
	}

 
}]);
angular.module('com.pupil.app').directive('pBasicedit', function () {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/userinfo/basicedit.html',
    controller: 'BasiceditController'
  };
});