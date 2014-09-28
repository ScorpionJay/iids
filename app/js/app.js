define(['angular',"route",
	'js/controller/controller',
	'js/directive/directive',
	'js/service/service','js/controller/chartCtrl'],function(){

	'use strict';

	// define app module
	var appModule = angular.module('App', ['ngRoute','httpService','helloControllerModule','helloDirectiveModule','chartCtrlModule']);

	// app module config
	appModule.config(['$routeProvider','$locationProvider',
		function($routeProvider,$locationProvider) {

			$locationProvider.html5Mode(false).hashPrefix('~');

			$routeProvider
				.when('/index',{
					templateUrl : "./js/view/home.html",
				})
				.when(
						"/view1",
						{
							templateUrl : "./js/view/view1.html",
							controller : 'ChartCtrl',
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