require.config({

	baseUrl:'.',

	paths:{
		'jquery': 'vender/jquery/jquery',
		'bootstrap': 'vender/bootstrap/bootstrap',
		'angular' : 'vender/angularjs/angular',
		'route':'vender/angular-route/angular-route',
		'resource':'vender/angular-resource',
		'domReady':'vender/domReady',
		'echarts':'vender/echarts/echarts-plain'
	},

	shim:{
		'bootstrap':{
			deps:['jquery']
		},
		"route":{
      		deps:['angular']  		
  		},
  		"resource":{
      		deps:['angular']  		
  		}
	}

});

require(['domReady','angular','js/app','jquery'],function (domReady) {

	// start angular
	//domReady(function(){
		angular.bootstrap(document,['App']);
	//})

})