require.config({
    baseUrl: "js",
    paths: {
    	'jQuery': '../lib/jquery/jquery-1.10.2.min',
        'jQueryUI': '../lib/jquery/jquery.ui.draggable',
        'angular': '../lib/angular/angular.min',
		'angular-route': '../lib/angular/angular-route.min',
    },
	 shim: {
			'jQuery': {
			exports : 'jQuery'
			},
			'jQueryUI': {
			exports : 'jQueryUI',
			deps: ["jQuery"]
			},
            'angular': {
                exports: 'angular',
				deps: ["jQuery"]
            },
			 "angular-route": {
				exports: 'angular-route',
				deps: ["angular"]
			}
        }
});

require(['jQuery','jQueryUI','angular','angular-route','app'], function () {
  $(function () { // using jQuery because it will run this even if DOM load already happened
    angular.bootstrap(document, ['AppName']);
  });
});
