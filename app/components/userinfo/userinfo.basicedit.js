'use strict';

angular.module('com.pupil.app')
.controller('BasiceditController',['$scope','$http','HOST','$window','$rootScope','AUTH_EVENTS',
function ($scope,$http,HOST,$window,$state,$rootScope,AUTH_EVENTS) {
    var token = JSON.parse($window.sessionStorage["userInfo"]).token;
	
	
	$scope.editState = {
		editSuccess : false,
		editFail : false
	};
		
	$scope.getInfo = function() {	
		
//		 console.log(userInfo);
		$http({
			method: 'GET',
			url: HOST+'/api/'+token,					
		}).success(function(data,status,headers,config) {								
			    $scope.user=data.user;						
		}).error(function(data,status,headers,config) {							
				console.log("error");				
		});		
	};
	
	
    $scope.getInfo();
    
	$scope.save = function(){

		$http({
			method:'PUT',
			url :HOST+'/api/'+token,
			data:$scope.user
		}).success(function(data,status,headers,config) {
						
			$scope.editState.editFail = false;
			$scope.editState.editSuccess = true;	
						
			}).error(function(data,status,headers,config) {	
				if(status==401){
					$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
				}
				else{
					$scope.editState.editFail = true
					$scope.editState.editSuccess = false;
					console.log("error");
				}
			});	
	}

 
}]);
angular.module('com.pupil.app').directive('pBasicedit', function () {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/userinfo/userinfo.basicedit.html',
    controller: 'BasiceditController'
  };
});
