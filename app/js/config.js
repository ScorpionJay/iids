require.config({

	baseUrl:'.',

	paths:{
		'jquery': 'vender/jquery/jquery',
		'bootstrap': 'vender/bootstrap/bootstrap',
		'angular' : 'vender/angularjs/angular',
		'route':'vender/angular-route/angular-route',
		'resource':'vender/angular-resource',
		'domReady':'vender/domReady'
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

	// 启动angular
	domReady(function(){
		angular.bootstrap(document,['App']);
	})

})