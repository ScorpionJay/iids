define(['angular',"route"],function(){

	'use strict';

	var app = angular.module('app', ['ngRoute']);

	app.config(['$routeProvider','$locationProvider',
		function($routeProvider,$locationProvider) {
			$locationProvider.html5Mode(false).hashPrefix('~');
			$routeProvider.when(
								"/view1",
								{
									templateUrl : "./js/view/view1.html",
									//controller : "MainCtrl",
									reloadOnSearch : false
								})
							.when("/view2",
								{
									templateUrl : "./js/view/view2.html",
									//controller : "MainCtrl",
									reloadOnSearch : false
							})
							.otherwise({
									redirectTo : "/index"
							});
			}]);

});
