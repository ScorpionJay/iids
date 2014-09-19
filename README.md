iids
====
1. requirejs

2. angularjs

3. angularjs ajax

controller directive

	// define a module 第二个参数为依赖
	var helloModule = angular.module('helloModule',[]);

	// 定义一个控制器 controller
	helloModule.controller('HelloCtrl',['$scope'],function($scope){
		$scope.greeting = 'hello jay';
	});

	// 定义一个指令 directive
	var helloDirectiveModule = angular.module('helloModule2',[]);
	helloDirectiveModule.directive('helloDirective',function(){
		return function(scope,element,attrs){
			console.log('dddddd');
		}
	});



+++++++
ajax
angular-resource
service.js
