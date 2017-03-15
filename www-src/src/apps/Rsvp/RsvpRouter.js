/**
*/
define([
	'marionette',
	'apps/Rsvp/RsvpController'
], function(
	Marionette,
	RsvpController
) {
	
	return Marionette.AppRouter.extend({
		
		controller: new RsvpController(),
		
		appRoutes: {
			"rsvp": "showRsvp"
		}		

	});
	
});
