/**
 * 作者：林瑞玉
	时间：2017-02-24
	描述：路由设置
 */

angular.module('com.pupil.app')
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
 
$urlRouterProvider.when("","/login");
//$urlRouterProvider
//	.otherwise(function(inject, location) {
//		var path = location.$$path || "";
//		return '/notFound';
//	});
  $stateProvider
  	.state('home', {
      url: "/",
      templateUrl: "pages/home.html"
    })
  	.state('notFound', {
    url: '/notFound',
    templateUrl: 'pages/notFound.html'
  })
  	.state('login', {
      url: "/login",
      templateUrl: "pages/login.html",	

    })
    .state('register', {
      url: "/register",
      templateUrl: "pages/register.html"	
	 
    })
     .state('userInfo', {
      url: "/userInfo",
      templateUrl: "pages/userInfo.html",
      
    })
     
    .state('home.measuredata', {
      url: "data/measuredata",
      templateUrl: "pages/measureData.html",
    	 
    })
    .state('home.page2', {
      url: "data/page2",
      templateUrl: "pages/2.html",	
     	 
    })
    
}]);
	
