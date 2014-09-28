require.config({

	baseUrl:'.',

	paths:{
		'jquery': 'vender/jquery/jquery',
		'bootstrap': 'vender/bootstrap/bootstrap',
		'angular' : 'vender/angularjs/angular',
		'route':'vender/angular-route/angular-route',
		'resource':'vender/angular-resource',
		'domReady':'vender/domReady',
		'echarts':'vender/echarts/echarts-plain',
		'nicescroll':'vender/nicescroll/jquery.nicescroll'
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

require(['domReady','angular','js/app','jquery','bootstrap','nicescroll'],function (domReady) {

	// start angular
	domReady(function(){
		angular.bootstrap(document,['App']);
		// carousel
		$('.carousel').carousel();
		// scroll
		$("html").niceScroll({cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:false,touchbehavior:false});
	})

	

})