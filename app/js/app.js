define(['angular',"route"],function(){

	'use strict';

	// 定义app模块
	var appModule = angular.module('App', ['ngRoute']);

	// app模块配置
	appModule.config(['$routeProvider','$locationProvider',
		function($routeProvider,$locationProvider) {

			$locationProvider.html5Mode(false).hashPrefix('~');

			$routeProvider
				.when(
						"/view1",
						{
							templateUrl : "./js/view/view1.html",
							reloadOnSearch : false
						}
				)
				.when(
						"/view2",
						{
							templateUrl : "./js/view/view2.html",
							reloadOnSearch : false
						}
				)
				.otherwise({
						redirectTo : "/index"
				});
			}]);

});