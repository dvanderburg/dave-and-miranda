/**
	main.js
	
	Application entry point
	Bootstraps the application, configures requirejs, etc.
	
*/
requirejs.config({
	baseUrl: "src/",
	paths: {
		'async': 'lib/require/qsync-0.1.2',
		'text': 'lib/require/text-2.0.15',
		'jquery': "lib/jquery/jquery-min-1.11.1",
		'underscore':"lib/underscore/underscore-1.8.3",
		'backbone': "lib/backbone/backbone-1.3.3",
		'backbone.radio': "lib/backbone.radio/backbone.radio-2.0.0",
		'marionette': "lib/backbone.marionette/backbone.marionette-3.0.0",
		'jscookie': "lib/jscookie/jscookie-2.1.3",
		'moment': "lib/moment/moment-2.17.0",
		'GoogleMapsLoader': "lib/dvanderburg/GoogleMapsLoader"
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'marionette': {
			deps: ['backbone'],
			exports: 'Marionette'
		}
	},
	// cache buster
	urlArgs: "t="+(new Date()).getTime()
});

// entry point of application
requirejs([
	'backbone',
	'apps/Application/Application',
	'apps/Ceremony/CeremonyRouter',
	'apps/Itinerary/ItineraryRouter',
	'apps/Lodging/LodgingRouter',
	'apps/Reception/ReceptionRouter',
	'apps/Registry/RegistryRouter',
	'apps/Rsvp/RsvpRouter'
], function(
	Backbone,
	Application,
	CeremonyRouter,
	ItineraryRouter,
	LodgingRouter,
	ReceptionRouter,
	RegistryRouter,
	RsvpRouter
) {
	
	// create instance of the application object
	var application = new Application();
		
	// boostrap subapplication routers
	//	this registers all subapps that use routing
	application.addRouter(new CeremonyRouter());
	application.addRouter(new ItineraryRouter());
	application.addRouter(new LodgingRouter());
	application.addRouter(new ReceptionRouter());
	application.addRouter(new RegistryRouter());
	application.addRouter(new RsvpRouter());

	// start the application
	application.start();
	
});
