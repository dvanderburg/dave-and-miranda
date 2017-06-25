/**
*/
define([
	'marionette',
	'apps/Itinerary/ItineraryController'
], function(
	Marionette,
	ItineraryController
) {
	
	return Marionette.AppRouter.extend({
		
		controller: new ItineraryController(),
		
		appRoutes: {
			"ceremony": "showCeremony",
			"itinerary": "showItinerary",
			"lodging": "showLodging",
			"reception": "showReception",
			"registry": "showRegistry",
			"rsvp": "showRsvp",
			"": "showItinerary"
		}		

	});
	
});
