define(['angular'],function () {
	
	'use strict';

	var module = angular.module('chartCtrlModule',[]);

	module.controller('ChartCtrl',['$scope','httpService',function($scope,httpService){
		$scope.greeting = 'hello jay';
		httpService.querywithParams('data/user.json').then(function(data) {	
				$scope.users = data; 
				console.log(data);
		});
	}]);


})