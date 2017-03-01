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
			"itinerary": "showItinerary",
			"": "showItinerary"
		}		

	});
	
});
