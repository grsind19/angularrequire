'use strict';

/* Directives */

define(['./module'], function (serviceModule) {
	serviceModule.factory('mainServices',['$http',function($http){
		var serviceData={};
		serviceData.loginService=function(){

		}
		return serviceData;
	}])
});
