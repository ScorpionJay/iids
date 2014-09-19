define(['angular'],function () {
	
	'use strict';

	var module = angular.module('helloControllerModule',[]);

	module.controller('HelloCtrl',['$scope','httpService',function($scope,httpService){
		$scope.greeting = 'hello jay';
		httpService.querywithParams('data/user.json').then(function(data) {	
				$scope.users = data; 
				console.log(data);
		});
	}]);


})