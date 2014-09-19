define(['angular',"route",
	'js/controller/controller',
	'js/directive/directive',
	'js/service/service'],function(e){

	'use strict';

	// 定义app模块
	var appModule = angular.module('App', ['ngRoute','httpService','helloControllerModule','helloDirectiveModule']);

	// app模块配置
	appModule.config(['$routeProvider','$locationProvider',
		function($routeProvider,$locationProvider) {

			$locationProvider.html5Mode(false).hashPrefix('~');

			$routeProvider
				.when(
						"/view1",
						{
							templateUrl : "./js/view/view1.html",
							controller : 'HelloCtrl',
							reloadOnSearch : false
						}
				)
				.when(
						"/view2",
						{
							templateUrl : "./js/view/view2.html",
							controller : 'HelloCtrl',
							reloadOnSearch : false
						}
				)
				.otherwise({
						redirectTo : "/index"
				});
			}]);

});