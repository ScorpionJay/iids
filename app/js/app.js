define(['angular',"route",
	'js/directive/directive',
	'js/controller/home',
	'js/controller/article',
	'js/controller/timeline',
	'js/controller/show',
	'js/service/service',
	'js/controller/chartCtrl'],function(){

	'use strict';

	// define app module
	var appModule = angular.module('App', ['ngRoute',
		'Timeline','Show',
		'ArticleCtrl','httpService',
		'chartCtrlModule']);

	// app module config
	appModule.config(['$routeProvider','$locationProvider',
		function($routeProvider,$locationProvider) {

			$locationProvider.html5Mode(false).hashPrefix('~');

			$routeProvider
				.when("/home",{
									templateUrl : "./js/view/home.html",
									controller : 'ChartCtrl',
									reloadOnSearch : false
							  }
				)
				.when("/timeline",{
									templateUrl : "./js/view/timeline.html",
									controller : 'timelineCtrl',
									reloadOnSearch : false
								  }
				)
				.when("/article",{
									templateUrl : "./js/view/article.html",
									controller : 'articleCtrl',
									reloadOnSearch : false
								 }
				)
				.when("/show",{
									templateUrl : "./js/view/show.html",
									controller : 'showCtrl',
									reloadOnSearch : false
							  }
				)
				.when("/about",{
									templateUrl : "./js/view/about.html",
									//controller : 'HelloCtrl',
									reloadOnSearch : false
								}
				)
				.otherwise({
						redirectTo : "/home"
				});
			}]);

});