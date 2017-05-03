'use strict';

angular.module('com.pupil.app')
.controller('PasswordeditController', ['$scope','$http','HOST','$window','$timeout','$state',
function ($scope,$http,HOST,$window,$timeout,$state) {
	var token = $window.sessionStorage["token"].replace(/\"/g,'');
	$scope.editState = {
		editSuccess : false,
		editFail : false
	};
	var timer=null;
	$scope.save = function(){
		 
		$http({
			method:'PUT',
			url :HOST+'/api/'+token,
			data:{				
				"newPassword" : $scope.user.newPassword
			}
		}).success(function(data,status,headers,config) {
								
			$scope.editState.editFail = false;
			$scope.editState.editSuccess = true;
					
			 timer=$timeout(function(){
					$state.go('login');
				},3000);
											
			}).error(function(data,status,headers,config) {
				$scope.editState.editSuccess = false;
				$scope.editState.editFail = true;
				console.log("error");				
			});	
	};
	
	$scope.$on("$destroy",function( event ) {
                $timeout.cancel( timer );
	});
	

 
}]);
angular.module('com.pupil.app').directive('pPasswordedit', function () {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/userinfo/passwordedit.html',
    controller: 'PasswordeditController'
  };
});
