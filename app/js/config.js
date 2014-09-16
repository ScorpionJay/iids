require.config({

	baseUrl:'./js/lib',

	paths:{
		'jquery': 'jquery/jquery',
		'bootstrap': 'bootstrap/bootstrap',
		'angular' : 'angularjs/angular',
		'route':'angular-route/angular-route'
	},

	shim:{
		'bootstrap':{
			deps:['jquery']
		},
		"route":{
      		deps:['angular']  		
  		}
	}

});

require(['angular','route','../app','jquery'],function (app) {

	angular.bootstrap(document,['app']);

})