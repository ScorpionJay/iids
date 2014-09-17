define(['angular'],function(){

	'use strict';

	// define a module
	var module = angular.module('helloDirectiveModule',[]);

	// difine a directive
	module.directive('helloDirectiveModule',function(){
		return function(scope,element,attrs){
			console.log('dddddd');
		}
	});

});