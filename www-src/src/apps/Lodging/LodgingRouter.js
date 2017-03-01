/**
*/
define([
	'marionette',
	'apps/Lodging/LodgingController'
], function(
	Marionette,
	LodgingController
) {
	
	return Marionette.AppRouter.extend({
		
		controller: new LodgingController(),
		
		appRoutes: {
			"lodging": "showLodging"
		}		

	});
	
});
