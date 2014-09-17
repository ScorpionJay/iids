define(['angular'],function () {
	
	'use strict';

	var module = angular.module('helloControllerModule',[]);

	module.controller('HelloCtrl',['$scope',function($scope){
		$scope.greeting = 'hello jay';
	}]);


})